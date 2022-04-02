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
<h2>Metropolis (what I'm publishing)</h2>
<div class="wavesurfer" id="metropolis">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>Cloudbounce</h2>
<div class="wavesurfer" id="cloudbounce">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>Landr</h2>
<div class="wavesurfer" id="landr">
<div id="waveform" />
<button id="playpause">Play / Pause</button>
</div>
</div>

<div>
<h2>SoundCloud</h2>
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

<div>
<h2>My Conclusions & Opinions</h2>
</div>
<script src="https://unpkg.com/wavesurfer.js"></script>
<script src="{{site.url}}/assets/js/mastering-page.js" />
