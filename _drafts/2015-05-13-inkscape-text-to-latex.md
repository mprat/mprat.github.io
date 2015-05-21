---
layout: post
title: Exporting Inkscape Text to LaTeX Format
categories: projects mit
project_id: mit
project_title: MIT miscellaneous
published: true
---

Anyone who writes in LaTeX knows the pains of embedding the right diagrams a document. There is a simple solution to nicely-formatted diagrams: Inkscape can export to LaTeX format, formatting your text with LaTeX fonts. I will show you how.

<!-- more --> 

Everyone knows this is not the kind of diagram you want in your text: 

<!-- embed image of horrible text -->

Instead, once you make your image in Inkscape (use your favorite fonts, labels, colors, whatever), you can save the image in a `pdf_tex` format that that render in LaTeX in this format: 

<!-- good pretty image -->

To do this: 

1. Create your image in Inkscape. 
<!-- image of inkscape -->
2. Go to File -> Save a copy....
<!-- image of file -> save a copy -->
3. Save in PDF format
<!-- image of saved in PDF format -->
4. Check the PDF+LaTeX box and click save. This will save two files: the `filename.pdf` and `filename.pdf_tex` files. 
<!-- image of the checkbox -->
5. In your LaTeX file, embed the image with this code, making sure to use the `pdf_tex` filename. The commented-out code is the "traditional" way of including graphics into a LaTeX document with `graphicx`.

{% highlight latex %}
\begin{figure}[ht!]
\centering
% \includegraphics[width=0.5\textwidth]{OLD_WAY.jpg}
\def\svgwidth{0.5\textwidth}
\input{MY_FILE.pdf_tex}
\caption{A nice caption.}
\label{fig:my-figure-label}
\end{figure}
{% endhighlight %}

The `\def\svgwidth{}` command specifies how large to make the image. You can embed this into a subfigure or anything else in LaTeX where you want to render the image. 

And magic happens! 