---
layout: post
title: Playing Zork on Linux
categories: yak-shaving
project_id: yak-shaving
project_title: Yak Shaving
---

The inspiration behind Terminus, Zork, is a fantastic game. Here's a guide for how to set it up to play on your Linux machine (tested on Ubuntu >= 12.04). 

<!-- more -->

#### Download

First, you need to download the game itself. [Here](http://www.infocom-if.org/downloads/downloads.html) is the link from Infocom, the company that was created by the original programmers of Zork. The Mac binaries of Zork I, Zork II, and Zork III are all available. 

#### Software packages

You need to install the following packages: 

	sudo apt-get install frotz uudeview
{:lang="bash"}

`frotz` will be used for running the game, and `uudeview` is for uncompressing the files.

#### Go go go! 

1. {: .detail-text} Download the `.hqx` file of your choosing from the [Zork download](http://www.infocom-if.org/downloads/downloads.html) page. 
2. {: .detail-text} Move the `.hqx` file from the download location to a location of your choosing using the `mv` command. 
3. {: .detail-text} Uncompress the `.hqx` file using the `uudeview` command with the `-i` flag (to disable interactivity).		
	
	   uudeview -i zorki.hqx   	
	{:lang="bash"}

4. {: .detail-text} Use the `frotz` command to play.

	   frotz ZORKI  	
	{:lang="bash"}

5. {: .detail-text} PROFIT!
{: .detail-list}

Enjoy the fun that is Zork!
