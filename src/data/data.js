import React from 'react';
import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";
import book4 from "../images/book4.png";
import { FaYoutube } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import lady_praising from "../images/lady_praising.jpeg";
import man_worshiping from "../images/man_worshiping.jpeg";
import lady_alter from "../images/lady_alter.jpeg"
import lady_worship from "../images/lady_worshiping.jpeg"
import man2man from "../images/man2man.png";
import bootcamp from "../images/bootcamp.png";
import communion_serv from "../images/communion_service.png";
import sunday_serv from "../images/sunday_serv.png";
import online_serv from "../images/online_serv.png";
import program from "../images/program.png";
import organizeHustle from "../images/organizeHustle.png";
import weedingGown from "../images/weddingGown.png";
import takeLead from "../images/takeLead.png";
import metamorphosis from "../images/metamophorsis.png";
import theologyTime from "../images/TheologyTime.png";
import lifePartner from "../images/lifePartner.png";
import offloadMarry from "../images/offloadMarry.png";
import marriedCheckout from "../images/marriedCheckout.png";
// import image1 from "../images/IMG1.jpg";
// import image2 from "../images/IMG2.jpg";
// import image3 from "../images/IMG3.jpg";
// import image4 from "../images/IMG4.jpg";
// import image5 from "../images/IMG5.jpg";
// import image6 from "../images/IMG6.jpg";
// import image7 from "../images/IMG7.jpg";
// import image8 from "../images/IMG8.jpg";
// import image9 from "../images/IMG9.jpg";
// import image10 from "../images/IMG10.jpg";
// import image11 from "../images/IMG11.jpg";
// import image12 from "../images/IMG12.jpg";

export const infoData = [
  {
    title: "RECENT SERMONS",
    btnText: "WATCH",
    icon: <FaYoutube className="mt-[-3px]" />,
    link: "https://www.youtube.com/@houseontherockaba4362"
  },
  {
    title: "PARTNER WITH US",
    btnText: "GIVE",
    icon: <BiSolidDonateHeart className="mt-[-3px]" />,
    link: "/partner"
  },
  {
    title: "CITH CENTERS NEAR YOU",
    btnText: "LOCATIONS",
    icon: <IoLocation className="mt-[-3px]" />,
    link: "/church_in_the_home"
  },
];

export const resources = [
  {
    img: book1,
    link: "https://annyikebudu.org/course-details.php?training_slug=pick-it-up-1634896164",
  },
  {
    img: book2,
    link: "https://annyikebudu.org/course-details.php?training_slug=theology-of-work-1634034438",
  },
  {
    img: book3,
    link: "https://annyikebudu.org/course-details.php?training_slug=my-husband-doesn-t-love-me-1634900072",
  },
  {
    img: book4,
    link: "https://annyikebudu.org/course-details.php?training_slug=the-mirace-worker-1633783406",
  },
  {
    img: organizeHustle,
    link: "https://annyikebudu.org/course-details.php?training_slug=organize-your-hustle-1642848559",
  },
  {
    img: weedingGown,
    link: "https://annyikebudu.org/course-details.php?training_slug=who-stole-my-wedding-gown-1634029514",
  },
  {
    img: takeLead,
    link: "https://annyikebudu.org/course-details.php?training_slug=take-the-lead-1634682433",
  },
  {
    img: metamorphosis,
    link: "https://annyikebudu.org/course-details.php?training_slug=metamorphosis-1634683687",
  },
  {
    img: theologyTime,
    link: "https://annyikebudu.org/course-details.php?training_slug=the-theology-of-time-1633776595",
  },
  {
    img: lifePartner,
    link: "https://annyikebudu.org/course-details.php?training_slug=how-to-choose-a-life-partner-1634032446",
  },
  {
    img: offloadMarry,
    link: "https://annyikebudu.org/course-details.php?training_slug=don-t-get-married-until-you-offload-1633780335",
  },
  {
    img: marriedCheckout,
    link: "https://annyikebudu.org/course-details.php?training_slug=don-t-get-married-until-you-check-him-out-1633778760",
  },
];

export const socialImages = [
  {
    img: lady_alter,
  },
  {
    img: man_worshiping,
  },
  {
    img: lady_praising,
  },
  {
    img: lady_worship,
  },
  // {
  //   img: image1,
  // },
  // {
  //   img: image2,
  // },
  // {
  //   img: image3,
  // },
  // {
  //   img: image4,
  // },
  // {
  //   img: image5,
  // },
  // {
  //   img: image6,
  // },
  // {
  //   img: image7,
  // },
  // {
  //   img: image8,
  // },
  // {
  //   img: image9,
  // },
  // {
  //   img: image10,
  // },
  // {
  //   img: image11,
  // },
  // {
  //   img: image12,
  // },
]

export const event = [
  {
    img: sunday_serv,
  },
  {
    img: communion_serv,
  },
  {
    img: man2man,
  },
  {
    img: bootcamp,
  },
  {
    img: program,
  },
  {
    img: online_serv,
  },
]

export const contactInfo = {
  phone: '+234 803 7260 161',
  email: 'INFO.HOTRABA@GMAIL.COM',
  address: [
      'THE LEADERSHIP CENTER,',
      '3 COVENANT CLOSE BEHIND',
      'RUFUS OBI CHEMIST',
      'ABIA STATE',
  ],
  serviceTimes: {
      sundays: [
          'AT 8:00 AM - BUSINESS & LEADERSHIP SERVICE',
          'AT 9:30 AM - SUPER CELEBRATION SERVICE',
      ],
      thursdays: [
          'AT 5:45 PM - MIDWEEK SERVICE',
      ],
      saturdays: [
        'AT 8:00 AM - MAN2MAN BREAKFAST MEETING',
    ],
  },
  resources: [
      { title: 'WATCH SERMONS', platform: 'YOUTUBE', link: "https://www.youtube.com/@houseontherockaba4362" },
      { title: 'LISTEN AND DOWNLOAD SERMONS', platform: 'TELEGRAM', link: "https://t.me/hotraba" },
  ],
};

export const aboutInfo = [
  {
    title: "ABOUT US",
    desc: "House on The Rock Aba, a vibrant branch of House on The Rock, was inaugurated on March 10th, 2010. With a thriving community of over 2,000 parishioners, the church has become a beacon of excellence and innovative ministry in the heart of Aba.",
    id: 1,
  },
  {
    title: "VISION:",
    list1: "A VOICE OF EXCELLENCE",
    list2: "HAND OF POWER",
    list3: "BRIDGE OF HOPE",
    id: 2,
  },
  {
    title: "MISSION:",
    desc: "RASING TRANSFORMATIONAL LEADERS",
    id: 3,
  },
  {
    title: "COMMITMENT:",
    list1: "Fostering a spirit of excellence in all aspects of our ministry.",
    list2: "Equipping individuals to become leaders who transform their communities.",
    list3: "Embracing innovative approaches to spread the Gospel message.",
    id: 4,
  },
]

export const cithData = [
  {
    location: 'No. 9, Aguwa Street, Off Ovom Street Opposite First Bank, Ogbor Hill',
    leader: 'Osondu Chiedozie',
    contactNumber: '08030554267',
  },
  {
    location: 'No. 84, Ibadan Street Road Off Ngwa Road',
    leader: 'Grace Kalu Anagha',
    contactNumber: '08035949048',
  },
  {
    location: 'No. 3, Obiehie Street Off Calabar Street, GRA',
    leader: 'Samuel Balogun',
    contactNumber: '08134959068',
  },
  {
    location: 'No. 1, Peter Onono Off Sacred Heart, Faulks Road',
    leader: 'Marvellous Unachukwu',
    contactNumber: '07033538215',
  },
  {
    location: 'No. 3, Alvan Ikoku Avenue Off PZ Road, Eziama',
    leader: 'Chibueze Anosike',
    contactNumber: '08036296120',
  },
  {
    location: 'No. 48b, Egbelu Street Off Immaculate Avenue, Umungasi',
    leader: 'Favour Ben Emeka',
    contactNumber: '07065103773',
  },
  {
    location: 'No. 13, Onyeguchi Street Off Umuocham Road',
    leader: 'Mrs. Lizzy Emuraye',
    contactNumber: '09074219471',
  },
  {
    location: 'No. 40 Umuimo Road off Aforule Opposite Romalex Hospital',
    leader: 'Min. Chidiebere Miracle',
    contactNumber: '08084888404',
  },
  {
    location: 'No. 3, Nnochirionye Street Off Umuchichi Council Hall',
    leader: 'Chris Njoku',
    contactNumber: '08068408594',
  },
  {
    location: 'No. 9, Ndukwe Street Off St. Paul’s Anglican Church, Kamalu By Star Paper Mill',
    leader: 'Zion Nwachukwu',
    contactNumber: '08142652468',
  },
  {
    location: 'No. 6, Maduforo Off Orji Street, Umule Rd.',
    leader: 'Ikechukwu Ekpendu',
    contactNumber: '07030378722',
  },
  {
    location: 'No. 17, Prof. O C NWogu Close, Off Afule Rd.',
    leader: 'Tony Ogbonna Miss Ifeyinwa Samuel',
    contactNumber: '08134417990 (08164111224)',
  },
  {
    location: 'No. 14B, Ama Sabbath Road By 214 Aba Owerri Road, Opposite Crunchies Abayi, Behind SDA',
    leader: 'Stanley Erondu Ekeoma',
    contactNumber: '08166440313',
  },
  {
    location: 'No. 171, Tenant Road, By Georges, Close To CS Park, Aba',
    leader: 'Ogechi Peculiar',
    contactNumber: '08181807270',
  },
  {
    location: 'No. 12, Piko Lane By Ama Double Okpulu Umuobo',
    leader: 'Victor Enyinnaya',
    contactNumber: '07065755799',
  },
  {
    location: 'Onugo Heaven Estate Behind St. Raphael Catholic Church Okpulu Umuobo Through Ama Double (Estate Vice Chairman Residence)',
    leader: 'Peter Udensi',
    contactNumber: '08037639474',
  },
  {
    location: 'No. 142, Aba Owerri Road, Abayi After Rufus Obi Chemist',
    leader: 'Min, Henry Iwunze',
    contactNumber: '09035499378',
  },
  {
    location: 'No. 14, Redeemers Street Off World Bank Housing Estate Off Umuocham (LA Hero Close To Chrispat Hospital)',
    leader: 'Uche Mgbeahuruike',
    contactNumber: '08057770174',
  },
  {
    location: 'No. 52B, Udeagbala Road Opposite Avenue Transformer 3rd Floor Back',
    leader: 'Mr. Chiemela',
    contactNumber: '08036653497',
  },
  {
    location: 'No. 24, Nicholas Off Brass Adjacent Abia Poly',
    leader: 'Bethel Godswill',
    contactNumber: '08132495659',
  },
  {
    location: 'No. 71, Umule Road Second Floor',
    leader: 'Mr. Ogbonna Ajah',
    contactNumber: '08142652468',
  },
  {
    location: 'No. 12/16, Emereole Street Umuode Village, Osisioma Ngwa LGA (Close To Mercy Gate Hospital Road)',
    leader: 'Enyinnaya Victor',
    contactNumber: '07065755799',
  },
];
