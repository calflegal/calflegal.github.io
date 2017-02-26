---
layout: post
title:  "Ember.js (Ember CLI) and Jekyll on GitHub Pages"
date:   2014-12-16
categories: jekyll ember
---
**EDIT:** The easiest way to do this these days is likely to use the [ember-cli addon](https://github.com/poetic/ember-cli-github-pages)

I didn't take great notes throughout this process, though I'm hoping I can help get
some others moving in the right direction for getting ember.js and ember CLI running on github pages, with
a few other notes about getting Jekyll in place alongside ember.

Start by installing ember-cli and creating a new project via `ember new myWebsite`.
The next thing I did was remove the dist folder from the .gitignore file. The reason for this is to
be able to deploy with a single git command...tracking your build folder is a big no-no but this is 
quick and dirty. I recommend the cli addon mentioned in my edit above.

Next, I setup the git origin to point to my username.github.io repo. Then, I added the following alias
to my .aliases file (although `.bash_profile` or elsewhere would certainly work:

{% highlight bash %}
alias pushSite="git subtree push --prefix dist origin master"
{% endhighlight %}

With that in place, the general deployment strategy would be to make changes, `ember build`, git add and
commit, run any tests, then run the alias to deploy to github.

## Adding Jekyll

Github supports Jekyll out of the box for its pages, but since we want ember at our root path, we'll do 
a classic Jekyll installation, without using the github jekyll builds. First, `gem install jekyll`. Then, in the public folder, `jekyll new blog`. I then went into the newly created blog folder and modified  `_config.yml` file to
include: 

{% highlight bash %}
source: .
destination: ../public/blog
baseurl: "/blog"
{% endhighlight %}

With these new additions, we now build our blog via `jekyll build` from our blog folder. This prepares 
the ember /public/blog directory, and we just use the aforementioned process to deploy the whole site.


