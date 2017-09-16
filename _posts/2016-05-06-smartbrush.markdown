---
layout: post
title:  SmartBrush
date:   2016-05-06 14:22:04 -0700
categories: archive
label: Mobile + Smartwatch • Health
tagline: Brightening your dental hygiene routine
thumbnail: smartbrush-thumb.png
main-img: smartbrush-main.png
specs: Concept Development, User Research, Product Design, Frontend Development
---

<section class="project-body">
  Our team of four developed SmartBrush, a dental hygiene app for Android mobile and smartwatch that motivates teens and young adults to develop proper dental hygiene habits through social competition. View the full detailed report <a href="/files/SmartBrushFinalReport.pdf" target="_blank">here</a>.
</section>
<hr>
<section class="project-body">
  <h2>Role</h2>
  <p>
      <li>Project Manager and Lead Designer</li>
      <li>Ensured team of engineers met deadlines and contributed to design process</li>
      <li>Designed visual assets, animations and overall UX Design</li>
      <li>Sketched concepts, developed user journey map and intereviewed users</li>
      <li>Implemented GifViews in Android</li>
  </p>
</section>
<hr>
<section class="project-body">
<h2>SmartBrush in Action</h2>
<div class="video-module responsive-video">
<iframe width="650" height="400" src="https://www.youtube.com/embed/7vfUYkNVRzE" frameborder="0" allowfullscreen></iframe>
</div>
</section>
<hr>
<section class="project-body">
<h2>Defining the Strategy</h2>
<h3 class="project-body">Brainstorming</h3>
<p>We wanted most of the interactions during brushing to occur when using the watch. After weighing the constraints, pros, and cons of our top three ideas, we selected a dental hygiene app. We thought it held the most potential for designing unique interactions for the watch interface in particular. There were many more ideas that we could implement for solving the problem of poor dental hygiene through gamification, providing facts, and keeping track of progress through a numerical system.
</p>
<h3 class="project-body">Ideation & Sketches</h3>
<p>After discovering the saturation of dental hygiene apps for children in the Play Store and recognizing there is still a need for teens and young adults to correct their poor brushing and flossing habits, we decided to pivot to target 10-20 year olds. 
</p>
<h3 class="project-body">User Journey Map</h3>
<p>
<a href="https://www.figma.com/file/Laa1xLrzw4I487dMAVAU743E/Smart-Brush-User-Journey-Map" target="_blank"><img src="/img/portfolio/smartbrush/UserJourneyMap.png" class="img-responsive"></a>
</p>
<h3 class="project-body">Sketches</h3>

<a href="https://www.figma.com/file/guugKmS6m1uQWVMW6KBj6D/CS-160-Nurse-Joy-and-the-ChancPaper-Sketches-Public" target="_blank"><img src="/img/portfolio/smartbrush/sketch.png" class="img-responsive"></a>
<p>
We based our sketches on the User Journey Map.
</p>
</section>
<hr>
<section class="project-body">
  <h2>Initial Research</h2>
  <h3 class="project-body">Competitive Analysis</h3>
  <strong>Top 3 Competitors:</strong>
  <li>Chomper Chums</li>
  <li>Quickbrush</li>
  <li>Aquafresh Brush Time</li>
  <p>
  With the plethora of dental hygiene apps for children, we wanted to differentiate and focus on designing an app for a slightly older user base of young teens to young adults.
  </p>
  <h3 class="project-body">User Interviews</h3>
  <p>
  Our initial interviews with a <strong>dental assistant, mother of two children, and a teenage student</strong> allowed us to dive deeper into identifying the user's top needs and primary tasks for our app. The dental assistant emphasized the importance of <strong>flossing</strong> and finding ways to <strong>entertain children</strong> so that they would be motivated to brush their teeth. The mother shared with us how influential parents are for teaching their children about dental hygiene. The teenage student revealed his dental hygiene habits and how it is tied with his <strong>self-esteem in regards to physical appearance</strong>. He also suggested an aspect of <strong>gamification</strong> to make the experience of brushing teeth and flossing more enjoyable. We took all of these findings into account in our process of building features.
  </p>
  <h3 class="project-body">Top 5 User Needs</h3>
  <li>Have a fun and entertaining experience so brushing teeth won’t feel like a hassle.</li>
  <li>Receiving feedback and tracking progress for techniques.</li>
  <li>Learn proper brushing habits and techniques.</li>
  <li>Not slowing down the brushing/flossing process.</li>
  <li>Motivation to maintain good oral health and prevent dental disorders.</li>
</section>
<hr>
<section class="project-body">
<h2>Iteration</h2>
  <h3 class="project-body">Wireframing</h3>
  <p>
  Our team used <a href="http://figma.com" target="_blank">Figma</a> as our primary collaborative, prototyping tool (includes a handy Slack integration). We wanted our first wireframe to accomplish the three primary tasks.
  </p>
  <h3 class="project-body">3 Primary Tasks</h3>
  <li>Brushing</li>
  <li>Flossing</li>
  <li>Checking Progress and Rankings</li>
  <h3 class="project-body">Version 1.0</h3>
  <img src="/img/portfolio/smartbrush/wireframev1.png" class="img-responsive">
  <p>
  <div class="cta">
    <a href="https://www.figma.com/file/GJd7n0GcPV36Rmo6Tg14Un/Final-Wireframes-v1-Public" target="_blank">
      <button class="cta">View Wireframe</button>
    </a>
 </div>
  <p>
 <h3 class="project-body">Version 2.0</h3>
 <img src="/img/portfolio/smartbrush/wireframev2.png" class="img-responsive">
  <p>
  <div class="cta">
  <a href="https://www.figma.com/file/5036UJPwm5jX8cpyTlir3k/PROG-03-Milestone-1-Public" target="_blank">
    <button class="cta">View Wireframe</button>
  </a>
  </div>
  <p>
  After receiving feedback from TAs, usability testing participants, and fellow students, here are the key changes made for the second version:
  <p>
  <table class="table table-bordered">
  <tr>
  	<th>Watch</th>
  	<th>Phone</th>
  </tr>
  <tr>
    <td>Simplify the view of the Home Screen: remove logo text and recreate circular buttons in order to avoid the fat finger problem.</td>
    <td>Remove the Home Screen as a summary, but instead have the users toggle between two tabs to view My Activity and Rankings.</td>
  </tr>
  <tr>
    <td>Changed from 6 brush screens (15 seconds each) to 4 brush screens (30 seconds each) - as recommended by the dental assistant.</td>
    <td>Only keeps track of current streak and longest streak. The overall health score was unclear to the users.</td>
  </tr>
    <td>Results Screen includes the latest streak count.</td>
    <td></td>
  </tr>
</table>	
<p>
<img src="/img/portfolio/smartbrush/branding.png" class="img-responsive">
</section>
<hr>
<section class="project-body">
  <h2>Final Prototype</h2>
  We developed the final prototype on Android. Brushing animations (made in After Effects) indicate the progress of brushing your teeth as the teeth turn from yellow to white and the pulsating effect highlight the areas of your teeth to brush. We established a streak system in which a streak is equal to brushing twice in a day and flossing once during the day. The counter resets daily at midnight. After the 15-second timer for the Brushing Screens reaches 0, the watch will vibrate to indicate an automatic transition to the next screen.
  <p>
  <h3 class="project-body">Final Flow</h3>
  <a href="/img/portfolio/smartbrush/finaldesignflow.png" target="_blank"><img src="/img/portfolio/smartbrush/finaldesignflow.png" class="img-responsive"></a>
  <p>
  <h3 class="project-body">Animations</h3>
  <div class="row">
  <div class="col-xs-5 center-block">
  <img src="/img/portfolio/smartbrush/bottomrightdiagram.gif" class="img-responsive">
  </div>
  <div class="col-xs-5 center-block">
  <img src="/img/portfolio/smartbrush/flossing.gif" class="img-responsive">
  </div>
  </div>
</section>
<hr>
<section class="project-body">
<h2>Execution</h2>
<h3 class="project-body">Technical Challenges</h3>
    <li><strong>Running the Gif Views</strong>: our flossing animation was unable to play on physical watch because it ran out of memory, but it played normally on the emulator.</li>
    <li><strong>Storing and updating the streak count on the phone and watch after brushing</strong>: We needed to figure out a system of updating the streaks. We set a timestamp at midnight to reset the count of brushing and flossing. The data for streak counts are stored on the phone, but the watch retries this information to update the streak count and send the data back to the phone.</li>
</section>
<hr>
<section class="project-body">
  <h2>Takeaways</h2>
  <p>
  Overall, I had a wonderful experience of learning how to develop an app in Android with a team and learning about the UI guidelines for Android and Android Wear. This is also the first project where I designed an experience and programmed for wearables.
  </p>
  Here are the valuable lessons I learned along the way:
  <li>Know the <a href="http://developer.android.com/design/wear/patterns.html" target="_blank">Android Wear UI Patterns</a> front and back before diving into sketching, wireframing, and creating visual design elements.</li>
  <li>Technical constraints, such as the physical handware running out of memory for playing animations, can influence the final design implementation and may require an alternative solution.</li>
</section>
<hr>
<section class="project-body">
   <h2>Credit</h2>
    <li>Contextual Inquiries: Rachel Lin, Nithish Arunkumar, Mukund Chillikanti</li>
    <li>Visual Design, Animations, and UI Design: Rachel Lin</li>
    <li>Backend (Android): Mukund Chillikanti</li>
    <li>Rankings Screen (Android): Nithish Arunkumar</li>
    <li>My Activity Screen (Android): Tait Gu</li>
    <li>Gif Views (Android): Rachel Lin</li>
</section>
