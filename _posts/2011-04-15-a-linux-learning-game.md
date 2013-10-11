---
layout: post
title: Gamification and a Linux Learning Game
categories: projects terminus
project_id: terminus
project_title: Terminus
---

What started as a final project for a class ended up as an effective Linux-learning game.

<!-- more -->

#### The beginning: a class

This semester (Spring 2011) I took one of the most enjoyable classes I have ever taken at MIT: 11.127/CMS.590, or Educational Games, taught by [Professor Eric Klopfer](http://education.mit.edu/people/eric-klopfer) from the Urban Studies and Planning department. (Since then, the class has been renamed [Computer Games and Simulations for Education and Exploration](http://education.mit.edu/classes/11127).) The main goal of the class was to discuss and utilize gamification techniques to create games that were both educational and fun. At the end of the semester, our project groups were to use the gamification principles we studied to create effective learning games.

#### Gamification

The idea behind gamification is simple. "Gamification" is the act of turning something into a game. When applied to education and learning, it is even simpler. You make something into a game, and learners find it more fun. Because learners find it more fun, they learn more. Although education and gaming experts disagree about exactly what constitutes gamification, a few sample characteristics are: 

- {: .detail-text} Competition (either with yourself or against others)
- {: .detail-text} Narrative (plot, characters)
- {: .detail-text} Exploration (giving the user interesting choice)
- {: .detail-text} Rewards (points, virtual currency, stars)
{: .detail-list}
(partially edited and bastardized from the [Wikipedia article](http://en.wikipedia.org/wiki/Gamification))

Services like Foursquare thrive on the idea of gamification: you get points by checking in to a location and earning rewards. But less obvious examples are also elements of gamification. For example, Github's repository "stars": ![Github's stars on a repository for Terminus](/imgs/github_stars.png){: #github-stars} and Yelp's compliment icons: ![Yelp's compliment icons and badges](/imgs/yelp_compliments1.png){: #yelp-comp}
These icons and rewards give the user freedom to explore the possibilities of the environment, creating a persona for themselves in whichever way they choose, possibly competing against others for particular achievements. 

One easy way to gamify something boring is to relate it to something more fun. Recycling bottles outside the supermarket gives rewards: you get money back! Safety trainings at work become increasingly similar to dramas about losing fingers, complete with suspenseful music. What is more fun - listening to someone talk about safety or *watching a movie*? 

In the recycling example, the intent is not to educate, but rather to recycle as much material as possible. The relationship between money and materials is made obvious and the metaphor is clear: `materials == money`. You recycle more, you get more money (and the benefit to you is a mtaphor for the benefit of recycling on society). In the safety video example, there is a real educational goal. However, the relationship between the product and the gamification is completely off: safety is serious, but the gamified movie is not. Dramatic movies are purely for entertainment, so the gamification of the safety video exactly opposes the inherent message. Taking these two differences to light, we take anecdotal evidence for the success of the two gamified activities: in a high school classroom, you hear students talking about collecting recycled bottles to earn spare change, but while watching the safety video you hear sneers and laughs around the room. 

From this we learn a lesson: the closer the metaphor is to the desired lesson learned, the more effective the metaphor. 

#### The task

For the last group assignment for 11.127 (to create any kind of game in any medium with significant educational value), my group and I decided to apply exactly this last principle - closely relating the metaphor to the lesson - quite literally.

#### The context

The Linux command-line terminal is a daunting black box. First looking at it, it looks like a void of nothingness waiting to eat you alive. 
![A screenshot of a Linux command-line terminal](/imgs/terminal.png){: #terminal-pic}

But if you've ever used a terminal, you know that it's like exploring an unknown abyss, mapping a new land, discovering something new. For those who have played the 1977 interactive fiction text-based adventure, *Zork*, this is nothing new. *Zork*, the quintessential text-based adventure game written at MIT from 1977-1979, is arguably the most well-known text-based adventure game, originally written by Tim Anderson, Marc Blank, Bruce Daniels, and Dave Lebling from the MIT Dynamic Modeling Group. 
![Screenshot of Zork being played on a Linux machine](/imgs/zork.png){: #zork-pic}

For a more detailed game-oriented history of Zork, check out [this Gamasutra article](http://www.gamasutra.com/view/feature/1499/the_history_of_zork.php?print=1).

But Zork was only played by computer nerds of the 1970s (and beyond). To play it required at least a familiarity of a terminal (back then it was a DOS box, much scarier than today's modern Linux terminal). 

By today's standards, Zork is not a "modern game," but back then, it used the most advanced user-input techniques of the time: the keyboard and the DOS prompt. Shockingly (or perhaps not), the text-based adventure game model mimics what the programmers of that era knew inside and out - terminal commands. 

#### The main idea; the main goal

Given the similarity between a user-terminal interaction and a user-text-based-adventure-game interaction, the Terminus team decided to tackle the problem of teaching users how to use the terminal through a gamified text-based adventure game.

The main goal: to make the command-line terminal a less scary place. To use the techniques of gamification to teach terminal commands to users. 

#### The original team

The original team was formed after discussion about the game idea during the 11.127 class sessions: Shawn Conrad '12/MEng '13, Michaela LaVan '12, Michele Pratusevich '13, Emma Tolley '11, and David Zhou '12 were the original team members. Most of the artwork credit goes to Emma Tolley, with later artwork being added by Shawn Conrad. Original storyboarding by Michaela LaVan and David Zhou.