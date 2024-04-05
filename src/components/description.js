import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';

const Description = () => {
    const details = [
        {
            date: "November 26th 2022",
            title: "How To Command Respect ",
            description: `If you're a guy with zero boundaries and suddenly you want to turn
              around and, like, act a certain way, a lot of people will try to put
              you back in that pen and be like, oh, you've changed, man. Like, what
              are you doing? You know? You're not like this. That's not who you are.
              Guys that have let it g...`,
            // fullDescription: `If you're a guy with zero boundaries and suddenly you want to turn
            //   around and, like, act a certain way, a lot of people will try to put
            //   you back in that pen and be like, oh, you've changed, man.`< br / > ` Like, what
            //   are you doing? You know? You're not like this. That's not who you are.
            //   Guys that have let it g...`,
            link: "https://www.youtube.com/embed/_qKpalovltY",

        },
        {
            date: "November 25th 2022",
            title: "Angry? That’s fine.",
            description: `There's no shame. And you turn around and say that someone's pissed
              you off. I don't believe this Stoic crap that a lot of these doofuses
              say cool river, no. Motion. No your favorite businessman can display
              all facets of emotion. The Stoic doofuses are broke, boys. Everything
              for them reverts back t...`,
            link: "https://www.youtube.com/embed/BDlfRt1AGbk",
        },
        {
            date: "November 25th 2022",
            title: "Ice Baths 🥴",
            description: `I did ten minutes in an ice bath. Can you believe that? I did 30
              minutes in an ice bath. I'm gonna have a two minute cold shower. Shit.
              That little boys would brag about where I was from prison, every
              shower is stone cold. You're lucky to get 1 minute a day. I'm
              traumatizing myself with a gym sessio...`,
            link: "https://www.youtube.com/embed/pil_Xq8FWlg",
        },
        {
            date: "November 24th 2022",
            title: "Why Being Overweight is Hard ",
            description: `Probably ten to 15 years of my life. I felt like I'm always doing
              things and that tomorrow will be the day that I can enjoy. I was a fat
              dude, and I always felt like, almost like I was in a cocoon waiting to
              come out as the butterfly. It's fucking like that. Like if you've let
              yourself get to where ...`,
            link: "https://www.youtube.com/embed/6cQiHcfo_04",
        },
        {
            date: "November 24th 2022",
            title: "How They Control Your Thoughts 😳",
            description: `If you control the textbooks, people learn within the framework that
              you want to teach them, and then you can use those figureheads that
              you've created as experts to control the masses. A lot of the guys
              specifically in these, like, research fields, they're fucking taught
              in a specific framework. An...`,
            link: "https://www.youtube.com/embed/w4USnwwfAnA",
        },
        {
            date: "November 24th 2022",
            title: "The Education System is Failing ",
            description: `Education is for. Plebs education system needs a massive reform, and a
              lot of the people going through schools in the west, they're getting
              told that there's, like, fucking 18 different genders. Instead of
              focusing on the shit that matters, they're already being taught to,
              like, push parts of their ...`,
            link: "https://www.youtube.com/embed/Rg3Gso_Nsis",
        },
        {
            date: "November 24th 2022",
            title: "Don’t Go To Business School",
            description: `Didn't need to get a master's in business to make $10 million. No, I
              know the shit that works. I fucking just did it by starting multiple
              businesses and learning along the way. Didn't learn business from a
              professor robot driving a fucking Toyota Corolla. He doesn't know shit
              about business. If he k...`,
            link: "https://www.youtube.com/embed/ZGLHbbNC2xo",
        },
        {
            date: "November 24th 2022",
            title: "How The West Destroys Beauty ",
            description: `The girls are nine out of ten. She looks like a nine out of ten. I
              know a lot of the west, they're just trying to recreate the new like
              beauty standards to include like morals and fucking, like how she
              talks and all that sort of crap because then it's up for debate. Like
              that a four out of ten. She ...`,
            link: "https://www.youtube.com/embed/bje6pqL_YQ4",
        },
        {
            date: "November 22nd 2022",
            title:
                "TikTok Ask a Millionaire Anything (AMA) | Stephen Ronald Bell | Part 3",
            description: `I've got one here that obviously I can't answer, and that is someone
              has asked me how do people smuggle things into prisons? And I still
              have a considerable amount of friends at Woodford, which is in
              Queensland, which is a prison I got out from. So it would be very dumb
              and fucking disrespectful of ...`,
            link: "https://www.youtube.com/embed/mmR5UDVTBZI",
        },

        {
            date: "November 19th 2022",
            title: "What Crypto Guys Are Missing",

            description: `When I say a man of substance, I talk about having a foundation. A
          foundation where if someone confronted them on the street and punched
          them in the face, they're going to release flight back. Doesn't mean
          that they're going to win, but it means they have rules for themselves
          that they won't let oth...`,

            link: "https://www.youtube.com/embed/6nY52qhdaBY",
        },
        {
            date: "November 19th 2022",
            title: "Still a Coward?",

            description: `Let their woman be, like, pretty much assaulted in public. I'm not
              saying some, like, girl that you've known for five minutes or so
              chicken you're on your first date with. I'm talking about your girl.
              Maybe you've been together for, like, one year or so. It's kind of an
              attack on you, just walking a...`,

            link: "https://www.youtube.com/embed/Jycc8DVozVQ",
        },

        {
            date: "November 18th 2022",
            title: "Being Clean Is What?!?",

            description: `It's not gay to be clean. If a girl looks at you and she thinks
              anything other than that you're incredibly clean, but you're actually
              making shit harder for yourself. A clean guy is going to have more
              success than guys who might be more handsome, but he looks like he
              might not be that clean....`,

            link: "https://www.youtube.com/embed/sx7HbFxLXWg",
        },

        {
            date: "November 18th 2022",
            title: "This Only Works With American Chicks",

            description: `Is a very fucking big term. I think that works with American girls.
              They like that toxic dump of a relationship that lasts, like....`,

            link: "https://www.youtube.com/embed/yrZkTA4cuJ4",
        },

        {
            date: "November 18th 2022",
            title: "This Won’t Make You Successful",

            description: `My trick to this is that I don't wank at all. Just so fucking stupid.
      Like, no dude that I've ever met who's worth anything tells me I'm on
      no fab. Dude will be 19 years old. I just want to rub one out. And
      people like, oh, man, you know you can't do that. Just got to, like,
      not nut. Do I say to wat...`,

            link: "https://www.youtube.com/embed/eyMwDSdqzIA",
        },

        {
            date: "November 17th 2022",
            title: "You Need To Be a Narcissist",

            description: `Narcissism in general, I think is necessary. Because if you're
      narcissistic to a point, you're going to take care of your body,
      you're going to take care of those fashion. I think there's very
      little downside to being confident. The difference between confident
      and cocky can be drastic. To me, confi...`,

            link: "https://www.youtube.com/embed/4Pkg238h4q0",
        },

        {
            date: "November 17th 2022",
            title: "Are You Pretending? ",

            description: `You need to build that foundational. Fitness. You need to work on your
      boundaries with other people, women and men. Guys need to have lines
      that people can't cross with themselves. Guys will talk a big game
      online or talk a lot of, like, general shit, but then they just let
      people just walk all over...`,

            link: "https://www.youtube.com/embed/IlpkoLsIYHE",
        },

        {
            date: "November 17th 2022",
            title: "It&#39;s not what it seems",

            description: ` Just because someone takes drugs or just because someone has passed or
      whatever, that doesn't really mean it's like a worthless you have to
      be able to see sort of inside people. I think that I'm quite good at
      that. And that has taken a lot of years, I guess, to develop....`,

            link: "https://www.youtube.com/embed/IDyr_2dtndw",
        },

        {
            date: "November 17th 2022",
            title: "Why You Hate Money",

            description: ` I don't get angry at money because I have a lot of it. But if I have
      none, I know that when I used to have fuck all, I'd see the guy in the
      Lambo and be like, oh, look at this dickhead. He must have a little it
      comes from a damaged position because I didn't have one. Now I see
      someone in the Lamborg...`,

            link: "https://www.youtube.com/embed/2nADw6no1aU",
        },

        {
            date: "November 17th 2022",
            title: "A Big Problem 😳",

            description: `Gambling. I considered a massive problem specifically for younger guys
      coming up in Australia. They make considerable amount of money on
      taxes. So it's advertised in sport, through sports betting pubs where
      you go to drink. Everyone on every corner has slot machines, you know,
      pocket machines, gambl...`,

            link: "https://www.youtube.com/embed/prY8IJ-1_-s",
        },

        {
            date: "November 16th 2022",
            title: "Imposter Syndrome and Money ",

            description: ` No one wants to be like that. You know, I've been to Dubai many times,
      and I've seen a lot of the guys that do have a lot of money. Some of
      them have a massive amount of inherited money. They just don't have
      that edge to them. And I think it's almost like they try to over
      compensate and try to make ...`,

            link: "https://www.youtube.com/embed/FNaJBGSqMEA",
        },

        {
            date: "November 15th 2022",
            title: "Guys Fail At This",

            description: ` Way to be a man. As a direct me, I think a lot of guys now, they're
      very passive. They're passive with what they want. They don't just
      express what they want, even with a woman. They think that if they do
      fucking, like, 59 tasks that they're going to get laid....`,

            link: "https://www.youtube.com/embed/knTrrVlZDoM",
        },

        {
            date: "November 15th 2022",
            title:
                "Prison, Drugs And The Path To Success | Mike Vestil &amp;amp; Stephen Ronald Bell",

            description: `Great to be here, Mark. It's good to see you again. So I'm really
      excited because I was looking at your TikTok and your TikTok has
      absolutely blown up. And the main concepts are just gambling, sex,
      drugs and all those things. Why do you think that you're starting to
      actually I've always sold the bes...`,

            link: "https://www.youtube.com/embed/Q6A7H6FEdQg",
        },

        {
            date: "November 14th 2022",
            title: "Drug Addiction In The Rap Industry",

            description: `Addicts, scum of the earth. Guys see these rappers and you don't
      realize that these tatted up kicks. Anyone can get a codeine addiction
      and fucking take like benzos and things like that and, you know, just
      hop around a lot of these guys can't even fucking dress themselves in
      the morning. Do you? Hav...`,

            link: "https://www.youtube.com/embed/oVgc8JLMzHM",
        },

        {
            date: "November 13th 2022",
            title: "Why Feminism is So Strong",

            description: `They get women to go to work. They double the workforce. And not only
      that, they make wages more competitive. The markets essentially
      doubled. And then they bring mass migration in, and then they fucking
      cut the wages again because it's more competitive for the same job.
      And then they globalize. So ...`,

            link: "https://www.youtube.com/embed/nZbx8zon0Gw",
        },

        {
            date: "November 13th 2022",
            title: "Hating Women Is Profitable",

            description: `Guys are just thought to be fucking idiots, holding all these fucking,
      like, bad feelings and feel will and pissing a bunch of women off.
      Short of a few content creators, people don't do that shit. They do it
      because it's like a strategy to get attention from themselves. I don't
      want to see women ge...`,

            link: "https://www.youtube.com/embed/dnXpcAr80mI",
        },

        {
            date: "November 13th 2022",
            title: "Still A Coward?",

            description: ` Fees in general. Like, I put something on TikTok where I think that
      most guys if a guy confronted him and punched him in the face, that be
      like, brain to even fucking throw a punch back. And then most people
      like, oh, no, you wouldn't fight back, but it's too dangerous. Then
      pull a knife out and jus...`,

            link: "https://www.youtube.com/embed/Ihqw8bx3tAM",
        },

        {
            date: "November 13th 2022",
            title: "Life On Parole",

            description: ` Had like, four years parole GPS bracelet on my leg. I had a massive
      curfew. I couldn't go out. I couldn't associate with anyone who I'd
      associated with in the past. That means even talking to, like, jumping
      on Instagram and talking about any of that shit, because parole would
      have breached me doing ...`,

            link: "https://www.youtube.com/embed/fdeMjSVTmcA",
        },

        {
            date: "November 12th 2022",
            title: "It’s Coming For You Also",

            description: `I know darkness. I know that it fucking exists. I know that for men,
      it's a massive thing. They play a very pretend life of just
      distractions that don't understand that it's going to catch up with
      them when they're old. They think that at 40 or 50 that is going to be
      able to distract away the pain a...`,

            link: "https://www.youtube.com/embed/LuWuz8qPeNY",
        },

        {
            date: "November 12th 2022",
            title: "Are You Hiding Your Own feelings?",

            description: `That just died, but, like, yeah, you just need to be your fucking
      stoic, Alpha. That's fucking pretend. Just because they don't talk
      about it doesn't mean that it doesn't exist. If a guy can't come to
      you and talk to you about his problems, like, you gotta really wonder
      if you're, like, even a fucki...`,

            link: "https://www.youtube.com/embed/PuhzG6VnioU",
        },

        {
            date: "November 11th 2022",
            title: "These Beliefs are Holding You Back",

            description: `See a woman, you think that like, oh, no, she needs someone to protect
      her. She doesn't show the police. For a lot of those old beliefs that
      you have, they don't really exist anymore. A lot has changed. So now
      you just refine yourself down to be like, I only have sex orphan, as
      though you're like so...`,

            link: "https://www.youtube.com/embed/xI8JywW2H8o",
        },

        {
            date: "November 11th 2022",
            title: "Fighting In Prison",

            description: ` Go to prison and you learn very quickly what people like. There's
      nowhere to hide. Everyone's aggressive. Everyone will fight. It's full
      of fucking alpha males. Even if you're for kickboxing king of the
      world, you still get your face smashed in. What does it matter if you
      can fight when you're in a ...`,

            link: "https://www.youtube.com/embed/PUEwqE80i7I",
        },

        {
            date: "November 10th 2022",
            title: "Women Are Lucky",

            description: `A lot of these sex only retards they don't understand. Like a woman's
      input her intuition. Women are very perceptive. She can replenish you
      with energy. It's like luck. If you have good women behind you, you're
      going to be a lot luckier in love. And understand that the feminine
      energy itself is heal...,`,

            link: "https://www.youtube.com/embed/TApyVuvDzrQ",
        },

        {
            date: "November 10th 2022",
            title: "The End Is Coming",

            description: ` That is in itself coming forever. Some people just meet it sooner than
      others. Just before you're about to die. I know that she runs for you,
      but some people don't live their life as though they're going to do
      it. They're highlight reel when they die. It's going to be fucking
      garbage. I've had many ...`,

            link: "https://www.youtube.com/embed/sOrJEzi2mH0",
        },

        {
            date: "November 10th 2022",
            title: "Don’t Buy The Hype ",

            description: ` Part, I think, for guys is they see a lot of these anomalies who are
      flexing Lamborghinis at 24, and then they're like, I'm a failure
      because I can't afford this. But it's only a very element. And a lot
      of the time, these, like, rentals that's their business to get your
      attention and then sell your ...`,

            link: "https://www.youtube.com/embed/RBLNDitu6SM",
        },

        {
            date: "November 10th 2022",
            title: "Negativity Is Ruining You ",

            description: ` Guys watch all these doom and gloom porn, and then they don't
      understand why they're no fun to be around, because they're taking in
      a lot of negative content, and then it shows in their results. If
      you're rolling in the mud all the time, you're never going to be up in
      the stars. It's just not possib...`,

            link: "https://www.youtube.com/embed/oXymXOa7s3o",
        },

        {
            date: "November 5th 2022",
            title: "What Are You Looking At?",

            description: `If you think you're going to intimidate people with the eye contact,
      that's a quick way to get by the massive problems. Eye contact is very
      important because it shows that you have something in you. Like, a lot
      of guys don't want to look people in the way because they just don't
      really want any atte...`,

            link: "https://www.youtube.com/embed/2rd95o0Hj0g",
        },

        {
            date: "November 5th 2022",
            title: "Net worth Revealed ",

            description: `Rich on my own. And as such, I can pass all this information on to
      you. Maybe you look at it and you're like, yeah, well, I don't like
      this delivery. That's fine. You don't have to like the delivery. But I
      understand that the message is fucking unbreakable. I like debt
      because I like longevity. It's...`,

            link: "https://www.youtube.com/embed/BCKSdWubah0",
        },

        {
            date: "November 5th 2022",
            title: "Afraid of Eye Contact?",

            description: `If you find, like, your eye contacts very good with a woman, you often
      find, like, when you do have sex and things like that, that it is
      fucking pretty great. Connection is very strong. A lot of guys
      completely turned off from that because they get all the dates from
      Tinder to afraid to fucking, lik...`,

            link: "https://www.youtube.com/embed/9S91MbAzb1k",
        },

        {
            date: "November 5th 2022",
            title: "Guys who Hate Women are Actually…",

            description: `A lot of these guys will say, I hate women, but they're obsessed with
      them. They're not guys that I could be like, yeah, you can watch my
      girlfriend for five minutes. They're not trustworthy around women.
      They pretend to hate them, but even if they had the smallest droplet
      of attention from one, the...`,

            link: "https://www.youtube.com/embed/oMPJVMN2WhQ",
        },

        {
            date: "November 4th 2022",
            title: "This happens in Prison",

            description: `There are a lot of snitches in prison. Sorry. Dude once had a story
      come out that he was a pedophile and then he got jumped by like eight
      dudes. Dudes were jumping off like the landing to jump on the guy's
      head. He was possibly dead. He was fucked up pretty much I think it
      scraped off the floor. Was...`,

            link: "https://www.youtube.com/embed/fdgkmbhq99g",
        },

        {
            date: "November 4th 2022",
            title: "The Truth about being Fake",

            description: `I know that you walk around and you're extremely faith that I know
      that if I just gave you a little scratch, that there's nothing fucking
      beyond that exterior. A lot of you guys are taught that all your value
      is just on the outside. You don't understand that your values all
      internal. All the shit th...`,

            link: "https://www.youtube.com/embed/edy6ujFMBsw",
        },

        {
            date: "November 4th 2022",
            title: "The Dark Side of Crypto Trading",

            description: ` There's a lot of these fucking dorks that do crypto now and tell
      everyone that they're great traders, but they actually only got rich,
      like shilling, like femax links and all that sort of stuff. So they
      got rich because their followers got a strike and they get like a
      sponsorship deal from the margi...`,

            link: "https://www.youtube.com/embed/xnXG8h9aUsU",
        },

        {
            date: "November 4th 2022",
            title: "This is Ruining Australia",

            description: `Gambling is a massive fucking problem to Australian citizens. Per
      person gamble more than citizens. In Las Vegas, the gambling capital
      of the world, gambling is very heavily advertised, advertised a lot
      with sport pubs, like, on every corner has the poker machines, like
      pokey slot machines. And then...`,

            link: "https://www.youtube.com/embed/JXprC35Gbd8",
        },

        {
            date: "November 4th 2022",
            title: "The Danger of Rappers Like 6ix9ine",

            description: `Watch dorks like Six Nine and all these rapping retards, and you
      think, Yup, that's what a man. He's got this, he's got that. You don't
      understand that it's all the time. Yes, they have guys around them
      that are fucking dangerous people, but they're not the artists
      themselves. Very concept of a dork...`,

            link: "https://www.youtube.com/embed/XCn5RCMpcI8",
        },

        {
            date: "November 4th 2022",
            title: "The Gambler’s Lament",

            description: `Where we used to go to the casino and I would just fucking blow all my
      money. Whatever I bought, I would spend. I remember I was leaving the
      casino and I scambled fucking like 15K. Been there for like 10 hours.
      The age is to lose this money because I was up and I was down in there
      at the point where...`,

            link: "https://www.youtube.com/embed/ZcgLlkkHBiY",
        },

        {
            date: "November 3rd 2022",
            title: "You think your boxing will help? ",

            description: `Street, you get seconds, not some fucking match where you get a boxing
      gloves on to go and fighting garbage. If you walk outside and there's
      someone after you, doesn't matter if you're fucking like Lloyd
      Mayweather, that's irrelevant because the dude's just gonna get you
      like that. You're not going ...`,

            link: "https://www.youtube.com/embed/TkeDr0GoiiY",
        },

        {
            date: "November 3rd 2022",
            title: "Are You a Coward?",

            description: `If someone fucking punched you in the face on the street, you're going
      to fight back. And if you're not at that level, I think you've got a
      lot to fucking learn about life. Like a lot of guys, I think that if a
      guy confronted them and, like, even pushed them, they wouldn't fight
      back. Pretty fucking...`,

            link: "https://www.youtube.com/embed/DueV2q-2Qlc",
        },

        {
            date: "November 1st 2022",
            title: "Heroin Vs Meth",

            description: `Heroin is very destructive in that it's addictive. But guys on heroin
      don't kill people as often. They're more like smacked out in the
      alley. They can't really do shit like they're passed out. They're
      destructive in that they can transmit a lot of diseases. Yes. If
      they're sharing needles and transm...`,

            link: "https://www.youtube.com/embed/HGtZbHx-P-U",
        },

        {
            date: "October 31st 2022",
            title: "Why Meth is so dangerous",

            description: `Seem to do the most damage would be amphetamines. So meth ice in
      Australia. But it does something to the brain where if you're
      predisposed to, like, schizophrenia or any sort of major mental
      illness that speeds it up, meth itself creates a lot of paranoia.
      Seems meth in general takes away a lot of t...`,

            link: "https://www.youtube.com/embed/6aPXeCiLoYA",
        },

        {
            date: "October 30th 2022",
            title: "Could have been Kil",

            description: `I had a guy and his brother confronted me once, tried to kill me, said
      to people that were going to murder me. And actually, they assaulted
      me. And one of them had a gun, could have killed me and tried to guide
      me down to the car park where I assumed that some bad shit was going
      to happen. But I for...`,

            link: "https://www.youtube.com/embed/FmUwPqLsCsA",
        },

        {
            date: "October 30th 2022",
            title: "Don’t use your phone outside",

            description: `I don't believe in using your phone. Like as soon as you step outside,
      I think that you only use it for a brief amount of time specifically
      for me, because I wear a lot of jewelry. I would never want someone to
      like, sneak up on me and take my shit. I would at least like to know
      that if they're goin...`,

            link: "https://www.youtube.com/embed/G8uw4K7wwms",
        },

        {
            date: "October 29th 2022",
            title: "What it’s like getting out of Prison",

            description: ` Did you find it difficult to rehabilitate into society? Yes. I
      remember when I first went to the shopping center and I remember just
      seeing so many people in so many colours. And so my brain was
      overloaded. I was fucking really tired. I was walking around and I was
      like I was in fucking slow motion....`,

            link: "https://www.youtube.com/embed/PQumNGCLuBw",
        },

        {
            date: "October 29th 2022",
            title: "What’s better than status?",

            description: `Again, status is not substance. You know, you could be known as the
      guy who has fucking 500 Ferraris and then you do some fucking, like,
      weave that inherited a bunch of money from your debt, but no one
      respects you. If you walk into prison for the first time in the unit
      and people that matter run up...`,

            link: "https://www.youtube.com/embed/yHsS8DlxG3s",
        },

        {
            date: "October 27th 2022",
            title: "Understand this about tattoos",

            description: `Just cause someone's got tattoos and crap like that, that doesn't mean
      that they're a different person. Like, if you throw me in the ring,
      I'm covered in tattoos, I still get shit bashed out of me by someone
      that can fight. Everyone still bleeds the same. Everyone still watch
      the same person. I used...`,

            link: "https://www.youtube.com/embed/cY5zxouIvkg",
        },

        {
            date: "October 27th 2022",
            title: "Do this around Gangsters",

            description: `If you're an average Joe and you're around criminals, like actual
      fucking active criminals, understand that if you're fucking rude to
      them, they will attack you because they have to fucking maintain their
      reputation, even if that means fucking stabbing you. So, yeah, you
      just be respectful. Doesn't ...`,

            link: "https://www.youtube.com/embed/g8UiMKUMBdU",
        },

        {
            date: "October 25th 2022",
            title: "You don’t understand politics 😳",

            description: `A lot of people don't understand that with war and things like that
      and why, like political matters and that we as people only see at most
      like one or 2% of the chess board. A lot of guys think that just
      because they have some information in their head that it's valuable
      and it's not like a lot of w...`,

            link: "https://www.youtube.com/embed/qcMBbiBWhDs",
        },

        {
            date: "October 25th 2022",
            title:
                "Ask a Millionaire Anything (AMA) | Stephen Ronald Bell | Crime, Prison and Drugs | Part",

            description: `Ice and crypto who rapidly became rich and are struggling to adjust.
      What do you recommend to them? What advice? I think that a lot of the
      stuff that happens to these crypto guys is they get imposter syndrome,
      which means that they have it's imposter syndrome, but it's also
      sudden wealth syndrome. I...`,

            link: "https://www.youtube.com/embed/I60SF3T-ptc",
        },

        {
            date: "October 24th 2022",
            title: 'Why most relationships fail | Interview with Arno About|{" "}',

            description: `If I pulled 100 dudes off the street, I know nine guys don't have any
      boundaries at all. I can just keep pushing them, pushing and pushing
      and pushing them, and nothing's going to fucking happen. They're not
      really taught that they should have, like, a firm boundaries or rules
      or lines that people c...`,

            link: "https://www.youtube.com/embed/Q_gLJVp_gYA",
        },

        {
            date: "October 23rd 2022",
            title:
                "Ask a Millionaire Anything (AMA) | Stephen Ronald Bell | Money, Wom &amp;amp; Business | Part",

            description: `All right, lads, we're back again. And I've been in Dubai for the last
      week so I've had a harder time looking at apartments to get out of
      this hotel. But it's in a junior suite. It's one of the probably the
      nicest hotel in Warsaw. It's comfortable. There's a spa downstairs. I
      like the pool, I like t...`,

            link: "https://www.youtube.com/embed/wrAOAc-eqB4",
        },

        {
            date: "October 21st 2022",
            title:
                'Don’t listen to THIS red pill lie 🤐| interview with Arno About|{" "}',

            description: `I think that there's a massive amount of things women have to offer
      work, stressful on the outside, you've got people trying to take money
      off you're, doing business with people, they are trying to put you in
      bad deals. And then you come home and you've got your girl there and
      she's making food. She...`,

            link: "https://www.youtube.com/embed/LD-n_KEfkgc",
        },

        {
            date: "October 20th 2022",
            title: "Why you NEED to get attention 👀 ",

            description: `A lot of guys, when they are powerful, they want to spread a narrative
      that you don't want power. You just want to be the gray man that no
      one knows because then you have no responsibility to anyone. No,
      there's just so many benefits to people knowing you as soon as you
      walk outside the door. Even i...`,

            link: "https://www.youtube.com/embed/PfyCLA-c2KE",
        },

        {
            date: "October 19th 2022",
            title: "This is how they want YOU to think ",

            description: `If I'm rich. It's better for me to tell you that you don't want to be
      rich. It's too much responsibility, it's too much pressure, it's too
      difficult. Don't do it. It's not enjoyable because then you go but I
      want that. So I'll just be a head on. I'll be a worker. Why would I
      ever want to be anything...`,

            link: "https://www.youtube.com/embed/U0Rzkd3SeFY",
        },

        {
            date: "October 19th 2022",
            title: "How your network can make you Rich",

            description: `Start to get exposed to people who have some sort of money to do what
      they do, learn what they did and copy it. I see a lot of dudes now,
      and they've got all these ideas and these concepts for businesses, and
      some of them are complicated as far you a lot of the time can get rich
      just by copying anot...`,

            link: "https://www.youtube.com/embed/9lA9q__Umzw",
        },

        {
            date: "October 18th 2022",
            title: "Master this 1 thing in your 20’s 🤫",

            description: `A lot of guys now, they don't really understand the concept of
      listening. I just think I need to fucking get what I have to say out
      ASAP. And what they have to say is, for the most part, complete shit.
      You will ask them straight out why they just said that, and it will be
      some shit that they read on...`,

            link: "https://www.youtube.com/embed/CAXD8b5yXGQ",
        },

        {
            date: "October 17th 2022",
            title: "Why being unknown is an advantage 💪 ",

            description: `It's somewhat of a strength to be an unknown force. You don't really
      have as much of the expectations. When you're a complete unknown
      person. It's not really valuable for people with an audience to attack
      you. Even if you say and do dumb things, it's not really going to be
      punished. So you can affor...`,

            link: "https://www.youtube.com/embed/QWFv0aud1S8",
        },

        {
            date: "October 16th 2022",
            title: "How I got to understand myself ",

            description: `You know, I only learned from failing. I didn't fucking, like, have
      someone sit me down and be like, this is the way that the world is. I
      was in eight schools I've picked on every day. And Psoriasis. From
      here, my fucking hair my skull would be fucking on fire if I had
      nipples over my head. Kids com...`,

            link: "https://www.youtube.com/embed/qZQE4ZszJYE",
        },

        {
            date: "October 16th 2022",
            title: "Why I sold dope ",

            description: `If someone had offered you a free education instead of selling dope,
      would you have taken it? No. Everything that I've learned was from
      selling dope. Everything that I learned that had value was from solemn
      dope. Even before I was in the army, it only prepared me for Solomon
      dope. I didn't know if I...`,

            link: "https://www.youtube.com/embed/Bjgk8xlTL14",
        },

        {
            date: "October 16th 2022",
            title: "Why you can’t trust a stoic 😳 ",

            description: `I don't need to fucking act like the Terminator because I know exactly
      what I can do. I know what I've done. If I get fucking push to the
      limit, I know that I can react, I can retaliate, I can do anything. I
      think a lot of problems with guys is they don't know themselves about
      fucking, like, primal ...`,

            link: "https://www.youtube.com/embed/PtdCTw9frUk",
        },

        {
            date: "October 15th 2022",
            title: "How weird fetishes form ",

            description: `Duck triad traits are like, the icing on the cake. The final showing
      of the man who can show his full range of emotions. A guy who accepts
      that he has, like, an evil side. Sometimes it just wants to do shit
      that might not morally be right. I faced that in myself. I know that I
      have, like, a fucking ...`,

            link: "https://www.youtube.com/embed/7uU-Q2icGMA",
        },

        {
            date: "October 14th 2022",
            title: "Don’t pick a side | millionaire explains | ",

            description: ` Don't ever commit to a cause you cannot directly profit. It's better
      to never pick one side, especially if it's controversial. Whereas when
      people get weaponized into these causes, they're getting angry,
      they're getting pissed off, they're feeling like it's sort of an us
      versus them mentality. They'...`,

            link: "https://www.youtube.com/embed/bLWFOnJYXGg",
        },

        {
            date: "October 14th 2022",
            title: "Don’t be a Robot ",

            description: `It's not about being some fucking scary terminator. It's not what life
      as a man is about. It's about being able to show the full spectrum of
      emotions men love as well. Like, they love women, they love their
      friends, they love their family, and they love their fucking kids. You
      think that man is like...`,

            link: "https://www.youtube.com/embed/VD9-xR39HKs",
        },

        {
            date: "October 13th 2022",
            title: "Stop Pretending",

            description: ` The girls like it. So I'm just gonna act like I'm a fucking thug. And
      a lot of you are just fucking spineless, you know that? If a real
      gangster confronted you, you'd shit your pants or you're not profiting
      off it. You're laughing at some fucking thing that you don't have. So
      you get a reputation as...`,

            link: "https://www.youtube.com/embed/2oOs7ODLTJ4",
        },

        {
            date: "October 13th 2022",
            title: "Why most guys will never succeed🤦‍♂️ ",

            description: ` To each other as competition. And if I help him up, like, who's going
      to help me out? You know, they don't really understand the concept of
      helping each other up. And then when one gets higher, they pull the
      other up. And then maybe you go a bit higher, and then you pull your
      friend up. And that's h...`,

            link: "https://www.youtube.com/embed/6MerZ2TwPNA",
        },

        {
            date: "October 12th 2022",
            title: "This emotion can get you k*lled ",

            description: `If I don't like someone, I don't follow what they do. I don't look at
      what they do. I don't give them any of my energy. I don't give them
      any of my time. I don't fucking think about them. I just don't like
      them. But if I was to be envious of someone, I would follow what they
      do and look at it and fu...`,

            link: "https://www.youtube.com/embed/AfJ8z9xCmAI",
        },

        {
            date: "October 8th 2022",
            title: "Don’t let them lie to you about this",

            description: `It's not about getting from here to here. You have to go slowly. I'm
      not one of these guys that's going to jump on here and say that if you
      watch my shit that you'll just be able to go from a four to 40. A lot
      of that stuff is just guys that are internet marketers that don't
      really if I could have a...`,

            link: "https://www.youtube.com/embed/yjn0XkfWCLU",
        },

        {
            date: "October 7th 2022",
            title: "Self-reflection is Poison 🤒",

            description: `You're not meant to reflect on your life unless you've lived a life
      worth reflecting on. Most guys haven't until they're probably 40, 50,
      and then they start to look back and be like, oh yeah, it's good to
      have some reflection. Too much reflection will derail you because it
      will encourage you to not...`,

            link: "https://www.youtube.com/embed/eHqRwsbRLCU",
        },

        {
            date: "October 6th 2022",
            title: "Relationships in the West🤦‍♂️🇦🇺 ",

            description: `If you're with a girl and you're like, oh, you're right, we've been
      seeing each other for a month or something, why don't you write me a
      letter of how you feel about me? That would be quite rare like that. A
      chick would even be able to do that. You don't understand, like, how
      damaged they are and ho...`,

            link: "https://www.youtube.com/embed/r4mCvxmkbIc",
        },

        {
            date: "October 5th 2022",
            title: "The Biggest Drug in the West 😪 ",

            description: `They're very good at refining the drugs and then pushing it to the
      masses. And sex is a way to get that drug through to people because
      sex sells extremely well. But the problem with that is sex is only
      part of a relationship. You think that that's just everything and the
      motions and things a lot of ...`,

            link: "https://www.youtube.com/embed/wiOAJDqBOgg",
        },

        {
            date: "October 3rd 2022",
            title: "The Biggest Flex a man can have",

            description: `So I have about fifteen k euro that I'll be spending on coats here.
      I'm going to get a few made up for winter and then I'm just going to
      fucking enjoy myself and be warm as fuck and just flex and dunk on
      everyone....`,

            link: "https://www.youtube.com/embed/6zm_7krUN88",
        },

        {
            date: "October 1st 2022",
            title: "How they enslaved you 😳 ",

            description: `What's happening is a product with capitalism. And it's not like a
      monster. It's very large corporations that have joined together to
      monopolize people like cattle. They're birthing citizens just to
      extract from them. It's beneficial to keep them fat and sick. It's
      beneficial to keep them dumb. It's...`,

            link: "https://www.youtube.com/embed/9bV6OzsGO6E",
        },

        {
            date: "September 30th 2022",
            title:
                "Multi-millionaire reveals what&amp;#39;s missing in the modern man Part 1",

            description: `Alright lads, we're back again. So where I'm up to today? It's
      probably not going to be a very long video because I'm in this because
      I'm heading out to get some more fur coats. I'm going to get a big
      jacket. My plan is to sit in Warsaw for winter and just fucking have
      the biggest jacket here. So I ...`,

            link: "https://www.youtube.com/embed/Aj3nJymFm6c",
        },

        {
            date: "September 28th 2022",
            title: "Caring less will…🙄 ",

            description: `A lot of you treat life like it's a video game. It's just meant to be
      like shit. That you just meant to enjoy every second of it's. Not a
      lot of the shit, as a man, is about duty. You just can't take the
      punch in the face. You can't take the delays. You can't take the
      longterm thinking. You just thi...`,

            link: "https://www.youtube.com/embed/gzYr0TNLpUQ",
        },

        {
            date: "September 27th 2022",
            title: "Something you must understand ",

            description: `I've done all the fuck boy shit. I've done everything that I say to
      you not to do. I've done the gangster shit, I've done the drug
      dealing, I've done the fast money, I've done having dozens of girls
      all the time. And I'm telling you, it's fucking very hollow. If you
      think that you're going to run ar...`,

            link: "https://www.youtube.com/embed/mDXs-Q3q9wI",
        },

        {
            date: "September 26th 2022",
            title: "Why some men hate women 👀 ",

            description: `See, a lot of these guys will say, I hate women, but they're obsessed
      with them. They're not guys that I could be like, yeah, you can watch
      my girlfriend for five minutes. They're not trustworthy around women.
      They pretend to hate them, but even if they had the smallest droplet
      of attention from one...`,

            link: "https://www.youtube.com/embed/dPOkAWRv3Ck",
        },

        {
            date: "September 25th 2022",
            title: "How a rapper is MADE 😳 ",

            description: `You watch dorks like 69 and all these rapping retards and you think,
      yep, that's what a man is. Why? He's got this, he's got that. You
      don't understand that it's all pretend. Yes, they have guys around
      them that are fucking dangerous, but they're not the artists
      themselves. Very concept that a dork ...`,

            link: "https://www.youtube.com/embed/6hwryTr4HH4",
        },

        {
            date: "September 24th 2022",
            title: "Don’t believe the lies of the Wealthy!",

            description: `I know wealthy people, and they run funds in the States. They live
      like fucking Warren Buffett. The house is extremely basic. Everything
      looks fucking normal. So their investors are like, oh, yeah, this guy
      is just a humble dude. And then in fucking Monaco, they have massive
      resorts, yachts, ships t...`,

            link: "https://www.youtube.com/embed/7QfDUdy0Zi4",
        },

        {
            date: "September 23rd 2022",
            title: "The TRUTH on what it takes to be a M",

            description: `All right, lads, we're back again. And I've got something quite
      fucking different this time. This is going to be an observation that
      I've made that I expect to look back on in 1020 years time, and that
      it's will be playing out in real time. Because I can see that it's
      playing out in a much slower wa...`,

            link: "https://www.youtube.com/embed/zXldwr7RgA8",
        },

        {
            date: "September 22nd 2022",
            title: "NOFAP is a SCAM 😂",

            description: `My trick to this is that I don't wank at all. Just so fucking stupid.
      Like, no dude that I've ever met who's worth anything tells me, oh,
      yeah, I'm on no. Fat dude will be 19 years old. I just want to, you
      know, rub one out, and people are like, oh, man. You know, you can't
      do that. You've got to, l...`,

            link: "https://www.youtube.com/embed/eAcNw6li9EE",
        },

        {
            date: "September 22nd 2022",
            title: "Prison, Women, Masculinity | Your Questions Answered Part 2 ",

            description: `Being a man, actually. Let's go one more. What would I do if I
      discovered my business partner was a liability? It's a good point. And
      I have had that fucking many times in my my life. I have realized
      alive. Fucking friends. People that have done business with have
      become massive liabilities. And at ...`,

            link: "https://www.youtube.com/embed/HMyHD9tOt0c",
        },

        {
            date: "September 21st 2022",
            title: "Prison, Women, Masculinity | Your Questions Answered Part 1 |",

            description: `Alright lads, we're back again. It's fucking night time here. But
      figure out, get on, smack out some of these Q and A's that I received
      some of these questions. Some of them are fucking good questions. So
      I'm actually looking for forward to fucking giving my take on them. It
      is always just going to ...`,

            link: "https://www.youtube.com/embed/poeCy-lPdLM",
        },

        {
            date: "September 20th 2022",
            title: "Wim Hof is for losers! ",

            description: `Oh, I did ten minutes in an ice bath. Oh, can you believe that? I did
      30 minutes in an ice bath. I meant to have a two minute cold shower.
      Shit that little boys would rather have. Where I was from prison,
      every shower is stonecog. You're lucky to get 1 minute a day. Oh, I'm
      traumatizing myself with ..`,

            link: "https://www.youtube.com/embed/8qe0_E3gI28",
        },

        {
            date: "September 20th 2022",
            title:
                "Personal Hygiene for MEN | What your father should have taught you ",

            description: `Alright guys, here we are again and I'm going to break into one today
      that's fucking pretty basic. But I know that a lot of guys just don't
      seem to fucking understand this. And the reason I'm getting into it is
      I don't around the gym, I've noticed it with guys. I've heard women
      complaining about it....`,

            link: "https://www.youtube.com/embed/N6lCbbUkzz8",
        },

        {
            date: "September 19th 2022",
            title: "Hygiene is for who?!? ",

            description: `It's not gay to be clean. If a girl looks at you and she thinks
      anything other than that you're incredibly clean, you're actually
      making shit harder for yourself. ...`,

            link: "https://www.youtube.com/embed/A-sf6jl7ymg",
        },

        {
            date: "September 19th 2022",
            title: "Robbed in Thailand with a mach",

            description: `All right? This is a story that happened to me in fucking Copenhageng,
      Thailand. And to start a F, fucking definitely lost some sighs. I got
      another week till I can get back in the gym. But we'll get it all, all
      back. I was in Copenhang for the full moon party. I had flown my
      fucking ex over to come...`,

            link: "https://www.youtube.com/embed/8K7w19R0NiQ",
        },

        {
            date: "September 18th 2022",
            title: "Why male celebrities are bad with women",

            description: `A lot of these athletes and rappers and that they are just thirsty beta males they just have money so you think that these rappers
      athletes are these alpha chads? A lot of them are just fit nerds that
      have fallen into a lot of money so of course women like them because
      they're very loose with their ...`,

            link: "https://www.youtube.com/embed/VcGI76ibv-g",
        },

        {
            date: "September 18th 2022",
            title:
                "Europe is in Trouble | Millionaire on European energy crisis and the future of crypto",

            description: `Alright guys, I'm gonna give my take on the macro crypto and where I
      see things specifically around Europe. I'll also go into gold and
      silver stocks, maybe even property later on which you'll be fucking
      there. Be a bit interesting, interesting bit different than probably
      what you used to seeing. Who...`,

            link: "https://www.youtube.com/embed/4cZXzlV5Fks",
        },

        {
            date: "September 17th 2022",
            title:
                "Multi-millionaire explains Power Dynamics | What your father should have taught you",

            description: `All right, guys, we're back again, and we're still in this fucking
      Sweet and Warsaw. But I looked at apartments the other day, and I'm
      expecting to get something in the next couple of weeks. So the quality
      of these fucking videos will definitely be on the improve. But for
      now, I'm just dropping all ...`,

            link: "https://www.youtube.com/embed/Rs0Mp8TNeaw",
        },

        {
            date: "September 16th 2022",
            title: "Europe is in trouble | multi-millionaire explains",

            description: `Europe's gonna get smashed. If the war continues through next year,
      it's going to be a lot of consequences. And there may be desperate
      moves to escalate the war. Who knows? I mean, how much pain can you
      endure before you say, well, fuck it, let's make a move? May not be a
      high probability chance, bu..`,

            link: "https://www.youtube.com/embed/U-VH4Xyv1Gk",
        },

        {
            date: "September 15th 2022",
            title: "Millionaire reveals his TOP investment picks #crypto #stocks",

            description: `Alright guys, I'm gonna give my best investments for the next two
      years based on my own knowledge, my experience. I'm going to give what
      I think will be the best return from, let's say ten today through till
      the end of 2024. So let's say maybe 27, 28 months from now. Yeah,
      we'll look back and we'll ...`,

            link: "https://www.youtube.com/embed/Vej46mEjx4k",
        },

        {
            date: "September 15th 2022",
            title: "MGTOW are WRONG",

            description: ` You see a lot of guys, these meektail guys or guys that just thinking,
      like, I'm just not going to have anything to do with women for my
      whole life and I don't need to learn anything about them. There's just
      such heavy consequences to ignoring half the population. Even if
      you're in sales, you're in ...`,

            link: "https://www.youtube.com/embed/VFVlFUlphbI",
        },

        {
            date: "September 14th 2022",
            title: "Men have no value ",

            description: `You are born pretty much valueless as a guy. You're only as useful as
      the utility that you provide, even if you're a pretty boy. But you're
      not valuable looks as much as women are. And if you want to make
      something yourself as a man, it's quite difficult because it takes a
      lot of work. You can't jus...
    `,

            link: "https://www.youtube.com/embed/NZ8jSONvtNU",
        },

        {
            date: "September 14th 2022",
            title: "Why people in suits can’t be trusted ",

            description: `Probably thinking, why is this guy got no fucking shirt on? It would
      be a good lesson to you that in the case of finance life, people
      trying to sell you things, if someone's in a suit giving you financial
      advice, usually it's a tactic to make up for some of the shortfall.
      Me, I'm not selling you any...`,

            link: "https://www.youtube.com/embed/fEDWqlCmybk",
        },
    ];

    const navigate = useNavigate()

    const readMore = (item) => {
        localStorage.setItem('title', item.title);
        localStorage.setItem('date', item.date);
        localStorage.setItem('description', item.description);
        localStorage.setItem('youtube', item.link);
        navigate("/read_more");
    }

    return (
        <>
            <Header />
            <div className='max-w-[65%] mx-auto'>
                <form>
                    <div className='flex mx-16 mt-8'>
                        <input type="text" id="first_name" class=" me-2 bg-transparent border border-[#8080804d] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search By Name" />

                        {/* <input
                        type="email"
                        class="peer block min-h-[auto] w-[70%] rounded border border-[#8080804d] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200     dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Search By Name" />
                    <label for="exampleInputEmail1" class="pointer-events-none absolute top-[490px] left-[570px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >Search By Name</label> */}


                        <select data-te-select-init className='bg-transparent  border border-[#8080804d] w-[20%]  rounded '>
                            <option className='bg-[#121212] border-hidden' value="1">Upload Date</option>
                            <option className='bg-[#121212] border-hidden' value="2">Sort</option>
                            <option className='bg-[#121212] border-hidden' value="3">Video Lenght</option>
                            <option className='bg-[#121212] border-hidden' value="4">A to Z</option>
                        </select>

                    </div>
                    {
                        details.map((item, i) => (

                            <div className='text-left py-12 border-b border-[#8080804d]'>
                                <p className='text-[#808080] text-[15px]'>{item.date}</p>
                                <h3 className='text-[24px] font-semibold py-3'>
                                    {item.title}<span className='text-[#808080] text-[15px] ms-2 font-thin'>{`<`}1 min read</span>
                                </h3>
                                <h6>{item.description}</h6>
                                <div className='text-right'>
                                    <button className='bg-[#8b0000] px-3 py-1 mx-3 rounded'>Watch on youtube</button>
                                    <button type='button' onClick={() => readMore(item)} className='bg-[#8b0000] px-3 py-1 mx-3 rounded'>Read</button>
                                </div>
                            </div>

                        ))
                    }
                </form>
            </div >
        </>
    )
}
export default Description