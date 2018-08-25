---
layout: post
title: Blogging with Jupyter for Learning Julia Part 2
categories: blog
project_id: blog
project_title: Miscellaneous
---

I've previously posted about [Blogging with Jupyter]({% post_url 2017-03-18-blogging-with-jupyter %}) in a previous post. For the [latest post on LearningJulia](http://learningjulia.com/2018/08/25/image-stitching-part-2.html) I needed one additional feature: LaTeX equation numbering in Jupyter. Here's how I got that to work.

<!-- more -->

#### Getting LaTeX Equation Numbering in Jupyter Notebooks

LaTeX natively supported in Markdown editing in a Jupyter notebook through MathJax. Getting it to work in Jupyter notebooks involves installing the [`jupyter_contrib_nbextensions`](https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/index.html) package.

These instructions are taken from the [official install docs](https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/install.html), and they worked for me.

```
pip install jupyter_contrib_nbextensions
jupyter contrib nbextension install --user
jupyter nbextension enable equation-numbering/main
```

Then, restarting the jupyter kernel enables the extension. To get the numbered equations to show up in a markdown notebook, just use LaTeX syntax:

```
\begin{equation}
H u - v = 0
\end{equation}

\begin{equation}
\begin{bmatrix}
h_1 & h_2 & h_3 \\
h_4 & h_5 & h_6 \\
h_7 & h_8 & h_9
\end{bmatrix}\begin{bmatrix}
u_1 \\ u_2 \\ 1
\end{bmatrix}
-
\begin{bmatrix}
v_1 \\ v_2 \\ 1
\end{bmatrix} = 0
\end{equation}
```

This is the result!

![Jupyter notebook equation numbering](/imgs/jupyter_notebook_eqn_numbers.jpg){: .post-pic}

The only downside of this extension is that every time you re-compile a cell with equation numbering, the numbers keep incrementing. The good part is that the extension comes with a way to fix this problem: a little widget at the top of the notebook appears. When you click it, the numbering is restarted:

![Renumbering widget](/imgs/jupyter_eqn_renumbering.jpg)

Pretty cool, right?

#### Getting LaTeX Equation Numbering in `nbconvert`

Automatically, `nbconvert` will apply these new extensions. The one thing it won't do is apply the correct MathJax settings in the style. To do that, all I needed was to add these lines:

```
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
    TeX: {
        equationNumbers: { autoNumber: "AMS" }
    }
});
</script>
```

to the exported `.html` file after running `nbconvert`. And the result works great!

![Final output of numbering](/imgs/jupyter_eqn_final.jpg){: .post-pic}

You can read the full blog post [here](http://learningjulia.com/2018/08/25/image-stitching-part-2.html) to learn what all these equations mean.

#### Conclusion

I hope this helps someone else, or at the very least, future me!
