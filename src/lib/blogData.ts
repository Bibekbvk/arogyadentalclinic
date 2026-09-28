export type BlogCategory =
  | "all"
  | "oral-health"
  | "clinical-research"
  | "author-musings"
  | "patient-guides";

export interface BlogPost {
  id: string;
  category: BlogCategory;
  categoryLabelEn: string;
  categoryLabelNe: string;
  titleEn: string;
  titleNe: string;
  excerptEn: string;
  excerptNe: string;
  dateEn: string;
  dateNe: string;
  readTime: string;
  imageBgGradient: string;
  iconType: "tooth" | "microscope" | "feather" | "guide";
  bilingualAvailable: boolean;
  contentEn: string[];
  contentNe: string[];
}

export interface DentalTip {
  id: number;
  questionEn: string;
  questionNe: string;
  category: string;
  answerEn: string;
  answerNe: string;
  coupletEn: string;
  coupletNe: string;
}

export const dailyDentalTips: DentalTip[] = [
  {
    id: 1,
    questionEn: "Why should you never brush your teeth immediately after citrus fruits or soda?",
    questionNe: "कागती, सुन्तला वा चिसो पेय खाएलगत्तै दाँत किन माझ्नु हुँदैन?",
    category: "Enamel Protection",
    answerEn:
      "Acidic foods temporarily soften tooth enamel for about 20-30 minutes. Brushing immediately scrubs away softened calcium prisms. Rinse with plain water first and wait 30 minutes for saliva to naturally remineralize your teeth.",
    answerNe:
      "अमिलो खाना वा पेयले दाँतको इनामेललाई केही समयका लागि नरम बनाउँछ। तुरुन्तै ब्रस गर्दा दाँत खिइने जोखिम हुन्छ। पानीले कुल्ला गर्नुहोस् र आधा घण्टापछि मात्र दाँत माझ्नुहोस्।",
    coupletEn: "“Patience in healing is like waiting for enamel to harden: haste destroys what quiet time restores.”",
    coupletNe: "हतारमा गरिएको कामले स्वास्थ्य बिगार्छ; धैर्यता नै स्वास्थ्यको पहिलो मन्त्र हो।"
  },
  {
    id: 2,
    questionEn: "Does flossing really matter if you brush twice every single day?",
    questionNe: "दैनिक दुई पटक ब्रस गरे पनि दाँतको बीचमा धागो (फ्लस) गर्न आवश्यक छ?",
    category: "Interdental Care",
    answerEn:
      "Yes. A toothbrush only reaches 65% of tooth surfaces. The remaining 35% lies between tightly spaced teeth where anaerobic food bacteria thrive, leading to proximal cavities and bone loss.",
    answerNe:
      "हो, ब्रसले दाँतको ६५% भाग मात्र सफा गर्छ। बाँकी ३५% दाँतको बीचको भाग फ्लसले मात्र सफा गर्न सक्छ, जहाँ ब्याक्टेरिया जम्मा हुन्छ।",
    coupletEn: "“What remains hidden in the crevices often shapes the longevity of the whole structure.”",
    coupletNe: "लुकेका कुराहरूमा ध्यान दिनुहोस्, दाँतको आयु त्यसैमा निर्भर हुन्छ।"
  },
  {
    id: 3,
    questionEn: "Why is bleeding while brushing an urgent medical warning rather than normal?",
    questionNe: "ब्रस गर्दा गिजाबाट रगत आउनुलाई सामान्य मान्न किन मिल्दैन?",
    category: "Gum Health",
    answerEn:
      "Healthy gums never bleed. Bleeding indicates active gingival inflammation (gingivitis) caused by microbial plaque bio-film. If left untreated, it progresses to irreversible bone loss around teeth.",
    answerNe:
      "स्वस्थ गिजाबाट कहिल्यै रगत आउँदैन। रगत आउनु गिजा सुन्निएको र ब्याक्टेरिया जमेको संकेत हो, जसलाई समयमै सफा (Scaling) गर्नुपर्छ।",
    coupletEn: "“Never ignore the quiet distress signals of the flesh before pain becomes permanent.”",
    coupletNe: "सुरुआती संकेतहरूलाई बेवास्ता नगर्नुहोस्; समयमै उपचार नै मुस्कानको सुरक्षा हो।"
  },
  {
    id: 4,
    questionEn: "How does the modified Bass technique protect your receded gumline?",
    questionNe: "४५ डिग्री कोणमा दाँत माझ्ने प्रविधि (Bass Technique) ले गिजा कसरी बचाउँछ?",
    category: "Brushing Technique",
    answerEn:
      "Angling soft bristles at 45 degrees towards the gum margin dislodges sub-gingival plaque without abrading sensitive root cementum. Horizontal harsh scrubbing leads to permanent gum recession and sensitivity.",
    answerNe:
      "ब्रसलाई ४५ डिग्रीको कोणमा राखेर बिस्तारै सफा गर्दा गिजाको भित्री भाग सफा हुन्छ र दाँतको संवेदनशीलता तथा खिइने समस्या रोकिन्छ।",
    coupletEn: "“Gentle direction accomplishes what forceful friction only shatters.”",
    coupletNe: "बल प्रयोग भन्दा सही दिशा र कोमलताले दीर्घकालीन सुरक्षा दिन्छ।"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "gentle-brushing-enamel",
    category: "oral-health",
    categoryLabelEn: "Oral Health Tips",
    categoryLabelNe: "दन्त स्वास्थ्य सुझाव",
    titleEn: "The Anatomy of Gentle Brushing: Why Aggressive Scrubbing Destroys Enamel",
    titleNe: "दाँत माझ्ने कोमल विधि: अत्यधिक घोट्दा इनामेल कसरी नष्ट हुन्छ?",
    excerptEn:
      "Most patients scrub teeth like kitchen tiles. Discover the biophysics of cervical abrasion and why light vibration preserves gum margins for decades.",
    excerptNe:
      "धेरैजसो मानिसहरू दाँतलाई कडा रूपमा घोट्छन्। कोमल ब्रसिङ र गिजाको सुरक्षा सम्बन्धी वैज्ञानिक जानकारी।",
    dateEn: "May 18, 2024",
    dateNe: "जेठ ५, २०८१",
    readTime: "4 min read",
    imageBgGradient: "from-teal-800 to-slate-900",
    iconType: "tooth",
    bilingualAvailable: true,
    contentEn: [
      "Tooth enamel is the hardest biological substance in the human body, composed of 96% hydroxyapatite crystals. However, it possesses zero regenerative capacity once lost.",
      "When patients apply heavy manual pressure using medium or hard bristles, they cause cervical abfraction and gingival recession, exposing porous dentin tubules. This leads to sharp pain when sipping cold liquids.",
      "The clinical gold standard: Use an ultra-soft micro-bristle toothbrush with minimal wrist pressure. Let the micro-vibrations sweep away biofilm without traumatizing the epithelial attachment."
    ],
    contentNe: [
      "दाँतको बाहिरी भाग (इनामेल) शरीरको सबैभन्दा कडा तत्व हो। तर एक पटक नष्ट भएपछि यो पुनः आफैँ बन्दैन।",
      "कडा ब्रसले जोडले घोट्दा दाँतको फेद खिइन्छ र गिजा तल सर्छ, जसले गर्दा चिसो वा तातो खाँदा दाँत सिरिङ्ग गर्छ।",
      "सधैँ नरम (Ultra-Soft) ब्रसको प्रयोग गरी बिस्तारै गोलाकार चालमा दाँत सफा गर्नु नै दीर्घायुको रहस्य हो।"
    ]
  },
  {
    id: "microscopic-endodontics-success",
    category: "clinical-research",
    categoryLabelEn: "Clinical Research",
    categoryLabelNe: "क्लिनिकल अनुसन्धान",
    titleEn: "Microscopic Rotary Endodontics: Long-Term Periapical Healing Rates",
    titleNe: "माइक्रोस्कोपिक रूट क्यानाल: दीर्घकालीन निको हुने दर र आधुनिक प्रविधि",
    excerptEn:
      "A clinical review of single-visit rotary endodontics with electronic apex locators and bioceramic sealers across 1,200 posterior molars.",
    excerptNe:
      "आधुनिक एपेक्स लोकेटर र बायोसिरामिक सिमेन्ट प्रयोग गरी गरिएको रूट क्यानालको सफलता दर सम्बन्धी क्लिनिकल समीक्षा।",
    dateEn: "April 29, 2024",
    dateNe: "वैशाख १७, २०८१",
    readTime: "6 min read",
    imageBgGradient: "from-slate-800 to-teal-950",
    iconType: "microscope",
    bilingualAvailable: true,
    contentEn: [
      "Traditional tactile hand instrumentation often left secondary accessory canals—especially MB2 in maxillary first molars—undetected, causing persistent periapical lesions.",
      "Incorporating impedance-based apex locators and variable-taper nickel-titanium (NiTi) rotary files achieves a 96.8% 5-year success rate, even in severely infected necrotic canals.",
      "Bioceramic endodontic sealers form an alkaline hermetic seal that precipitates biological hydroxyapatite formation against the apical bone margin."
    ],
    contentNe: [
      "परम्परागत हातले गरिने रूट क्यानालमा सूक्ष्म नसाहरू छुट्ने जोखिम हुन्थ्यो, जसले गर्दा पछि पुनः संक्रमण हुन सक्थ्यो।",
      "आधुनिक रोटरी मेसिन र एपेक्स लोकेटरको प्रयोगले ९६% भन्दा बढी सफलता दर प्रदान गर्दछ।",
      "बायोसिरामिक सिलरले दाँतको जरा र हड्डीको बीचमा प्राकृतिक सुरक्षा कवच निर्माण गर्दछ।"
    ]
  },
  {
    id: "the-quiet-corridor-musings",
    category: "author-musings",
    categoryLabelEn: "Author Musings",
    categoryLabelNe: "लेखकीय विचार",
    titleEn: "The Quiet Corridor: What a Surgeon Learns in the Moments Before Anesthesia",
    titleNe: "शान्त कोरिडोर: एनेस्थेसिया अघिका ती संवेदनशील क्षणहरूमा चिकित्सकले के सिक्छ?",
    excerptEn:
      "Behind every surgical mask lies an unspoken responsibility. Reflections on patient vulnerability, trembling hands, and the human poetry of clinical empathy.",
    excerptNe:
      "शल्यक्रिया अघि बिरामीको आँखामा देखिने डर र विश्वासको साहित्यिक तथा मानवीय विश्लेषण।",
    dateEn: "March 12, 2024",
    dateNe: "फागुन २८, २०८०",
    readTime: "5 min read",
    imageBgGradient: "from-amber-950 to-slate-900",
    iconType: "feather",
    bilingualAvailable: true,
    contentEn: [
      "In the surgical theater, before the needle touches tissue, there is a singular second where the patient looks directly into the doctor's eyes.",
      "In that fraction of time, degrees and council registration certificates matter very little. What matters is the quiet reassurance that another human being is committed to safeguarding their life and dignity.",
      "Medicine and poetry are born from the exact same observation: that human life is fragile, fleeting, and infinitely worthy of reverence."
    ],
    contentNe: [
      "शल्यक्रिया कक्षमा सुईले छाला छुनु अघि एक यस्तो क्षण आउँछ जहाँ बिरामीले चिकित्सकको आँखामा आफ्नो भरोसा खोजिरहेको हुन्छ।",
      "त्यस क्षणमा डिग्री भन्दा पनि चिकित्सकको आत्मीयता र विश्वासले बिरामीको आधा डर हटाइदिन्छ।",
      "चिकित्सा र साहित्य दुवैको मूल मर्म एउटै हो—मानव जीवनको कोमलता र मर्यादाको सम्मान।"
    ]
  },
  {
    id: "wisdom-teeth-myths-reality",
    category: "patient-guides",
    categoryLabelEn: "Patient Guides",
    categoryLabelNe: "बिरामी निर्देशिका",
    titleEn: "Navigating Your Wisdom Teeth: Extraction Myths vs Modern Surgical Reality",
    titleNe: "बुद्धि बंगारा निकाल्ने भ्रम र आधुनिक शल्यक्रियाको वास्तविकता",
    excerptEn:
      "Does every wisdom tooth need extraction? Understand angulation classifications, nerve proximity on CBCT, and painless atraumatic surgical recovery.",
    excerptNe:
      "के सबै बुद्धि बंगारा निकाल्नै पर्छ? दाँतको अवस्था, दुखाइरहित शल्यक्रिया र छिटो निको हुने उपायहरू।",
    dateEn: "February 22, 2024",
    dateNe: "फागुन १०, २०८०",
    readTime: "5 min read",
    imageBgGradient: "from-teal-900 to-slate-800",
    iconType: "guide",
    bilingualAvailable: true,
    contentEn: [
      "A common misconception is that all third molars must be excised immediately. If a wisdom tooth is fully erupted, functional, and cleanable without pericoronitis, conservative monitoring is appropriate.",
      "However, mesioangular and horizontal impactions that abut the second molar roots cause silent periodontal bone resorption and hidden root caries.",
      "With modern computerized local anesthesia and sectional bone guttering with sterile saline irrigation, post-operative swelling and discomfort are reduced by over 80%."
    ],
    contentNe: [
      "सबै बुद्धि बंगारा निकाल्नै पर्छ भन्ने भ्रम छ। यदि दाँत सिधा उम्रेको छ र सफा गर्न सकिन्छ भने निकाल्न जरुरी हुँदैन।",
      "तर यदि दाँत बांगो भएर अघिल्लो दाँतलाई असर गरिरहेको छ भने समयमै निकाल्नु बुद्धिमानी हुन्छ।",
      "आधुनिक प्रविधिबाट गरिने शल्यक्रियामा दुखाइ हुँदैन र २-३ दिनमै सामान्य अवस्थामा फर्किन सकिन्छ।"
    ]
  },
  {
    id: "one-couplet-a-day-philosophy",
    category: "author-musings",
    categoryLabelEn: "Author Musings",
    categoryLabelNe: "लेखकीय विचार",
    titleEn: "One Couplet a Day: Finding Discipline and Wonder in Daily Stanzas",
    titleNe: "दैनिक एक श्लोक: व्यस्त जीवनमा आत्मशान्ति र सृजनशीलता खोज्ने तरिका",
    excerptEn:
      "How writing a daily couplet between clinical hours transformed my perception of patient diagnosis, clinical presence, and inner equilibrium.",
    excerptNe:
      "क्लिनिकको व्यस्त समयका बाबजुद दैनिक एक मुक्तक वा श्लोक लेख्ने बानीले जीवन र पेशामा ल्याएको सकारात्मक परिवर्तन।",
    dateEn: "January 15, 2024",
    dateNe: "माघ १, २०८०",
    readTime: "4 min read",
    imageBgGradient: "from-amber-900 to-slate-900",
    iconType: "feather",
    bilingualAvailable: true,
    contentEn: [
      "Medicine requires rigorous objectivity, clinical protocols, and measured dosages. Yet the human mind craves nuance, rhythm, and philosophical space.",
      "Adopting 'One Couplet a Day' was not an escape from clinical dentistry; it was an expansion of it. It forced me to observe patients not as symptom codes, but as epic tapestries of human experience.",
      "Write one couplet before sunrise, hold one hand in compassion at midday, and sleep with a clear conscience at night."
    ],
    contentNe: [
      "चिकित्सा विज्ञानमा नियम र औषधिको मात्रा महत्वपूर्ण हुन्छ, तर मनलाई शान्त राख्न सृजनशीलता चाहिन्छ।",
      "'One Couplet a Day' ले मलाई बिरामीलाई केवल रोगको रूपमा मात्र नभई एक पूर्ण मानवीय भावनाको रूपमा हेर्न सिकायो।",
      "बिहान एक विचार चिन्तन गर्नुहोस्, दिउँसो करुणासाथ सेवा गर्नुहोस् र राती आत्मसन्तुष्टि साथ सुत्नुहोस्।"
    ]
  },
  {
    id: "pediatric-dental-habits",
    category: "patient-guides",
    categoryLabelEn: "Patient Guides",
    categoryLabelNe: "बिरामी निर्देशिका",
    titleEn: "First Dental Visit for Children: Creating a Fear-Free Foundation for Life",
    titleNe: "बालबालिकाको पहिलो दन्त परीक्षण: डररहित र रमाइलो अनुभव कसरी बनाउने?",
    excerptEn:
      "Why early pediatric visits prevent dental phobia. Guidelines on milk tooth preservation, bottle caries prevention, and gentle habit breaking.",
    excerptNe:
      "साना नानीबाबुहरूलाई दन्त परीक्षण गराउँदा अपनाउनुपर्ने सावधानी र दुधे दाँतको हेरचाहका वैज्ञानिक उपायहरू।",
    dateEn: "December 05, 2023",
    dateNe: "मंसिर १९, २०८०",
    readTime: "4 min read",
    imageBgGradient: "from-teal-800 to-amber-950",
    iconType: "tooth",
    bilingualAvailable: true,
    contentEn: [
      "The American Academy of Pediatric Dentistry recommends the first dental examination by age one, or within six months after the first primary tooth erupts.",
      "Primary teeth are critical space maintainers for underlying permanent teeth. Premature extraction of primary molars leads to severe orthodontic crowding in adolescence.",
      "Never use the dentist as a threat or punishment at home. Frame the dental visit as a joyful adventure where the doctor counts and polishes their pearly stars."
    ],
    contentNe: [
      "पहिलो दाँत उम्रिएको ६ महिनाभित्र वा १ वर्षको उमेरमा बालबालिकालाई पहिलो पटक दन्त चिकित्सककहाँ देखाउनु राम्रो मानिन्छ।",
      "दुधे दाँत पछि आउने स्थायी दाँतको लागि बाटो देखाउने माध्यम हुन्, त्यसैले यिनलाई जोगाउनु उत्तिकै जरुरी छ।",
      "बालबालिकालाई घरमा 'दाँतको डाक्टरले सुई लगाइदिन्छ' भनेर कहिल्यै नतर्साउनुहोस्; क्लिनिकलाई रमाइलो ठाउँको रूपमा चिनाउनुहोस्।"
    ]
  }
];
