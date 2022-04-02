---
layout: post
title: "Comparing Online Music Mastering Services (e-mastering)"
date: 2022-04-02
---

I'm releasing another song on April 15th. Below you'll find the result of the
mastering of my final mix by a few different services. There are lots of other
comparison write-ups on the internet that compare these services and many
others, so I'll be brief and mostly let you compare the results yourself. Most
parameters were set moderately, to Rock / Pop settings where applicable.

If you like the song, the Spotify pre-save link is [here](https://distrokid.com/hyperfollow/thebingeeffect/shoulder-to-shoulder), and you could
follow me on Spotify [here](https://open.spotify.com/artist/16MSVHbEEVtCo1G9QjyQAs?si=Dsq2677IScyJq1NweDat2g).

I'm loading 320 kpbs mp3s by default for performance, but you can switch to
uncompressed if you'd like.

<label class="form-switch">
<input type="checkbox" id="hi-def">
<i></i>
Use Uncompressed WAVs
</label>

<div>
<h2>Metropolis (what I'm publishing) - mastering done by an engineer at the
studio</h2>
<div class="wavesurfer" id="metropolis">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>Cloudbounce - e-mastering - "Rock / Pop" settings</h2>
<div class="wavesurfer" id="cloudbounce">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>Landr - e-mastering - "Balanced / Medium" settings</h2>
<div class="wavesurfer" id="landr">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>SoundCloud - e-mastering - "Clear Sky @ 73 percent"</h2>
<div class="wavesurfer" id="soundcloud">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>My own simple approach: UA Oxford Inflator -> Apple Adaptive Limiter</h2>
<div class="wavesurfer" id="mine">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>Final Mix / Input (pre-mastering)</h2>
<div class="wavesurfer" id="final">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<h2>My Conclusions & Opinions</h2>
Mastering is a tough thing to do. The "Loudness Wars" make it very easy to
ruin your mixes by trying to be as loud as what's on the radio, etc. It's also a
subtle art -- it may be tough for some to hear differences between these.

My favorite master here is the Metropolis one. However, at around $100 per
track, Metropolis can be somewhat expensive compared to the e-mastering options above, each of which are
a cheap $5-$10 per song at the time of writing.

Of the 3 e-masters, CloudBounce is my favorite, though I find it to be
overly distorted.

I also find the Landr track to be too distorted (listen to the
midranges to more easily sense the distortion).

The SoundCloud master is my least favorite. The midrange and vocal sound tinny
and strange to me.

All 3 e-masters could be changed through their parameters, so don't take these
results to be exhaustive.

I'm also somewhat happy the results of my own attempt at a super simple mastering
approach. Moving forward, I think my process is going to be to use CloudBounce (probably
set to "less loud") compared to my own approach, and then I'll save my final
mixes and bring a professional like those at Metropolis in when I want to make
something that isn't a quick budget single.

Comment on HackerNews, or find me on [Twitter](https://twitter.com/calflegal)

<script src="https://unpkg.com/wavesurfer.js"></script>
<script src="{{site.url}}/assets/js/mastering-page.js" />
