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
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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

export { usersData, messagesData };
