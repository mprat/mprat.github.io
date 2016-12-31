Description
Both your title and this description are made public and displayed in the conference program to help attendees decide whether they are interested in this presentation. Limit this description to a few concise paragraphs.

<start>
Images tell stories, and we love Instagram filters because they give emotion to our images. Do you want to explore what makes up Instagram filters? In this talk, we will talk about the basic elements of Instagram filters and implement them in Python. The staple libraries we will use are scikit-image and numpy - matplotlib and jupyter notebooks for plotting and interactivity. In the end, we will implement the (now-defunct) Gotham Instagram filter in 15 lines of Python (not including imports). Throughout the process, there will be many pretty pictures.
</end>

Who and Why (Audience)
1–2 paragraphs that should answer three questions: (1) Who is this talk for? (2) What background knowledge or experience do you expect the audience to have? (3) What do you expect the audience to learn or do after watching the talk?

Committee note: The “Audience” section helps the program committee get a sense of whether your talk is geared more at novices or experienced individuals in a given subject. (We need a balance of both lower-level and advanced talks to make a great PyCon!) It also helps us evaluate the relevance of your talk to the Python community.

<start>
(1) This talk is for newbies to image processing but those interested in getting their feet wet.
(2) I expect no prior knowledge with image processing, but I expect Python lowers who can import libraries, read documentation, and basic familiarity with numpy.
(3) I want the audience to feel comfortable importing and manipulating images after listening to this talk. Python is the language of playing, and I want the audience to feel good about playing with images. I especially want them to know how to extract a single image channel from an image and manipulate it. In the best case scenario, members of the audience will build on the code I show and make more interesting image filters!
</end>

Outline
The “outline” is a skeleton of your talk that is as detailed as possible, including rough timings for different sections. If requesting a 45 minute slot, please describe what content would appear in the 45 minute version but not a 30 minute version, either within the outline or in a paragraph at the end.

Committee note: The outline is extremely important for the program committee to understand what the content and structure of your talk will be. We hope that writing the outline is helpful to you as well, to organize and clarify your thoughts for your talk! The outline will not be shared with conference attendees.

<start>
Introduction (2 mins)
- motivation for why we want to do this
- show some pretty motivational pictures

Dependencies (4 mins)
- loading images with scikit-image
- showing images in jupyter notebooks with matplotlib

Sharpening and blurring (4 mins)
- scikit-image Gaussian filters
- example images

Image channels (3 mins)
- extracting image channels from an image
- show histogram representation of an image channel
- split image into channels and put images back. prove that this worked by showing an image

Adjusting channels by linear interpolation (6 mins)
- example channel adjustment from Gimp
- pictoral representation of what channel interpolation is
- example images

Sample Gotham filter (6 mins)
- at every stage of the 5 steps, show sample images. use the previously-discussed adjustments to put the Gotham filter together.
- step 1: red channel boost
- step 2: make blacks bluer
- step 3: sharpen
- step 4+5: blue channel adjustment

Gotham filter in 15 lines (3 mins)
- show Gotham filter in 15 lines of Python
- example images

---Bonus, if there is time at the end, sections chosen depending on the time---
Interactive notebook for linear channel interpolation (5 mins)
- show interactive jupyter notebook for manipulating image channels
- show code for creating the notebook

Darkening corners (5 mins)
- show examples
- show how to do it
- show interactive notebook for darkening corners
</end>

Additional notes
Anything else you would like to share with the committee:
Speaker public speaking experience.
Speaker subject matter experience.
Have the speaker(s) given this presentation before elsewhere?
Links to recordings, slides, blog posts, code, or other material.
Specific needs or special requests — accessibility, audio (will you need to play pre-recorded sound?), or restrictions on when your talk can be scheduled.

<start>
The talk was originally given at a Boston Python meetup as a 5-minute lightning talk (slides: http://www.mprat.org/assets/python-instagram-filters-slides.slides.html), but realized a few things after giving the talk: (1) it is necessary to explain the linear interpolation step much further, and (2) there are many more kinds of image manipulations that make up Instagram filters. I fixed (1) in the blog post I wrote after the talk (http://www.practicepython.org/blog/2016/12/20/instagram-filters-python.html), and I want to fix (2) in this Pycon talk.

Professionally, I am a research scientist at Amazon (although Amazon is not paying for me to attend this conference) and my specialty is computer vision. I spend my days manipulating images in Python.
</end>
