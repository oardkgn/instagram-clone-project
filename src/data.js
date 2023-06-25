const usersData = [
  {
    id: 1,
    name: "Rita Benford",
    src: "https://randomuser.me/api/portraits/women/57.jpg",
    desc: "Coastal False Asphodel",
  },
  {
    id: 2,
    name: "Faustina Schlagtmans",
    src: "https://randomuser.me/api/portraits/women/3.jpg",
    desc: "Richardson's Pondweed",
  },
  {
    id: 3,
    name: "Merill Kobke",
    src: "https://randomuser.me/api/portraits/men/76.jpg",
    desc: "West Indian Beaksedge",
  },
  {
    id: 4,
    name: "Blakeley Melmore",
    src: "https://randomuser.me/api/portraits/men/5.jpg",
    desc: "Texas Fluffgrass",
  },
  {
    id: 5,
    name: "Melody Pordall",
    src: "https://randomuser.me/api/portraits/men/90.jpg",
    desc: "Howelliella",
  },
  {
    id: 6,
    name: "Aggie Gedge",
    src: "https://randomuser.me/api/portraits/women/91.jpg",
    desc: "Granite Hedgehyssop",
  },
  {
    id: 7,
    name: "Wenona Egerton",
    src: "https://randomuser.me/api/portraits/men/75.jpg",
    desc: "Cucumis",
  },
  {
    id: 8,
    name: "Lotti Elderkin",
    src: "https://randomuser.me/api/portraits/men/77.jpg",
    desc: "Pale Desert-thorn",
  },
  {
    id: 9,
    name: "Chaddie Konneke",
    src: "https://randomuser.me/api/portraits/women/33.jpg",
    desc: "Grimmia Dry Rock Moss",
  },
  {
    id: 10,
    name: "Claretta Beardow",
    src: "https://randomuser.me/api/portraits/men/79.jpg",
    desc: "Island Wallflower",
  },
  {
    id: 11,
    name: "Doti Brettor",
    src: "https://randomuser.me/api/portraits/men/81.jpg",
    desc: "Dune Willow",
  },
  {
    id: 12,
    name: "Lucias Herety",
    src: "https://randomuser.me/api/portraits/women/28.jpg",
    desc: "Horehound",
  },
  {
    id: 13,
    name: "Nicol Frenzl",
    src: "https://randomuser.me/api/portraits/men/37.jpg",
    desc: "Oregon False Goldenaster",
  },
  {
    id: 14,
    name: "Charo Nuschke",
    src: "https://randomuser.me/api/portraits/women/19.jpg",
    desc: "Rogue Canyon Rockcress",
  },
  {
    id: 15,
    name: "Mathilde Vella",
    src: "https://randomuser.me/api/portraits/men/82.jpg",
    desc: "Clauzadeana",
  },
  {
    id: 16,
    name: "Alisun Grayham",
    src: "https://randomuser.me/api/portraits/women/60.jpg",
    desc: "Calder's Rockcress",
  },
  {
    id: 17,
    name: "Zerk Gentner",
    src: "https://randomuser.me/api/portraits/women/10.jpg",
    desc: "L'herminier's Twinsorus Fern",
  },
  {
    id: 18,
    name: "Arlie Davenport",
    src: "https://randomuser.me/api/portraits/lego/0.jpg",
    desc: "Christmastree",
  },
  {
    id: 19,
    name: "Coralyn Coppock.",
    src: "https://randomuser.me/api/portraits/women/26.jpg",
    desc: "Yellow Pincushion",
  },
  {
    id: 20,
    name: "Brigit Shoulder",
    src: "https://randomuser.me/api/portraits/lego/2.jpg",
    desc: "Hartweg's Twinevine",
  },
  {
    id: 21,
    name: "Tybalt Davison",
    src: "https://randomuser.me/api/portraits/women/72.jpg",
    desc: "Stinking Milkvetch",
  },
  {
    id: 22,
    name: "Hertha MacCauley",
    src: "https://randomuser.me/api/portraits/men/36.jpg",
    desc: "Placa Chiquitu",
  },
  {
    id: 23,
    name: "Cedric Fausch",
    src: "https://randomuser.me/api/portraits/lego/6.jpg",
    desc: "Cream Milkvetch",
  },
  {
    id: 24,
    name: "Huey Haylands",
    src: "https://randomuser.me/api/portraits/men/82.jpg",
    desc: "Yellow Necklacepod",
  },
  {
    id: 25,
    name: "John Whenham",
    src: "https://randomuser.me/api/portraits/women/85.jpg",
    desc: "Woodland Arctic Cudweed",
  },
  {
    id: 26,
    name: "Judie Gauvin",
    src: "https://randomuser.me/api/portraits/women/81.jpg",
    desc: "Redstem",
  },
  {
    id: 27,
    name: "Jerrylee Stallwood",
    src: "https://randomuser.me/api/portraits/lego/1.jpg",
    desc: "Sanddune Wallflower",
  },
  {
    id: 28,
    name: "Nikos Squelch",
    src: "https://randomuser.me/api/portraits/women/70.jpg",
    desc: "Rocky Mountain Lousewort",
  },
  {
    id: 29,
    name: "Cazzie Fouch",
    src: "https://randomuser.me/api/portraits/lego/3.jpg",
    desc: "Wart Lichen",
  },
  {
    id: 30,
    name: "Griffith Speir",
    src: "https://randomuser.me/api/portraits/men/71.jpg",
    desc: "Bearded Grasspink",
  },
];

const messagesData = [
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/defaultProfileImg.jpg",
    },
    message: "Hey, how are you doing?",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "I'm good, thanks! How about you?",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "I'm doing great too!",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "That's awesome to hear!",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "By the way, did you watch the new movie?",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "Not yet. Is it any good?",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "Yes, it's amazing! You should definitely watch it.",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "I'll check it out. Thanks for the recommendation!",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "You're welcome! Let me know how you like it.",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "Sure, I'll definitely give you my feedback.",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "Sounds good. Enjoy the movie!",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "Thank you! Have a great day!",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "You too!",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "Hey, how are you doing?",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "I'm good, thanks! How about you?",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "I'm doing great too!",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "That's awesome to hear!",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "By the way, did you watch the new movie?",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message: "Not yet. Is it any good?",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "Yes, it's amazing! You should definitely watch it.",
  },
  {
    from: {
      id: "93KntdnRFffnlyJlSYCGK7vj9Wv1",
      name: "Arda Akdoğan",
      username: "ardakdgn",
      avatar_url: "public/public/defaultProfileImg.jpg",
    },
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message: "Sure, I'll definitely give you my feedback.",
  },
  {
    from: {
      id: "93KsdczdaDssdasKkdaFAasdmfa2",
      name: "Rita Benford",
      username: "ritaB",
      avatar_url: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];


const posts = [
  {
    from: {
      name: "frontendjoe",
      pic: "data:image/jpeg;base64,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",
      stories: true,
    },
    images: [
      "https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1035103/pexels-photo-1035103.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3850216/pexels-photo-3850216.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    likes: 162,
    time: 41,
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    comments:[
      {
        from:"steglichmaximilian",
        comment:"Why is Canada image2? My Monk is speaking 😂"
      },
      {
        from:"frontendjoe",
        comment:"@steglichmaximilian typo 🤣🤣🤣"
      }
    ]
  },
  {
    from: {
      name: "deepoceancode",
      pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSK0PVgNOAzutjXUpdf8zn2d0KS6F9d4gxEWcVXQuIsd6SQbMTU",
      stories: false,
    },
    images: [
      "https://images.pexels.com/photos/10549516/pexels-photo-10549516.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/10549262/pexels-photo-10549262.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/17245098/pexels-photo-17245098/free-photo-of-toyota-supra-on-a-parking-lot-on-the-roof-at-night.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    likes: 322,
    time: 123,
    desc: "Daha performanslı ve sürdürülebilir kod yazmanın sırrı SOLID prensiplerini sizler için açıkladım.🙌..Yazarken bu kurallara dikkat ediyor musunuz??💃 ",
    comments:[
      {
        from:"WanderlustAdventurer",
        comment:"Just got my hands on the Hyundai Creta - loving the sleek design and powerful performance! 💯🚘 #NewRide #CretaLove"
      },
      {
        from:"BlissfulSoulJourney",
        comment:"Impressed by the Hyundai Creta's fuel efficiency - it's saving me big on daily commutes! ⛽💰 #EconomicalSUV #FuelSaver"
      }
    ]
  },
  {
    from: {
      name: "voleapp",
      pic: "data:image/jpeg;base64,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",
      stories: true,
    },
    images: [
      "https://images.pexels.com/photos/2682543/pexels-photo-2682543.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    likes: 1262,
    time: 145,
    desc: "🤝 Al Hilal ile Chelsea, Kalidou Koulibaly transferinde büyük oranda anlaştı. Oyuncu, yarın sağlık kontrollerinden geçecek.",
    comments:[
      {
        from:"WanderlustDreamer",
        comment:"Wow, what an incredible goal by Messi! 🚀⚽️ The way he weaves through defenders is pure magic. #FootballGenius #MessiMagic"
      },
      {
        from:"RadiantSoulful",
        comment:"The intensity of this match is off the charts! ⚡️🔥 Both teams are giving it their all. Can't wait to see who comes out on top! #FootballFever #ThrillingMatch"
      }
    ]
  },
];

export { usersData, messagesData, posts };

