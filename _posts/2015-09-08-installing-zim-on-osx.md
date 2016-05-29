---
layout: post
title: Installing Zim Wiki on OSX
categories: blog
project_id: blog
project_title: Miscellaneous
published: true
---

Running programs meant for Linux are hard to run on OSX, especially if they use graphics. This is how I got [Zim wiki](http://zim-wiki.org/) running on OSX. 

<!-- more -->

#### Installing Zim as a stand-alone app

After using a Linux computer for 5 years, my work environment changed and I am now using OSX full-time. One addition to my personal productivity suite has been Zim wiki, a personal wiki system made of a bunch of text files and a Python wrapper that I sync between my various machines / partitions using Dropbox. The downside of switching operating systems, I had to get Zim wiki running on OSX. 

I took much of my inspiration from the [Gnome-wiki page on building GTK for OSX](https://wiki.gnome.org/action/show//Projects/GTK+/OSX/Building?action=show&redirect=GTK%2B%2FOSX%2FBuilding) and someone's [earlier blog post for how to package Zim as an app on OSX](http://docs.gz.ro/node/183)

My setup:
* OSX Yosemite 10.10.3
* Zim 0.63
* Anaconda Python
* Homebrew for package management
* XCode 6.2

Here are my series of steps (for OSX Yosemite 10.10.3 and Zim 0.63):

1. {: .detail-text} Download the Zim source files from the [zim downloads page](http://zim-wiki.org/downloads.html)
2. {: .detail-text} Make sure you have XCode, svn, git, curl, and OpenSSL installed. My package manager is Homebrew and I installed it with those, but people use different things. From here, the instructions are basically taken from the guide for [setting up GTK for OSX](https://wiki.gnome.org/action/show//Projects/GTK+/OSX/Building?action=show&redirect=GTK%2B%2FOSX%2FBuilding)
3. {: .detail-text} Download [gtk-osx-build-setup.sh](https://git.gnome.org/browse/gtk-osx/plain/gtk-osx-build-setup.sh) in your home directory and run it

		sh gtk-osx-build-setup.sh
	{:lang="bash"}

	In general, I prefer not to mess with environment variables, especially the `PATH` and `LD_LIBRARY_PATH`, since I don't want to mess up my work environment, and don't want to have to keep track of changing them when I run Zim. So, my solution does not involve changing any of those variables. 

4. {: .detail-text} This will install `jhbuild`, but it is installed in `~/.local/bin/jhbuild`. So make an alias for the `jhbuild` command by adding this to your `.bashrc` or `.bash_profile` or `.zshrc`:

		alias jhbuild="~/.local/bin/jhbuild"
	{:lang="bash"}

5. {: .detail-text} Run `jhbuild bootstrap` at the command line
6. {: .detail-text} Run `jhbuild meta-gtk-osx-bootstrap`
7. {: .detail-text} Run `jhbuild build meta-gtk-osx-core`
8. {: .detail-text} Run `jhbuild build meta-gtk-osx-themes`
9. {: .detail-text} Run `jhbuild build meta-gtk-osx-python`
10. {: .detail-text} Run `jhbuild build pygtk`. 
11. {: .detail-text} If all of the `jhbuild` commands run without a problem, you should be good to go to set up a stand-alone app. Of course, there are many ways for them to go wrong, but if you want help with those feel free to leave a comment or send me an email and I'll try to help. From here the instructions come from a [blog post about how to create a stand-alone Zim app](http://docs.gz.ro/node/183). First, download [Platypus](http://sveinbjorn.org/platypus). It is a program that can be used to bundle apps on OSX. 
12. {: .detail-text} Run Platypus and change the parameters as follows: 

	* **App Name**: Zim
	* **Script Type**: Bash
	* **Script Path**: click "New" below the path, then replace `echo 'Hello, World'` with `../Resources/zim-0.63/zim.py`
	* **Output**: none
	* **Identifier**: default
	* **Author**: default
	* **Version**: 1.0
	* Uncheck all 4 options (including "remain running after initial execution")
	* Click the + sign for "Files to be bundled" and add the source folder for the Zim source.
	* If you want the icon for Zim, then you can drag the `zim.png` file from the `zim-0.63/data/` directory into where the icon is

Click Create to create your app, and save it anywhere (the Desktop is a nice place.)
13. {: .detail-text} Drag your new icon into the Dock, and you can click it to launch Zim!
{: .detail-list} 

I haven't yet figured out how to get the tray icon working - I suspect I am missing a GTK plugin to build with `jhbuild`, so if you figure it out, I am excited to know! 

I had two main errors (with `jhbuild`) that I was able to fix, and there are many more that can happen. I will describe my two errors here, and if you have others, feel free to post in the comments / email me and I'll update this with more.

#### Error 1: `libxml2`, or in general missing packages. 

During some parts of the `jhbuild` process I kept running into errors where I was missing packages when they clearly were there. This is most likely because `jhbuild` is not building or linking the packages with the correct version of Python or GTK. To solve this, when an error comes up, I selected 4 from the terminal menu (i.e. open a `jhbuild` shell), then `cd` into the `Python-2.7.8` directory, and do: 
	
	make
	make install 

Then exit the shell with `exit`, and continue the build process. ([Reference from this forum post](https://www.mail-archive.com/gtk-osx-devel-list@gnome.org/msg00151.html)). 

#### Error 2: `libgtk-quartz-2.0.0.dylib`

After I finished all the `jhbuild` compiling without errors, I ran into an error after packaging, where I would open Zim, but every "wrong"" movement such as random mouse clicks, backspaces too vigorously, or clicking some buttons would crash Zim horribly with the error that `libgtk-quartz-2.0.0.dylib` plugin failure. 

What fixed this for me was changing the default Python expected by Zim to Anaconda Python. The path for my Anaconda Python is in `/Users/mprat/anaconda/bin/python`, while all the `.py` files in the Zim source were expecting to use Python from `/usr/bin/python`, as set by Linux. So I opened the Zim source files in Sublime and changed all the `#!/usr/bin/python` to `#!/Users/mprat/anaconda/bin/python`, and re-packaged the app with Platypus. After that, no `libgtk-quartz-2.0.0.dylib` problems. 

I hope this helps anyone else struggling to install Zim on their OSX machines!