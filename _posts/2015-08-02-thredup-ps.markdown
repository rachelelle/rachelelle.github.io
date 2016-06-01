---
layout: post
title:  ThredUP Personal Shops 2.0
date:   2015-08-02 14:22:04 -0700
categories: ux
label: UX Design, Mobile Design
thumbnail: thredup-ps.png
main-img: thredup-ps-main.png
---
<section>
    Last summer, I had the privilege of interning at <a href="http://thredup.com" target="_blank">ThredUP</a>, the world's largest online fashion resale shop for women and children, with the Product team. My role was a mix of Product Management and Product Design, which allowed me to learn  the process of making design decisions with the end goal of increasing onboarding conversion rates. My main project for the summer was redesigning Personal Shops, a personalization feature that saves product filters, so that it can provide suggestions based on their top brands.
</section>

<div class="row">
  <div class="col-md-6 project-problem">
  		<h2 class="block-title">Problem</h2>
  		  Only a very small percentage of users onboarded to the feature (not allowed to disclose figures), yet its users have the highest average order values.
  </div>
  <div class="col-md-6 project-role">
  	<h2 class="block-title">Role</h2>
      <ul>
      <li>Led strategic redesign by analyzing data and conducting interviews that led to key findings influencing user flows and KPIs set.</li>
        <li>Worked closely with Product, Engineering, Design, and Marketing, in the process of developing specs and receiving feedback</li>
        <li>Created prototypes in FramerJS and facilitated user testing sessions that influenced rollout to another platform.</li>
      </ul>
  	</div>

</div>

<section>
<h1 class="section-title">Data Analysis</h1>

I first pulled current data on users with Personal Shops to find the top used search filters and looked at which platforms (web, mobile/web, iOS, and Android) were the most popular and had the highest average order values.
</section>

<section>
<h1 class="section-title">Survey & Initial Research</h1>
I surveyed users with over 10 Personal Shops to understand their behaviors for saving so many shops in the first place. I followed up with 7 users who consented to following up with me for a more in-depth discussion about their use of thredUP and other shopping apps.
<br>
<br>
Based on my phone interviews with the users, I created a mental model to understand the user's train of thought.
  <h3 class="subtitle">Mental Model</h3>
    <li>Can I quickly find relevant items?</li>
    <li>How can I find great deals that caters to my family's lifestyle?</li>
    <li>How can I easily shop my favorite brands?</li>
    <li>Will these items fit me?</li>
    <li>Will it save me search time?</li>
    <li>How can we get coveted items first?</li>
<br>
<p>
<h3 class="subtitle">Style Profile</h3>
We also further refined the idea of creating a Style Profile for every account in order to <strong>set Sizes and top 10 brands</strong>, based on the findings of a high percentage of users caring about their the brands they purchase and wanting to discover more items to similar brands.
</section>

<section>
	<h1 class="section-title">Prototype v 1.0</h1>
	The aim of the first iteration (prototyped in FramerJS) was to validate and answer:
  <li>Would customers be interested in seeing recent searches, suggested searches, and popular searches?</li>
  <li>Does saving the search into a separate tab ("Pocket") increase engagement?</li>
  <p>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Carousel indicators -->
    <!-- Wrapper for carousel items -->
    <div class="carousel-inner">
        <div class="item active">
            <img src="/img/portfolio/thredup-ps/v1-home.png" alt="First Slide">
            <div class="carousel-caption active">
            The Feed is the main home screen that includes a personal greeting, Recent Searches, Suggested, and Popular. The color coding for each search was based on shop-type (Women, Girls, Boys).
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v1-popup.png" alt="Second Slide">
            <div class="carousel-caption active">
            Notify the user about saving a search to Pocket, where all of the saved searches are stored
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v1-pocket.png" alt="Third Slide">
            <div class="carousel-caption active">
            Inside Pocket: The red circle notifies how many new arrivals there are in the saved search.
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v1-pocketedit.png" alt="Third Slide">
            <div class="carousel-caption active">
            In the past, users were unable to update their saved search directly and we also wanted to provide notification settings to set frequency of notifications for new arrivals. The pink copy incentivizes users to save shops in order receive a discount.
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v1-PLP.png" alt="Third Slide">
            <div class="carousel-caption active">
            The Product Listing Page (PLP) for the saved search shows the saved search bar, so users are clear of which shop they are browsing.
            </div>
        </div>
    </div>
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
    </ol>   
    <!-- Carousel controls -->
    <a class="carousel-control left" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="carousel-control right" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
  <p>
  <div class="cta">
    <a href="http://share.framerjs.com/y2r6k8czd5k7/" target="_blank">View Prototype</a>
  </div>
  <br>
  <br>
  After conducting the first user testing session on-site with 6 users who had at least one Personal Shop, I gained a lot of helpful insights for improving the next iteration.
  <h3 class="subtitle">Findings</h3>
    <li>Simplify the view - remove color coding</li>
    <li>The concept of "Pocket" was too confusing.</li>
    <li>Users wanted to be able to click through a feed row to see the PLP.</li>
    <li>Users are not interested in seeing popular saved searches</li>
</section>

<section>
  <h1 class="section-title">Prototype v 2.0</h1>
  Since I had limited time to conduct another user test, I tested this prototype internally with select employees Product, Engineering, Design, and Marketing to gather feedback from multiple points of view. I updated my FramerJS prototype based on findings from usability testing for version 1.0.
  <p>
    <div id="v2Carousel" class="carousel slide" data-ride="carousel">
    <!-- Carousel indicators -->
    <!-- Wrapper for carousel items -->
    <div class="carousel-inner">
        <div class="item active">
            <img src="/img/portfolio/thredup-ps/v2-home.png" class="img-responsive" alt="First Slide">
            <div class="carousel-caption active">
            "My Shop" only displays rows of recently searches. Users can save shops by tapping the heart.
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v2-edit.png" alt="Second Slide">
            <div class="carousel-caption active">
            Notify the user about saving a search to Pocket, where all of the saved searches are stored
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v2-PLPsave.png" alt="Third Slide">
            <div class="carousel-caption active">
           Save Search bottom bar button is a clear call-to-action.
            </div>
        </div>
        <div class="item">
            <img src="/img/portfolio/thredup-ps/v2-promo.png" alt="Fourth Slide">
            <div class="carousel-caption active">
            Reward users for saving 3 shops by offering a promo.
            </div>
        </div>
    </div>
    <ol class="carousel-indicators">
        <li data-target="#v2Carousel" data-slide-to="0" class="active"></li>
        <li data-target="#v2Carousel" data-slide-to="1"></li>
        <li data-target="#v2Carousel" data-slide-to="2"></li>
        <li data-target="#v2Carousel" data-slide-to="3"></li>
    </ol>   
    <!-- Carousel controls -->
    <a class="carousel-control left" href="#v2Carousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="carousel-control right" href="#v2Carousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
<p>
  <div class="cta">
    <a href="http://share.framerjs.com/daab0qd1fmzh/" target="_blank">View Prototype</a>
  </div>
  <br>
  <br>
  <h3 class="subtitle">Findings</h3>
    <li>We should rolllout to web, instead of mobile first.</li>
    <li>There were mixed reactions to the heart iconography</li>
</section>

<section>
<h1 class="section-title">Challenges</h1>
<ul>
  <li>It was tempting to include many new features for the redesign of Personal Shops, but I learned to prioritize features and make tradeoffs given the scope of the project. This simplification allowed for a more simplified design that was easy on the eyes.</li>
  <li>I discovered the technical limitations for mobile after speaking with the Engineering team, so I had to quickly find an alternative solutions for web.</li>
</ul>
</section>

<section>
<h1 class="section-title">Takeaways</h1>
<ul>
	<li>Involve other stakeholders earlier in the process to learn about potential contraints.</li>
	<li>Simplicity and elegance rules. Think about information hierachy when considering the visual. Only emphasize what needs to be emphasized. </li>
	<li>Don't be afraid to go deeper into understanding users' behaviors by constantly asking "why" questions during user testing.</li>
</ul>
</section>




<!-- {% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/ -->
