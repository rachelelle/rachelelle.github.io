---
layout: post
title:  SmartBrush
date:   2016-05-06 14:22:04 -0700
categories: ux
label: UX Design, Android, Smartwatch
thumbnail: smartbrush-thumb.png
main-img: smartbrush-main.png
---

<section>
  Our team of four developed an Android mobile and smartwatch application for <a href="http://teaching.paulos.net/cs160_SP2016/" target="_blank">CS 160: User Interface Design</a> with a focus on building healthcare apps. We created SmartBrush, a dental hygiene app that motivates teens and young adults to develop proper dental hygiene habits through social competition. View the full detailed report <a href="/files/SmartBrushFinalReport.pdf" target="_blank">here</a>.
</section>

<section>
<h1 class="section-title">SmartBrush in Action</h1>
<div class="video-module responsive-video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7vfUYkNVRzE" frameborder="0" allowfullscreen></iframe>
</div>
</section>

<div class="row">
  <div class="col-md-6 project-problem">
      <h2 class="block-title">Problem</h2>
      Children who learn poor brushing and flossing techniques from their parents often carry these habits into their adulthood. Neglecting dental hygiene can lead to unwanted cavities and gum diseases down the road, which can hurt self-confidence in one's appearance.
  </div>
  <div class="col-md-6 project-role">
    <h2 class="block-title">Role</h2>
    <ul>
      <li>Project Manager</li>
      <li>Ensured team of engineers met deadlines and contributed to design process</li>
      <li>Designed visual assets, animations and overall UX Design</li>
      <li>Sketched concepts, developed user journey map and intereviewed users</li>
      <li>Implemented GifViews in Android</li>
    </ul>
  </div>
</div>

<section>
<h1 class="section-title">Brainstorming</h1>
We wanted most of the interactions during brushing to occur when using the watch. After weighing the constraints, pros, and cons of our top three ideas, we selected a dental hygiene app. We thought it held the most potential for designing unique interactions for the watch interface in particular. There were many more ideas that we could implement for solving the problem of poor dental hygiene through gamification, providing facts, and keeping track of progress through a numerical system.
</section>

<section>
<h1 class="section-title">Ideation & Sketches</h1>
After discovering the saturation of dental hygiene apps for children in the Play Store and recognizing there is still a need for teens and young adults to correct their poor brushing and flossing habits, we decided to pivot to target 10-20 year olds. 
<p>
<h3 class="subtitle" style="text-align: center">User Journey Map</h3>
<p>
<a href="https://www.figma.com/file/Laa1xLrzw4I487dMAVAU743E/Smart-Brush-User-Journey-Map" target="_blank"><img src="/img/portfolio/smartbrush/UserJourneyMap.png" class="img-responsive"></a>
<p>
<h3 class="subtitle" style="text-align: center">Sketches</h3>
<p>
<a href="https://www.figma.com/file/guugKmS6m1uQWVMW6KBj6D/CS-160-Nurse-Joy-and-the-ChancPaper-Sketches-Public" target="_blank"><img src="/img/portfolio/smartbrush/sketch.png" class="img-responsive"></a>
We based our sketches on the User Journey Map.
</section>

<section>
  <h1 class="section-title">Initial Research</h1>
  <h3 class="subtitle">Competitive Analysis</h3>
  <strong>Top 3 Competitors:</strong>
  <li>Chomper Chums</li>
  <li>Quickbrush</li>
  <li>Aquafresh Brush Time</li>
  <p>
  <h3 class="subtitle">User Interviews</h3>
  <li>Dental Assistant</li>
  <li>Mother of Two</li>
  <li>Teenage Student</li>
  <p>
  <h3 class="subtitle">Top 5 User Needs</h3>
  <li>Have a fun and entertaining experience so brushing teeth won’t feel like a hassle.</li>
  <li>Receiving feedback and tracking progress for techniques.</li>
  <li>Learn proper brushing habits and techniques.</li>
  <li>Not slowing down the brushing/flossing process.</li>
  <li>Motivation to maintain good oral health and prevent dental disorders.</li>
</section>

<section>
  <h1 class="section-title">Wireframing</h1>
  Our team used <a href="http://figma.com" target="_blank">Figma</a> as our primary collaborative, prototyping tool (includes a handy Slack integration). We wanted our first wireframe to accomplish the three primary tasks.
  <p>
  <h3 class="subtitle">3 Primary Tasks</h3>
  <li>Brushing</li>
  <li>Flossing</li>
  <li>Checking Progress and Rankings</li>
  <p>
  <h3 class="subtitle">Version 1.0</h3>
  View the first wireframe in greater detail <a href="https://www.figma.com/file/GJd7n0GcPV36Rmo6Tg14Un/Final-Wireframes-v1-Public" target="_blank">here</a>.
  <p>
 <h3 class="subtitle">Version 2.0</h3>
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
  View the second version wireframe in greater detail <a href="https://www.figma.com/file/5036UJPwm5jX8cpyTlir3k/PROG-03-Milestone-1-Public" target="_blank">here</a>.
<p>
<img src="/img/portfolio/smartbrush/branding.png" class="img-responsive">
</section>

<section>
  <h1 class="section-title">Final Prototype</h1>
  We developed the final prototype on Android. Brushing animations (made in After Effects) indicate the progress of brushing your teeth as the teeth turn from yellow to white and the pulsating effect highlight the areas of your teeth to brush. We established a streak system in which a streak is equal to brushing twice in a day and flossing once during the day. The counter resets daily at midnight. After the timer countdown for the Brushing Screens reach 0, the watch will vibrate to indicate an automatic transition to the next screen.
  <p>
  <h3 class="subtitle">Final Flow</h3>
  <a href="/img/portfolio/smartbrush/finaldesignflow.png" target="_blank"><img src="/img/portfolio/smartbrush/finaldesignflow.png" class="img-responsive"></a>
  <p>
  <h3 class="subtitle">Animations</h3>
  <div class="row">
  <div class="col-xs-5 center-block">
  <img src="/img/portfolio/smartbrush/bottomrightdiagram.gif" class="img-responsive">
  </div>
  <div class="col-xs-5 center-block">
  <img src="/img/portfolio/smartbrush/flossing.gif" class="img-responsive">
  </div>
  </div>
</section>

<section>
<h1 class="section-title">Technical Challenges</h1>
    <li><strong>Running the Gif Views</strong>: our flossing animation was unable to play on physical watch because it ran out of memory, but it played normally on the emulator.</li>
    <li><strong>Storing and updating the streak count on the phone and watch after brushing</strong>: We needed to figure out a system of updating the streaks. We set a timestamp at midnight to reset the count of brushing and flossing. The data for streak counts are stored on the phone, but the watch retries this information to update the streak count and send the data back to the phone.</li>
</section>

<section>
  <h1 class="section-title">Takeaways</h1>
  Overall, I had a wonderful experience of learning how to develop an app in Android with a team and learning about the UI guidelines for Android and Android Wear. This is also the first project where I designed an experience and programmed for wearables.
  <p>
  <ul>Here are the valuable lessons I learned along the way:
  <li>Know the <a href="http://developer.android.com/design/wear/patterns.html" target="_blank">Android Wear UI Patterns</a> front and back before diving into sketching, wireframing, and creating visual design elements.</li>
  <li>Technical constraints, such as the physical handware running out of memory for playing animations, can influence the final design implementation and may require an alternative solution.</li>
  </ul>
</section>

<section>
   <h1 class="section-title">Credit</h1>
    <li>Contextual Inquiries: Rachel Lin, Nithish Arunkumar, Mukund Chillikanti</li>
    <li>Visual Design, Animations, and UI Design: Rachel Lin</li>
    <li>Backend (Android): Mukund Chillikanti</li>
    <li>Rankings Screen (Android): Nithish Arunkumar</li>
    <li>My Activity Screen (Android): Tait Gu</li>
    <li>Gif Views (Android): Rachel Lin</li>
</section>
