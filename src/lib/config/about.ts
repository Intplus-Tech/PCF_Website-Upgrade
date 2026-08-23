// ---------------------------------------------------------------------------
// About Us page content.
// Hardcoded for now (same as the pastor bios). Every string lives here, so
// moving this to Sanity later means swapping the import — no JSX changes.
// ---------------------------------------------------------------------------

export type AboutTabId =
  | "work"
  | "destiny"
  | "values"
  | "beliefs"
  | "story";

/**
 * Swap these paths as the real photography arrives.
 * Defaults point at files already in /public so nothing 404s in the meantime.
 */
export const aboutImages = {
  sidebar: {
    work: "/we-preach-gospel.png",
    destiny: "/ministries-pics.png",
    values: "/Godmission-pics.png",
    beliefs: "/mediaholy-pics.jpg",
    story: "/about-banner.png",
  },
  workFeature: "/we-preach-gospel.png",
  destinyLadder: "/media-pics.png", // TODO: replace with the ladder photo
  valuesFeature: "/Godmission-pics.png",
  pastor: "/pstdavid-pics.png",
} as const;

export const aboutTabs: { id: AboutTabId; label: string; image: string }[] = [
  { id: "story", label: "Our Story", image: aboutImages.sidebar.story },
  { id: "beliefs", label: "Our Beliefs", image: aboutImages.sidebar.beliefs },
  { id: "values", label: "Our Values", image: aboutImages.sidebar.values },
  { id: "destiny", label: "Step Into Your Destiny", image: aboutImages.sidebar.destiny },
  { id: "work", label: "Work of the Church", image: aboutImages.sidebar.work },
];

// --- Work of the Church ----------------------------------------------------

export const workOfChurch = {
  quote:
    "Don't tell God how big your storm is, tell the storm how big your God is",
  heading: "We Preach the Gospel in Every Sermon",
  lead:
    "Every gathering points back to Jesus. Whether it's a Sunday morning, a midweek study, or a quiet conversation over coffee, the Gospel is the thread running through everything we do.",
  body:
    "We teach the Bible plainly and apply it honestly, so that faith becomes something you can live on Monday as much as Sunday. Come as you are — there's room for questions, room to grow, and room to belong.",
};

// --- Step Into Your Destiny ------------------------------------------------

export const destiny = {
  title: "Step into your destiny.",
  steps: ["Step OUT", "Step UP", "Step INTO"],
  callout:
    "The most exciting adventure of your life; let God help you reach your destiny in Him!",
  mission:
    "Our mission is to lead people into a growing relationship with Jesus Christ by creating meaningful worship, fostering authentic relationships, and faithfully serving both our local community and beyond. We live this out through our four core values.",
};

export const coreValues = [
  { title: "Faith", text: "Trusting God in all we do." },
  { title: "Community", text: "Walking together in love and grace." },
  { title: "Service", text: "Reaching beyond ourselves to care for others." },
  { title: "Growing", text: "Encouraging spiritual and personal transformation." },
];

// --- Our Values ------------------------------------------------------------

export const ourValues = {
  heading: "Our Values",
  text:
    "Everything we do flows from these beliefs. We are committed to being a Christ-centred, people-friendly church, living out our faith with purpose, love and unity.",
};

// --- Our Beliefs -----------------------------------------------------------

export type Belief = {
  title: string;
  reference: string;
  verse: string;
  body: string;
};

export const beliefs: Belief[] = [
  {
    title: "Godhead",
    reference: "1 John 5:7",
    verse:
      "For there are three that testify in heaven, the Father, the Son and the Holy Spirit, and these three are one.",
    body:
      "We believe in one God who exists eternally as Father, Son and Holy Spirit. God came to earth in the person of Jesus Christ, and after His resurrection and ascension, sent the Holy Spirit to guide and empower His people.",
  },
  {
    title: "Jesus Christ",
    reference: "Matthew 1:21",
    verse:
      "She will give birth to a son, and you are to give Him the name Jesus, because He will save His people from their sins.",
    body:
      "We believe Jesus is fully God and fully man. Born of a virgin, He lived a sinless life, died for the sins of the world, rose again on the third day, and ascended to Heaven where He intercedes for us. He will return physically and gloriously as King of Kings and Lord of Lords. Jesus is our Saviour, Healer, Baptiser and Coming King.",
  },
  {
    title: "Holy Spirit",
    reference: "John 16:8",
    verse:
      "He will convict the world of guilt in regard to sin and righteousness and judgement.",
    body:
      "We believe the Holy Spirit convicts us of sin, leads us into truth, glorifies Christ, and empowers believers with spiritual gifts and grace for daily living. He comforts, guides and equips us to do God's will.",
  },
  {
    title: "Salvation",
    reference: "Romans 10:9",
    verse:
      "If you confess with your mouth, 'Jesus is Lord,' and believe in your heart that God raised Him from the dead, you will be saved.",
    body:
      "Salvation is found in Jesus Christ alone — not in religion, works or tradition. We are saved when we repent, believe in Jesus, and confess Him as Lord. \u201cEveryone who calls on the name of the Lord will be saved.\u201d — Romans 10:13",
  },
  {
    title: "Baptism",
    reference: "2 Corinthians 5:17",
    verse:
      "If anyone is in Christ, he is a new creation; the old has gone, the new has come!",
    body:
      "We believe in baptism by full immersion for those who have personally chosen to follow Christ. It is a public declaration of faith, symbolising the death of the old life and the beginning of the new.",
  },
  {
    title: "Bible",
    reference: "2 Timothy 3:16",
    verse:
      "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    body:
      "We believe the Bible is inspired by God and is our final authority for faith and life. Through the Holy Spirit, Scripture guides, instructs and shapes how we live. If it is in the Bible, we believe it; if it is not, we question it.",
  },
  {
    title: "Prayer",
    reference: "James 5:16",
    verse: "The prayer of a righteous man is powerful and effective.",
    body:
      "We believe prayer is powerful and essential. Through prayer we align ourselves with God's will, see His purposes unfold, and experience His guidance and strength. Jesus teaches us to pray persistently and specifically.",
  },
  {
    title: "Worship",
    reference: "John 4:24",
    verse:
      "God is spirit, and His worshipers must worship in spirit and in truth.",
    body:
      "We believe worship is both a gathered expression and a daily lifestyle. We honour God with our hearts, minds and actions, loving Him with all our strength and reflecting His character in our relationships and choices.",
  },
  {
    title: "Evangelism",
    reference: "Matthew 28:19",
    verse: "Therefore go and make disciples of all nations.",
    body:
      "We believe every Christian is called to share the Gospel. We seek to reach our community, workplaces, families and world with the message of Jesus Christ, giving everyone the opportunity to respond to God's call.",
  },
  {
    title: "Order",
    reference: "1 Corinthians 14:40",
    verse: "Everything should be done in a fitting and orderly way.",
    body:
      "We believe the church should operate with biblical order. Spiritual gifts and worship should be expressed with love, respect and clarity, reflecting God's nature — not confusion.",
  },
];

// --- Our Story -------------------------------------------------------------

export type StoryChapter = {
  year: string;
  title: string;
  text: string;
  image: string;
};

export const storyChapters: StoryChapter[] = [
  {
    year: "1986",
    title: "The Beginning",
    text: "The Peoples Church began when Pastor George and Linda McKim moved to Falkirk to pioneer a new ministry. What started with just twelve people quickly grew, moving through several halls before finding a permanent home at Falkirk West Church.",
    image: "/about-banner.png",
  },
  {
    year: "1993",
    title: "Expanding Ministry",
    text: "As the ministry expanded, David Morrison — who had faithfully served from the very beginning — joined the team as Assistant Pastor. His steady leadership, genuine compassion, and commitment to the Gospel became a defining strength within church life.",
    image: "/findpeople-pics.png",
  },
  {
    year: "2006",
    title: "A New Chapter",
    text: "Leadership passed to Pastor David and his wife Elaine, marking the beginning of a new and exciting chapter. Under their guidance, the church continued to grow, adapt, and reach out to the surrounding communities.",
    image: "/Meetdavid-pics.jpg",
  },
  {
    year: "2010 & beyond",
    title: "Continuing the Journey",
    text: "Significant developments followed, including a welcoming café space in 2010 and modernised Sunday School facilities. Today, The Peoples Church continues to move forward with expectation — united, prayerful, and ready for all that God has yet to do.",
    image: "/media-pics.png",
  },
];

// --- Senior Pastor ---------------------------------------------------------

export const seniorPastor = {
  heading: "About Our Senior Pastor",
  paragraphs: [
    "Pastor David grew up in Port Glasgow and began his working life as an apprentice in the local shipyard. At 21, he committed his life to Jesus Christ, growing in faith through the encouragement of his church family and the teaching of his minister. In time, he sensed God calling him to Falkirk, where he joined The Peoples Church and later stepped into pastoral leadership. He became Assistant Pastor in 1993 and Senior Pastor in 2006 — a role he continues to serve in with gratitude and humility.",
    "What truly defines Pastor David, however, is his heart for people. He is passionate about helping individuals take the next step in their faith, whether through Sunday messages, mentoring, or simply sharing life. His down-to-earth approach makes spiritual growth feel natural and attainable, and he is intentional about creating opportunities for people of all ages to flourish.",
    "You'll often find him chatting with families after services, encouraging volunteers, cheering on the youth, or taking time for meaningful conversations. He values genuine relationships, celebrates milestones with joy, and carries a deep commitment to seeing people discover their God-given purpose.",
  ],
  quote: "Ministry is about people, not programs.",
};
