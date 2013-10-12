---
layout: post
title: Education Designathon and iCampus Prize
categories: projects terminus
project_id: terminus
project_title: Terminus
---

After successfully working on Terminus (with Shawn!) at the [Education Designathon](http://www.edudesignathon.com/) held at MIT in spring 2013, I decided that the Terminus project from 11.127 so long ago would be a great entry for the [MIT iCampus Prize Competition](http://icampusprize.mit.edu/) in the spring of 2013. 

<!-- more -->

#### the education designathon

I have always loved education - as a system, as a problem, as a project. However, I've had a hard time thinking of ways I can use my computer science training to help with education (sure, MOOCs, but I haven't yet decided whether those are beneficial for education or not). In either case, when I got an email from Jessica Artilles advertising the designathon, I was super excited. 

![Professor Woodie Flowers giving the opening talk at the Education Designathon](/imgs/designathon3.png){: .designathon-pic}
(Photo credit to Jessica Artilles.)

Here is Professor Woodie Flowers, professor of mechanical engineering at MIT and founder of FIRST robotics, giving the opening talk at the Education Designathon.

A "designathon" instead of a "hackathon" that promised to bring together education experts and technologists alike was going to be exciting. 

At the designathon of course I started working on a problem but soon realized that it was already solved. So to my luck, I found Shawn (yes, original Terminus group member Shawn!) at the designathon too and we decided we wanted to continue with Terminus. 

We approached the problem this time from an element of fun: we wanted to use the 24-hours-or-so that we had at the hackathon to learn a new technology. So we decided to tackle writing Terminus for the web. We had a heck of a time finding the old Terminus files (I had put them on Github but they were not complete), so we eventually found our storyboarding document and started to redesign the code from scratch. (I will talk about the technical details later.)

![Michele and Shawn hard at coding](/imgs/designathon2.png){: .designathon-pic}
(Photo credit to Jessica Artilles.)

We're hard at work, coding, eating, enjoying our challenge for ourselves. 

At the end of the day-and-a-half that we spent redesigning, coding, learning, and tweaking, we were to go with a version of Terminus that was almost identical to our [Java version](/projects/terminus/2011-04-15-a-linux-learning-game.html) except written in Javascript. We presented for 2 minutes and demo'ed the project, to great success at the designathon. 

![Michele with a stupid face and Shawn looking happy presenting our work at the designathon](/imgs/designathon.png){: .designathon-pic}

(Here's a rather embarassing photo of me and Shawn talking about Terminus at the end of the hackathon. Photo credit to Jessica Artilles.)

For our Terminus web-hack, we ended up getting the "Best Scalable Assignment" prize at the Designathon, and were encouraged by OEIT (MIT's Office of Education and Information Technology) to apply for the iCampus Prize. 

#### iCampus: the competition

Whenever you re-appropriate a project for a competition or a cause (rather than just playing at a hackathon), it is criticl to again understand the audience and specifications. If not to create a winning entry, the information about audience will give your project a message, tagline, and story. In a sentence, the iCampus prize is a competition to use technology to enhance living and learning at MIT.

Shawn and I both decided to continue work on Terminus at least for the iCampus prize. The first-round submission was due a week after the designathon, so we had to get to work! 

#### the Terminus story

The reasoning goes like this: MIT's computing system (called Debathena) is built on top of Ubuntu Linux. The majority of undergraduates, when they first get to campus, have no idea how to use the computers that the university is providing. Sure, there is some graphical interfaces, but part of the beauty of Debathena is that there are a number of terminal commands developed specifically for MIT - for printing, searching for users, creating mailing lists, accessing student group files and folders, and many more. 

The barrier to learning these terminal commands for MIT undergraduates is manyfold: 

* {: .detail-text} We don't have the time to make mistakes
* {: .detail-text} We use our own personal computers for almost everything
* {: .detail-text} There is no MIT-specific tutorial
{: .detail-list}

Terminus aims to solve all these problems at MIT (for freshman, undergraduates, and graduate students alike). We bring gamification into the picture. Through the exploratory environment provided by Terminus, we empower MIT students to become more familiar with the terminal, both for MIT-specific commands and for general use. 

#### the re-design: technical details

Now that we knew our audience, we had to get designing. We narrowed down our desired feature list to a few key points that dictated a few major design choices: 

1. {: .detail-text} Accessible anywhere (within internet range acceptible)
2. {: .detail-text} No complex hosting
3. {: .detail-text} No login needed
4. {: .detail-text} Both general and MIT-specific commands
{: .detail-list}

To address each of these choices, we came up with the following solutions: 

1. {: .detail-text} Web app!
2. {: .detail-text} No backend database - all front-end, all-Javascript / jQuery
3. {: .detail-text} No saving game state
4. {: .detail-text} Slightly modified game logic from the original Java version
{: .detail-list}

We decided that our implementation was going to be a simple web game built all in Javascript. We found [this Javascript plugin](https://github.com/jcubic/jquery.terminal) that would do some of our work - we had to add the game logic. For now, because we were using only-front-end-Javascript for the game play, we decided to host it out of my public locker space on MIT servers. We later decided to move it to it's own hosting (also on MIT servers). 

#### the re-design: gameplay

In our re-implementation, we had to add to our basic design from the Java version of terminus. We 

#### In short

Terminus provides a solution to a common problem at MIT: the computing environment is Ubuntu Linux, and there are many custom commands on the MIT Debathena computing system that incoming students are not familiar with. By exploring the safe (yet challening) environment of Terminus, they can become more familiar with both the command-line environment and the MIT computing environment at their own pace. 