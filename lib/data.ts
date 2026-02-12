export interface AdhkarItem {
  id: string
  category: 'morning' | 'evening' | 'after-salah'
  title: string
  arabic: string
  transliteration: string
  meaning: string
}

export interface DuaaItem {
  id: string
  category: 'fasting' | 'iftar' | 'forgiveness' | 'parents' | 'laylatul-qadr'
  title: string
  arabic: string
  transliteration: string
  meaning: string
}

export const adhkarData: AdhkarItem[] = [
  {
    id: 'm1',
    category: 'morning',
    title: 'Tasbīḥ',
    arabic: 'سبحان الله',
    transliteration: 'Subḥān allāh',
    meaning: 'Glory be to Allah',
  },
  {
    id: 'm2',
    category: 'morning',
    title: 'Taḥmīd',
    arabic: 'الحمد لله',
    transliteration: 'Al-ḥamdu lilāh',
    meaning: 'All praise is due to Allah',
  },
  {
    id: 'm3',
    category: 'morning',
    title: 'Takbīr',
    arabic: 'الله أكبر',
    transliteration: 'Allāh akbar',
    meaning: 'Allah is the Greatest',
  },
  {
    id: 'm4',
    category: 'morning',
    title: 'Lā ilāha illallāh',
    arabic: 'لا إله إلا الله',
    transliteration: 'Lā ilāha illallāh',
    meaning: 'There is no deity except Allah',
  },
  {
    id: 'm5',
    category: 'morning',
    title: 'Morning Supplication',
    arabic: 'أصبحنا وأصبح الملك لله',
    transliteration: 'Aṣbaḥnā wa aṣbaḥa al-mulk lilāh',
    meaning: 'We have entered the morning and the dominion belongs to Allah',
  },
  {
    id: 'm6',
    category: 'morning',
    title: 'Seeking Protection',
    arabic: 'اللهم إني أسألك خيرا',
    transliteration: 'Allāhumma innī as\'aluka khayra',
    meaning: 'O Allah, I ask You for good',
  },
  {
    id: 'e1',
    category: 'evening',
    title: 'Evening Tasbīḥ',
    arabic: 'سبحان الله وبحمده',
    transliteration: 'Subḥān allāh wa biḥamdihi',
    meaning: 'Glory be to Allah and with His praise',
  },
  {
    id: 'e2',
    category: 'evening',
    title: 'Evening Takbīr',
    arabic: 'الله أكبر كبيرا',
    transliteration: 'Allāh akbar kabīra',
    meaning: 'Allah is the Greatest, so great',
  },
  {
    id: 'e3',
    category: 'evening',
    title: 'Protection Supplica',
    arabic: 'أمسينا وأمسى الملك لله',
    transliteration: 'Amsaynā wa amsā al-mulk lilāh',
    meaning: 'We have entered the evening and the dominion belongs to Allah',
  },
  {
    id: 'e4',
    category: 'evening',
    title: 'Gratitude',
    arabic: 'اللهم ما أمسى بي من نعمة فمنك',
    transliteration: 'Allāhumma mā amsā bī min niʿma fa-minka',
    meaning: 'O Allah, whatever blessing befalls me in the evening is from You',
  },
  {
    id: 'e5',
    category: 'evening',
    title: 'Evening Peace',
    arabic: 'بسم الله الذي لا يضر مع اسمه شيء',
    transliteration: 'Bismillāh alladhī lā yaḍarru maʿa smihi shay\'',
    meaning: 'In the name of Allah, the Great, nothing in the earth or the sky can harm',
  },
  {
    id: 'e6',
    category: 'evening',
    title: 'Seeking Forgiveness',
    arabic: 'أستغفر الله الذي لا إله إلا هو',
    transliteration: 'Astaghfir allāh alladhī lā ilāha illā huwa',
    meaning: 'I seek forgiveness from Allah, the only deity',
  },
  {
    id: 'a1',
    category: 'after-salah',
    title: 'Tasbeeh after Salah',
    arabic: 'سبحان الله 33 مرة والحمد لله 33 مرة والله أكبر 34 مرة',
    transliteration: 'Subḥān allāh (33x), Al-ḥamdu lilāh (33x), Allāh akbar (34x)',
    meaning: 'Glory be to Allah 33 times, praise 33 times, Allah is Greatest 34 times',
  },
  {
    id: 'a2',
    category: 'after-salah',
    title: 'Lā ilāha illallāh',
    arabic: 'لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير',
    transliteration: 'Lā ilāha illallāh waḥdahu lā sharīka lahu...',
    meaning: 'There is no deity except Allah, alone, no partner, His is the dominion',
  },
  {
    id: 'a3',
    category: 'after-salah',
    title: 'Aʿūdhu bilāh',
    arabic: 'أعوذ بالله من الشيطان الرجيم',
    transliteration: 'Aʿūdhu bilāh min ash-shaytān ar-rajīm',
    meaning: 'I seek refuge with Allah from the accursed Satan',
  },
  {
    id: 'a4',
    category: 'after-salah',
    title: 'Quranic Verses',
    arabic: 'قل هو الله أحد الله الصمد',
    transliteration: 'Qul huwa allāh aḥad, allāh aṣ-ṣamad',
    meaning: 'Say: He is Allah, the One, Allah is Eternal',
  },
  {
    id: 'a5',
    category: 'after-salah',
    title: 'Seeking Pardon',
    arabic: 'اللهم أنت السلام ومنك السلام',
    transliteration: 'Allāhumma anta as-salām wa minka as-salām',
    meaning: 'O Allah, You are Peace and from You is Peace',
  },
  {
    id: 'a6',
    category: 'after-salah',
    title: 'Mercy Supplication',
    arabic: 'اللهم اغفر لي ذنبي كله',
    transliteration: 'Allāhumma aghfir lī dhanbī kulla',
    meaning: 'O Allah, forgive all of my sins',
  },
]

export const duaaData: DuaaItem[] = [
  {
    id: 'f1',
    category: 'fasting',
    title: 'Fasting Intention',
    arabic: 'اللهم إني نويت أن أصوم غدا',
    transliteration: 'Allāhumma innī nawaytu an aṣūma ghada',
    meaning: 'O Allah, I intend to fast tomorrow',
  },
  {
    id: 'f2',
    category: 'fasting',
    title: 'Breaking Fast with Dates',
    arabic: 'بسم الله والحمد لله',
    transliteration: 'Bismillāh wa al-ḥamdu lilāh',
    meaning: 'In the name of Allah and all praise to Allah',
  },
  {
    id: 'f3',
    category: 'fasting',
    title: 'Strength for Fasting',
    arabic: 'اللهم أعني على صيامك وتلاوة كتابك',
    transliteration: 'Allāhumma aʿinnī ʿalā ṣiyāmika wa tilāwat kitābika',
    meaning: 'O Allah, help me with Your fasting and reciting Your Book',
  },
  {
    id: 'f4',
    category: 'fasting',
    title: 'Purification',
    arabic: 'اللهم طهرني من الذنوب والخطايا',
    transliteration: 'Allāhumma ṭahirnī min adh-dhunūb wa al-khaṭāyā',
    meaning: 'O Allah, purify me from sins and mistakes',
  },
  {
    id: 'if1',
    category: 'iftar',
    title: 'Iftar Supplication',
    arabic: 'اللهم لك صمت وبك آمنت وعليك توكلت',
    transliteration: 'Allāhumma lak ṣumtu wa bika āmant wa ʿalayka tawakkalt',
    meaning: 'O Allah, I fasted for You and believed in You and trust in You',
  },
  {
    id: 'if2',
    category: 'iftar',
    title: 'Gratitude for Breaking Fast',
    arabic: 'الحمد لله الذي أعانني على صيامي',
    transliteration: 'Al-ḥamdu lilāh alladhī aʿānannī ʿalā ṣiyāmī',
    meaning: 'Praise be to Allah Who helped me with my fasting',
  },
  {
    id: 'if3',
    category: 'iftar',
    title: 'Restoration Supplication',
    arabic: 'اللهم أطعمني بعد جوعي وأسقني بعد ظمئي',
    transliteration: 'Allāhumma aṭʿimnī baʿda jūʿī wa asqinī baʿda ẓamī\'',
    meaning: 'O Allah, feed me after my hunger and give me drink after my thirst',
  },
  {
    id: 'g1',
    category: 'forgiveness',
    title: 'Repentance',
    arabic: 'أستغفر الله وأتوب إليه',
    transliteration: 'Astaghfir allāh wa atūbu ilayh',
    meaning: 'I seek forgiveness from Allah and turn to Him in repentance',
  },
  {
    id: 'g2',
    category: 'forgiveness',
    title: 'Divine Mercy',
    arabic: 'اللهم إن سعة رحمتك وسعت كل شيء',
    transliteration: 'Allāhumma inna saʿat raḥmatuka wasat kulla shay\'',
    meaning: 'O Allah, Your mercy encompasses all things',
  },
  {
    id: 'g3',
    category: 'forgiveness',
    title: 'Forgiveness Prayer',
    arabic: 'اللهم أنت أعظم من أن تُعصى فاغفر لي',
    transliteration: 'Allāhumma anta aʿẓam min an tuʿṣā faghfir lī',
    meaning: 'O Allah, You are too Great to be disobeyed, forgive me',
  },
  {
    id: 'p1',
    category: 'parents',
    title: 'Parents Duaa',
    arabic: 'اللهم اغفر لي ولوالديّ وارحمهما كما ربياني صغيرا',
    transliteration: 'Allāhumma aghfir lī wa li-wālidayya wa arḥamhuma...',
    meaning: 'O Allah, forgive me and my parents and have mercy on them as they raised me',
  },
  {
    id: 'p2',
    category: 'parents',
    title: 'Kindness to Parents',
    arabic: 'رب اغفر لي ولوالديّ وللمؤمنين',
    transliteration: 'Rabb aghfir lī wa li-wālidayya wa li-al-muʾminīn',
    meaning: 'O Lord, forgive me, my parents, and all believers',
  },
  {
    id: 'lq1',
    category: 'laylatul-qadr',
    title: 'Laylatul Qadr Supplication',
    arabic: 'اللهم إنك عفو تحب العفو فاعف عني',
    transliteration: 'Allāhumma innaka ʿafuww tuḥibb al-ʿafwa fa-ʿaf ʿannī',
    meaning: 'O Allah, You are Pardoning and love pardon, so pardon me',
  },
  {
    id: 'lq2',
    category: 'laylatul-qadr',
    title: 'Night of Power',
    arabic: 'اللهم إن هذه ليلة القدر',
    transliteration: 'Allāhumma inna hādhihi laylat al-qadr',
    meaning: 'O Allah, this is the Night of Power',
  },
]

export const ramadanCalendarDays = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hijriDate: `${i + 1} Ramadan`,
  gregorianDate: `Placeholder ${i + 1}`,
  notes: '',
}))
