---
layout: post
title:  "What I learned from building my first iOS app"
date:   2015-06-02
categories: iOS
---
Almost a year ago I built and launched an app for iOS. That app is called [tuneUp](https://itunes.apple.com/us/app/tuneup-lite-intonation-ear/id884607905?mt=8). Find the free version [here](https://itunes.apple.com/us/app/tuneup-lite-intonation-ear/id884607905?mt=8), and the paid version [here](https://itunes.apple.com/us/app/tuneup-pro-intonation-ear/id968587287?mt=8). It is important to note that I basically wanted to build and ship the *simplest useful app I could think of*, because my other efforts had seemed to have trouble getting out the door. Here’s a collection of some important lessons from that process.

Find a niche
============

Preferably, find a niche in which you have special domain knowledge. Finding a niche will allow you to have less competition, and if you believe Peter Thiel’s monopoly theory from *Zero to One*, this is a great place to be. I also believe that focusing on a small set of important features makes your app more valuable. No matter what you are doing, you want it to be frictionless. Read more about picking a niche in the very useful series from [Trevor McKendrick](http://www.trevormckendrick.com/how-to-find-a-profitable-niche-part-2/)

Work on a hard problem
============

tuneUp doesn’t really fit this criteria, although I think it’s important. First, it keeps you interested. If you are reading this as an indie developer I suspect you may have another full time job. Part of the point of side projects is exploration, and it’s certainly easier to stay interested in a problem that you find challenging. 

Also, as a side benefit it protects your niche from being gobbled up instantly from competition. Think about the flappy bird knock-offs.

Don’t ship anything that has no chance of being featured by apple
============

Here’s another one I cut corners on, although as I mentioned I was just trying to get this thing out the door. Depending on your niche I do believe getting featured eventually might not be as hard as it seems, and it would make a world of difference. Keeping this in mind will also help sharpen your design skills.

Instrument your app
============

Until the very recent rollout of iTunes Connect’s analytics, if you were to make an app and ship it without adding any analytics, you’d end up very bummed out after your launch. Sure iTunes Connect will tell you how many downloads you got the previous day, but that’s about all you get to know. Wouldn’t you like to know what buttons people are pressing? How long they are in your app on average? If they come back? It’s easy to add [localytics](http://www.localytics.com/), [mixpanel](www.mixpanel.com/), google analytics, segment.io, or any of the dozens of tools available. If you don’t do this you’ll be sad that you didn’t. Also, you’d like to know if your online marketing is driving downloads. Good luck understanding and comparing marketing campaigns without any instrumentation. 

Don’t underestimate users’ interactions with each other
============

Something as simple as integrating with game center will show you how important this one is. With tuneUp, somebody scored over *50,000 points* on the easy setting. This person went through more than 500 pitches in a single game, which is an astounding number. The reason is that this person wanted the top score on the leaderboard. In my next app I may try to build a platform for more sophisticated user interactions. However you address this topic, I recommend at least touching on it.

Market it
============

Unfortunately the app gold rush days are over. You’ve got to do something to drive downloads. Ad platforms like Facebook, Twitter and AdWords all give promotional credits for new users. Don’t throw away free money. Also, this is another reason to instrument your app. If you are able to pay $2 per download on average and make $4 per download, you’ve just found a gold mine (yes it’s very hard to find this kind of opportunity). You’ll need code in your app to really track the effectiveness of these campaigns. Get it setup before launch.

Don’t blow up your own launch
============

Here’s one where I really screwed up. After your app is approved, when you pull the trigger to deploy the app, under no circumstances should you pull it from the App Store. You get a big boost in app store rankings for being a new app, do not give it away. If you find a bug that you think is really a deal-breaker, rush to get a new version out, but do not pull it from the App Store. Look what happened to me after I pulled the app because I found a bug. This chart from mobileDevHQ  shows the placement of the app in the App Store for the keywords "ear training", at launch and second launch. Don't let it happen to you.

![tuneUp Ranking]({{site.url}}/assets/images/app-store-ranking.png "Launch ranking before pulling tuneUp")

Track it
============

Use a tool like [SensorTower](https://sensortower.com/), [App Annie](https://www.appannie.com/), [MobileDevHQ](https://www.mobiledevhq.com/), or one of the others to track your placement in the app store. This way you can plan for future updates and even future apps, in addition to tracking your marketing efforts. On these platforms you can add competitor apps and chart what works and what doesn’t.

Hopefully this is a useful resource to other app developers out there. There are plenty of posts out there just like this one, and I recommend doing a bunch of reading before you ship so that you don’t make the same mistakes as others before you.
