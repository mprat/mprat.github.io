---
layout: post
title: Blogging with Jupyter for Learning Julia
categories: blog
project_id: blog
project_title: Miscellaneous
---


For the [Learning Julia](http://learningjulia.com) blog, I use [Jupyter notebooks](http://jupyter.org) as my primary blogging tool. The website is generated with [Jekyll](http://jekyllrb.com) and hosted with [Github pages](https://pages.github.com/). with a single command-line `jupyter` command and some custom configuration, I generate an HTML file I can embed into a Jekyll post.

<!-- more -->

# My workflow

The workflow of a new post on [Learning Julia](http://learningjulia.com) is as follows:

1. In a Jupyter notebook, write some Julia code
2. When I get to the point where I learned something, go back through the notebook and add markdown annotations and text
3. Convert the notebook into an HTML file
4. Create a new post, write the introduction, embed the HTML notebook output, and write any final thoughts or concepts
5. Publish!

I'll walk you through all my steps I use and show you any custom code.

# Steps 1 and 2: Jupyter Notebooks 

Launch a Jupyter notebook with the Julia kernel using `jupyter notebook`. Code away!

# Step 3: Convert to HTML

I use [`nbconvert`](https://nbconvert.readthedocs.io/en/latest/) to convert a Jupyter notebook into an HTML file. I extended the basic HTML output template to do the following:

* Any images in the Jupyter notebook output are saved as separate images rather than base64
* The image paths need to point to a URL for the Jekyll site.
* Multiple outputs are collapsed into a single output cell. For example, in a line with multiple print statements.

`nbconvert` comes with a set of built-in preprocessors that already do some of these tasks. For example, the [`ExtractOutputPreprocessor`](https://github.com/jupyter/nbconvert/blob/master/nbconvert/preprocessors/extractoutput.py) saves the images locally, and the [`coalesce_streams`](https://github.com/jupyter/nbconvert/blob/master/nbconvert/preprocessors/coalescestreams.py) processor squeezes multiple outputs into a single output cell.

The easiest way to set the configuration for `nbconvert` is through a Python script. You can see the one I use here:

{% gist mprat/a843b08e315621d91a667124a243abeb nbconvert_config.py %}

I set the `ExecutePreprocessor` as well - since I am setting the preprocessors manually I still want to make sure the entire notebook is re-executed, to preserve the input / output indices.

Notice how the HTML output is written into the `_includes/notebooks` folder in the Jekyll project. The images are then saved into the `assets/imgs/{notebook_name}` folder. The `ExtractOutputPreprocessor` by default saves images as relative paths, but we want to change them to url paths. I do this by the `jekyllurl()` function in the template. This outputs a Liquid filter that is accessible in the [`nbconvert` template](https://gist.github.com/mprat/a843b08e315621d91a667124a243abeb#file-jekyll-tpl) I used. It is an extension of the `basic.tpl` template, but slightly modified. 

You can see the filter outputs for example in line 133.

The second filter, `svg_filter`, removes the `DOCTYPE` lines in in-line SVGs to avoid rendering errors that look like this:

![SVG template error](/assets/imgs/svg_template_error.png)

You can see it in action on line 113 in my [`nbconvert` template](https://gist.github.com/mprat/a843b08e315621d91a667124a243abeb#file-jekyll-tpl).

To run `nbconvert` with this configuration, do:

{% highlight bash %}
	jupyter nbconvert --config nbconvert_config.py PATH_TO_NOTEBOOK.ipynb
{% endhighlight %}

I am currently using `nbconvert` version 5.1.1.

# Step 4: Create a new post

After the conversion is done, it is saved into the `_includes/notebooks/` folder. I create a new post (with the standard Jekyll header, etc.) and include the notebook named `04-imfilter.html` with:

{% raw %}
	{% include notebook/04-imfilter.html %}
{% endraw %}

If I know Mathjax is needed in the `.html`, I make sure to add 

{% raw %}
	{% include mathjax.html %}
{% endraw %}

to the header. You can see [mathjax.html here](https://gist.github.com/mprat/411d9139d79be068c44e98cfbfcf7862) - it is just a few script tags that include MathJax from its CDN.

I do any extra post writing here, with some final thoughts.

# Step 5: Publish

When all is said and done, I push the `.html` files, image files, and `.markdown` post, and a new post is born!

# References

To figure out the configurations used in `nbconvert`, I used the following references:

* [dkmehrmann's convert script](https://gist.github.com/dkmehrmann/3fd9e8b89a6e442fdc8787a4c1dbf4f2)
* [`nbconvert` documentation](https://nbconvert.readthedocs.io/en/latest/)
* [`nbconvert` source code](https://github.com/jupyter/nbconvert/tree/master/nbconvert)

If you want to check out my entire Jekyll configuration, feel free to poke around the [Learning Julia repository on Github](http://github.com/mprat/learningjulia).

Hope this helps!
