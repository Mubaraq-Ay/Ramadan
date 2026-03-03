export interface AdhkarItem {
  id: string;
  category: "morning" | "evening" | "after-salah";
  title: string;
  arabic: string;
  transliteration: string;
  meaning: string;
}

export interface DuaaItem {
  id: string;
  category: "fasting" | "iftar" | "forgiveness" | "parents" | "laylatul-qadr";
  title: string;
  arabic: string;
  transliteration: string;
  meaning: string;
}

export const adhkarData: AdhkarItem[] = [
  {
    id: "m1",
    category: "morning",
    title: "",
    arabic: "سبحان الله",
    transliteration: "Subḥān Allāh",
    meaning: "Glory be to Allah",
  },
  {
    id: "m2",
    category: "morning",
    title: "",
    arabic: "الحمد لله",
    transliteration: "Al-ḥamdu lilāh",
    meaning: "All praise is due to Allah",
  },
  {
    id: "m3",
    category: "morning",
    title: "",
    arabic: "الله أكبر",
    transliteration: "Allāh Akbar",
    meaning: "Allah is the Greatest",
  },
  {
    id: "m4",
    category: "morning",
    title: "",
    arabic: "لا إله إلا الله",
    transliteration: "Lā ilāha illallāh",
    meaning: "There is no deity except Allah",
  },

  {
    id: "m5",
    category: "morning",
    title: "Morning Supplication",
    arabic: `أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.
رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ.
رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.`,
    transliteration: `Asbaḥnā wa asbaḥal-mulku lillāh, wal-ḥamdu lillāh. Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamd, wa huwa ‘alā kulli shay’in qadīr.
Rabbi as’aluka khayra mā fī hādhā al-yawm wa khayra mā ba‘dah, wa a‘ūdhu bika min sharri mā fī hādhā al-yawm wa sharri mā ba‘dah.
Rabbi a‘ūdhu bika minal-kasal wa sū’il-kibar, Rabbi a‘ūdhu bika min ‘adhābin fin-nār wa ‘adhābin fil-qabr.`,
    meaning: `We have entered the morning and the dominion belongs to Allah, and all praise is for Allah. None has the right to be worshipped except Allah alone, without partner. His is the dominion and His is the praise, and He is capable of all things.
My Lord, I ask You for the good of this day and the good that comes after it, and I seek refuge in You from the evil of this day and the evil that comes after it.
My Lord, I seek refuge in You from laziness and the misery of old age, and I seek refuge in You from punishment in the Fire and punishment in the grave.`,
  },
  {
    id: "m6",
    category: "morning",
    title: "Seeking Protection",
    arabic: `اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ،
وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.`,
    transliteration: `Allāhumma innī as’aluka khayra hādhā al-yawm: fatḥahu, wa naṣrahu, wa nūrahū, wa barakatahū, wa hudāhū,
wa a‘ūdhu bika min sharri mā fīhi wa sharri mā ba‘dah.`,
    meaning: `O Allah, I ask You for the good of this day — its success, victory, light, blessings, and guidance — and I seek refuge in You from the evil within it and the evil that comes after it.`,
  },
  {
    id: "e1",
    category: "evening",
    title: "Evening Tasbīḥ",
    arabic: "سبحان الله وبحمده",
    transliteration: "Subḥān Allāh wa biḥamdihi",
    meaning: "Glory be to Allah and with His praise",
  },
  {
    id: "e2",
    category: "evening",
    title: "Evening Takbīr",
    arabic: "الله أكبر كبيرا",
    transliteration: "Allāh akbar kabīra",
    meaning: "Allah is Great, truly great",
  },
 {
  id: 'e3',
  category: 'evening',
  title: 'Protection Supplication',
  arabic: `أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.
رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.
رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.`,
  transliteration: `Amsaynā wa amsal-mulku lillāh, wal-ḥamdu lillāh. Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamd, wa huwa ‘alā kulli shay’in qadīr.
Rabbi as’aluka khayra mā fī hādhihil-laylah wa khayra mā ba‘dahā, wa a‘ūdhu bika min sharri mā fīhā wa sharri mā ba‘dahā.
Rabbi a‘ūdhu bika minal-kasal wa sū’il-kibar, Rabbi a‘ūdhu bika min ‘adhābin fin-nār wa ‘adhābin fil-qabr.`,
  meaning: `We have entered the evening and the dominion belongs to Allah, and all praise is for Allah. None has the right to be worshipped except Allah alone, without partner. His is the dominion and His is the praise, and He is capable of all things.
My Lord, I ask You for the good of this night and the good that comes after it, and I seek refuge in You from the evil of this night and the evil that comes after it.
My Lord, I seek refuge in You from laziness and the misery of old age, and I seek refuge in You from punishment in the Fire and punishment in the grave.`,
},
 {
  id: 'e4',
  category: 'evening',
  title: 'Gratitude',
  arabic: `اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.`,
  transliteration: `Allāhumma mā amsā bī min ni‘matin aw bi-aḥadin min khalqik, fa minka waḥdaka lā sharīka lak, falakal-ḥamd wa lakash-shukr.`,
  meaning: `O Allah, whatever blessing I or any of Your creation has received this evening is from You alone, without partner. So for You is all praise and to You is all thanks.`,
},
{
  id: 'e5',
  category: 'evening',
  title: 'Evening Peace',
  arabic: `بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ.`,
  transliteration: `Bismillāhilladhī lā yaḍurru ma‘asmihī shay’un fil-arḍi wa lā fis-samā’, wa huwa as-Samī‘ul-‘Alīm.`,
  meaning: `In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.`,
},
{
  id: 'e6',
  category: 'evening',
  title: 'Seeking Forgiveness',
  arabic: `أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ.`,
  transliteration: `Astaghfirullāhalladhī lā ilāha illā huwa, al-Ḥayyul-Qayyūm, wa atūbu ilayh.`,
  meaning: `I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him.`,
},
  {
    id: "a1",
    category: "after-salah",
    title: "Tasbeeh after Salah",
    arabic: "سبحان الله 33 مرة والحمد لله 33 مرة والله أكبر  33 مرة",
    transliteration:
      "Subḥān Allāh (33x), Al-ḥamdu lilāh (33x), Allāh Akbar (33x)",
    meaning:
      "Glory be to Allah 33 times, praise 33 times, Allah is Greatest 33 times",
  },
 {
  id: "a2",
  category: "after-salah",
  title: "Lā ilāha illallāh",
  arabic:
    "لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
  transliteration:
    "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamd, wa huwa ‘alā kulli shay’in qadīr",
  meaning:
    "There is no deity except Allah alone, with no partner. To Him belongs the dominion and all praise, and He is capable of all things.",
},
  {
    id: "a3",
    category: "after-salah",
    title: "Aʿūdhu bilāh",
    arabic: "أعوذ بالله من الشيطان الرجيم",
    transliteration: "Aʿūdhu bilāh min ash-shaytān ar-rajīm",
    meaning: "I seek refuge with Allah from the accursed Satan",
  },
 {
  id: "a4",
  category: "after-salah",
  title: "Quranic Verses",
  arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ`,
  transliteration: `Qul huwa Allāhu aḥad
Allāhuṣ-ṣamad
Lam yalid wa lam yūlad
Wa lam yakun lahu kufuwan aḥad`,
  meaning:
    "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. And there is none comparable to Him.",
},
  {
    id: "a5",
    category: "after-salah",
    title: "Seeking Pardon",
    arabic: "اللهم أنت السلام ومنك السلام",
    transliteration: "Allāhumma anta as-salām wa minka as-salām",
    meaning: "O Allah, You are Peace and from You is Peace",
  },
  {
    id: "a6",
    category: "after-salah",
    title: "Mercy Supplication",
    arabic: "اللهم اغفر لي ذنبي كله",
    transliteration: "Allāhumma aghfir lī dhanbī kulla",
    meaning: "O Allah, forgive all of my sins",
  },
];

export const duaaData: DuaaItem[] = [
  // {
  //   id: 'f1',
  //   category: 'fasting',
  //   title: 'Fasting Intention',
  //   arabic: 'اللهم إني نويت أن أصوم غدا',
  //   transliteration: 'Allāhumma innī nawaytu an aṣūma ghada',
  //   meaning: 'O Allah, I intend to fast tomorrow',
  // },
  {
    id: "f2",
    category: "fasting",
    title: "Breaking Fast with Dates",
    arabic: "بسم الله والحمد لله",
    transliteration: "Bismillāh wa al-ḥamdu lilāh",
    meaning: "In the name of Allah and all praise to Allah",
  },
  {
    id: "f3",
    category: "fasting",
    title: "Strength for Fasting",
    arabic: "اللهم أعني على صيامك وتلاوة كتابك",
    transliteration: "Allāhumma aʿinnī ʿalā ṣiyāmika wa tilāwat kitābika",
    meaning: "O Allah, help me with Your fasting and reciting Your Book",
  },
  {
    id: "f4",
    category: "fasting",
    title: "Purification",
    arabic: "اللهم طهرني من الذنوب والخطايا",
    transliteration: "Allāhumma ṭahirnī min adh-dhunūb wa al-khaṭāyā",
    meaning: "O Allah, purify me from sins and mistakes",
  },
 {
  id: "if1",
  category: "iftar",
  title: "Iftar Supplication",
  arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
  transliteration:
    "Dhahabaẓ-ẓama’u wabtallatil-‘urūq, wa thabatal-ajru in shā’ Allāh",
  meaning:
    "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
},
  {
    id: "if2",
    category: "iftar",
    title: "Gratitude for Breaking Fast",
    arabic: "الحمد لله الذي أعانني على صيامي",
    transliteration: "Al-ḥamdu lilāh alladhī aʿānannī ʿalā ṣiyāmī",
    meaning: "Praise be to Allah Who helped me with my fasting",
  },
  {
    id: "if3",
    category: "iftar",
    title: "Restoration Supplication",
    arabic: "اللهم أطعمني بعد جوعي وأسقني بعد ظمئي",
    transliteration: "Allāhumma aṭʿimnī baʿda jūʿī wa asqinī baʿda ẓamī'",
    meaning:
      "O Allah, feed me after my hunger and give me drink after my thirst",
  },
  {
    id: "g1",
    category: "forgiveness",
    title: "Repentance",
    arabic: "أستغفر الله وأتوب إليه",
    transliteration: "Astaghfir allāh wa atūbu ilayh",
    meaning: "I seek forgiveness from Allah and turn to Him in repentance",
  },
  {
    id: "g2",
    category: "forgiveness",
    title: "Divine Mercy",
    arabic: "اللهم إن سعة رحمتك وسعت كل شيء",
    transliteration: "Allāhumma inna saʿat raḥmatuka wasat kulla shay'",
    meaning: "O Allah, Your mercy encompasses all things",
  },
  {
    id: "g3",
    category: "forgiveness",
    title: "Forgiveness Prayer",
    arabic: "اللهم أنت أعظم من أن تُعصى فاغفر لي",
    transliteration: "Allāhumma anta aʿẓam min an tuʿṣā faghfir lī",
    meaning: "O Allah, You are too Great to be disobeyed, forgive me",
  },
 {
  id: "p1",
  category: "parents",
  title: "Parents Duaa",
  arabic: "اللهم اغفر لي ولوالديّ وارحمهما كما ربياني صغيرا",
  transliteration:
    "Allāhumma-ghfir lī wa li-wālidayya warḥamhumā kamā rabbayānī ṣaghīrā",
  meaning:
    "O Allah, forgive me and my parents, and have mercy on them as they raised me when I was small.",
},
  {
    id: "p2",
    category: "parents",
    title: "Kindness to Parents",
    arabic: "رب اغفر لي ولوالديّ وللمؤمنين",
    transliteration: "Rabb aghfir lī wa li-wālidayya wa li-al-muʾminīn",
    meaning: "O Lord, forgive me, my parents, and all believers",
  },
  {
    id: "lq1",
    category: "laylatul-qadr",
    title: "Laylatul Qadr Supplication",
    arabic: "اللهم إنك عفو تحب العفو فاعف عني",
    transliteration: "Allāhumma innaka ʿafuww tuḥibb al-ʿafwa fa-ʿaf ʿannī",
    meaning: "O Allah, You are Pardoning and love pardon, so pardon me",
  },
  {
    id: "lq2",
    category: "laylatul-qadr",
    title: "Night of Power",
    arabic: "اللهم إن هذه ليلة القدر",
    transliteration: "Allāhumma inna hādhihi laylat al-qadr",
    meaning: "O Allah, this is the Night of Power",
  },
];

export const ramadanCalendarDays = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hijriDate: `${i + 1} Ramadan`,
  gregorianDate: `Placeholder ${i + 1}`,
  notes: "",
}));
