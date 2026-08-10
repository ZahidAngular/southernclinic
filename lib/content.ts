/**
 * All copy on the site, transcribed from the live WordPress build at
 * southernclinic.com.au so the Next.js rebuild stays word-for-word identical.
 */

export const CLINIC = {
  name: "The Southern Clinic",
  phone: "(08) 8276 9855",
  phoneHref: "tel:0882769855",
  fax: "(08) 8357 4112",
  address: "1140 South Road Clovelly Park SA 5042",
  emails: ["admin@southernclinic.net.au", "reception@southernclinic.net.au"],
  facebook: "https://www.facebook.com/southernclinic1/",
  hotdoc:
    "https://www.hotdoc.com.au/medical-centres/clovelly-park-SA-5042/southern-clinic-clovelly-park/doctors",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Fees", href: "/fees-and-charges" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const COVID_MESSAGES = [
  "Cover your mouth and nose with a bent elbow or tissue when you cough.",
  "Clean your hands frequently with alcohol-based hand soap and water.",
];

/* Home page service carousel -------------------------------------------- */
export type HomeService = {
  title: string;
  description: string;
  icon: "audiology" | "assessments" | "physiotherapy" | "podiatry";
};

export const HOME_SERVICES: HomeService[] = [
  {
    title: "Audiology",
    description: "Precision care for your hearing health.",
    icon: "audiology",
  },
  {
    title: "Health Assessments",
    description: "Detailed check-ups for a healthier you.",
    icon: "assessments",
  },
  {
    title: "Physiotherapy",
    description: "Personalized recovery and rehabilitation.",
    icon: "physiotherapy",
  },
  {
    title: "Podiatry",
    description: "Expert care for your feet and ankles.",
    icon: "podiatry",
  },
];

/* Doctors --------------------------------------------------------------- */
export const DOCTORS = [
  {
    name: "Dr. G Sidhu",
    fullName: "Dr. Gurdial Sidhu",
    role: "General Practice",
    thumb: "/images/dr-sidhu-150x200-1.jpg",
    photo: "/images/dr-sidhu.jpg",
    bio: [
      "Dr. Gurdial Sidhu obtained his medical degree in 1980 and he is a fellow of RACGP.",
      "His professional journey encompasses a comprehensive understanding and keen interest in all facets of General Practice.",
      "Additionally, he holds a Postgraduate Diploma in Musculoskeletal Medicine from the University of Otago, New Zealand, demonstrating a specialised focus in this area.",
      "Dr. Sidhu is fluent in Urdu, Punjabi, and Hindi, bringing linguistic diversity to his practice.",
    ],
  },
  {
    name: "Dr. Rubina Munir",
    fullName: "Dr. Rubina Munir",
    role: "General Practice",
    thumb: "/images/dr-munir-150x200-1.jpg",
    photo: "/images/dr-munir.jpg",
    bio: [
      "Dr. Rubina Munir graduated from the University of Adelaide in 1997 and is a fellow of The Royal Australian College of GPs.",
      "She furthered her qualifications by obtaining a diploma in child health from Women’s & Children’s Hospital.",
      "Dr. Munir has developed a specialised focus on women’s health, children’s health, mental health, and chronic disease management throughout her career.",
      "Additionally, she is multilingual, proficient in Urdu, Punjabi, and Hindi, enriching her ability to connect with diverse patient populations.",
    ],
  },
  {
    name: "Dr. John Lehmann",
    fullName: "Dr. John Lehmann",
    role: "General Practice",
    thumb: "/images/dr-john-lehmann-150x200-1.jpg",
    photo: "/images/dr-john-lehmann.jpg",
    bio: [
      "Dr. John Lehmann brings over two decades of experience in General Practice, having commenced his career following graduation from Flinders University.",
      "He finds fulfilment in attending to a diverse range of patients and health conditions within the practice setting.",
      "Dr. Lehmann’s particular passion lies in providing specialised care for individuals managing type 1 and type 2 diabetes in the General Practice setting.",
    ],
  },
  {
    name: "Dr. T Sidhu",
    fullName: "Dr. Tejbir Sidhu",
    role: "(known as Dr. Tej)",
    thumb: "/images/dr-tejbir-150x200-1.jpg",
    photo: "/images/dr-tejbir.jpg",
    bio: [
      "Dr. Tejbir graduated from Griffith University in 2016 with a degree in Medicine and has since earned MD, BMSC, and FRACGP qualifications. After completing medical training on the Gold Coast, Dr. Tejbir moved to Adelaide in 2020 and has been practicing as a full-time General Practitioner since 2022.",
      "With a strong commitment to providing comprehensive care, Dr. Tejbir has developed expertise in chronic disease management, pediatrics, skin lesions, mental health, diabetes, and musculoskeletal medicine.",
      "Fluent in both English and Punjabi, Dr. Tejbir is dedicated to connecting with and supporting a diverse range of patients.",
    ],
  },
  {
    name: "Dr. Kris Overduin",
    fullName: "Dr. Kris Overduin",
    role: "General Practitioner, MD",
    thumb: "/images/southern-clinic-staff.jpg.webp",
    photo: "/images/southern-clinic-staff.jpg.webp",
    bio: [
      "Dr. Overduin has been a Healthcare Practioner for over 30 years, as both a optometrist and now as a doctor!",
      "Kris has worked in Metropolitan, rural and remote locatons.",
      "Dr. Overduin is passionate about providing quality healthcare and has proven high standards of care as a doctor.",
      "As someone with excellent communication skills and high understanding of his areas of interest, Dr Kris is an excellent addition to the Southern Clinic Team!",
    ],
  },
  {
    name: "Dr. Gurjot Gandhara",
    fullName: "Dr. Gurjot Gandhara",
    role: "General Practitioner, MD",
    thumb: "/images/southern-clinic-staff.png.webp",
    photo: "/images/southern-clinic-staff.png.webp",
    bio: [
      "Dr. Gandhara is an AHPRA certified Medical Practioner who has completed his Medicine degree at Flinders University, graduating in 2021.",
      "Since graduating, Dr. Gandhara has worked full time across Southern Adelaide Health Network across mulitple healthcares sites including Flinders Medical Centre, Noarlunga Hospital, the Repat Health Precinct and Glenside Health Campus.",
      "Aside from Dr. Gandharas experience and qualifications, Dr. Gandhara is a friendly, compassionate and eager doctor who thrives to achieve the best outcome for his patients!",
    ],
  },
];

/* Home page doctor strip (4 cards, as on the live site) ------------------ */
export const HOME_DOCTORS = DOCTORS.slice(0, 4);

/* About page — Clinical Excellence cards -------------------------------- */
export const ABOUT_SERVICES = [
  { title: "Podiatry", description: "Expert care for your feet and ankles." },
  { title: "Physiotherapy", description: "Personalized recovery and rehabilitation." },
  { title: "Audiology", description: "Precision care for your hearing health." },
  { title: "Health Assessments", description: "Detailed check-ups for a healthier you." },
  { title: "Workcover Injury", description: "Expert care for effective recovery." },
  { title: "Immunizations", description: "Protect your health with timely vaccines." },
  { title: "Travel Health", description: "Pre-trip health advice and vaccinations." },
  { title: "Mental Health", description: "Consult any doctors our clinic any time." },
];

/* Services page — Clinical Excellence cards ----------------------------- */
export const SERVICES = [
  {
    title: "GP Consults",
    description:
      "Comprehensive consultations addressing general health concerns, preventive care, and personalized treatment plans.",
  },
  {
    title: "Iron Infusions",
    description:
      "Safe and efficient iron therapy to treat iron deficiency and related health conditions.",
  },
  {
    title: "Skin Cancer Checks",
    description:
      "Thorough screenings to detect early signs of skin cancer for prompt diagnosis and treatment.",
  },
  {
    title: "Skin Biopsies",
    description:
      "Precise skin tissue sampling to diagnose and assess potential skin conditions or abnormalities.",
  },
  {
    title: "ECGs",
    description:
      "Electrocardiograms to monitor and assess heart activity for diagnosing heart-related conditions.",
  },
  {
    title: "Wound reviews/ Wound Dressings",
    description: "Wound Reviews/Wound Dressings",
  },
  {
    title: "Ear Syringes",
    description:
      "Safe removal of earwax build-up to improve hearing and prevent ear-related discomfort.",
  },
  {
    title: "Implanon Insertion/Removal",
    description:
      "Contraceptive implant services, including insertion, removal, and management for long-term birth control.",
  },
  {
    title: "Immunology Treatment",
    description:
      "Specialized treatments for immune system disorders, improving your body’s ability to fight diseases.",
  },
  {
    title: "Spirometry",
    description:
      "Lung function tests to diagnose and monitor respiratory conditions such as asthma and COPD.",
  },
  {
    title: "Immunisation Record Updates",
    description:
      "Ensure up-to-date vaccination records for children, adults, and travelers, meeting health requirements.",
  },
  {
    title: "Workcover",
    description:
      "Medical assessments, treatments, and reports for workplace injuries, ensuring a smooth recovery process.",
  },
  {
    title: "Mental Health Care Plans",
    description:
      "Personalized care plans to support mental well-being, addressing anxiety, depression, and other concerns.",
  },
  {
    title: "Health Assessments",
    description:
      "Comprehensive evaluations to monitor overall health, identify risks, and promote long-term wellness.",
  },
  {
    title: "Chronic Disease Care Plans for Allied Health Treatment",
    description:
      "Coordinated care plans supporting management of chronic diseases, with referrals to allied health professionals.",
  },
  {
    title: "Clinical Labs - Pathology",
    description:
      "Convenient on-site pathology services for accurate diagnostic testing and timely health assessments.",
  },
  {
    title: "Podiatrist",
    description:
      "Specialized foot care for conditions including diabetic foot health, orthotics, and sports injuries.",
  },
  {
    title: "Neuro Physiotherapist",
    description:
      "Expert rehabilitation for neurological conditions, helping restore mobility and improve physical function.",
  },
  {
    title: "Physiotherapist",
    description:
      "Holistic therapy to treat musculoskeletal issues, improve mobility, and enhance physical rehabilitation.",
  },
  {
    title: "Audiology",
    description:
      "Comprehensive hearing assessments and treatments to improve hearing and manage hearing loss.",
  },
  {
    title: "Immunisations",
    description:
      "A wide range of vaccines for adults, children, and travelers to protect against preventable diseases.",
  },
  {
    title: "Referrals to specialist and radiologist",
    description: "Referrals to Specialist and Radiologist",
  },
];

/* FAQ page -------------------------------------------------------------- */
export const FAQS = [
  {
    q: "What languages do the doctors speak?",
    a: "Punjabi, Hindi, Urdu",
  },
  {
    q: "Do you Bulk Bill?",
    a: "Children 15 and Under, Concession Card/Healthcare Card/Commonwealth Seniors Card patients will be bulk billed Monday to Friday. Saturday consultations incurs a fee for all patients",
  },
  {
    q: "How do I book allied health appointments?",
    a: "You can book any Allied Health appointments by calling 82769855",
  },
  {
    q: "Do I need to book an appointment for scripts and/or results?",
    a: "An appointment is always required and any scripts, requests or results. These can be made as an in clinic appointment or as a Telehealth.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Any appointments missed or cancelled in less than 2 hours may incur a fee starting from $10 for a single and $30 for a double. If there are multiple missed appointments, the fee will increase each time.",
  },
  {
    q: "Do any the doctors do home visits?",
    a: "Some Doctors will make after hour home visits to a patient that is regular to them and in the local area. A locum service is also available for all patients. Please call 13 74 25 for My Home Doctor Services.",
  },
  {
    q: "Can I book with just the nurse?",
    a: "No, a Doctor will always need to see a patient that is also booked with the Nurse.",
  },
];

/* Contact page accordion (subset of the FAQ, as on the live site) -------- */
export const CONTACT_FAQS = [
  {
    q: "Do I need to book an appointment for scripts and/or results?",
    a: "An appointment is always required and any scripts, requests or results. These can be made as an in clinic appointment or as a Telehealth.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Any appointments missed or cancelled in less than 2 hours may incur a fee starting from $10 for a single and $30 for a double. If there are multiple missed appointments, the fee will increase each time.",
  },
  {
    q: "Do any the doctors do home visits?",
    a: "Some Doctors will make after hour home visits to a patient that is regular to them and in the local area. A locum service is also available for those ineligible patients. Please call 13 74 25 for My Home Doctor Services.",
  },
  {
    q: "Can I book with just the nurse?",
    a: "No, a Doctor will always need to see a patient that is also booked with the Nurse.",
  },
];

export const OPENING_HOURS = [
  { day: "Mon - Fri", time: "8:30am – 6:00pm" },
  { day: "Saturday", time: "8:30am – 12:30pm" },
  { day: "Sunday", time: "Closed" },
  { day: "Public Holiday:", time: "Closed" },
];

export const AFTER_HOURS = [
  { label: "Marion Medicare Urgent Care:", value: "08 8375 7055 or walk-in", href: "tel:0883757055" },
  { label: "National Home Doctor Service:", value: "13 74 25", href: "tel:137425" },
  { label: "Hello Home Doctors Service:", value: "134 100", href: "tel:134100" },
  { label: "MedVisit Home Doctor Service:", value: "1300 3733 47", href: "tel:1300373347" },
];

/* Fees page ------------------------------------------------------------- */
export const FEES_HEAD = [
  "P Number",
  "Brief Consult Item 3 level A gap",
  "Standard Consult Item 23 level B gap",
  "Long Consult Item 36 level C gap",
  "Extra-Long Consult Item 44 level D gap",
  "Saturday Fees Concession/Non Conc holders",
];

export const FEES_ROWS = [
  [
    "P1",
    "$56.00 $35.95 (Gap) $20.05 (Rebate)",
    "$90.00 $46.10 (Gap) $43.90 (Rebate)",
    "$130.00 $45.10 (Gap) $84.90 (Rebate)",
    "$172.00 $46.90 (Gap) $125.10 (Rebate)",
    "Item 3 $56.00 (non Conc) $37.00 (conc)",
  ],
  [
    "P2",
    "$52.00 $31.95 (Gap) $20.05 (Rebate)",
    "$85.00 $41.10 (Gap) $43.90 (Rebate)",
    "$125.00 $40.10 (Gap) $84.90 (Rebate)",
    "$168.00 $42.90 (Gap) $125.10 (Rebate)",
    "Item 23 $90.00 (non Conc) $70.00 (conc)",
  ],
  [
    "P3",
    "$48.00 $27.95 (Gap) $20.05 (Rebate)",
    "$80.00 $36.10 (Gap) $43.90 (Rebate)",
    "$120.00 $35.10 (Gap) $84.90 (Rebate)",
    "$163.00 $37.90 (Gap) $125.10 (Rebate)",
    "Item 36 $130.00 (non conc) $110.00 (conc)",
  ],
  [
    "P4",
    "$41.00 $20.95 (Gap) $20.05 (Rebate)",
    "$75.00 $31.10 (Gap) $43.90 (Rebate)",
    "$115.00 $30.10 (Gap) $84.90 (Rebate)",
    "$158.00 $32.90 (Gap) $125.10 (Rebate)",
    "Item 44 Not Available on Saturday",
  ],
  [
    "P5",
    "$37.00 $16.95 (Gap) $20.05 (Rebate)",
    "$70.00 $26.10 (Gap) $43.90 (Rebate)",
    "$110.00 $25.10 (Gap) $84.90 (Rebate)",
    "$153.00 $27.90 (Gap) $125.10 (Rebate)",
    "",
  ],
];

export const GALLERY = [
  "/images/gallery-1-2.jpg",
  "/images/gallery-2-2.jpg",
  "/images/gallery-3-2.jpg",
  "/images/gallery-4-2.jpg",
  "/images/gallery-5-2.jpg",
  "/images/gallery-6-2.jpg",
];
