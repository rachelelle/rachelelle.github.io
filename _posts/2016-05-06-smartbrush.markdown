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
  Our team of four developed an Android mobile and smartwatch application for <a href="http://teaching.paulos.net/cs160_SP2016/">CS 160: User Interface Design</a> with a focus on building healthcare apps. We created SmartBrush, a dental hygiene app that motivates teens and young adults to develop proper dental hygiene habits through social competition. View the full detailed report <a href="/files/SmartBrushFinalReport.pdf">here</a>.
</section>

<div class="row">
  <div class="col-md-6 project-problem">
      <h2 class="block-title">Problem</h2>
      Children who learn poor brushing and flossing techniques from their parents often carry these habits into their adulthood. Neglecting dental hygiene can lead to unwanted cavaties and gum diseases down the road, which can hurt self-confidence in one's appearance.
  </div>
  <div class="col-md-6 project-role">
    <h2 class="block-title">Role</h2>
      I designed visual assets, animations, and the overall UX Design. I also participated in sketching concepts, developing the user journey map, and interviewing users. I implemented GifViews in Android. 
  </div>
</div>

<section>
<h1 class="section-title">Brainstorming</h1>
We wanted most of the interactions during brushing to occur when using the watch. After weighing the constraints, pros, and cons of our top three ideas, we selected a dental hygiene app. We thought it held the most potential for designing unique interactions for the watch interface in particular. There were many more ideas that we could implement for solving the problem of poor dental hygiene through gamification, providing facts, and keeping track of progress through a numerical system.
</section>

<section>
<h1 class="section-title">Ideation & Sketches</h1>
After discovering the saturation of dental hygiene apps for children in the Play Store and recognizing there is still a need for teens and young adults to correct their poor brushing and flossing habits, we decided to pivot to target 10-20 year olds. 
<br>
View the User Journey Map <a href="https://www.figma.com/file/Laa1xLrzw4I487dMAVAU743E/Smart-Brush-User-Journey-Map">here</a>.
<p>
We based our sketches on the User Journey Map. View the sketches <a href="https://www.figma.com/file/guugKmS6m1uQWVMW6KBj6D/CS-160-Nurse-Joy-and-the-ChancPaper-Sketches-Public">here</a>.
</section>

<section>
  <h1 class="section-title">Initial Research</h1>

</section>

<section>
  <h1 class="section-title">Wireframing</h1>
  Our team used <a href="http://figma.com">Figma</a> as our primary collaborative, prototyping tool (includes a handy Slack integration).
  <p>
  <strong>Version 1.0</strong>
  <br>
  View the first wireframe in greater detail <a href="https://www.figma.com/file/GJd7n0GcPV36Rmo6Tg14Un/Final-Wireframes-v1-Public">here</a>.
  <p>
  <strong>Version 2.0</strong>
  <br>
  After receiving feedback from TAs, usability testing participants, and fellow students, here are the key changes made for the second version:
  <p>
  <ul><u>Watch</u>
  	<li>Simplify the view of the Home Screen: remove logo text and recreate circular buttons in order to avoid the fat finger problem.</li>
  	<li>Include 4 regions for brushing teeth rather than 6 regions for 15 seconds each.</li>
  </ul>
  <p>
  <ul><u>Phone</u>
  	<li>Remove the Home Screen as a summary, but instead have the users toggle between two tabs to view My Activity and Rankings.</li>
  </ul>
  View the second version wireframe in greater detail <a href="https://www.figma.com/file/5036UJPwm5jX8cpyTlir3k/PROG-03-Milestone-1-Public">here</a>.
</section>

<section>
  <h1 class="section-title">Branding</h1>
 
</section>

<section>
  <h1 class="section-title">Final Prototype</h1>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7vfUYkNVRzE" frameborder="0" allowfullscreen></iframe>
  <p>
  Put final design image here
  <br>
  We developed the final prototype on Android. Brushing animations (made in After Effects) indicate the progress of brushing your teeth as the teeth turn from yellow to white and the pulsating effect highlight the areas of your teeth to brush.
  <p>
  <strong>Technical Challenges</strong>
    <li>Running the Gif Views: our flossing animation was unable to play on physical watch because it ran out of memory, but it played normally on the emulator.</li>
    <li>Storing and updating the streak count on the phone and watch: </li>
    <li></li>
    <li></li>
</section>

<section>
  <h1 class="section-title">Takeaways</h1>
  Overall, I had a wonderful experience of learning how to develop an app in Android with a team and learning about the UI guidelines for Android and Android Wear. This is also the first project where I designed an experience and programmed for wearables.
  <p>
  Here are the valuable lessons I learned along the way:
  <li>Know the <a href="http://developer.android.com/design/wear/patterns.html">Android Wear UI Patterns</a> front and back before diving into sketching, wireframing, and creating visual design elements.</li>
  <li>Technical constraints, such as the physical handware running out of memory for playing animations, can influence the final design implementation and may require an alternative solution.</li>
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
