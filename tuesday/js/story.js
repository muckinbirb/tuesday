const story = {
  start: "page_01",
  title: "Choose Your Own Day",

  pages: {
    "page_01": {
      layout: "single",
      image: "assets/pages/placeholder.png",
      text: "It started like any other morning. The city hummed quietly outside your window.",
      music: "theme_main",
      choices: [
        { label: "Get up and face the day", next: "page_02a" },
        { label: "Stay in bed a little longer", next: "page_02b" }
      ]
    },

    "page_02a": {
      layout: "single",
      image: "assets/pages/placeholder.png",
      text: "You're up. Coffee first — always coffee first.",
      choices: [
        { label: "Head outside", next: "page_03a" },
        { label: "Check your phone", next: "page_03b" }
      ]
    },

    "page_02b": {
      layout: "spread",
      images: [
        "assets/pages/placeholder.png",
        "assets/pages/placeholder.png"
      ],
      text: "Ten more minutes. Then ten more after that.",
      choices: [
        { label: "Eventually get up", next: "page_02a" },
        { label: "Go back to sleep entirely", next: "page_end_b" }
      ]
    },

    "page_03a": {
      layout: "single",
      image: "assets/pages/placeholder.png",
      text: "The air is crisp. Something feels different today.",
      choices: [
        { label: "Follow the feeling", next: "page_end_a" },
        { label: "Ignore it and carry on", next: "page_03b" }
      ]
    },

    "page_03b": {
      layout: "single",
      image: "assets/pages/placeholder.png",
      text: "Same as always. And somehow, that's okay.",
      choices: [
        { label: "Continue", next: "page_end_a" }
      ]
    },

    "page_end_a": {
      layout: "single",
      image: "assets/pages/placeholder.png",
      text: "You made it through. Not every day needs to be extraordinary.",
      choices: []
    },

    "page_end_b": {
      layout: "single",
      image: "assets/pages/placeholder.png",
      text: "Sleep reclaims you. The day can wait.",
      choices: []
    }
  }
};
