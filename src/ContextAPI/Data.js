import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";

export const discoverMentorsData = [
  {
    id: 1,
    img: person1,
    name: "Osama Megahed",
    jop: "Full Stack Developer",
    stars: 4.5,
    reviews: 289,
    owner: "osama_megahed"
  },
  {
    id: 2,
    img: person2,
    name: "Ahmed Khaled",
    jop: "Front-end Developer",
    stars: 4.2,
    reviews: 219,
    owner: "ahmed_khaled"
  },
  {
    id: 3,
    img: person3,
    name: "Ayman Mostafa",
    jop: "UX Designer",
    stars: 3.8,
    reviews: 124,
    owner: "ayman_mostafa"
  },
  {
    id: 4,
    img: person4,
    name: "Abdo Ahmed",
    jop: "Graphic Designer",
    stars: 4.7,
    reviews: 222,
    owner: "abdo_ahmed"
  },
  {
    id: 5,
    img: person4,
    name: "Mahmoud Sobh Ervan",
    jop: "Graphic Designer",
    stars: 4.7,
    reviews: 222,
    owner: "mahmoud_sobh"
  },
];
export const recentOppoData = [
  {
    id: "Osama_1",
    jop: "Website UI design implementation ",
    mentor: "Osama Megahed",
    props: [
      "Certificate",
      "Remote",
      "Open Duration",
      "Paid",
      "Might get hired",
    ],
    description:
      "Looking for someone who's in project manegment related tasks and who is eager to gain knowledge and have fun during the experience",
  },
  {
    id: "Ahmed_2",
    jop: "Graphic Designer",
    mentor: "Ahmed Khaled",
    props: [
      "Certificate",
      "onSite",
      "Open Duration",
      "for free",
      "Might get hired",
    ],
    description:
      "Looking for someone who's in project manegment related tasks and who is eager to gain knowledge and have fun during the experience",
  },
];
export const mentoringRequestsData = [
  {
    id: "Ahmed_2",
    jop: "Front end development",
    name: "Khadija Saif",
    description: `I'm a recent computer science graduate from khartoum university,
        intrested in front end development and UI/UX
        looking for a mentor to guide me through becoming a proficional
        front end developer `,
    duration: "2 months",
    paid: "Yes",
    lookingFor: "Yes",
    experience: "none",
  },
  {
    id: "Ayman_3",
    jop: "Graphic designer",
    name: "Osama Megahed",
    description: `I'm a recent computer science graduate from khartoum university,
        intrested in front end development and UI/UX
        looking for a mentor to guide me through becoming a proficional
        front end developer `,
    duration: "7 months",
    paid: "No",
    lookingFor: "Yes",
    experience: "2 months",
  },
];
export const accordionData = [
  {
    id: 1,
    header: "How much does it cost to book a mentor?",
    content: `Absolutely nothing. Isn't that amazing? We are a community on a mission to
  democratise mentorship for all, at no cost.`,
  },
  {
    id: 2,
    header: "What is a no-show? What is a no-show policy?",
    content: `A no-show is defined as missing your scheduled appointment without
    informing the other party As a community on a mission to democratize
    mentorships, we take a serious commitment towards abuse and behaviour
    that goes against the trust and safety of our community. This is why we
    developed our no-show policy.
    `,
  },
  {
    id: 3,
    header: "How long is the review process for a mentor application?",
    content: `A no-show is defined as missing your scheduled appointment without
    informing the other party As a community on a mission to democratize
    mentorships, we take a serious commitment towards abuse and behaviour
    that goes against the trust and safety of our community. This is why we
    developed our no-show policy.
    `,
  },
  {
    id: 4,
    header: "Is the timezone in my booking reflected correctly?",
    content: `A no-show is defined as missing your scheduled appointment without
    informing the other party As a community on a mission to democratize
    mentorships, we take a serious commitment towards abuse and behaviour
    that goes against the trust and safety of our community. This is why we
    developed our no-show policy.
    `,
  },
  {
    id: 5,
    header: "How do I change my email address?",
    content: `A no-show is defined as missing your scheduled appointment without
    informing the other party As a community on a mission to democratize
    mentorships, we take a serious commitment towards abuse and behaviour
    that goes against the trust and safety of our community. This is why we
    developed our no-show policy.
    `,
  },
];
export const lookinOptionsData = [
  { value: "Mentor", label: "Mentor" },
  { value: "Mentee", label: "Mentee" },
];
export const designationOptionsData = [
  { value: "Computer Science", label: "Computer Science" },
  { value: "Graphic Design", label: "Graphic Design" },
  { value: "Computer Engineering", label: "Computer Engineering" },
  {
    value: "Electronics and Communications",
    label: "Electronics and Communications",
  },
];
export const mentorshipsData = [
  {
    id: "Osama_1",
    position: "Mentor",
    stars: 5,
    name: "Osama Megahed",
    jop: "Front-end",
    experience: "Experience",
    city: "Cairo",
    owner: "osama_megahed",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
     used to demonstrate the visual form of a document or a typeface without relying on 
     meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    isCertificate: false,
    isPaid: true,
    isHired: false,
    paid: "200 $/h",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],



  },
  {
    id: "Ahmed_2",
    position: "Mentor",
    stars: 3,
    name: "Ahmed Khaled",
    jop: "Front-end",
    experience: "Experience",
    city: "Alexandria",
    owner: "ahmed_khaled",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: false,
    isPaid: true,
    isHired: true,
    certificate: "Awarded",
    paid: "150 $/h",
    location: "onSite",
    hired: "No",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
  {
    id: "Ayman_3",
    position: "Mentor",
    stars: 4,
    name: "Ayman Mostafa",
    jop: "Back-end",
    experience: "Experience",
    city: "Cairo",
    owner: "ayman_mostafa",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: true,
    isPaid: false,
    isHired: true,
    certificate: "Awarded",
    paid: "00.0",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
  {
    id: "Abd-Elrahman_4",
    position: "Mentor",
    stars: 2,
    name: "Abd-Elrahman Ahmed",
    jop: "Back-end",
    experience: "No-Experience",
    city: "Alexandria",
    owner: "abdo_ahmed",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: true,
    isPaid: true,
    isHired: false,
    certificate: "Awarded",
    paid: "20 $/h",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
  {
    id: "Mahmoud_5",
    position: "Mentor",
    stars: 4,
    name: "Mahmoud Sobh",
    jop: "UI/UX",
    experience: "Experience",
    city: "Alexandria",
    owner: "mahmoud_sobh",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: false,
    isPaid: true,
    isHired: false,
    certificate: "Awarded",
    paid: "200 $/h",
    location: "Remote",
    hired: "No",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
  {
    id: "Alaa_6",
    position: "Mentor",
    stars: 5,
    name: "Alaa Hafez",
    jop: "Graphic Designer",
    experience: "Experience",
    city: "Alexandria",
    owner: "alaa_hafez",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: true,
    isPaid: false,
    isHired: false,
    certificate: "Awarded",
    paid: "00.0",
    location: "onSite",
    hired: "Yes",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
  {
    id: "Esraa_7",
    position: "Mentor",
    stars: 3,
    name: "Esraa Gamal",
    jop: "UI/UX",
    experience: "Experience",
    city: "Alexandria",
    owner: "esraa_gamal",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: false,
    isPaid: false,
    isHired: false,
    certificate: "Awarded",
    paid: "00.0",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
  {
    id: "Haifa_8",
    position: "Mentor",
    stars: 2,
    name: "Haifa Munir",
    jop: "Graphic Designer",
    experience: "Experience",
    city: "Cairo",
    owner: "haifaa_munir",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    isCertificate: true,
    isPaid: true,
    isHired: true,
    certificate: "Awarded",
    paid: "200 $/h",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    responsibilities: ["write software applications", "write software applications", "write software applications"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    expected: ["an opportunity to work with us", "an opportunity to work with us", "an opportunity to work with us"],

  },
]
export const mentorsData = [
  {
    owner: "osama_megahed",
    name: "Osama Megahed",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],
  },
  {
    owner: "ahmed_khaled",
    name: "Ahmed Khaled",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "ahmed_khaled2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "Graphic Engineer",
        duration: {
          start: 2015,
          end: 2016,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2017,
          end: 2018,
        },

      }
    ],
    skills: ["Photoshop", "Arduino", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],
  },
  {
    owner: "ayman_mostafa",
    name: "Ayman Mostafa",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],

  },
  {
    owner: "abdo_ahmed",
    name: "Abod Ahmed",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],

  },
  {
    owner: "mahmoud_sobh",
    name: "Mahmoud Sobh",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],
  },
  {
    owner: "alaa_hafez",
    name: "Alaa Hafez",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],

  },
  {
    owner: "esraa_gamal",
    phone: "01127796848",
    name: "Esraa Gamal",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],

  },
  {
    owner: "haifaa_munir",
    name: "Haifaa Munir",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],
  },
]
export const menteeshipsData = [
  {
    id: "1_1",
    position: "Mentee",
    stars: 5,
    name: "Ahmed Shokry",
    jop: "Front-end",
    experience: "Experience",
    city: "Alexandria",
    owner: "ahmed_shokry",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
     used to demonstrate the visual form of a document or a typeface without relying on 
     meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "200 $/h",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "2 months",
    lookingForJop: true,
    isPaid: true,

  },
  {
    id: "Ahmed_2",
    position: "Mentee",
    stars: 3,
    name: "Ahmed Khaled",
    jop: "Front-end",
    experience: "Experience",
    city: "Alexandria",
    owner: "ahmed_khaled",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "00.0",
    location: "onSite",
    hired: "No",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "7 months",
    lookingForJop: false,
    isPaid: false,
  },
  {
    id: "Ayman_3",
    position: "Mentee",
    stars: 4,
    name: "Ayman Mostafa",
    jop: "Back-end",
    experience: "Experience",
    city: "Cairo",
    owner: "ayman_mostafa",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "100 $/h",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "2 years",
    lookingForJop: false,
    isPaid: true,
  },
  {
    id: "Abd-Elrahman_4",
    position: "Mentee",
    stars: 2,
    name: "Abd-Elrahman Ahmed",
    jop: "Back-end",
    experience: "No-Experience",
    city: "Alexandria",
    owner: "abdo_ahmed",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "20 $/h",
    location: "Remote",
    hired: "No",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "9 months",
    lookingForJop: true,
    isPaid: true,
  },
  {
    id: "Mahmoud_5",
    position: "Mentee",
    stars: 4,
    name: "Mahmoud Sobh",
    jop: "UI/UX",
    experience: "Experience",
    city: "Alexandria",
    owner: "mahmoud_sobh",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "200 $/h",
    location: "Remote",
    hired: "No",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "8 months",
    lookingForJop: true,
    isPaid: true,
  },
  {
    id: "Alaa_6",
    position: "Mentee",
    stars: 5,
    name: "Alaa Hafez",
    jop: "Graphic Designer",
    experience: "Experience",
    city: "Cairo",
    owner: "alaa_hafez",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "00.0",
    location: "onSite",
    hired: "Yes",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "11 months",
    lookingForJop: true,
    isPaid: false,
  },
  {
    id: "Esraa_7",
    position: "Mentee",
    stars: 3,
    name: "Esraa Gamal",
    jop: "UI/UX",
    experience: "Experience",
    city: "Cairo",
    owner: "esraa_gamal",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "00.0",
    location: "Remote",
    hired: "No",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "2 months",
    lookingForJop: false,
    isPaid: false,
  },
  {
    id: "Haifa_8",
    position: "Mentee",
    stars: 2,
    name: "Haifa Munir",
    jop: "Graphic Designer",
    experience: "Experience",
    city: "Alexandria",
    owner: "haifaa_munir",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    certificate: "Awarded",
    paid: "00.0",
    location: "Remote",
    hired: "Yes",
    duration: "Open Duration",
    lookingFor: ["write software applications and programs for Front-end and Back-end", "making a graphic design for  a fesitival using photoshop ", "write software applications for electronics usages using microcontroler as Arduino or Arm as remote-conntroled car"],
    requirements: ["knowledge of APIs", "knowledge of APIs", "knowledge of APIs"],
    backgroundAbout: ["Arduino", "photoshop", "waves"],
    duration2: "45 days",
    lookingForJop: false,
    isPaid: false,
  },
]
export const menteeData = [
  {
    owner: "ahmed_shokry",
    name: "Ahmed Shokry",
    phone: "01127796848",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    jop: "Front-end developer",
    status: "Fresh graduate",
    university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "ahmed_khaled",
    name: "Ahmed Khaled",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    phone: "01127796848",
    jop: "Front-end developer",
    status: "Fresh graduate",
    university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "ayman_mostafa",
    name: "Ayman Mostafa",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    phone: "01127796848",
    jop: "Back-end developer",
    status: "Fresh graduate", university: "EIT",
    seeker: false,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "abdo_ahmed",
    name: "Abd-Elrahamn Ahmed",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    phone: "01127796848",
    jop: "Front-end developer",
    status: "Fresh graduate", university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "mahmoud_sobh",
    name: "Mahmoud Sobh",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    phone: "01127796848",
    jop: "Front-end developer",
    status: "Fresh graduate", university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "alaa_hafez",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    name: "Alaa Hafez",
    phone: "01127796848",
    jop: "Front-end developer",
    status: "Fresh graduate", university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "esraa_gamal",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    name: "Esraa Gamal",
    phone: "01127796848",
    jop: "Front-end developer",
    status: "Fresh graduate", university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

  {
    owner: "haifaa_munir",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],

    name: "Haifaa Munir",
    phone: "01127796848",
    jop: "Front-end developer",
    status: "Fresh graduate", university: "EIT",
    seeker: true,
    email: "osamamegahed2468@gmail.com",
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without relying on 
    meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentored: [
      {
        name: "Osama Megahed",
        jop: "student",
        owner: "osama_megahed"
      },


      {
        name: "Ahmed Khaled",
        jop: "Front-end",
        owner: "ahmed_khaled"

      },

    ],
  },

]
export const userProfilesData = [
  {
    owner: "osama_megahed",
    position: "Mentor",
    name: "Osama Megahed",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
  used to demonstrate the visual form of a document or a typeface without relying on 
  meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentees: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],
    mentoringRequests: [
      {
        position: "Mentee",
        owner: "ahmed_shokry",
        jop: "Front-end"
      },
      {
        position: "Mentee",
        owner: "ahmed_shokry",
        jop: "UI/UX Implementation"
      },

    ]
  },

  {
    owner: "ahmed_khaled",
    position: "Mentee",
    name: "Ahmed Khaled",
    phone: "01127796848",
    jop: "Software Engineer",
    company: "EIT",
    email: "osamamegahed2468@gmail.com",
    expertise: ["Software Engineer", "Frontend Developer", "UI/UX Designer"],
    description: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly
  used to demonstrate the visual form of a document or a typeface without relying on 
  meaningful content. Lorem ipsum may be used as`,
    experience: [
      {
        id: 1,
        title: "software Engineer",
        duration: {
          start: 2016,
          end: 2018,
        },

      },
      {
        id: 2,
        title: "Electronics Engineer",
        duration: {
          start: 2018,
          end: 2019,
        },

      }
    ],
    skills: ["python", "JS", "C#"],
    mentors: [
      {
        name: "Heba shaban",
        jop: "student",
      },
      {
        name: "Nehal Ayman",
        jop: "UI Designer",
      },

      {
        name: "Ayman Shokry",
        jop: "Front-end",
      },

    ],
    mentoringOpport: [
      {
        position: "Mentee",
        owner: "ahmed_shokry",
        jop: "Front-end",
        name:"ahmed shokry"
      },
      {
        position: "Mentee",
        owner: "osama_megahed",
        jop: "UI/UX Implementation",
        name:"Osama Megahed",
      },

    ]
  },


]



localStorage.setItem("mentorshipsData", JSON.stringify(mentorshipsData))
localStorage.setItem("mentorsData", JSON.stringify(mentorsData))
localStorage.setItem("menteeshipsData", JSON.stringify(menteeshipsData))
localStorage.setItem("menteeData", JSON.stringify(menteeData))
localStorage.setItem("userProfilesData", JSON.stringify(userProfilesData))
