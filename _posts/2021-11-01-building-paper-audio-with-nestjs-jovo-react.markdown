---
layout: post
title: "Building Paper Audio with NestJS, Jovo, and React"
date: 2021-11-01
---

[Paper Audio](https://paperaudio.com) is my most recent side project. I have often thought that musicians should share their work earlier and more often, and Paper Audio is my attempt at supporting this kind of sharing.

As a way to incentivize the sharing of demos, Paper Audio has an api deployed to Alexa and Google Actions, and I am able to feature a 'demo of the day' to voice speakers. This separates my project from places like Instagram where musicians are already sharing, and, it allows the project to be enjoyed without screen time (and without giving more time to Instagram!)

At the time of writing, Paper Audio only allows the 'demo of the day' to be played on voice speakers. I personally select the demo of the day. Though this is a bit more gatekeeper-y than I'd like, it actually has to be this way; the Alexa Skills store _forbids_ unmoderated user-generated content. I actually had to address this directly with Amazon in the submission process — maybe I'll say more about that in another post. At the very least, all user submissions are shown on the web on the 'explore' page.

## On to the tech stuff:

As with all side projects, I was hoping to learn as much as possible, while also trying to actually ship and maintain high leverage in terms of throughput and platform support. TypeScript is my strongest programming language, so that was definitely a big factor in my selection of frameworks and tooling.

### Voice platform support: Jovo

Jovo is an awesome framework for writing apps for voice platforms like Alexa, Google Home, and more. This react-native like premise of write-once-deploy-everywhere made it a natural choice for getting Paper Audio to work on multiple platforms. I'd used it before for an incredibly simple Alex Skill called "Pitch Player", which is basically a pitch pipe. Ultimately the logic in the voice interface is deployed to AWS Lambda, and is called by Alexa and the supporting Google devices. In turn the Lambda calls the Paper Audio back end, described below.

### What I loved about working with Jovo:

- Write once, deploy to multiple platforms
- Built-in TypeScript support
- A great web-based debugger
- Lots of tutorials and examples

### What I loved less (these things may of course change and become outdated)!:

- Managing metadata (images, descriptions, etc) for my products in the Alexa Skills & Google Actions portal. You can fetch this metadata via the jovo cli, and then later push it, but it can be tricky to understand what fields map to what values in the portals. I suppose this is the price you pay when you try to target multiple stores, and you can imagine that this is not easy for the Jovo framework, as there are no incentives for Google and Amazon to cooperate in making this straightforward.
- Some examples and tutorials have become outdated, and some areas are not as well documented. For example, I used the Google Conversational Action builder pattern, which seems slightly less conventional than using DialogFlow when using Jovo.

### Back End — NestJS

I used NestJS for the back end of Paper Audio because it seemed to be a very 'complete' node solution with native TypeScript support, and lots of 'opinions'. I didn't want to spend a lot of time sewing together lots of express code myself. I wanted something that would more or less let me define a data model, and then do most of the 'boring' work for me. I also knew I wanted GraphQL and Apollo support since I've used the Apollo client with React in my job, and I've loved the end-to-end typesafety that is available with this approach. Postgres backs the app via TypeORM, because, why not use Postgres?

I'd use NestJS again without much hesitance. On my next project, I might even go a step further into convention over configuration and use something like RedwoodJS or Blitz.js, effectively taking the monorepo approach to the web front end and back end. As an engineer I have already spent too much of my career solving the same familiar CRUD problems. CRUD is not terribly interesting, so it seems best to use tools that allow one to spend more time on the challenges unique to a particular application.

Paper Audio's NestJS back end is deployed to a digital ocean droplet via Dokku. Dokku doesn't quite seem like the cool new thing in town, and my architecture here isn't perfectly 'web scale', but it was very easy to configure (there was no chance I was going near Kubernetes for this), and offered me more performance per dollar than heroku, and allows me to deploy via `git push dokku`.

### Web Front End — Create React App

The front end that you see at [https://paperaudio.com](https://paperaudio.com) is a react app written in TypeScript and deployed via Netlify. I used create-react-app here, and built the UI with 'Material UI'. Next.js would've been the 'cooler' thing to use here, but, for now I just don't need its features, and was already more familiar with create react app. Material looks a little android-y for my tastes. If I were to start over, it's likely I'd try tailwind in its place.

## Other Lessons & Conclusions

### I wish I'd 'built in public' more

Building in public has become a very popular strategy, and it makes sense. If you don't talk about your projects early and often, the odds go up that you are building the wrong thing.

I've done _some_ work to recruit users, but I should have been writing and talking about Paper Audio even before I started the tech work. I could've done what so many do and explained the product with a splash page and worked to develop a user base, so that I'd have users at 'launch', and so that I'd more likely build what users might want. It also would've helped keep me motivated and excited about the project.

### Captcha? Really??

At the last minute before 'launching', I had to add Captcha to the sign up form.
I was getting hundreds of emails sent per day from my server from stupid bots
filling in my email form. It's really annoying, and I still can't understand how
the incentives could be there for anybody to deploy these crappy scripts to just
pollute the internet with garbage. I could've used Auth0 for user management to
avoid this issue, but my simple sign up flow was generally working, so I decided
to make the UX a little worse with the Captcha approach to avoid the abuse.

### The need to ship known bugs & imperfections

This is a tough one. There are _lots_ of known issues. My favorite is a timezone bug: Alexa and Google Home will change to the next day's demo at midnight UTC, while the web app behaves the way one might expect in that it will change at midnight browser time. It turns out it's not quite _that_ easy to get the local time of both Alexa _and_ Google devices. And of course, this is far from the only issue in the project. The perfect is the enemy of the good, and if nobody ever uses your product, the bugs don't matter at all!

If you liked this, consider following me on [Twitter](https://twitter.com/calflegal)!
