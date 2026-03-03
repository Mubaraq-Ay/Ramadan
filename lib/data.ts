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
    meaning: "Allah is Great",
  },
  {
    id: "m4",
    category: "morning",
    title: "",
    arabic: "لا إله إلا الله",
    transliteration: "Lā ilāha illallāh",
    meaning: "There is no one worthy of worship in truth except Allah",
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
  title: "Tasbīḥ",
  arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
  transliteration: "Subḥānallāhi wa biḥamdihī, subḥānallāhil-‘aẓīm",
  meaning: "Glory be to Allah and praise be to Him; Glory be to Allah, the Most Great.",
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
  title: "Tasbīḥ After Ṣalāh",
  arabic: `سُبْحَانَ اللَّهِ (٣٣)
الْحَمْدُ لِلَّهِ (٣٣)
اللَّهُ أَكْبَرُ (٣٣)`,
  transliteration: `Subḥānallāh (33x)
Al-ḥamdu lillāh (33x)
Allāhu akbar (33x)`,
  meaning:
    "Glory be to Allah, praise be to Allah, Allah is Great",
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
  title: "Seeking Forgiveness After Ṣalāh",
  arabic: "أَسْتَغْفِرُ اللَّهَ (٣ مرات)",
  transliteration: "Astaghfirullāh (3 times)",
  meaning: "I seek forgiveness from Allah (three times).",
},
{
  id: "a4",
  category: "after-salah",
  title: "Āyat al-Kursī",
  arabic: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَؤُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
  transliteration: `Allāhu lā ilāha illā huwa al-ḥayyul-qayyūm. Lā ta’khudhuhu sinatun wa lā nawm. Lahu mā fis-samāwāti wa mā fil-arḍ. Man dhalladhī yashfa‘u ‘indahu illā bi-idhnih. Ya‘lamu mā bayna aydīhim wa mā khalfahum. Wa lā yuḥīṭūna bishay’in min ‘ilmihi illā bimā shā’. Wasi‘a kursiyyuhus-samāwāti wal-arḍ. Wa lā ya’ūduhu ḥifẓuhumā. Wa huwa al-‘aliyyul-‘aẓīm.`,
  meaning: `There is no deity except Allah, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what is behind them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation does not tire Him. And He is the Most High, the Most Great.`,
},
{
  id: "a5",
  category: "after-salah",
  title: "Allahumma Anta as-Salām",
  arabic:
    "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
  transliteration:
    "Allāhumma anta as-salām wa minka as-salām tabārakta yā dhal-jalāli wal-ikrām",
  meaning:
    "O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of Majesty and Honor.",
},
 {
  id: "a6",
  category: "after-salah",
  title: "Three Quls",
  arabic: `
  `,
  transliteration: `Qul huwa Allāhu aḥad...
Qul a‘ūdhu birabbil-falaq...
Qul a‘ūdhu birabbin-nās...`,
  meaning:
    "Recite Surah Ikhlas, Surah Falaq, and Surah Nas.",
}
];

export const duaaData: DuaaItem[] = [
//  {
//   id: "f1",
//   category: "fasting",
//   title: "Iftar Supplication",
//   arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
//   transliteration:
//     "Dhahabaẓ-ẓama’u wabtallatil-‘urūq, wa thabatal-ajru in shā’ Allāh",
//   meaning:
//     "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
// },
 {
  id: "f2",
  category: "fasting",
  title: "Seeking Forgiveness Before Iftar",
  arabic: "اللَّهُمَّ اغْفِرْ لِي",
  transliteration: "Allāhumma-ghfir lī",
  meaning: "O Allah, forgive me.",
},
{
  id: "f3",
  category: "fasting",
  title: "Seeking Taqwa",
  arabic: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
  transliteration:
    "Allāhumma ātī nafsī taqwāhā wa zakkihā anta khayru man zakkāhā anta waliyyuhā wa mawlāhā",
  meaning:
    "O Allah, grant my soul its righteousness and purify it. You are the best to purify it. You are its Protector and Guardian.",
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
  title: "Praise After Blessing",
  arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
  transliteration: "Al-ḥamdu lillāhi alladhī aṭ‘amanā wa saqānā wa ja‘alanā minal-muslimīn",
  meaning: "Praise be to Allah who fed us, gave us drink, and made us among the Muslims.",
},
 {
  id: "if3",
  category: "iftar",
  title: "Seeking Acceptance",
  arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
  transliteration: "Rabbana taqabbal minnā innaka antas-Samī‘ul-‘Alīm",
  meaning: "Our Lord, accept from us. Indeed, You are the All-Hearing, the All-Knowing.",
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
  title: "Master Supplication for Forgiveness",
  arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
  transliteration: "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā ‘abduk, wa anā ‘alā ‘ahdika wa wa‘dika mastata‘t, a‘ūdhu bika min sharri mā ṣana‘t, abū’u laka bini‘matika ‘alayya, wa abū’u bidhanbī faghfir lī, fa innahu lā yaghfirudh-dhunūba illā anta",
  meaning: "O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide by Your covenant and promise as best as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I confess my sin, so forgive me, for none forgives sins except You.",
},
  {
  id: "g3",
  category: "forgiveness",
  title: "Seeking Complete Forgiveness",
  arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
  transliteration: "Rabbighfir lī wa tub ‘alayya innaka antat-Tawwābur-Raḥīm",
  meaning: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Most Merciful.",
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
  title: "Seeking Paradise",
  arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
  transliteration: "Allāhumma innī as’alukal-jannah wa a‘ūdhu bika minan-nār",
  meaning: "O Allah, I ask You for Paradise and seek refuge in You from the Fire.",
}
];

export const ramadanCalendarDays = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hijriDate: `${i + 1} Ramadan`,
  gregorianDate: `Placeholder ${i + 1}`,
  notes: "",
}));
