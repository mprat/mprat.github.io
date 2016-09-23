---
layout: post
title: A Nonogram Solver in Python
categories: blog
project_id: blog
project_title: Miscellaneous
published: false
---

It takes a special kind of person to spend an entire weekend working on logic puzzles. I do it regularly through events like [BAPHL](http://www.baphl.org/) and the [MIT Mystery Hunt](http://www.mit.edu/~puzzle/). And a recent hobby of mine is writing programs to solve or generate puzzles. This post is all about writing a nonogram solver and generator in Python, which I [posted as a library to PyPI](https://pypi.python.org/pypi/nonogram-solver).

<!-- more -->

#### Nonograms

My friend group and I are into puzzles. I'm talking about sudokus, crosswords, ken-kens, etc. I am also talking about more complicated logic puzzles that require multiple steps to solve, but all puzzles are fun. However, once you've become adept at solving logic puzzles quickly, one way to make it interesting is to write puzzles! And once you're bored with that, another technique is to write programs to write and solve puzzles for you!

One puzzle type I played with was the [nonogram](https://en.wikipedia.org/wiki/Nonogram). A nonogram is a grid puzzle where each equare is either filled in or left blank, and solves to a binary image with a hidden image. The solver is given a set of constraints that describe how many squares are filled in within a given row or column, and the puzzle is to figure out which squares are filled in and which are left empty.

Here is an example of a nonogram puzzle:

[insert image here]

And here is the filled in solution:

[insert image here]

#### Writing a Solver in Python

To write a solver for a nonogram in Python, the first step was to
