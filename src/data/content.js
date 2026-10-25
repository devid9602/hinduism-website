// All site content lives here. Edit this file to update the site —
// you should not need to touch the components.

export const channel = {
  name: "Blossom Within",
  handle: "@Blossomwithincreations",
  url: "https://www.youtube.com/@Blossomwithincreations",
  instagram: "https://www.instagram.com/blossomm_withinn",
  email: "nakhdu1729@gmail.com",
  tagline: "वेद, उपनिषद और वो सवाल जिनसे हम बचते हैं",
};

// The hero question. Change this when a new video deserves the front page.
export const hero = {
  question: "आत्मा अमर है,\nतो भटकता कौन है?",
  standfirst:
    "हर हफ़्ते एक कथा — वेदों और उपनिषदों से, बिना डर और बिना दिखावे के। " +
    "सुनने के लिए बनाई गई, देखने के लिए नहीं।",
};

// The signature scroll sequence — Yajnavalkya's answer to Shakalya,
// from the Brihadaranyaka Upanishad, descending step by step.
export const descent = {
  opening: "राजा जनक के दरबार में, शाकल्य ने एक ही सवाल बार-बार पूछा।",
  question: "देवता कितने हैं?",
  steps: [
    { count: "3306", note: "याज्ञवल्क्य ने कहा — तीन हज़ार तीन सौ छह।" },
    { count: "33", note: "शाकल्य नहीं रुके। ठीक-ठीक बताइए।" },
    { count: "6", note: "वही सवाल, फिर से।" },
    { count: "3", note: "और फिर से।" },
    { count: "2", note: "सभा अब चुप थी।" },
    { count: "डेढ़", note: "कोई ज्ञानी देवताओं की संख्या डेढ़ कैसे बताता है।" },
    { count: "एक", note: "और असल में — एक। वो प्राण है। वो चेतना है।" },
  ],
  close:
    "तैंतीस कोटि का अर्थ तैंतीस करोड़ नहीं था। कोटि यानी प्रकार। " +
    "एक शब्द की भूल, और सदियों का भ्रम।",
};

export const about = {
  heading: "यहाँ क्या मिलेगा",
  body: [
    "इस चैनल पर कोई भविष्यवाणी नहीं होती, कोई उपाय नहीं बेचा जाता, और किसी को डराया नहीं जाता।",
    "यहाँ सिर्फ़ कथाएँ हैं — वही जो हज़ारों साल से गुरु से शिष्य तक चलती आई हैं। " +
      "और उनके साथ वो सवाल, जिनका जवाब शास्त्र में है, पर हम तक कभी पहुँचा नहीं।",
    "हर कथा के पीछे ग्रंथ का हवाला है। जहाँ परंपराएँ आपस में अलग राय रखती हैं, " +
      "वहाँ दोनों बताई जाती हैं — किसी एक को सही ठहराकर दूसरी को छोटा नहीं किया जाता।",
  ],
};

// Add the 11-character YouTube id to open a video directly.
// Leave it null and the card links to the channel instead.
export const videos = [
  {
    title: "दासी पुत्र कैसे बना महान ऋषि?",
    series: "उपनिषद की कहानियाँ",
    source: "छांदोग्य उपनिषद",
    length: "10:54",
    id: null,
    scale: "large",
  },
  {
    title: "कृष्ण ने गीता में जाति के बारे में क्या कहा था?",
    series: "सनातन धर्म पर बड़े सवाल",
    source: "भगवद्गीता 4.13",
    length: "6:52",
    id: null,
    scale: "large",
  },
  {
    title: "क्या सनातन धर्म में सचमुच 33 करोड़ देवता हैं?",
    series: "सनातन धर्म पर बड़े सवाल",
    source: "बृहदारण्यक उपनिषद",
    length: "8:27",
    id: null,
    scale: "small",
  },
  {
    title: "वेदों की 1000 शाखाएँ थीं — बाक़ी कहाँ खो गईं?",
    series: "वेद दर्शन",
    source: "पतंजलि, महाभाष्य",
    length: "7:59",
    id: null,
    scale: "small",
  },
  {
    title: "आत्मा अमर है, तो फिर भटकता कौन है?",
    series: "सनातन धर्म पर बड़े सवाल",
    source: "गीता 15.8, गरुड़ पुराण",
    length: "14:30",
    id: null,
    scale: "small",
  },
  {
    title: "जब एक स्त्री ने भरी सभा में सबसे बड़े ज्ञानी को रोक दिया",
    series: "उपनिषद की कहानियाँ",
    source: "बृहदारण्यक उपनिषद",
    length: "8:33",
    id: null,
    scale: "small",
  },
  {
    title: "मृत्यु का डर कैसे खत्म करें?",
    series: "उपनिषद की कहानियाँ",
    source: "कठोपनिषद",
    length: "7:08",
    id: null,
    scale: "small",
  },
  {
    title: "आपके भीतर कौन है जो सब कुछ देख रहा है?",
    series: "उपनिषद की कहानियाँ",
    source: "मुण्डक उपनिषद",
    length: "6:14",
    id: null,
    scale: "small",
  },
];

// Add each playlist's YouTube list id to link it directly.
export const series = [
  {
    title: "सनातन धर्म पर बड़े सवाल",
    en: "Big Questions on Sanatan Dharma",
    note: "जाति, नारी, मूर्तिपूजा — वो सवाल जिनसे बचा नहीं जाता।",
    count: 5,
    listId: null,
  },
  {
    title: "उपनिषद की कहानियाँ",
    en: "Upanishad Stories",
    note: "सत्यकाम, नचिकेता, गार्गी — और उनके सवाल।",
    count: 7,
    listId: null,
  },
  {
    title: "वेद दर्शन",
    en: "Vedas Explained",
    note: "वेदत्रयी से चतुर्वेद तक, और शाखाओं का संरक्षण।",
    count: 5,
    listId: null,
  },
  {
    title: "वेदांत दर्शन",
    en: "Vedanta Darshan",
    note: "अद्वैत, विशिष्टाद्वैत और द्वैत — तीन दृष्टियाँ।",
    count: 3,
    listId: null,
  },
  {
    title: "आस्तिक दर्शन",
    en: "Six Orthodox Schools",
    note: "न्याय, वैशेषिक, सांख्य, योग, मीमांसा, वेदांत।",
    count: 6,
    listId: null,
  },
  {
    title: "नास्तिक दर्शन",
    en: "Unorthodox Schools",
    note: "चार्वाक, बौद्ध और जैन — वेद-प्रामाण्य के बाहर।",
    count: 3,
    listId: null,
  },
];

export const shruti = {
  heading: "श्रुति",
  body:
    "वेद लिखे नहीं गए थे। वे सुने गए थे। न कागज़, न छपाई — सिर्फ़ एक आवाज़, " +
    "और सुनने वाले के भीतर बनती हुई पूरी दुनिया।",
  body2:
    "इसीलिए यहाँ की हर कथा सुनने के लिए बनी है। आँखें बंद कीजिए, " +
    "और उसी पुरानी परंपरा में शामिल हो जाइए।",
};
