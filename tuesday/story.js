const story = {
  start: 'spread_09',

  pages: {
    'spread_01': {
      image: '_images/Spread_01-art.png',
      bubbles: [
        {
          text: "You wake up to your alarm, under the heavy weight of your grandma's old quilt. The sun reflects off the buildings across the street from you and shines brightly into your apartment.",
          left: '9.8%', top: '10.5%', width: '24.5%', height: '13.2%', rotation: '-1deg'
        },
        {
          text: "It's a work day, but you work from home. You can hear your cat meowing from the other room. She must be ready for breakfast, but you're still pretty groggy.",
          left: '57.6%', top: '53.0%', width: '33.9%', height: '8.9%', rotation: '1deg'
        }
      ],
      wdyd: { src: '_images/Spread_01-wdyd.png', left: '59.6%', top: '67.9%', width: '27.5%' },
      choices: [
        { label: 'Get up and feed your cat', next: 'spread_02', left: '54.8%', top: '75.2%', width: '17.2%', height: '18.2%', rotation: '-1deg' },
        { label: 'Sleep in a lil bit',       next: 'spread_03', left: '73.1%', top: '73.6%', width: '19.5%', height: '19.0%', rotation: '1deg'  },
      ]
    },

    'spread_02': {
      image: '_images/Spread_02-art.png',
      bubbles: [
        {
          text: "You pull together whatever energy you have and roll out of bed. You stretch your arms above your head and touch your toes. Your cat yowls from the kitchen, ready for breakfast.",
          left: '8.0%', top: '32.5%', width: '37.0%', height: '6.5%', rotation: '0deg'
        },
        {
          text: "You walk into the kitchen to feed your annoying yet perfect cat. As you brush your teeth and get ready for your day, you consider your caffeine options.",
          left: '59.3%', top: '44.6%', width: '32.0%', height: '6.0%', rotation: '0deg'
        }
      ],
      wdyd: { src: '_images/Spread_02-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false, delay: 500 },
      overlays: [
        { src: '_images/Spread_02-bow1.png',     jitter: 'jitter-a', trigger: 'bubble-start', index: 0, delay: 1000 },
        { src: '_images/Spread_02-bow2.png',     jitter: 'jitter-b', trigger: 'bubble-start', index: 1, delay: 500 },
        { src: '_images/Spread_02-caffeine.png',       jitter: 'jitter-c', trigger: 'bubble-end', index: 1 },
        { src: '_images/Spread_02-optionbubbles.png', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Go to the cafe\ndownstairs', next: 'spread_04', left: '52.2%', top: '59.2%', width: '14.1%', height: '12.9%', rotation: '-1deg' },
        { label: 'Make coffee at home',       next: 'spread_05', left: '79.4%', top: '58.7%', width: '14.3%', height: '13.6%', rotation: '1deg'  },
      ]
    },

    'spread_04': {
      image: '_images/Spread_04-art.png',
      bubbles: [
        {
          text: "You walk downstairs and go to the cafe across the street. It's a cozy spot, with lots of dark wood and a ton of sunlight. You've been coming here regularly ever since you moved into the neighborhood — so regularly that you've gotten to know the baristas. You're greeted warmly when you walk inside. You linger for a bit of smalltalk, catch up on life things, and take your coffee to go. Feels nice to move your legs, the sun feels great on your face. The latte is hitting.",
          left: '11.1%', top: '13.7%', width: '14.2%', height: '34.1%', rotation: '-1deg'
        }
      ],
      wdyd: { src: '_images/Spread_04-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '76.1% 69.4%' },
      overlays: [
        { src: '_images/Spread_04-optionbubbles.png', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get started on work',    next: 'spread_08', left: '83.7%', top: '53.1%', width: '11.4%', height: '15.6%', rotation: '2deg'   },
        { label: 'Go for a lil walk first', next: 'spread_09', left: '78.9%', top: '73.9%', width: '15.4%', height: '10.6%', rotation: '-2deg' },
      ]
    },

    'spread_03': {
      image: '_images/Spread_03-art.png',
      bubbles: [
        {
          type: 'polygon',
          text: "You don't sleep very restfully, but you eventually emerge from your slumber about an hour after your alarm went off. It is a little harder for you to fully emerge from the bed, and your left arm seems to have fallen asleep on you.",
          rotation: '-1deg',
          points: ['28.0% 13.4%', '43.5% 11.6%', '43.8% 39.8%', '41.5% 41.8%']
        },
        {
          text: "You shuffle to the bathroom and brush your teeth. Your cat hears your movements and begins howling at you, ready for her breakfast. All you can think about is caffeine.",
          left: '55.7%', top: '32.1%', width: '32.1%', height: '5.9%', rotation: '1deg'
        }
      ],
      wdyd: { src: '_images/Spread_03-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_03-bow1.png', jitter: 'jitter-a', trigger: 'bubble-start', index: 0, delay: 1000 },
        { src: '_images/Spread_03-bow2.png', jitter: 'jitter-b', trigger: 'bubble-start', index: 1, delay: 1300 },
      ],
      choices: [
        { label: 'Feed your cat',  next: 'spread_06', left: '51.6%', top: '49.6%', width: '13.3%', height: '11.3%', rotation: '-1deg' },
        { label: 'Coffee first!!!', next: 'spread_07', left: '78.1%', top: '49.8%', width: '16.0%', height: '10.4%', rotation: '1deg'  },
      ]
    },

    'spread_07': {
      image: '_images/Spread_07-art.png',
      bubbles: [
        {
          text: "The need for caffeine takes precedent over your perfect annoying cat. She can wait. You make yourself a cup of black coffee and have a few sips. Sweet relief. You go to feed your cat, turn the corner, only to find a fresh poop in the hallway. Amazing. Honestly you can't blame her, you slept in pretty late... although her idea of resistance is gross enough to make you rethink your priorities. You clean up the poo poo and fill her bowl with kibble. After an eventful morning, you decide it's best you get started on work.",
          left: '9.8%', top: '13.5%', width: '32.5%', height: '20.3%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_07-eek.png', jitter: 'jitter-eek', trigger: 'bubble-start', index: 0 },
        { src: '_images/Spread_07-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get to work, my guy!', next: 'spread_11', left: '54.3%', top: '33.9%', width: '18.4%', height: '17.0%', rotation: '1deg' },
      ]
    },

    'spread_06': {
      image: '_images/Spread_06-art.png',
      bubbles: [
        {
          text: "You shuffle over to your cat's food bowl and lazily fill the bowl with some dry kibble. The howling ceases as your cat nose-dives into her breakfast. At least she's entertaining.",
          left: '24.2%', top: '73.9%', width: '17.5%', height: '13.4%', rotation: '-1deg'
        },
        {
          text: "You really need that caffeine now.",
          left: '62.3%', top: '16.1%', width: '19.6%', height: '3.8%', rotation: '1deg'
        }
      ],
      wdyd: { src: '_images/Spread_06-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '71.6% 24.2%', delay: 500 },
      overlays: [
        { src: '_images/Spread_06-caffeine.png', jitter: 'jitter-c', trigger: 'bubble-end', index: 1 },
        { src: '_images/Spread_06-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Treat yourself and go to the cafe downstairs', next: 'spread_04', left: '55.1%', top: '36.2%', width: '14.2%', height: '14.5%', rotation: '-1deg' },
        { label: 'Save a few bucks and make coffee at home',     next: 'spread_05', left: '77.9%', top: '32.1%', width: '15.4%', height: '16.5%', rotation: '1deg'  },
      ]
    },

    'spread_05': {
      image: '_images/Spread_05-art.png',
      bubbles: [
        {
          text: "You decide to be frugal and make coffee at home. You start heating up the kettle and prepare the pour-over setup that makes you feel a little bit fancy, even if you don't really know what you're doing. You make your coffee at home and get set up to start working.",
          left: '59.4%', top: '14.1%', width: '31.2%', height: '11.2%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_05-textbubble.png', jitter: 'bubble-art', trigger: 'bubble-start', index: 0 },
        { src: '_images/Spread_05-vibes.png', jitter: 'vibes-pulse', trigger: 'before-choices' },
        { src: '_images/Spread_05-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get to work, brother!', next: 'spread_10', left: '75.2%', top: '36.8%', width: '18.0%', height: '20.4%', rotation: '1deg' },
      ]
    },

    'spread_08': {
      image: '_images/Spread_08-art.png',
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
      wdyd: { src: '_images/Spread_08-wdyd.png', left: '0%', top: '0%', width: '100%', transformOrigin: '66.2% 53.0%' },
      overlays: [
        { src: '_images/Spread_08-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Bop over to the\nart store', next: 'spread_12', left: '74.4%', top: '57.7%', width: '13.2%', height: '16.2%', rotation: '-1deg' },
        { label: 'Go for a walk',             next: 'spread_14', left: '80.3%', top: '75.3%', width: '13.9%', height: '16.5%', rotation: '1deg'  },
      ]
    },

    'spread_09': {
      image: '_images/Spread_09-art.png',
      bubbles: [
        {
          text: "You walk 5 blocks up to the public park and slow down near the main square. You bask in the sun and start people-watching. You stop to browse through a book swap going on near the softball fields. You hear an excited kid exclaiming to a woman, and turn to watch them.",
          left: '8.3%', top: '49.7%', width: '32.6%', height: '12.2%', rotation: '-1deg'
        },
        {
          text: "They're speaking a language you don't understand, but somehow you get the gist. The kid looks excited to have found the book he's waving around, and his mother is laughing. 10/10 wholesome moment.",
          left: '56.6%', top: '10.1%', width: '33.0%', height: '9.1%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_09-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Go back home and get back to work', next: 'spread_11', left: '79.5%', top: '67.2%', width: '15.8%', height: '20.7%', rotation: '-1deg' },
      ]
    },

    'spread_10': {
      image: '_images/Spread_10-art.png',
      bubbles: [
        {
          text: "You settle into your desk and get started on work for the day. You have a few projects you're working on, a few meetings that fly by. There is a little break for lunch, and then you hop into a brainstorm with your coworkers on the next big project. You're feeling inspired!",
          left: '10%', top: '10%', width: '30%', height: '18%', rotation: '-1deg'
        },
        {
          text: "After a while you start to feel a bit cooped up again. You need to move around!",
          left: '60%', top: '50%', width: '30%', height: '8%', rotation: '1deg'
        }
      ],
      wdyd: { src: '_images/Spread_10-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_10-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Stop at the art store',         next: 'spread_12', left: '45%', top: '60%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: 'Go get a lil coffee pick-me-up', next: 'spread_13', left: '62%', top: '60%', width: '15%', height: '12%', rotation: '1deg'  },
        { label: 'Go for a quick walk',            next: 'spread_14', left: '79%', top: '60%', width: '15%', height: '12%', rotation: '-1deg' },
      ]
    },

    'spread_11': {
      image: '_images/Spread_11-art.png',
      bubbles: [
        {
          text: "You settle into your desk and get started on work for the day. You're running a little behind, but you've had an eventful morning and feeling motivated to get your to-do list taken care of. You have a few projects you're working on, a few meetings that fly by. You hop into a brainstorm with your coworkers on the next big project. You're feeling inspired!",
          left: '10%', top: '10%', width: '30%', height: '22%', rotation: '-1deg'
        },
        {
          text: "During your lunch break, you feel like you need a break from screens. You probably have an hour to step away.",
          left: '60%', top: '50%', width: '30%', height: '10%', rotation: '1deg'
        }
      ],
      wdyd: { src: '_images/Spread_11-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_11-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Bop over to the art store', next: 'spread_12', left: '50%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: 'Go for a lil walk',         next: 'spread_14', left: '70%', top: '65%', width: '15%', height: '12%', rotation: '1deg'  },
      ]
    },

    'spread_12': {
      image: '_images/Spread_12-art.png',
      bubbles: [
        {
          text: "There is an art store that just opened up a few blocks from your home. You enter the quiet, large space filled to the gills with art supplies. Every medium you can think of has been considered. The clerk welcomes you with a smile, then leaves you to browse.",
          left: '10%', top: '10%', width: '30%', height: '18%', rotation: '-1deg'
        },
        {
          text: "You've been working on a comic in your spare time, so you're thinking about your sad felt pens from college. Might be time for an upgrade. You ask the clerk for recommendations, and he directs you to best-sellers section on pens. You snag a few new pens, thank the clerk, and you're on your way.",
          left: '60%', top: '45%', width: '30%', height: '18%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_12-sparkle1.png', trigger: 'bubble-start', index: 1, delay: 500  },
        { src: '_images/Spread_12-sparkle2.png', trigger: 'bubble-start', index: 1, delay: 1500 },
        { src: '_images/Spread_12-sparkle3.png', trigger: 'bubble-start', index: 1, delay: 2500 },
        { src: '_images/Spread_12-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get back to work', next: 'spread_15', left: '55%', top: '65%', width: '20%', height: '12%', rotation: '-1deg' },
      ]
    },

    'spread_13': {
      image: '_images/Spread_13-art.png',
      bubbles: [
        {
          text: "You walk downstairs and go to the cafe across the street. It's a cozy spot, with lots of dark wood and a ton of sunlight. You've been coming here regularly ever since you moved into the neighborhood — so regularly that you've gotten to know the baristas. You're greeted warmly when you walk inside. It's much later than you usually come in, so the hustle and bustle is chaotic. You only get a brief moment to small talk with the baristas before it feels like there's no more room for you in the shop. Even in the chaos, there's comfort in that space. You wave goodbye and see yourself out.",
          left: '10%', top: '10%', width: '30%', height: '30%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_13-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get back to work', next: 'spread_16', left: '55%', top: '65%', width: '20%', height: '12%', rotation: '1deg' },
      ]
    },

    'spread_14': {
      image: '_images/Spread_14-art.png',
      bubbles: [
        {
          text: "You walk 5 blocks up to the public park and slow down near the main square. It's mid afternoon, the sun is out, and there's a refreshing breeze. There's a fair amount of dog walkers on their way to-and-from the fenced-in dog park on the west side of the public park.",
          left: '10%', top: '10%', width: '30%', height: '18%', rotation: '-1deg'
        },
        {
          text: "You watch as a white chihuahua shrieks maniacally at a great dane. The great dane just wags its tail and watches the tiny chihuahua. 10/10 dog-watching.",
          left: '60%', top: '50%', width: '30%', height: '10%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_14-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Get back to work', next: 'spread_17', left: '55%', top: '65%', width: '20%', height: '12%', rotation: '-1deg' },
      ]
    },

    'spread_15': {
      image: '_images/Spread_15-art.png',
      bubbles: [
        {
          text: "You feel light when you get home from the art shop, but that excitement doesn't translate to your 9-5 job. You slog through whatever remaining work you have, with the mindset that as soon as you get to a good spot, you can work on your comic. You'll just work a little bit longer tomorrow to make up for it if you need to. You stretch as you finish up for the day. Finally!!",
          left: '10%', top: '10%', width: '30%', height: '22%', rotation: '-1deg'
        }
      ],
      wdyd: { src: '_images/Spread_15-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_15-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Start working on your comic!!',                                        next: 'spread_18', left: '50%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: "You're burned out from rushing thru work, you just need a min to zone out", next: 'spread_19', left: '70%', top: '65%', width: '15%', height: '12%', rotation: '1deg'  },
      ]
    },

    'spread_16': {
      image: '_images/Spread_16-art.png',
      bubbles: [
        {
          text: "After the chaos of the coffee shop, your apartment feels quiet. The afternoon sun pours in, and you're feeling motivated to finish up your work. Your mind lingers as the day goes on, thinking about what you're going to do after work. You stretch as you finish up for the day. The world is your oyster!",
          left: '10%', top: '10%', width: '30%', height: '20%', rotation: '-1deg'
        }
      ],
      wdyd: { src: '_images/Spread_16-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_16-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Play some video games',    next: 'spread_20', left: '45%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: 'Go to the comic book shop', next: 'spread_21', left: '62%', top: '65%', width: '15%', height: '12%', rotation: '1deg'  },
        { label: 'Text a friend to hang out', next: 'spread_22', left: '79%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
      ]
    },

    'spread_17': {
      image: '_images/Spread_17-art.png',
      bubbles: [
        {
          text: "You get back to work. The afternoon sun pours in, and you're feeling motivated to finish up your work. You make sure to tell your coworker about the cute dogs you saw. Your mind lingers as the day goes on, thinking about what you're going to do after work. Your day has been eventful, but you still want to do something fun after work. You stretch as you finish up for the day, relieved to be done with work.",
          left: '10%', top: '10%', width: '30%', height: '22%', rotation: '-1deg'
        }
      ],
      wdyd: { src: '_images/Spread_17-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_17-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Play some video games',     next: 'spread_20', left: '50%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: 'Text a friend to hang out', next: 'spread_22', left: '70%', top: '65%', width: '15%', height: '12%', rotation: '1deg'  },
      ]
    },

    'spread_18': {
      image: '_images/Spread_18-art.png',
      bubbles: [
        {
          text: "You gather your supplies and move to the dining table for prime spreading-out space. Your workspace always turns into a tornado when you're doing art things. This comic has been a long and inconsistent project for you, something you pick up and jam on every so often. You find your zone and work late into the night, sketching frames and adjusting the copy as you go. You send some photos of new sketches to a friend, and you promptly get hyped up.",
          left: '10%', top: '10%', width: '30%', height: '22%', rotation: '-1deg'
        },
        {
          text: "As you start to hit a wall, you notice your cat twitching in her sleep. Time flew by and it's much later than you realized, so you decide to call it a day.",
          left: '60%', top: '50%', width: '30%', height: '10%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_18-z1.png', trigger: 'bubble-start', index: 1, delay: 0    },
        { src: '_images/Spread_18-z2.png', trigger: 'bubble-start', index: 1, delay: 600  },
        { src: '_images/Spread_18-z3.png', trigger: 'bubble-start', index: 1, delay: 1200 },
        { src: '_images/Spread_18-z4.png', trigger: 'bubble-start', index: 1, delay: 1800 },
        { src: '_images/Spread_18-z5.png', trigger: 'bubble-start', index: 1, delay: 2400 },
        { src: '_images/Spread_18-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', left: '55%', top: '65%', width: '20%', height: '12%', rotation: '-1deg' },
      ]
    },

    'spread_19': {
      image: '_images/Spread_19-art.png',
      bubbles: [
        {
          text: "You heat up some leftovers, find your worn-in spot on the couch, and throw on your current binge-worthy comfort show.",
          left: '10%', top: '10%', width: '30%', height: '10%', rotation: '-1deg'
        },
        {
          text: "Your brain drifts off and you fully relax, getting a bit sleepy. You distract yourself by double-screening it and playing on your phone on and off.",
          left: '60%', top: '35%', width: '30%', height: '10%', rotation: '1deg'
        },
        {
          text: "Your cat joins you on the couch, finding a space right next to you to rest. You scratch behind her ears as she purrs. You doze again and suddenly realize how late it is.",
          left: '10%', top: '60%', width: '30%', height: '12%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_19-20-23-beep.png',         trigger: 'bubble-start', index: 1 },
        { src: '_images/Spread_19-20-23-z1.png', trigger: 'bubble-start', index: 2, delay: 0    },
        { src: '_images/Spread_19-20-23-z2.png', trigger: 'bubble-start', index: 2, delay: 600  },
        { src: '_images/Spread_19-20-23-z3.png', trigger: 'bubble-start', index: 2, delay: 1200 },
        { src: '_images/Spread_19-20-23-z4.png', trigger: 'bubble-start', index: 2, delay: 1800 },
        { src: '_images/Spread_19-20-23-z5.png', trigger: 'bubble-start', index: 2, delay: 2400 },
        { src: '_images/Spread_19-20-23-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', left: '55%', top: '75%', width: '20%', height: '12%', rotation: '1deg' },
      ]
    },

    'spread_20': {
      image: '_images/Spread_20-art.png',
      bubbles: [
        {
          text: "You ponder what game you're in the mood for as you heat up some leftovers. You decide on Zelda as you find your worn-in spot on the couch.",
          left: '10%', top: '10%', width: '30%', height: '10%', rotation: '-1deg'
        },
        {
          text: "You jump in right where you left off, getting super side-tracked at every turn and even catching a new cool looking horse. Because you always need another horse.",
          left: '60%', top: '35%', width: '30%', height: '10%', rotation: '1deg'
        },
        {
          text: "Your cat curls up next to you as you play, thankfully not demanding any pets. Time flies, and you realize how late it is. You're starting to get a bit dozey.",
          left: '10%', top: '60%', width: '30%', height: '12%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_19-20-23-z1.png', trigger: 'bubble-start', index: 2, delay: 0    },
        { src: '_images/Spread_19-20-23-z2.png', trigger: 'bubble-start', index: 2, delay: 600  },
        { src: '_images/Spread_19-20-23-z3.png', trigger: 'bubble-start', index: 2, delay: 1200 },
        { src: '_images/Spread_19-20-23-z4.png', trigger: 'bubble-start', index: 2, delay: 1800 },
        { src: '_images/Spread_19-20-23-z5.png', trigger: 'bubble-start', index: 2, delay: 2400 },
        { src: '_images/Spread_19-20-23-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', left: '55%', top: '75%', width: '20%', height: '12%', rotation: '1deg' },
      ]
    },

    'spread_21': {
      image: '_images/Spread_21-art.png',
      bubbles: [
        {
          text: "You make the 6 block walk over in the perfect fall weather. You enter a cozy, crowded space. It feels like every nook and cranny in the comic shop is filled by some kind of book or knick knack. The clerk greets you, and you exchange some small talk about your cats. There's always a few people in the shop talking nerd, which you love to listen to while you browse. You decide you probably shouldn't spend any money on more books, so you just get your box issues and chit chat with the clerk a bit more. You mozy back home feeling inspired to work on your own comic, which has been sitting dormant on the shelf for weeks. This new issue looks really good though...",
          left: '10%', top: '10%', width: '30%', height: '30%', rotation: '-1deg'
        }
      ],
      wdyd: { src: '_images/Spread_21-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_21-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Work on your comic', next: 'spread_18', left: '50%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: 'Read the new issue',  next: 'spread_23', left: '70%', top: '65%', width: '15%', height: '12%', rotation: '1deg'  },
      ]
    },

    'spread_22': {
      image: '_images/Spread_22-art.png',
      bubbles: [
        {
          text: "You text your friend who lives in the neighborhood. You decide to go on a cozy walk and enjoy the weather changing. You meet them halfway, pleasantly surprised to see they've brought their doggo. Score!",
          left: '10%', top: '10%', width: '30%', height: '14%', rotation: '-1deg'
        },
        {
          text: "You spend the walk chatting and venting about work, life, friends, family... you know, the usual. As you wrap around your friend's block, they ask if you want to take a crack at some Mario Kart. The sun has just set, and you feel a little sleepy, but some Kart does sounds fun...",
          left: '60%', top: '45%', width: '30%', height: '16%', rotation: '1deg'
        }
      ],
      wdyd: { src: '_images/Spread_22-wdyd.png', left: '0%', top: '0%', width: '100%', animate: false },
      overlays: [
        { src: '_images/Spread_22-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Head home for the night',          next: 'spread_19', left: '50%', top: '65%', width: '15%', height: '12%', rotation: '-1deg' },
        { label: 'Get slaughtered in some Mario Kart', next: 'spread_24', left: '70%', top: '65%', width: '15%', height: '12%', rotation: '1deg'  },
      ]
    },

    'spread_23': {
      image: '_images/Spread_23-art.png',
      bubbles: [
        {
          text: "You flip through the previous issue as you heat up some leftovers, getting caught up on the story. It's been a minute since you picked up this series and you're excited to pick it back up again.",
          left: '10%', top: '10%', width: '30%', height: '12%', rotation: '-1deg'
        },
        {
          text: "You take the new issue and your leftovers to your worn-in spot on the couch. Floppies always seem to fly by, and by the end of the issue you're starved for more. You pick up another half-read comic to try to fill the void.",
          left: '60%', top: '35%', width: '30%', height: '14%', rotation: '1deg'
        },
        {
          text: "Your cat finds an open spot next to you, demanding a few pets from you while you read. You start to get dozey, realizing how late it is already.",
          left: '10%', top: '60%', width: '30%', height: '10%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_19-20-23-beep.png',          trigger: 'bubble-start', index: 1 },
        { src: '_images/Spread_19-20-23-z1.png', trigger: 'bubble-start', index: 2, delay: 0    },
        { src: '_images/Spread_19-20-23-z2.png', trigger: 'bubble-start', index: 2, delay: 600  },
        { src: '_images/Spread_19-20-23-z3.png', trigger: 'bubble-start', index: 2, delay: 1200 },
        { src: '_images/Spread_19-20-23-z4.png', trigger: 'bubble-start', index: 2, delay: 1800 },
        { src: '_images/Spread_19-20-23-z5.png', trigger: 'bubble-start', index: 2, delay: 2400 },
        { src: '_images/Spread_19-20-23-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', left: '55%', top: '75%', width: '20%', height: '12%', rotation: '1deg' },
      ]
    },

    'spread_24': {
      image: '_images/Spread_24-art.png',
      bubbles: [
        {
          text: "You head up to your friend's apartment. They offer you a beer and their dog claims the spot between you two on the couch. You admittedly suck at Mario Kart, but so does your friend. You're in good company.",
          left: '10%', top: '10%', width: '30%', height: '14%', rotation: '-1deg'
        },
        {
          text: "You end on a high, placing in 4th place on Rainbow Road. A triumphant victory for your track record! You and your friend start to yawn, and you decide it's time to trek it home. You finish off your beer, give the doggo some smooches, and enjoy the crispy fall air as you walk home.",
          left: '60%', top: '45%', width: '30%', height: '16%', rotation: '1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_24-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: 'Call it a day', next: 'spread_25', left: '55%', top: '65%', width: '20%', height: '12%', rotation: '-1deg' },
      ]
    },

    'spread_25': {
      image: '_images/Spread_25-art.png',
      bubbles: [
        {
          text: "You change into comfy clothes and brush your teeth, noticing how quiet the city is around you. You turn the volume nearly off on a chill tv show and curl up in bed. Your cat joins you, laying at your feet, as is her ritual. You reflect on your day and fully relax. You think about how your time can truly never be wasted... as you drift off to sleep.",
          left: '10%', top: '10%', width: '30%', height: '22%', rotation: '-1deg'
        }
      ],
      overlays: [
        { src: '_images/Spread_25-optionbubbles.png', jitter: 'option-art', trigger: 'before-choices' },
      ],
      choices: [
        { label: "G'night", next: 'credits', left: '55%', top: '65%', width: '20%', height: '12%', rotation: '1deg' },
      ]
    }
  }
};
