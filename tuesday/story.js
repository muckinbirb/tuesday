const story = {
  start: 'splash',

  pages: {
    'spread_01': {
      image: 'images/Spread_01-art.png',
      bubbles: [
        {
          text: "You wake up to your alarm, under the heavy weight of your grandma's old quilt. The sun reflects off the buildings across the street from you and shines brightly into your apartment.",
          left: '9.7%', top: '12.8%', width: '25.4%', height: '11.1%', rotation: '-1deg'
        },
        {
          text: "It's a work day, but you work from home. You can hear your cat meowing from the other room. She must be ready for breakfast, but you're still pretty groggy.",
          left: '58.0%', top: '54.3%', width: '33.5%', height: '7.4%', rotation: '1deg'
        }
      ],
      wdyd: { src: 'images/Spread_01-wdyd.png', left: '59.6%', top: '67.9%', width: '27.5%' },
      choices: [
        { label: 'Get up and feed your cat', next: 'spread_02', src: 'images/Spread_01-optionbubble1a.png', left: '54.8%', top: '75.2%', width: '17.2%', height: '18.2%', rotation: '-1deg' },
        { label: 'Sleep in a lil bit',       next: 'spread_03', src: 'images/Spread_01-optionbubble2a.png', left: '73.1%', top: '73.6%', width: '19.5%', height: '19.0%', rotation: '1deg'  },
      ]
    },

    'spread_02': {
      image: 'images/Spread_02-art.png',
      bubbles: [
        {
          text: "You pull together whatever energy you have to roll out of bed. You do your morning stretches as your cat yowls for breakfast.",
          left: '8.0%', top: '33.5%', width: '37.0%', height: '6.5%', rotation: '0deg'
        },
        {
          text: "You drag yourself to the kitchen and feed your perfect cat. Then you consider your caffeine options.",
          left: '59.3%', top: '45.6%', width: '32.0%', height: '6.0%', rotation: '0deg'
        }
      ],
      wdyd: { src: 'images/Spread_02-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false, delay: 500 },
      overlays: [
        { src: 'images/Spread_02-bow1.png',     jitter: 'jitter-a', trigger: 'bubble-start', index: 0, delay: 1000 },
        { src: 'images/Spread_02-bow2.png',     jitter: 'jitter-b', trigger: 'bubble-start', index: 1, delay: 500 },
        { src: 'images/Spread_02-caffeine.png', jitter: 'jitter-c', trigger: 'bubble-end', index: 1 },
      ],
      choices: [
        { label: 'Go to the cafe\ndownstairs', next: 'spread_04', src: 'images/Spread_02-optionbubble1a.png', left: '52.2%', top: '59.2%', width: '14.1%', height: '12.9%', rotation: '-1deg' },
        { label: 'Make coffee at home',        next: 'spread_05', src: 'images/Spread_02-optionbubble2a.png', left: '79.4%', top: '58.7%', width: '14.3%', height: '13.6%', rotation: '1deg'  },
      ]
    },

    'spread_04': {
      image: 'images/Spread_04-art.png',
      bubbles: [
        {
          text: "You walk downstairs and go to the cafe across the street. It's a super cozy spot with a lot of sunshine. You've been coming here regularly for a few years, so much so that you know the baristas. You're greeted warmly when you walk inside. You linger for a bit of smalltalk then take your coffee to go. Feels nice to move your legs and the sun feels great on your face. The latte is hitting.",
          left: '11.2%', top: '13.6%', width: '14.3%', height: '37.8%', rotation: '-1deg'
        }
      ],
      wdyd: { src: 'images/Spread_04-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '76.1% 69.4%' },
      choices: [
        { label: 'Get started on work',     next: 'spread_08', src: 'images/Spread_04-optionbubble1a.png', left: '83.7%', top: '53.1%', width: '11.4%', height: '15.6%', rotation: '2deg'   },
        { label: 'Go for a lil walk first', next: 'spread_09', src: 'images/Spread_04-optionbubble2a.png', left: '78.9%', top: '73.9%', width: '15.4%', height: '10.6%', rotation: '-2deg' },
      ]
    },

    'spread_03': {
      image: 'images/Spread_03-art.png',
      bubbles: [
        {
          type: 'polygon',
          text: "You don't sleep very restfully, but you eventually wake up about an hour later. It's a little harder for you to fully escape the bed now, and your left arm seems to have fallen asleep on you.",
          rotation: '-1deg',
          points: ['29.0% 11.8%', '42.6% 11.8%', '42.6% 39.6%', '37.6% 39.6%']
        },
        {
          text: "You shuffle to the bathroom and brush your teeth. Your cat hears you and begins howling at you, ready for her breakfast, but all you can think about is caffeine.",
          left: '55.8%', top: '31.2%', width: '33.2%', height: '6.6%', rotation: '1deg'
        }
      ],
      wdyd: { src: 'images/Spread_03-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: 'images/Spread_03-bow1.png', jitter: 'jitter-a', trigger: 'bubble-start', index: 0, delay: 1000 },
        { src: 'images/Spread_03-bow2.png', jitter: 'jitter-b', trigger: 'bubble-start', index: 1, delay: 1300 },
      ],
      choices: [
        { label: 'Feed your cat',   next: 'spread_06', src: 'images/Spread_03-optionbubble1a.png', left: '51.6%', top: '49.6%', width: '13.3%', height: '11.3%', rotation: '-1deg' },
        { label: 'Coffee first!!!', next: 'spread_07', src: 'images/Spread_03-optionbubble2a.png', left: '78.1%', top: '49.8%', width: '16.0%', height: '10.4%', rotation: '1deg'  },
      ]
    },

    'spread_07': {
      image: 'images/Spread_07-art.png',
      bubbles: [
        {
          text: "The need for caffeine takes precedent over your perfect annoying cat. She can wait. You make yourself a cup of black coffee and have a few sips. Sweet relief. You go to feed your cat, turn the corner, only to find a fresh poop in the hallway. Amazing. Honestly you can't blame her, you slept in pretty late... although her idea of resistance is gross enough to make you rethink your priorities. You clean up the poo poo and fill her bowl with kibble. After an eventful morning, you decide it's best you get started on work.",
          left: '10.7%', top: '13.1%', width: '31.9%', height: '21.2%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_07-eek.png', jitter: 'jitter-eek', trigger: 'bubble-start', index: 0, delay: 5500 },
      ],
      choices: [
        { label: 'Get to work, my guy!', next: 'spread_11', src: 'images/Spread_07-optionbubble1a.png', left: '54.3%', top: '33.9%', width: '18.4%', height: '17.0%', rotation: '1deg' },
      ]
    },

    'spread_06': {
      image: 'images/Spread_06-art.png',
      bubbles: [
        {
          text: "You shuffle over to your cat's food bowl and lazily fill the bowl with some dry kibble. The howling ceases as your cat nose-dives into her breakfast. At least she's entertaining.",
          left: '24.2%', top: '72.9%', width: '17.5%', height: '13.4%', rotation: '-1deg'
        },
        {
          text: "You really need that caffeine now.",
          left: '62.3%', top: '16.1%', width: '19.6%', height: '3.8%', rotation: '1deg'
        }
      ],
      wdyd: { src: 'images/Spread_06-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '71.6% 24.2%', delay: 500 },
      overlays: [
        { src: 'images/Spread_06-caffeine.png', jitter: 'jitter-c', trigger: 'bubble-end', index: 1 },
      ],
      choices: [
        { label: 'Treat yourself and go to the cafe downstairs', next: 'spread_04', src: 'images/Spread_06-optionbubble1a.png', left: '55.1%', top: '36.2%', width: '14.2%', height: '14.5%', rotation: '-1deg' },
        { label: 'Save a few bucks and make coffee at home',     next: 'spread_05', src: 'images/Spread_06-optionbubble2a.png', left: '77.9%', top: '32.1%', width: '15.4%', height: '16.5%', rotation: '1deg'  },
      ]
    },

    'spread_05': {
      image: 'images/Spread_05-art.png',
      bubbles: [
        {
          text: "You decide to be frugal and make coffee at home. You start heating up the kettle and prepare the pour-over setup that makes you feel a little bit fancy, even if you don't really know what you're doing. You make your coffee at home and get set up to start working.",
          left: '59.4%', top: '13.1%', width: '31.2%', height: '11.2%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_05-textbubble.png', jitter: 'bubble-art', trigger: 'bubble-start', index: 0 },
        { src: 'images/Spread_05-vibes.png', jitter: 'vibes-pulse', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get to work, brother!', next: 'spread_10', src: 'images/Spread_05-optionbubble1a.png', left: '75.2%', top: '36.8%', width: '18.0%', height: '20.4%', rotation: '1deg' },
      ]
    },

    'spread_08': {
      image: 'images/Spread_08-art.png',
      bubbles: [
        {
          text: "You settle into your desk and get started on work for the day. You have a few projects you're working on, a few meetings where you talk about work coming down the line. You have a little break for lunch, and then hop into a brainstorm with your coworkers on some work coming down the line. You're feeling inspired!",
          left: '11.0%', top: '59.1%', width: '16.7%', height: '27.7%', rotation: '-1deg'
        },
        {
          text: "After a while you start to feel a bit cooped up again. You need to move around!",
          left: '58.7%', top: '32.7%', width: '11.6%', height: '11.5%', rotation: '1deg'
        }
      ],
      wdyd: { src: 'images/Spread_08-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '66.2% 53.0%' },
      choices: [
        { label: 'Bop over to the\nart store', next: 'spread_12', src: 'images/Spread_08-optionbubble1a.png', left: '74.4%', top: '57.7%', width: '13.2%', height: '16.2%', rotation: '-1deg' },
        { label: 'Go for a walk',              next: 'spread_14', src: 'images/Spread_08-optionbubble2a.png', left: '80.3%', top: '75.3%', width: '13.9%', height: '16.5%', rotation: '1deg'  },
      ]
    },

    'spread_09': {
      image: 'images/Spread_09-art.png',
      bubbles: [
        {
          text: "You walk 5 blocks up to the public park and slow down near the main square. You bask in the sun and start people-watching. You stop to browse through a book swap going on near the softball fields. You hear an excited kid exclaiming to a woman, and turn to watch them.",
          left: '8.8%', top: '49.7%', width: '32.6%', height: '12.2%', rotation: '1deg'
        },
        {
          text: "They're speaking a language you don't understand, but somehow you get the gist. The kid looks excited to have found the book he's waving around, and his mother is laughing. 10/10 wholesome moment.",
          left: '58.1%', top: '10.1%', width: '33.0%', height: '9.1%', rotation: '1deg'
        }
      ],
      choices: [
        { label: 'Go back home and get\nto work', next: 'spread_11', src: 'images/Spread_09-optionbubble1a.png', left: '79.5%', top: '67.2%', width: '15.8%', height: '20.7%', rotation: '-1deg' },
      ]
    },

    'spread_10': {
      image: 'images/Spread_10-art.png',
      bubbles: [
        {
          text: "You settle into your desk and get started on work for the day. You have a few projects you're working on, a few meetings that fly by. There is a little break for lunch, and then you hop into a brainstorm with your coworkers on the next big project. You're feeling inspired!",
          left: '11.5%', top: '59.1%', width: '15.3%', height: '26.1%', rotation: '-1deg'
        },
        {
          text: "After a while you start to feel a bit cooped up again. You need to move around!",
          left: '56.9%', top: '27.4%', width: '13.2%', height: '8.5%', rotation: '-1deg'
        }
      ],
      wdyd: { src: 'images/Spread_10-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '65.4% 41.5%' },
      choices: [
        { label: 'Stop at the\nart store',          next: 'spread_12', src: 'images/Spread_10-optionbubble1a.png', left: '70.8%', top: '50.0%', width: '10.9%', height: '11.8%', rotation: '-1deg' },
        { label: 'Go get a lil coffee\npick-me-up', next: 'spread_13', src: 'images/Spread_10-optionbubble2a.png', left: '82.0%', top: '58.0%', width: '12.9%', height: '13.4%', rotation: '1deg'  },
        { label: 'Go for a quick walk',             next: 'spread_14', src: 'images/Spread_10-optionbubble3a.png', left: '79.9%', top: '75.1%', width: '14.4%', height: '17.2%', rotation: '-1deg' },
      ]
    },

    'spread_11': {
      image: 'images/Spread_11-art.png',
      bubbles: [
        {
          text: "You settle into your desk and get started on work for the day. You're running a little behind, but you've had an eventful morning and feeling motivated to get your to-do list taken care of. You have a few projects you're working on, a few meetings that fly by. You hop into a brainstorm with your coworkers on the next big project. You're feeling inspired!",
          left: '11.7%', top: '57.0%', width: '15.8%', height: '30.7%', rotation: '-1deg'
        },
        {
          text: "During your lunch break, you feel like you need a break from screens. You probably have an hour to step away.",
          left: '59.0%', top: '30.1%', width: '11.0%', height: '16.0%', rotation: '1deg'
        }
      ],
      wdyd: { src: 'images/Spread_11-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '71.0% 54.0%' },
      choices: [
        { label: 'Bop over to the art store', next: 'spread_12', src: 'images/Spread_11-optionbubble1a.png', left: '80.0%', top: '51.9%', width: '13.4%', height: '16.0%', rotation: '-1deg' },
        { label: 'Go for a lil walk',         next: 'spread_14', src: 'images/Spread_11-optionbubble2a.png', left: '80.2%', top: '71.4%', width: '13.8%', height: '16.7%', rotation: '1deg'  },
      ]
    },

    'spread_12': {
      image: 'images/Spread_12-art.png',
      bubbles: [
        {
          text: "There is an art store that just opened up a few blocks from your home. You enter the quiet, large space filled to the gills with art supplies. Every medium you can think of has been considered. The clerk welcomes you with a smile, then leaves you to browse.",
          left: '28.4%', top: '50.7%', width: '13.9%', height: '28.5%', rotation: '-2deg'
        },
        {
          text: "You've been working on a comic in your spare time, so you're thinking about your sad felt pens from college. Might be time for an upgrade. You ask the clerk for recommendations, and he directs you to best-sellers section on pens. You snag a few new pens, thank the clerk, and you're on your way.",
          left: '57.4%', top: '10.6%', width: '35.6%', height: '13.0%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_12-sparkle1.png', jitter: 'twinkle-a', trigger: 'bubble-start', index: 1 },
        { src: 'images/Spread_12-sparkle2.png', jitter: 'twinkle-b', trigger: 'bubble-start', index: 1 },
        { src: 'images/Spread_12-sparkle3.png', jitter: 'twinkle-c', trigger: 'bubble-start', index: 1 },
      ],
      choices: [
        { label: 'Get back to work', next: 'spread_15', src: 'images/Spread_12-optionbubble1a.png', left: '78.0%', top: '78.0%', width: '16.0%', height: '15.0%', rotation: '-1deg' },
      ]
    },

    'spread_13': {
      image: 'images/Spread_13-art.png',
      bubbles: [
        {
          text: "You head to the cafe across the street. It's a cozy spot, dark wood and plenty of sunlight. You're greeted when you step inside, you're a regular at this point. The hustle and bustle is chaotic. You only get a moment to small talk with the baristas before it feels like there's no more room for you in the shop. Even in the chaos, there's comfort in that space. You wave goodbye and see yourself out.",
          left: '10.2%', top: '14.4%', width: '16.0%', height: '34.1%', rotation: '-1deg'
        }
      ],
      choices: [
        { label: 'Get back to work', next: 'spread_16', src: 'images/Spread_13-optionbubble1a.png', left: '75.9%', top: '60.5%', width: '16.3%', height: '21.1%', rotation: '1deg' },
      ]
    },

    'spread_14': {
      image: 'images/Spread_14-art.png',
      bubbles: [
        {
          text: "You walk 5 blocks up to the public park and slow down near the main square. It's mid afternoon, the sun is out, and there's a refreshing breeze. There's a fair amount of dog walkers on their way to-and-from the fenced-in dog park on the west side of the public park.",
          left: '8.7%', top: '49.6%', width: '32.2%', height: '11.4%', rotation: '1deg'
        },
        {
          text: "You watch as a white chihuahua shrieks maniacally at a great dane. The great dane just wags its tail and watches the tiny chihuahua. 10/10 dog-watching.",
          left: '59.2%', top: '17.5%', width: '10.6%', height: '19.9%', rotation: '-1deg'
        }
      ],
      choices: [
        { label: 'Get back to work', next: 'spread_17', src: 'images/Spread_14-optionbubble1a.png', left: '79.2%', top: '69.0%', width: '15.7%', height: '17.9%', rotation: '-1deg' },
      ]
    },

    'spread_15': {
      image: 'images/Spread_15-art.png',
      bubbles: [
        {
          text: "You feel light when you get home from the art shop, but that excitement doesn't translate to your 9-5 job. You slog through whatever remaining work you have, with the mindset that as soon as you get to a good spot, you can work on your comic. You'll just work a little bit longer tomorrow to make up for it if you need to. You stretch as you finish up for the day. Finally!!",
          left: '9.6%', top: '54.1%', width: '17.2%', height: '28.4%', rotation: '-1deg'
        }
      ],
      wdyd: { src: 'images/Spread_15-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '75.6% 36.5%' },
      choices: [
        { label: 'Start working on your comic!!',                                             next: 'spread_18', src: 'images/Spread_15-optionbubble1a.png', left: '69.0%', top: '40.9%', width: '19.9%', height: '20.6%', rotation: '-1deg' },
        { label: "You're burned out from rushing thru work, you just need a min to zone out", next: 'spread_19', src: 'images/Spread_15-optionbubble2a.png', left: '75.4%', top: '64.2%', width: '18.2%', height: '21.5%', rotation: '1deg'  },
      ]
    },

    'spread_16': {
      image: 'images/Spread_16-art.png',
      bubbles: [
        {
          text: "After the chaos of the coffee shop, your apartment feels quiet. The afternoon sun pours in, and you're feeling motivated to finish up your work. Your mind lingers as the day goes on, thinking about what you're going to do after work. You stretch as you finish up for the day. The world is your oyster!",
          left: '11.3%', top: '57.9%', width: '14.5%', height: '26.9%', rotation: '-2deg'
        }
      ],
      wdyd: { src: 'images/Spread_16-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '79.2% 36.8%' },
      choices: [
        { label: 'Play some video games',     next: 'spread_20', src: 'images/Spread_16-optionbubble1a.png', left: '56.8%', top: '38.9%', width: '17.4%', height: '14.6%', rotation: '-1deg' },
        { label: 'Go to the comic book shop', next: 'spread_21', src: 'images/Spread_16-optionbubble2a.png', left: '76.0%', top: '42.5%', width: '17.6%', height: '18.1%', rotation: '1deg'  },
        { label: 'Text a friend to hang out', next: 'spread_22', src: 'images/Spread_16-optionbubble3a.png', left: '78.8%', top: '63.5%', width: '15.9%', height: '24.3%', rotation: '-1deg' },
      ]
    },

    'spread_17': {
      image: 'images/Spread_17-art.png',
      bubbles: [
        {
          text: "You get back to work. The afternoon sun pours in, and you're feeling motivated to finish up your work. You make sure to tell your coworker about the cute dogs you saw. Your mind lingers as the day goes on, thinking about what you're going to do after work. Your day has been eventful, but you still want to do something fun after work. You stretch as you finish up for the day, relieved to be done with work.",
          left: '9.0%', top: '54.5%', width: '18.7%', height: '32.4%', rotation: '-1deg'
        }
      ],
      wdyd: { src: 'images/Spread_17-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '74.0% 36.8%' },
      choices: [
        { label: 'Play some video games',     next: 'spread_20', src: 'images/Spread_17-optionbubble1a.png', left: '69.9%', top: '42.5%', width: '19.5%', height: '20.1%', rotation: '-1deg' },
        { label: 'Text a friend to hang out', next: 'spread_22', src: 'images/Spread_17-optionbubble2a.png', left: '75.7%', top: '63.8%', width: '18.8%', height: '24.1%', rotation: '1deg'  },
      ]
    },

    'spread_18': {
      image: 'images/Spread_18-art.png',
      bubbles: [
        {
          text: "You gather your supplies and move to the dining table for premium scatter space. Your workspace always turns into a tornado when you're doing art things. This comic been a long and inconsistent project for you; something you pick up and jam on every so often. You find your zone and work late into the night, sketching frames and adjusting the copy as you go.",
          left: '9.3%', top: '68.3%', width: '31.9%', height: '20.6%', rotation: '-1deg'
        },
        {
          text: "As you start to hit a wall, you notice your cat twitching in her sleep. Time flew by and it's much later than you realized, so you decide to call it a day.",
          left: '59.8%', top: '55.2%', width: '9.8%', height: '25.5%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_18-z1.png', jitter: 'z-seq-1', trigger: 'bubble-start', index: 1 },
        { src: 'images/Spread_18-z2.png', jitter: 'z-seq-2', trigger: 'bubble-start', index: 1 },
        { src: 'images/Spread_18-z3.png', jitter: 'z-seq-3', trigger: 'bubble-start', index: 1 },
        { src: 'images/Spread_18-z4.png', jitter: 'z-seq-4', trigger: 'bubble-start', index: 1 },
        { src: 'images/Spread_18-z5.png', jitter: 'z-seq-5', trigger: 'bubble-start', index: 1 },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', src: 'images/Spread_18-optionbubble1a.png', left: '75.2%', top: '72.6%', width: '19.4%', height: '20.9%', rotation: '-1deg' },
      ]
    },

    'spread_19': {
      image: 'images/Spread_19-art.png',
      bubbles: [
        {
          text: "You heat up some leftovers, find your worn-in spot on the couch, and throw on your current comfort show binge.",
          left: '9.1%', top: '18.0%', width: '11.3%', height: '22.6%', rotation: '-1deg'
        },
        {
          text: "Your brain drifts off and you fully relax. You vibe out and double-screen it, scrolling reddit or playing phone games.",
          left: '8.8%', top: '80.0%', width: '33.1%', height: '10.7%', rotation: '1deg'
        },
        {
          text: "Your cat finds a space right next to you on the couch. You scratch behind her ears as she purrs. You doze off and suddenly realize how late it is.",
          left: '58.9%', top: '55.8%', width: '19.8%', height: '14.1%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_19-20-23-beep.png', jitter: 'beep', trigger: 'bubble-start', index: 0, delay: 500 },
        { src: 'images/Spread_19-20-23-z1.png', jitter: 'z-seq-1', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z2.png', jitter: 'z-seq-2', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z3.png', jitter: 'z-seq-3', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z4.png', jitter: 'z-seq-4', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z5.png', jitter: 'z-seq-5', trigger: 'bubble-start', index: 2 },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', src: 'images/Spread_19-optionbubble1a.png', left: '54.4%', top: '76.8%', width: '15.4%', height: '15.0%', rotation: '1deg' },
      ]
    },

    'spread_20': {
      image: 'images/Spread_20-art.png',
      bubbles: [
        {
          text: "You ponder what game you're in the mood for as you heat up some leftovers. You decide on Zelda as you find your worn-in spot on the couch.",
          left: '8.6%', top: '15.9%', width: '12.0%', height: '19.3%', rotation: '-1deg'
        },
        {
          text: "You jump in right where you left off, getting super side-tracked at every turn and even catching a new cool looking horse. Because you always need another horse.",
          left: '8.8%', top: '80.0%', width: '33.1%', height: '10.7%', rotation: '1deg'
        },
        {
          text: "Your cat curls up next to you as you play, thankfully not demanding any pets. Time flies, and you realize how late it is. You're starting to get a bit dozey.",
          left: '58.9%', top: '55.3%', width: '19.8%', height: '14.1%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_19-20-23-beep.png', jitter: 'beep', trigger: 'bubble-start', index: 0, delay: 500 },
        { src: 'images/Spread_19-20-23-z1.png', jitter: 'z-seq-1', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z2.png', jitter: 'z-seq-2', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z3.png', jitter: 'z-seq-3', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z4.png', jitter: 'z-seq-4', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z5.png', jitter: 'z-seq-5', trigger: 'bubble-start', index: 2 },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', src: 'images/Spread_20-optionbubble1a.png', left: '54.4%', top: '76.8%', width: '15.4%', height: '15.0%', rotation: '1deg' },
      ]
    },

    'spread_21': {
      image: 'images/Spread_21-art.png',
      bubbles: [
        {
          text: "You make the 6 block walk over to the cozy shop in the perfect fall weather. It feels like every nook and cranny is filled by some kind of book or knick knack. The clerk greets you as you begin to poke around. There's always a few people in the shop talking nerd; your fav soundtrack to browsing. The clerk gets your box issues, you chat for a bit, then you head home. You mozy back home feeling inspired to work on your own comic, which has been sitting dormant for weeks. This new issue looks really good though...",
          left: '10.5%', top: '33.7%', width: '29.5%', height: '23.7%', rotation: '-1deg'
        }
      ],
      wdyd: { src: 'images/Spread_21-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '61.4% 44.3%' },
      choices: [
        { label: 'Work on your comic', next: 'spread_18', src: 'images/Spread_21-optionbubble1a.png', left: '61.5%', top: '53.5%', width: '18.3%', height: '19.3%', rotation: '-1deg' },
        { label: 'Read the new issue',  next: 'spread_23',                                              left: '54.7%', top: '72.4%', width: '19.5%', height: '19.0%', rotation: '1deg'  },
      ]
    },

    'spread_22': {
      image: 'images/Spread_22-art.png',
      bubbles: [
        {
          text: "You text your friend who lives in the neighborhood. You decide to go on a cozy walk and enjoy the changing weather. You meet them halfway, pleasantly surprised to see they've brought their doggo. Score!",
          left: '25.1%', top: '14.5%', width: '16.1%', height: '19.0%', rotation: '-1deg'
        },
        {
          text: "You spend the walk chatting and venting about work, life, friends, family... you know, the usual. As you wrap around your friend's block, they ask if you want to take a crack at some Mario Kart. The sun has just set, and you feel a little sleepy, but some Kart does sounds fun...",
          left: '59.3%', top: '39.5%', width: '31.7%', height: '12.4%', rotation: '-1deg'
        }
      ],
      wdyd: { src: 'images/Spread_22-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '73.7% 60.2%' },
      choices: [
        { label: 'Head home for the night',             next: 'spread_19', src: 'images/Spread_22-optionbubble1a.png', left: '54.4%', top: '62.3%', width: '13.9%', height: '15.4%', rotation: '-1deg' },
        { label: 'Get slaughtered in\nsome Mario Kart', next: 'spread_24', src: 'images/Spread_22-optionbubble2a.png', left: '78.9%', top: '62.7%', width: '16.4%', height: '15.6%', rotation: '1deg'  },
      ]
    },

    'spread_23': {
      image: 'images/Spread_23-art.png',
      bubbles: [
        {
          text: "You flip through the previous issue as you heat up some leftovers, getting caught up on the story. It's been a minute since you picked up this series and you're excited.",
          left: '8.5%', top: '15.8%', width: '12.1%', height: '21.4%', rotation: '-1deg'
        },
        {
          text: "You take the new issue and your leftovers to your worn-in spot on the couch. Floppies always go too fast, so when you finish the issue, you're bored. You pick up another half-read comic to try to fill the void.",
          left: '8.8%', top: '78.5%', width: '33.1%', height: '10.7%', rotation: '1deg'
        },
        {
          text: "Your cat finds an open spot next to you, demanding a few pets from you while you read. You start to get dozey when you realize how late it is.",
          left: '58.9%', top: '55.3%', width: '19.8%', height: '14.1%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: 'images/Spread_19-20-23-beep.png', jitter: 'beep', trigger: 'bubble-start', index: 0, delay: 500 },
        { src: 'images/Spread_19-20-23-z1.png', jitter: 'z-seq-1', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z2.png', jitter: 'z-seq-2', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z3.png', jitter: 'z-seq-3', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z4.png', jitter: 'z-seq-4', trigger: 'bubble-start', index: 2 },
        { src: 'images/Spread_19-20-23-z5.png', jitter: 'z-seq-5', trigger: 'bubble-start', index: 2 },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', src: 'images/Spread_23-optionbubble1a.png', left: '54.4%', top: '76.8%', width: '15.4%', height: '15.0%', rotation: '1deg' },
      ]
    },

    'spread_24': {
      image: 'images/Spread_24-art.png',
      bubbles: [
        {
          text: "You head up to your friend's apartment. They offer you a beer and their dog claims the spot between you two on the couch. You admittedly suck at Mario Kart, but so does your friend. You're in good company.",
          left: '8.8%', top: '11.9%', width: '14.7%', height: '21.6%', rotation: '-1deg'
        },
        {
          text: "You end on a high, placing in 4th place on Rainbow Road. A triumphant victory for your track record! You and your friend start to yawn, and you decide it's time to trek it home. You finish off your beer, give the doggo some smooches, and enjoy the crispy fall air as you walk home.",
          left: '57.5%', top: '36.1%', width: '16.2%', height: '25.0%', rotation: '1deg'
        }
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', src: 'images/Spread_24-optionbubble1a.png', left: '54.8%', top: '71.6%', width: '15.7%', height: '17.6%', rotation: '-1deg' },
      ]
    },

    'spread_25': {
      image: 'images/Spread_25-art.png',
      bubbles: [
        {
          text: "You change into comfy clothes and brush your teeth, noticing how quiet the city is around you. You turn the volume nearly off on a chill tv show and curl up in bed. Your cat joins you, laying at your feet, as is her ritual. You reflect on your day and fully relax. You think about how your time can truly never be wasted... as you drift off to sleep.",
          left: '10.6%', top: '70.7%', width: '33.1%', height: '15.8%', rotation: '-1deg'
        }
      ],
      choices: [
        { label: "G'night", next: 'splash', src: 'images/Spread_25-optionbubble1a.png', left: '72.6%', top: '70.6%', width: '19.7%', height: '21.6%', rotation: '1deg' },
      ]
    }
  }
};
