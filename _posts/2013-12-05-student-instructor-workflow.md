---
layout: post
title: The Student-Instructor Workflow
categories: projects MEET
project_id: meet
project_title: MEET
published: false
---

Since I was young I had an image of myself as an instructor, but it was never of computer science. The unique challenges of computer science (and most other engineering disciplines) are not limited to distribution, grading, feedback, and proof of completion. The entire student-instructor workflow from conception to execution is malleable, explosive, technically interesting, and all of the above. 

<!-- more --> 

#### the simplest instruction model

From my 16 years as a student the simplest model I could come up with to describe the student-instructor workflow is a traditional "group of students learn from instructor" model. This linear process looks something like:

1. Instructor develops lesson and exercise / homework that accompanies lesson
2. Students receive lesson in the form of a presentation / lecture from the instructor
4. Students complete exercise / homework
5. Instructor-students repeat steps 1 through 4 some small number of times
6. Instructor develops hand-written exam covering a few lessons
7. Students take exam, instructor grades it, students receive a number indicating their mastery of material


If the instructor is willing to put in some more time for the sake of learning, then there are a few additional linear steps that happen before an exam: 

1. Students hand in exercise to instructor. 
2. Instructor gives feedback to student about specific mistakes on exercise. 

(I can't help but write this model in python-esque: 

	for topic in topics_to_teach: 
		for subtopic in topic: 
		    instructor.create_lesson()
		    instructor.create_exercise()
		    instructor.lecture()
		    students.do_exercise()
		    if (instructor.is_awesome()):
		    	students.get_feedback()
		instructor.create_exam()
		students.take_exam()
		students.get_exam_grade()
	students.get_class_grade()

Don't be intimidated by the code. Pretend the code is in English and read it like that.)

From the perspective of a student, I have a few qualms with this workflow: 

* Without feedback, I don't know if I've actually mastered the material. 
* My exam grades are numeric - I don't know what I actually did wrong and why. 
* Sometimes listening to a lecture leaves nothing absorbed. 

From the perspective of an instructor, I have a few qualms with this workflow: 

*


NOT READY FOR PRIME TIME 

This model is the simplest incarnation of what MEET sessions look like - a single instructor in a classroom with 20 students. 