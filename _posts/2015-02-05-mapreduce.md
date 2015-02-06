---
layout: post
title: Word Frequency in the King James Bible
categories: yak-shaving
project_id: yak-shaving
project_title: Yak Shaving
published: true
---

Somehow in undergrad I never got around to learning about the [MapReduce](http://en.wikipedia.org/wiki/MapReduce) algorithm. To fix this, I learned about it from the first lecture of MIT's [6.824: Distributed Systems Engineering](http://nil.csail.mit.edu/6.824/2015/), and will attempt to explain MapReduce here, then implement it in Python on a real live example.

<!-- more --> 

In short, MapReduce is an algorithm for parallelizing computation, based on a two-step process of "mapping" and "reducing." If you are interested in reading the full Google Research publication about MapReduce, it is online [here](http://research.google.com/archive/mapreduce.html), and is a fairly accessible paper. 

In the `map` step, some function is "mapped" into a list of elements, and the output is a list of `(key, value)` pairs, where each `(key, value)` pair is the `key` (or the elements in the list, before the function was applied to it) and the `value`, which is `f(key)`, or the value returned after the function is mapped to that element.

At the end of the `map` phase, the output can be thought effectively of two lists: one list of all the original `key`s, and one list of the `value`s mapped to new values according to some function. 

Then in the `reduce` phase, this list of `value`s is aggregated (or reduced) into one element that is the solution to whatever algorithm is desired. 

The reason MapReduce is so powerful and parallelizable is that the `map` and `reduce` functions can be done in parallel to multiple lists (in fact, the mapping of function to elements of a list is inherently parallelizable, since the same function is applied to all elements of a list independently). 

# An example

It helps to think of an example. Let's say we want to take the [King James Bible](https://web.archive.org/web/20130530223318/http://patriot.net/~bmcgin/kjv12.txt) and count the occurrence of each word (this allows us to find the most common word, etc.). This can be done in a parallel way with MapReduce, as follows: 

* The `map` phase consists of taking each line of the text file as a list of space-separated words and mapping it to a list of word-value pairs `(word, 1)`. For example, the sentence 

		"I cried unto thee"

	becomes 
		
		("I", 1), ("cried", 1), ("unto", 1), ("thee", 1)

Here, the `map` function is taking a list of words and outputting 1 every time it sees a word. This means that each time a word is seen, the 1 is like a counter. 

* The `reduce` phase just takes the list (or lists) of `(word, 1)` values given above and sums the numbers for each word. This means that in the end, each word will be a `(word, int)` value, where `int` is the number of times that word was seen in the `map` phase. 

In the end, correctly implementing MapReduce on the King James Bible will yield the following results as the top 5 words that appear:

	('the', 63937)
	('and', 51699)
	('of', 34624)
	('to', 13569)
	('that', 12913)

Actually implementing a parallelized version of MapReduce is challenging, since the communication between the threads that do the computation and the threads that do the dispatching gets rather hairy. For 6.824, the assignment is all implemented in [Go](http://golang.org/) and is in general much faster than Python, but it would be in poor taste to post the solutions to the homework on line. Instead, one can write a single-threaded version of MapReduce for the same task in Python, as shown here. 

<script src="https://gist.github.com/mprat/99108d89c72ba3b85975.js"></script>

For efficiency's sake, instead of using tuples to represent values, my Python implementation uses dictionaries. Additionally, when the `map` step happens, there is part of the `reduce` step that happens at the same time. Namely, when words are constructed, they are automatically added to a dictionary that keeps track of their frequency in that line, but only because the dictionary syntax used there is cleaner than using nested `if` statements to check whether a key exists in the dictionary already.