What I’ve learned (so far) building online mini games with elixir and swift

My most recent side project is a little social arcade called Migo Games. You can go check it out in the swift app stores (Mac / iOS): https://apps.apple.com/us/app/migo-games/id6758592333, You can also play one of the games through the web at https://migo.games

It goes without saying that a lot has changed in the age of AI coding. I really can’t say I wrote !any! of the code. Keep in mind the date of publication of this post as well. Whatever I say about AI is likely to be out of date within weeks or months.

I do read the code, well, mostly. I certainly understand its design. I think that’s still really important with AI.

The tech stack of migo games is elixir on phoenix and swift with SpriteKit. That’s really it. The back end runs on fly.io. It’s got a managed postgres db on crunchybridge. One of the things I’m really proud of is the app’s lean binary size. At the time of writing it’s just a few megabytes. I think I added one swift dependency so far, and that’s a phoenix socket client library. I’m old enough to remember Nintendo 64. Mario 64 was like 8 MB, and I think most of it was music. My god is that amazing software. Anyway, I think AI reduces the need for so much bloat if one is mindful, and I think that’s really great.

Elixir has been awesome. It’s been so neat to have the core game unit, the room, exactly match the backend process model. Talk about a good way to scale software. I remember reading a cloudflare post about their Durable Objects that mentioned such an idea. I can’t easily find the link. Anyway, I’m confident the games could be fairly easily scaled because of this match. Then there are all the other benefits of elixir such as the fault tolerance of this model. One room having a problem is not going to crash my whole system. I’m not really qualified to speak to all the cool parts of elixir, but I’ll say I’ve been very happy with my decision to try it. If I need to add admin functionalities or background tasks or anything else, I have all of the BEAM and phoenix features right there waiting for me. I’m happy I didn’t just go with node or bun as would have been the default choice for a guy whose best language is typescript.

I could and maybe should say more about the architecture, but I’ll leave that for some other post.

Also, I would encourage others to target Mac in addition to iOS for a reason you might not expect: build times. The simulators and xcode are really pretty slow. It’s all a lot faster if you're targeting Mac.

In the times before AI, I probably would have principally targeted the web. But in truth, and this is especially true of the iphone, the web has really disappointed me in terms of performance when compared to native. It’s always outdone by native. You can even try this yourself with Migo! Play arrow on the web then go try it on the native iphone version. The cute haptics, the full screen, the animations, it’s really just not close.

Really none of this would have been possible without AI, so really I’m pretty grateful to be building software in this era. There are things I miss about the before times. Coaching clankers isn’t as prone to flow as writing syntax yourself. Oh well.

This isn’t to say that AI has solved everything. All the hardest parts of making successful software are still here. One of them is of course finding users / distribution. The clanker can’t really match my software to people from my repo. Bummer. In fact, there’s so much more software being written now that this problem is actually harder! The apple app count growth in the last year has posted incredible numbers. 

That’s all for now I guess. Give the games a shot. Leave a nice review in the App Stores if you’re up for it. Happy building. Discuss on HN if youd like: