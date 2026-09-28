export type Language = "en" | "ne";

export interface BookPage {
  pageNumber: number;
  chapter?: string;
  title: string;
  subtitle?: string;
  content: string[];
  quoteOrPearl?: string;
  footerNote?: string;
}

export interface ChapterItem {
  number: string;
  title: string;
  nepaliTitle?: string;
  description: string;
}

export interface BookData {
  id: string;
  title: string;
  nepaliTitle: string;
  subtitle: string;
  badge: string;
  categoryBadge: string;
  year: string;
  isbn: string;
  publisher: string;
  accentColor: string;
  synopsis: string;
  nepaliSynopsis: string;
  chapters: ChapterItem[];
  buyUrl: string;
  pages: BookPage[];
}

export const booksData: BookData[] = [
  {
    id: "lost-book",
    title: "The Lost Book (Sarobar Sarobar)",
    nepaliTitle: "द लस्ट बुक (सरोबर सरोबर)",
    subtitle: "A collection of introspective poetry, couplets, and philosophical contemplations on human healing.",
    badge: "Literary & Poetic Works",
    categoryBadge: "Bestseller & Literary Edition",
    year: "2023 (First Edition)",
    isbn: "ISBN 978-9937-0-8412-9",
    publisher: "Neopath Literary Press, Kathmandu / Birgunj",
    accentColor: "#D97706", // Brushed Gold
    synopsis:
      "A profound introspective literary masterpiece born from solitary reflections and clinical encounters. 'The Lost Book (Sarobar Sarobar)' navigates the delicate inner topography of human grief, healing, stillness, and mortality. Structured as meditative cantos and distilled couplets under Dr. Mishra's signature 'One Couplet a Day' discipline, this book serves as an emotional sanctuary for those who seek solace in silence and truth in introspection.",
    nepaliSynopsis:
      "चिकित्सा, मानवीय भावना र जीवन दर्शनको गहन संगम। 'द लस्ट बुक (सरोबर सरोबर)' आत्मा, घाउ, मौनता र पुनर्जन्मको आध्यात्मिक खोजी गर्ने एक विशिष्ट कृति हो, जसमा डा. मिश्रका अमर श्लोकहरू संगृहीत छन्।",
    chapters: [
      {
        number: "01",
        title: "The Quiet Shore & Still Waters",
        nepaliTitle: "शान्त किनार र सरोबरको गहिराइ",
        description: "Contemplating the fragile boundaries between silence, breathing, and human truth."
      },
      {
        number: "02",
        title: "Echoes of the River (दूरी र मन)",
        nepaliTitle: "नदीको प्रतिध्वनि",
        description: "Couplets exploring the distance between human footsteps and our inner soul."
      },
      {
        number: "03",
        title: "The Healer's Gaze (चिकित्सकको दृष्टि)",
        nepaliTitle: "उपचार र करुणाको कला",
        description: "On holding a cure in one's hand and attending the tremors of the human heart."
      },
      {
        number: "04",
        title: "The Light in the Cracks (सिसा र प्रकाश)",
        nepaliTitle: "टुक्रिएको ऐना र हजारौँ सूर्य",
        description: "Why broken mirrors reflect thousands of suns: finding resilience in adversity."
      },
      {
        number: "05",
        title: "Conversations with Midnight",
        nepaliTitle: "मध्यरातसँगको सम्वाद",
        description: "When clinical corridors fall quiet and the doctor reflects upon eternity."
      },
      {
        number: "06",
        title: "The Final Horizon (सरोबरको शान्ति)",
        nepaliTitle: "अन्तिम क्षितिज र आत्मशान्ति",
        description: "Closing stanzas on the mirror of the lake and discovery of sacred peace."
      }
    ],
    buyUrl: "https://amazon.com",
    pages: [
      {
        pageNumber: 1,
        chapter: "Prelude",
        title: "The Quiet Shore",
        content: [
          "Between the rhythm of quiet breath and the weight of words unsaid,",
          "A quiet lake reflects the sky where fragile dreams are fed.",
          "We measure life in heartbeats, yet forget the silent space,",
          "Where every wounded spirit longs to find its healing place."
        ],
        quoteOrPearl: "“In the depths of Sarobar, silence is not emptiness; it is the genesis of truth.”",
        footerNote: "Sarobar Sarobar — Chapter I"
      },
      {
        pageNumber: 2,
        chapter: "Couplet 01",
        title: "Echoes of the River",
        content: [
          "दूरीहरू केवल पाइलाका मात्र कहाँ हुन् र,",
          "कहिलेकाहीँ आफ्नै मनसम्म पुग्न पनि युगौँ लाग्ने गर्छ।",
          "",
          "The shore whispers to the flowing stream:",
          "Do not rush to the ocean before understanding your own depth."
        ],
        quoteOrPearl: "One Couplet a Day: The mind is a river; wisdom is learning to stand quietly on its banks.",
        footerNote: "Dr. Ratna Kumar Mishra — Reflection No. 12"
      },
      {
        pageNumber: 3,
        chapter: "Philosophy",
        title: "The Healer's Gaze",
        content: [
          "To hold a cure within the palm is only half the art,",
          "The true physician first attends the tremors of the heart.",
          "Pain is an unspoken dialect, carried through weary eyes,",
          "And listening with gentle grace is where the medicine lies."
        ],
        quoteOrPearl: "“We do not just heal bodies; we restore the quiet dignity of souls.”",
        footerNote: "The Art of Compassion — Page 23"
      },
      {
        pageNumber: 4,
        chapter: "Couplet 02",
        title: "The Light in the Cracks",
        content: [
          "नफुटेको ऐना त केवल अनुहार देखाउँछ,",
          "टुक्रिएका सिसाहरूले मात्र हजारौँ सूर्य जन्माउँछन्।",
          "",
          "It is through the fracture that the morning light finds its doorway,",
          "Never grieve the scars that proved you survived the storm."
        ],
        quoteOrPearl: "“Resilience is not the absence of fracture, but the mastery of light.”",
        footerNote: "Sarobar Sarobar — Verses of Dawn"
      },
      {
        pageNumber: 5,
        chapter: "Solitude",
        title: "Conversations with Midnight",
        content: [
          "When the clinic halls fall silent and the daylight turns to slate,",
          "The thinker sits beside the page to question chance and fate.",
          "Why do we strive for monuments that dust will soon claim back,",
          "When simple kindness is the gold no honest heart will lack?"
        ],
        quoteOrPearl: "“At midnight, every mask dissolves, leaving only what is sacred.”",
        footerNote: "DefaultDose Notebooks — Entry 41"
      },
      {
        pageNumber: 6,
        chapter: "Couplet 03",
        title: "The Mirage of Certainty",
        content: [
          "किनार खोज्दै हिँड्नेहरूले छालसँग डराउनु हुन्न,",
          "सत्य जान्न खोज्नेहरूले आफ्नै विश्वास हल्लाउनु पर्छ।",
          "",
          "Certainty is the cage of the arrogant; curiosity is the open sky of the seeker."
        ],
        quoteOrPearl: "“Question gently, listen deeply, live without pretense.”",
        footerNote: "Verses from Basatpur — Page 57"
      },
      {
        pageNumber: 7,
        chapter: "Harmony",
        title: "The Architecture of a Smile",
        content: [
          "A smile is both a muscle's dance and a spirit's fragile bloom,",
          "A single curve with power to illuminate a gloomy room.",
          "Behind the enamel and the nerve, an entire life is told,",
          "Of laughter shared, of grief endured, of secrets never sold."
        ],
        quoteOrPearl: "“Every restored smile is a restored universe.”",
        footerNote: "Clinical Musings — Page 72"
      },
      {
        pageNumber: 8,
        chapter: "Couplet 04",
        title: "Leaves in Autumn",
        content: [
          "झर्नु भनेको समाप्त हुनु मात्र होइन रहेछ,",
          "रुखले फेरि नयाँ पालुवा जन्माउने त्याग रहेछ।",
          "",
          "The tree does not mourn the fallen leaf; it understands the promise of spring."
        ],
        quoteOrPearl: "“Surrender to renewal; let go of what was never yours to keep.”",
        footerNote: "Sarobar Sarobar — Autumn Reflections"
      },
      {
        pageNumber: 9,
        chapter: "Meditation",
        title: "The Unwritten Chapter",
        content: [
          "I left some pages blank upon this quiet paper sea,",
          "So that the reader's seeking soul might write what ought to be.",
          "No book is ever finished till another mind draws near,",
          "And turns the silent ink into a melody they hear."
        ],
        quoteOrPearl: "“You are the author of the final stanza.”",
        footerNote: "The Lost Book — Canto IX"
      },
      {
        pageNumber: 10,
        chapter: "Couplet 05",
        title: "The Final Horizon",
        content: [
          "सरोबरको शान्त पानीमा जब जून देखिन्छ,",
          "तब थाहा हुन्छ—संसार कति कोलाहल, मन कति सुन्दर छ।",
          "",
          "When the lake stills, the heavens descend to kiss the water.",
          "Peace is not discovered outside; it is uncovered within."
        ],
        quoteOrPearl: "“DefaultDose: One couplet, infinite stillness.”",
        footerNote: "Sarobar Sarobar — Concluding Verse"
      }
    ]
  },
  {
    id: "crash-book",
    title: "The Crash Book (Dental Crash Course)",
    nepaliTitle: "द क्र्यास बुक (डेन्टल क्र्यास कोर्स)",
    subtitle: "High-yield clinical review, rapid-fire exam prep, and clinical pearls for dental graduates and licensing candidates.",
    badge: "Clinical Licensure & Dental Prep",
    categoryBadge: "Clinical Guide & Exam Prep",
    year: "2024 (Master Revision Edition)",
    isbn: "ISBN 978-9937-1-4509-3",
    publisher: "Neopath Academic & Medical Publishing",
    accentColor: "#0D9488", // Medical Teal
    synopsis:
      "Engineered from 15+ years of active clinical surgery and academic mentorship, 'The Crash Book (Dental Crash Course)' provides dental interns, BDS graduates, and NMCLE licensure aspirants with a high-density, no-fluff revision manual. Covering high-yield diagnostic algorithms, emergency chair-side protocols, pharmacology cheat sheets, and surgical guidelines, this book turns complex dental curricula into intuitive clinical reflexes.",
    nepaliSynopsis:
      "दन्त चिकित्सा स्नातक (BDS) तथा नेपाल मेडिकल काउन्सिल (NMCLE) लाइसेन्स परीक्षाको लागि उच्च अङ्क हासिल गराउने द्रुत समीक्षा पुस्तक। औषधि मात्रा, आकस्मिक व्यवस्थापन, र दन्त शल्यक्रियाका मुख्य बुँदाहरूको व्यावहारिक संगालो।",
    chapters: [
      {
        number: "01",
        title: "Local Anesthesia & Nerve Blocks",
        nepaliTitle: "स्थानीय एनेस्थेसिया र नर्भ ब्लक प्रविधि",
        description: "IANB anatomical landmarks, aspiration rules, adrenaline dilutions, and maximum recommended dosages."
      },
      {
        number: "02",
        title: "Endodontic Working Length & Access",
        nepaliTitle: "रूट क्यानाल तयारी र एपेक्स लोकेटर",
        description: "Apical constriction anatomy, scout algorithms for MB2 canals, and rotary instrumentation protocols."
      },
      {
        number: "03",
        title: "Dental Chair Emergencies",
        nepaliTitle: "दन्त क्लिनिकका आकस्मिक समस्याको व्यवस्थापन",
        description: "Immediate step-by-step algorithms for vasovagal syncope, acute anaphylaxis, angina, and hypoglycemia."
      },
      {
        number: "04",
        title: "Prosthodontic Impressions & Occlusion",
        nepaliTitle: "दाँत नाप, प्रोस्थोडोन्टिक्स र अक्लुजन",
        description: "PVS vs. polyether comparison, canine guidance, centric relation, and zirconia crown clearance rules."
      },
      {
        number: "05",
        title: "Oral Pathology & Histopathology Keys",
        nepaliTitle: "ओरल प्याथोलोजी र बायोप्सी पहिचान",
        description: "Vickers-Gorlin criteria for ameloblastoma, OKC parakeratin corrugation, and leukoplakia staging."
      },
      {
        number: "06",
        title: "Oral Surgery & Surgical Extractions",
        nepaliTitle: "दन्त शल्यक्रिया र बुद्धि बंगारा व्यवस्थापन",
        description: "Winter's classification, flap elevation, dry socket treatment, and oroantral communication closures."
      }
    ],
    buyUrl: "https://amazon.com",
    pages: [
      {
        pageNumber: 1,
        chapter: "Chapter 1",
        title: "Local Anesthesia & Nerve Blocks",
        content: [
          "• Inferior Alveolar Nerve Block (IANB): Landmark is pterygomandibular raphe & coronoid notch.",
          "• Needle penetration: 20-25 mm; always aspirate in 2 planes before deposition.",
          "• Solution choice: 2% Lignocaine with 1:80,000 or 1:100,000 Adrenaline.",
          "• Maximum Recommended Dose (MRD): 4.4 mg/kg (plain), 7.0 mg/kg (with vasoconstrictor)."
        ],
        quoteOrPearl: "★ Clinical Pearl: If IANB fails, consider mylohyoid nerve accessory innervation or Bifid IAN canal.",
        footerNote: "The Crash Book — High-Yield Series"
      },
      {
        pageNumber: 2,
        chapter: "Chapter 2",
        title: "Endodontic Working Length & Access",
        content: [
          "• Apical Constriction (Minor Apical Diameter) is 0.5-1.0 mm short of anatomical apex.",
          "• Electronic Apex Locators (EAL): Impedance-based ratio algorithms yield >95% accuracy.",
          "• Maxillary 1st Molar: Triangle/Trapezoidal access. Always scout for MB2 canal in 70-85% cases.",
          "• Mandibular Molars: Trapezoidal access shifted mesially; scout for middle mesial canal."
        ],
        quoteOrPearl: "★ Exam Trap: Radiographic apex ≠ Apical foramen. The apical foramen deviates laterally in 80% teeth.",
        footerNote: "Endodontics Quick Fire — Page 18"
      },
      {
        pageNumber: 3,
        chapter: "Chapter 3",
        title: "Emergency Management in Dental Chair",
        content: [
          "• Vasovagal Syncope: Trendelenburg position (feet elevated 10-15°), 100% Oxygen, loosen tight collar.",
          "• Anaphylaxis Protocol: Intramuscular Adrenaline 1:1000 (0.5 mL in adult anterolateral thigh).",
          "• Angina Pectoris: Sublingual Nitroglycerin (0.4 mg) every 5 min up to 3 doses; monitor blood pressure.",
          "• Hypoglycemia: 15-20g oral fast-acting glucose; if unconscious, administer 50% Dextrose IV."
        ],
        quoteOrPearl: "★ Safety Golden Rule: Never place a patient in Trendelenburg if respiratory distress or stroke is suspected.",
        footerNote: "Medical Emergencies — Page 34"
      },
      {
        pageNumber: 4,
        chapter: "Chapter 4",
        title: "Prosthodontic Impressions & Occlusion",
        content: [
          "• Addition Silicone (PVS): Best dimensional stability (<0.05% contraction); pour can be delayed 7 days.",
          "• Polyether: Excellent hydrophilicity; rigid—block undercuts to avoid locking tray.",
          "• Centric Relation (CR): Maxillomandibular relationship independent of tooth contact.",
          "• Canine Guidance vs. Group Function: Protects posterior teeth from lateral destructive forces."
        ],
        quoteOrPearl: "★ Fixed Prostho Rule: Minimum 1.5mm reduction for PFM, 1.0mm for monolithic zirconia.",
        footerNote: "Prosthodontics Fast Track — Page 52"
      },
      {
        pageNumber: 5,
        chapter: "Chapter 5",
        title: "Oral Pathology: Rapid Histopathology Keys",
        content: [
          "• Ameloblastoma: 'Vickers-Gorlin' criteria (palisading columnar cells, reverse polarity).",
          "• Odontogenic Keratocyst (OKC): Corrugated parakeratin, uniform 6-8 cell layers, satellite cysts.",
          "• Pleomorphic Adenoma: Most common salivary tumor; epithelial cells embedded in chondromyxoid stroma.",
          "• Leukoplakia: Strictly clinical term of exclusion. Biopsy mandatory to rule out dysplasia."
        ],
        quoteOrPearl: "★ NMCLE High-Yield: OKC associated with PTCH gene mutation and Gorlin-Goltz syndrome.",
        footerNote: "Oral Pathology Vault — Page 76"
      },
      {
        pageNumber: 6,
        chapter: "Chapter 6",
        title: "Periodontal Classification & Pathogens",
        content: [
          "• Red Complex Triad: Porphyromonas gingivalis, Tannerella forsythia, Treponema denticola.",
          "• Localized Aggressive Periodontitis (Grade C): Strongly linked to Aggregatibacter actinomycetemcomitans.",
          "• 2018 EFP/AAP Staging: Stage I (mild) to Stage IV (severe tooth loss & collapse).",
          "• Biological Width: 2.04 mm (1.07mm connective tissue + 0.97mm junctional epithelium)."
        ],
        quoteOrPearl: "★ Restorative Guideline: Never invade the biological width; maintain minimum 3mm margin to bone crest.",
        footerNote: "Periodontology Core — Page 98"
      },
      {
        pageNumber: 7,
        chapter: "Chapter 7",
        title: "Pediatric Space Maintainers & Habits",
        content: [
          "• Band and Loop: Unilateral loss of primary molar (especially primary 1st molar).",
          "• Distal Shoe: Premature loss of primary 2nd molar BEFORE eruption of permanent 1st molar.",
          "• Nance Appliance / Lingual Arch: Bilateral premature loss in maxilla/mandible.",
          "• Habit Breaking: Bluegrass or tongue crib for anterior open bite thumb-sucking habits."
        ],
        quoteOrPearl: "★ Critical Contraindication: Distal shoe is contraindicated in patients with subacute bacterial endocarditis risk.",
        footerNote: "Pedodontics Digest — Page 114"
      },
      {
        pageNumber: 8,
        chapter: "Chapter 8",
        title: "Orthodontic Cephalometrics & Biomechanics",
        content: [
          "• SNA (82° ± 2°): Maxillary sagittal position relative to anterior cranial base.",
          "• SNB (80° ± 2°): Mandibular sagittal position.",
          "• ANB Angle (2° ± 2°): Class I (0-4°), Class II (>4° maxillary excess/retrognathia), Class III (<0°).",
          "• Center of Resistance: Approximately 1/3 to 1/2 from alveolar crest to apex in single-rooted teeth."
        ],
        quoteOrPearl: "★ Force Rule: Tipping force 35-60g; Bodily movement 70-120g; Intrusion force 10-20g.",
        footerNote: "Orthodontics Rapid Fire — Page 130"
      },
      {
        pageNumber: 9,
        chapter: "Chapter 9",
        title: "Dental Pharmacology & Antibiotic Stewardship",
        content: [
          "• Standard Prophylaxis for Infective Endocarditis: Amoxicillin 2.0g PO 30-60 min prior to procedure.",
          "• Penicillin Allergy: Clindamycin 600mg, Cephalexin 2.0g, or Azithromycin 500mg.",
          "• Odontogenic Infections First Line: Amoxicillin 500mg + Metronidazole 400mg TDS for anaerobes.",
          "• Analgesic Ceiling: Ibuprofen 400mg + Paracetamol 1000mg synergy out-performs standard opioids."
        ],
        quoteOrPearl: "★ Drug Caution: Avoid NSAIDs in third-trimester pregnancy and severe active peptic ulcer disease.",
        footerNote: "Pharmacology & Therapeutics — Page 155"
      },
      {
        pageNumber: 10,
        chapter: "Chapter 10",
        title: "Oral Surgery: Surgical Extraction Principles",
        content: [
          "• Winter's Classification: Mesioangular (easiest to remove), Distoangular (most difficult).",
          "• Flap Design: Broad base to ensure vascularity; incision over sound healthy bone.",
          "• Dry Socket (Alveolar Osteitis): Loss of clot on day 3-5; irrigate with warm saline, zinc oxide eugenol paste.",
          "• Oroantral Communication (OAC): <2mm closes spontaneously; >5mm requires buccal advancement flap."
        ],
        quoteOrPearl: "★ Surgical Axiom: Direct bone cooling during guttering prevents thermal necrosis (>47°C causes osteocyte death).",
        footerNote: "The Crash Book — Master Edition"
      }
    ]
  }
];

export const translations = {
  en: {
    nav: {
      about: "About",
      clinic: "Dental Practice",
      publications: "Publications & Books",
      insights: "Insights & Verses",
      contact: "Contact",
      bookConsultation: "Book Consultation",
      license: "NMC Regd. 13350"
    },
    hero: {
      tagline: "Clinical Precision & Literary Wisdom",
      hookTitlePart1: "Restoring Smiles,",
      hookTitlePart2: "Sharing Knowledge.",
      bio: "Dr. Ratna Kumar Mishra is a senior dental surgeon, director of Aarogya Dental Clinic, and published author. Combining 15+ years of evidence-based maxillofacial care with reflective literary craftsmanship, he bridges compassionate dentistry with clinical education.",
      ctaClinic: "Visit Dental Clinic",
      ctaPublications: "Explore Publications",
      experienceBadge: "15+ Years Clinical Excellence",
      clinicPill: "Aarogya Dental Clinic",
      activeStatus: "Accepting New Patients",
      credentialsLabel: "Nepal Medical Council Verified Dental Practitioner (B.D.S. BPKIHS Dharan)"
    },
    clinic: {
      sectionBadge: "Aarogya Dental Clinic",
      title: "Comprehensive Dental Surgery & Patient Care",
      subtitle: "State-of-the-art clinic offering gentle, minimally invasive dental procedures, microscopic endodontics, and aesthetic smile rehabilitation.",
      stats: {
        patients: "12,000+",
        patientsLabel: "Patients Treated",
        procedures: "18,500+",
        proceduresLabel: "Procedures Completed",
        experience: "15+ Years",
        experienceLabel: "Clinical Practice",
        satisfaction: "99.4%",
        satisfactionLabel: "Patient Satisfaction"
      },
      services: [
        {
          id: "aesthetic",
          title: "Aesthetic Dentistry & Smile Design",
          description: "Digital smile analysis, ultra-thin porcelain veneers, composite bonding, and laser teeth whitening tailored to facial symmetry.",
          badge: "Cosmetic Excellence"
        },
        {
          id: "surgery",
          title: "Oral & Maxillofacial Surgery",
          description: "Painless surgical extraction of impacted third molars, bone grafting, cyst enucleation, and atraumatic minor oral surgeries.",
          badge: "Surgical Precision"
        },
        {
          id: "restorative",
          title: "Microscopic Endodontics & Crowns",
          description: "Single-sitting root canal treatment with apex locators, rotary instrumentation, and precision-milled monolithic zirconia crowns.",
          badge: "Restorative"
        },
        {
          id: "preventive",
          title: "Preventive & Pediatric Care",
          description: "Gentle child dentistry, fluoride sealants, deep ultrasonic scaling, and personalized periodontal maintenance protocols.",
          badge: "Preventive Health"
        }
      ],
      workingHoursTitle: "Clinic Working Hours",
      hoursMorning: "Morning: 09:30 AM – 01:30 PM",
      hoursEvening: "Evening: 05:00 PM – 08:30 PM",
      daysAvailable: "Sunday – Friday (Emergency on Saturday)",
      callClinic: "Call Clinic Directly",
      whatsAppChat: "WhatsApp Consultation",
      scheduleBtn: "Schedule Clinic Visit",
      locationTitle: "Clinic Location & Map",
      locationAddress: "Aarogya Dental Clinic, Falgunanda Chowk, Damak-1, Jhapa, Nepal",
      landmark: "Falgunanda Chowk, Damak-1, Jhapa (Opposite Main Road)"
    },
    showcase: {
      sectionBadge: "Literary Works & Books",
      title: "Published Editions & Clinical Manuals",
      subtitle: "Editorial spotlight on Dr. Mishra's published literary works and clinical preparatory manuals. Designed for literary introspection and rigorous dental licensure excellence.",
      orderOnline: "Order Online (Amazon / Publisher)",
      readExcerpt: "Read Free Excerpt",
      quickPreview: "Table of Contents & Preview",
      aboutTheBook: "About the Book & Synopsis",
      showMore: "Read Full Synopsis",
      showLess: "Collapse Synopsis",
      openIn3D: "Open in 3D Page Flipper",
      tableOfContents: "Table of Contents",
      quoteBannerText:
        "“Medicine repairs the physical architecture of the body; literature illuminates the sanctuary of the soul. A true physician listens not only to the pulse of physical anatomy, but to the unuttered verses of human experience.”",
      quoteBannerAuthor: "Dr. Ratna Kumar Mishra",
      quoteBannerSubtitle: "Poet. Dentist. Dreamer. Disruptor."
    },
    books: {
      sectionBadge: "Interactive 3D Reader",
      title: "Interactive Digital Page-Turner",
      subtitle: "Experience realistic page turns and preview authentic excerpts from both books. Watch pages flip automatically or navigate page-by-page.",
      autoFlipActive: "Auto-Flipping Pages (Active)",
      autoFlipPaused: "Auto-Flip Paused",
      flipRandom: "Flip 10–15 Random Pages",
      pageIndicator: "Page",
      of: "of",
      readFullSummary: "Read Synopsis",
      pause: "Pause Auto-Flip",
      play: "Start Auto-Flip"
    },
    modal: {
      title: "Book a Dental Consultation",
      subtitle: "Aarogya Dental Clinic • Dr. Ratna Kumar Mishra (NMC 13350)",
      fullName: "Patient Full Name",
      phone: "Mobile Phone Number",
      date: "Preferred Appointment Date",
      slot: "Preferred Time Window",
      slotMorning: "Morning (9:30 AM – 1:30 PM)",
      slotEvening: "Evening (5:00 PM – 8:30 PM)",
      reason: "Reason for Consultation / Dental Concern",
      submit: "Confirm Appointment Request",
      successTitle: "Appointment Request Submitted!",
      successMessage: "Thank you. Our clinic desk will call you within 15 minutes to confirm your scheduled slot.",
      close: "Close"
    },
    footer: {
      tagline: "Poet. Dentist. Dreamer. Disruptor.",
      councilText: "Registered with Nepal Medical Council under Act 1964 • Permanent Dental Registration No. 13350",
      copyright: "All Rights Reserved. Designed with clinical precision and handcrafted warmth."
    }
  },
  ne: {
    nav: {
      about: "परिचय",
      clinic: "दन्त क्लिनिक",
      publications: "पुस्तक तथा प्रकाशन",
      insights: "विचार तथा साहित्य",
      contact: "सम्पर्क",
      bookConsultation: "परामर्श लिनुहोस्",
      license: "NMC दर्ता नं. १३३५०"
    },
    hero: {
      tagline: "क्लिनिकल दक्षता र साहित्यिक चेतना",
      hookTitlePart1: "मुस्कानको पुनस्र्थापना,",
      hookTitlePart2: "ज्ञानको विस्तार।",
      bio: "डा. रत्न कुमार मिश्र एक अनुभवी दन्त शल्यचिकित्सक, आरोग्य डेन्टल क्लिनिकका निर्देशक तथा लेखक हुनुहुन्छ। विगत १५+ वर्षदेखि गुणस्तरीय दन्त उपचार तथा चिकित्सा शिक्षामा निरन्तर समर्पित रहँदै उहाँले मानवीय सेवा र साहित्यिक चेतनालाई एकसाथ अघि बढाउनुभएको छ।",
      ctaClinic: "डेन्टल क्लिनिक हेर्नुहोस्",
      ctaPublications: "पुस्तकहरू अध्ययन गर्नुहोस्",
      experienceBadge: "१५+ वर्षको क्लिनिकल अनुभव",
      clinicPill: "आरोग्य डेन्टल क्लिनिक",
      activeStatus: "नयाँ बिरामीहरूका लागि खुला",
      credentialsLabel: "नेपाल मेडिकल काउन्सिल स्थायी दर्ता नं. १३३५० (B.D.S. BPKIHS धरान)"
    },
    clinic: {
      sectionBadge: "आरोग्य डेन्टल क्लिनिक",
      title: "विशिष्ट दन्त चिकित्सा तथा शल्यक्रिया",
      subtitle: "आधुनिक प्रविधि, दुखाइरहित उपचार, र विशेषज्ञतायुक्त सेवामार्फत तपाईंको दाँत र गिजाको पूर्ण स्याहार।",
      stats: {
        patients: "१२,०००+",
        patientsLabel: "सफल उपचार गरिएका बिरामी",
        procedures: "१८,५००+",
        proceduresLabel: "सम्पन्न गरिएका प्रक्रिया",
        experience: "१५+ वर्ष",
        experienceLabel: "क्लिनिकल अनुभव",
        satisfaction: "९९.४%",
        satisfactionLabel: "बिरामी सन्तुष्टि दर"
      },
      services: [
        {
          id: "aesthetic",
          title: "एस्थेटिक डेन्टिस्ट्री र स्माइल डिजाइन",
          description: "आधुनिक कस्मेटिक दाँत चम्काउने, भेनियर्स, र अनुहारको बनोट सुहाउँदो आकर्षक मुस्कान निर्माण।",
          badge: "कस्मेटिक सेवा"
        },
        {
          id: "surgery",
          title: "ओरल तथा म्याक्सिलोफेसियल सर्जरी",
          description: "दुखाइरहित बुद्धि बंगारा निकाल्ने, माइनर ओरल सर्जरी र सिस्टको सुरक्षित उपचार।",
          badge: "शल्यक्रिया विशेषज्ञता"
        },
        {
          id: "restorative",
          title: "रूट क्यानाल (RCT) र क्यापिङ",
          description: "एकै बसाइमा सम्पन्न हुने अत्याधुनिक रूट क्यानाल तथा उच्च गुणस्तरको जिरकोनिया दाँत क्याप।",
          badge: "रेस्टोरेटिभ"
        },
        {
          id: "preventive",
          title: "बाल दन्त चिकित्सा र रोकथाम",
          description: "बालबालिकाको दाँतको हेरचाह, दाँत सफा गर्ने (Scaling) तथा गिजा सम्बन्धी समग्र परामर्श।",
          badge: "रोकथाम तथा हेरचाह"
        }
      ],
      workingHoursTitle: "क्लिनिक खुल्ने समय",
      hoursMorning: "बिहान: ९:३० बजे देखि १:३० बजे सम्म",
      hoursEvening: "साँझ: ५:०० बजे देखि ८:३० बजे सम्म",
      daysAvailable: "आइतबार देखि शुक्रबार (शनिबार आकस्मिक सेवा)",
      callClinic: "क्लिनिकमा सिधै फोन गर्नुहोस्",
      whatsAppChat: "ह्वाट्सएप परामर्श",
      scheduleBtn: "क्लिनिक भेट निश्चित गर्नुहोस्",
      locationTitle: "क्लिनिक स्थान तथा नक्सा",
      locationAddress: "आरोग्य डेन्टल क्लिनिक, फाल्गुनन्द चोक, दमक-१, झापा",
      landmark: "फाल्गुनन्द चोक, दमक-१, झापा"
    },
    showcase: {
      sectionBadge: "साहित्यिक कृतिहरू तथा पुस्तकहरू",
      title: "प्रकाशित कृतिहरू तथा क्लिनिकल म्यानुअल",
      subtitle: "डा. रत्न कुमार मिश्रका विशिष्ट साहित्यिक तथा चिकित्सा तयारी पुस्तकहरू। गम्भीर आत्मचिन्तन र क्लिनिकल सफलताका लागि विशेष रूपमा तयार पारिएका कृतिहरू।",
      orderOnline: "अनलाइन अर्डर गर्नुहोस् (अमेजन / प्रकाशक)",
      readExcerpt: "निःशुल्क अंश पढ्नुहोस्",
      quickPreview: "विषयसूची तथा संक्षिप्त झलक",
      aboutTheBook: "पुस्तकको विषय तथा सारसंक्षेप",
      showMore: "पूर्ण सारांश पढ्नुहोस्",
      showLess: "सारांश संकुचित गर्नुहोस्",
      openIn3D: "३डी पाना पल्टाएर हेर्नुहोस्",
      tableOfContents: "विषयसूची (Chapters)",
      quoteBannerText:
        "“चिकित्साले शरीरको भौतिक संरचना पुनर्निर्माण गर्छ; साहित्यले आत्माको मन्दिरलाई आलोकित गर्छ। सच्चा चिकित्सक केवल नसाको गति मात्र सुन्दैन, उसले मानव मनका नबोलिएका व्यथाहरू पनि सुन्छ।”",
      quoteBannerAuthor: "डा. रत्न कुमार मिश्र",
      quoteBannerSubtitle: "कवि • दन्त चिकित्सक • चिन्तक • रूपान्तरणकारी"
    },
    books: {
      sectionBadge: "अन्तरक्रियात्मक ३डी रिडर",
      title: "अन्तरक्रियात्मक डिजिटल पुस्तक संग्रह",
      subtitle: "डा. मिश्रका कृतिहरूको जीवन्त डिजिटल अनुभव। पानाहरू स्वचालित रूपमा पल्टिन्छन् वा आफैँ पल्टाएर पढ्नुहोस्।",
      autoFlipActive: "स्वचालित पाना पल्टिँदै (सक्रिय)",
      autoFlipPaused: "स्वचालित पल्टाइ रोकियो",
      flipRandom: "१०–१५ वटा पाना आकस्मिक पल्टाउनुहोस्",
      pageIndicator: "पृष्ठ",
      of: "/",
      readFullSummary: "विवरण हेर्नुहोस्",
      pause: "रोक्नुहोस्",
      play: "सुरु गर्नुहोस्"
    },
    modal: {
      title: "दन्त परामर्श लिनुहोस्",
      subtitle: "आरोग्य डेन्टल क्लिनिक • डा. रत्न कुमार मिश्र (NMC १३३५०)",
      fullName: "बिरामीको पूरा नाम",
      phone: "सम्पर्क फोन नम्बर",
      date: "रोजेको मिति",
      slot: "रोजेको समय",
      slotMorning: "बिहान (९:३० – १:३०)",
      slotEvening: "साँझ (५:०० – ८:३०)",
      reason: "समस्या वा परामर्शको कारण",
      submit: "भेट निश्चित गर्नुहोस्",
      successTitle: "तपाईंको अनुरोध प्राप्त भयो!",
      successMessage: "धन्यवाद। हाम्रो क्लिनिक डेस्कले केही बेरमै तपाईंलाई फोन गरी समय पुष्टि गर्नेछ।",
      close: "बन्द गर्नुहोस्"
    },
    footer: {
      tagline: "Poet. Dentist. Dreamer. Disruptor.",
      councilText: "नेपाल मेडिकल काउन्सिल ऐन २०२० अन्तर्गत स्थायी दर्ता नं. १३३५०",
      copyright: "सर्वाधिकार सुरक्षित। क्लिनिकल शुद्धता र आत्मीयताका साथ निर्मित।"
    }
  }
};
