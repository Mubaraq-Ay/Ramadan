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
  title: "Āyat al-Kursī (1x)",
  arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَؤُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  transliteration: "Allāhu lā ilāha illā huwa al-ḥayyul-qayyūm. Lā ta’khudhuhu sinatun wa lā nawm. Lahu mā fis-samāwāti wa mā fil-arḍ. Man dhalladhī yashfa‘u ‘indahu illā bi-idhnih. Ya‘lamu mā bayna aydīhim wa mā khalfahum. Wa lā yuḥīṭūna bishay’in min ‘ilmihi illā bimā shā’. Wasi‘a kursiyyuhus-samāwāti wal-arḍ. Wa lā ya’ūduhu ḥifẓuhumā. Wa huwa al-‘aliyyul-‘aẓīm.",
  meaning: "There is no deity except Allah, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what is behind them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation does not tire Him. And He is the Most High, the Most Great.",
  
},
  {
  id: "e2",
  category: "evening",
  title: "Sūrah Al-Ikhlāṣ (3x)",
  arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۞ اللَّهُ الصَّمَدُ ۞ لَمْ يَلِدْ وَلَمْ يُولَدْ ۞ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
  transliteration: "Qul huwa Allāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakun lahu kufuwan aḥad.",
  meaning: "Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. And there is none comparable to Him.",
   
},
{
  id: "e3",
  category: "evening",
  title: "Sūrah Al-Falaq (3x)",
  arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ مِن شَرِّ مَا خَلَقَ ۞ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۞ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  transliteration: "Qul a‘ūdhu birabbil-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharrin-naffāthāti fil-‘uqad. Wa min sharri ḥāsidin idhā ḥasad.",
  meaning: "Say: I seek refuge in the Lord of daybreak from the evil of what He created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.",
 
},
{
  id: "e4",
  category: "evening",
  title: "Sūrah An-Nās (3x)",
  arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۞ مَلِكِ النَّاسِ ۞ إِلَٰهِ النَّاسِ ۞ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۞ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۞ مِنَ الْجِنَّةِ وَالنَّاسِ",
  transliteration: "Qul a‘ūdhu birabbin-nās. Malikin-nās. Ilāhin-nās. Min sharril-waswāsil-khannās. Alladhī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
  meaning: "Say: I seek refuge in the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, from among jinn and mankind.",
   
},
{
  id: "e5",
  category: "evening",
  title: "Tawḥīd Declaration (10x)",
  arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  transliteration: "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu yuḥyī wa yumīt, wa huwa ‘alā kulli shay’in qadīr.",
  meaning: "There is no deity except Allah alone, without partner. His is the dominion and His is the praise. He gives life and causes death, and He is over all things capable.",
   
},
{
  id: "e6",
  category: "evening",
  title: "Seeking Pardon and Wellbeing (1x)",
  arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
  transliteration: "Allāhumma innī as’aluka al-‘afwa wal-‘āfiyata fid-dunyā wal-ākhirah. Allāhumma innī as’aluka al-‘afwa wal-‘āfiyata fī dīnī wa dunyāya wa ahlī wa mālī. Allāhumma-ustur ‘awrātī wa āmin raw‘ātī. Allāhumma-ḥfaẓnī min bayni yadayya wa min khalfī wa ‘an yamīnī wa ‘an shimālī wa min fawqī, wa a‘ūdhu bi‘aẓamatika an ughtāla min taḥtī.",
  meaning: "O Allah, I ask You for pardon and wellbeing in this world and the Hereafter. O Allah, I ask You for pardon and wellbeing in my religion, my worldly affairs, my family, and my wealth. O Allah, conceal my faults and calm my fears. O Allah, protect me from in front of me, from behind me, from my right, from my left, and from above me, and I seek refuge in Your greatness from being taken unaware from beneath me.",
   
},
 
{
  id: "e7",
  category: "evening",
  title: "Protection from Evil of the Soul and Shayṭān (1x)",
  arabic: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
  transliteration: "Allāhumma ‘ālim al-ghaybi wash-shahādah, fāṭir as-samāwāti wal-arḍ, rabba kulli shay’in wa malīkahu, ash-hadu an lā ilāha illā anta, a‘ūdhu bika min sharri nafsī, wa min sharri ash-shayṭāni wa shirkih, wa an aqtarifa ‘alā nafsī sū’an aw ajurrahu ilā muslim.",
  meaning: "O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of everything, I bear witness that there is no deity except You. I seek refuge in You from the evil of my own soul, from the evil of Shayṭān and his traps, and from committing wrong against myself or bringing harm to another Muslim.",
 
},
{
  id: "e8",
  category: "evening",
  title: "Protection from Harm (3x)",
  arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
  transliteration: "Bismillāhilladhī lā yaḍurru ma‘asmihi shay’un fil-arḍi wa lā fis-samā’i wa huwa as-Samī‘ul-‘Alīm.",
  meaning: "In the name of Allah, with whose name nothing in the earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
  
},
{
  id: "e9",
  category: "evening",
  title: "Yā Ḥayy Yā Qayyūm (1x)",
  arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
  transliteration: "Yā Ḥayy yā Qayyūm, bi-raḥmatika astaghīth, aṣliḥ lī sha’nī kullah, wa lā takilnī ilā nafsī ṭarfata ‘ayn.",
  meaning: "O Ever-Living, O Sustainer, by Your mercy I seek help. Rectify all of my affairs for me, and do not leave me to myself even for the blink of an eye.",
   
},
 {
  id: "e10",
  category: "evening",
  title: "Tasbīḥ (100x)",
  arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
  transliteration: "Subḥānallāhi wa biḥamdihī",
  meaning: "Glory be to Allah and praise be to Him.",
  
},
{
  id: "e11",
  category: "evening",
  title: "Seeking Forgiveness (100x)",
  arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
  transliteration: "Astaghfirullāha wa atūbu ilayh",
  meaning: "I seek forgiveness from Allah and I repent to Him.",
   
},

 

{
  id: "e14",
  category: "evening",
  title: "Evening Declaration (1x)",
  arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
  transliteration: "Amsaynā wa amsal-mulku lillāhi wal-ḥamdu lillāh. Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamd wa huwa ‘alā kulli shay’in qadīr. Rabbi as’aluka khayra mā fī hādhihil-laylah wa khayra mā ba‘dahā, wa a‘ūdhu bika min sharri mā fī hādhihil-laylah wa sharri mā ba‘dahā. Rabbi a‘ūdhu bika minal-kasal wa sū’il-kibar, Rabbi a‘ūdhu bika min ‘adhābin fin-nār wa ‘adhābin fil-qabr.",
  meaning: "We have entered the evening and the dominion belongs to Allah, and all praise is for Allah. There is no deity except Allah alone, without partner. His is the dominion and His is the praise, and He is capable of all things. My Lord, I ask You for the good of this night and the good that comes after it, and I seek refuge in You from the evil of this night and the evil that comes after it. My Lord, I seek refuge in You from laziness and the misery of old age. My Lord, I seek refuge in You from punishment in the Fire and punishment in the grave.",
  
},

{
  id: "e15",
  category: "evening",
  title: "Evening Reliance (1x)",
  arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
  transliteration: "Allāhumma bika amsaynā, wa bika aṣbaḥnā, wa bika naḥyā, wa bika namūt, wa ilaykal-maṣīr.",
  meaning: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final return.",
   
},

{
  id: "e16",
  category: "evening",
  title: "Sayyidul Istighfār (1x)",
  arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
  transliteration: "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā ‘abduk, wa anā ‘alā ‘ahdika wa wa‘dika mastata‘tu. A‘ūdhu bika min sharri mā ṣana‘tu. Abū’u laka bini‘matika ‘alayya wa abū’u bidhambī, faghfir lī fa innahu lā yaghfirudh-dhunūba illā anta.",
  meaning: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant, and I abide by Your covenant and promise as best as I can. I seek refuge in You from the evil of what I have done. I acknowledge before You Your favor upon me, and I acknowledge my sin. So forgive me, for none forgives sins except You.",
   
},

{
  id: "e17",
  category: "evening",
  title: "Wellbeing in Body and Faith (3x)",
  arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
  transliteration: "Allāhumma ‘āfinī fī badanī, Allāhumma ‘āfinī fī sam‘ī, Allāhumma ‘āfinī fī baṣarī, lā ilāha illā anta. Allāhumma innī a‘ūdhu bika minal-kufri wal-faqr, wa a‘ūdhu bika min ‘adhābil-qabr, lā ilāha illā anta.",
  meaning: "O Allah, grant me wellbeing in my body. O Allah, grant me wellbeing in my hearing. O Allah, grant me wellbeing in my sight. There is no deity except You. O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is no deity except You.",
  
},

{
  id: "e18",
  category: "evening",
  title: "Contentment with Islam (3x)",
  arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
  transliteration: "Raḍītu billāhi Rabban, wa bil-Islāmi dīnan, wa bi-Muḥammadin ṣallallāhu ‘alayhi wa sallama nabiyyan.",
  meaning: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad ﷺ as my Prophet.",
  
},


{
  id: "e20",
  category: "evening",
  title: "Seeking Protection (3x)",
  arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
  transliteration: "A‘ūdhu bikalimātillāhit-tāmmāti min sharri mā khalaq.",
  meaning: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
 
},

{
  id: "e21",
  category: "evening",
  title: "Sending Blessings upon the Prophet ﷺ (10x)",
  arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
  transliteration: "Allāhumma ṣalli wa sallim ‘alā nabiyyinā Muḥammad.",
  meaning: "O Allah, send Your prayers and peace upon our Prophet Muhammad.",
   
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
