import { Achievement, StudentStat, Quote } from "./types";

export const BIO_DATA = {
  fullName: "Lola Chamanova",
  title: "Ingliz tili mukammalligi sari yetaklovchi ustoz",
  birthDate: "2002-yil 7-may",
  birthPlace: "Navoiy viloyati",
  currentResidence: "Qashqadaryo viloyati, Chiroqchi tumani",
  currentWorkplace: '"Sarbon" o\'quv markazi',
  storyText: "Lola yoshligidan o'qishga va ilm olishga juda qiziqqan, har doim o'z ustida ishlash bilan band bo'lgan. Biroq bu muvaffaqiyatlar osonlikcha kelmagan — har bir zafar ortida mashaqqatli mehnat, uyqusiz tunlar va tinimsiz izlanishlar yotadi. Lola yorqin kelajak va o'z oldiga qo'ygan oliy maqsadlari sari hech qachon taslim bo'lmasdan, qat'iyat bilan odimladi. Har bir to'siq uni yanada kuchliroq qildi va ingliz tili olamida yetakchi mutaxassis bo'lib yetishishiga zamin yaratdi.",
  currentLife: "Bugungi kunda Lola Qashqadaryo viloyati, Chiroqchi tumanida istiqomat qiladi va u yerdagi \"Sarbon\" o'quv markazida o'z faoliyatini yuritmoqda. U nafaqat muvaffaqiyatli pedagog va rahbar, balki oilali, sevimli turmush o'rtog'i va bittagina shirin qizaloqning fidoiy, mehribon onasidir.",
  motto: "Motivatsiya bilan emas, intizom bilan harakat qil.",
  portraitUrl: "/src/assets/images/lola_portrait_1784217662482.jpg",
  contactPhone: "+998 97 389 10 98",
  telegramUser: "@Mrs_tulipTeacher",
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "exp",
    value: "8 yil",
    label: "Pedagogik tajriba",
    description: "Oliy toifali o'qituvchi sifatida yuzlab o'quvchilarga mukammal ta'lim.",
    iconName: "GraduationCap",
  },
  {
    id: "multilevel",
    value: "C1",
    label: "Multilevel va Milliy Sertifikat",
    description: "CEFR C1 darajasiga ega xalqaro toifali tajribali pedagog.",
    iconName: "Award",
  },
  {
    id: "grant",
    value: "100%",
    label: "Davlat Granti",
    description: "Tinchlik va ilm yo'lida 100% lik davlat granti sovrindori.",
    iconName: "Trophy",
  },
  {
    id: "students",
    value: "250+",
    label: "Faol o'quvchilar",
    description: "O'quv guruhlari rahbari va o'quv markazlarida 250 dan ortiq faol talabalar.",
    iconName: "Users",
  },
];

export const STUDENT_STATS: StudentStat[] = [
  {
    category: "B2 Milliy Sertifikat",
    percentage: 50,
    color: "#D4AF37", // Elegant Gold
    description: "O'quvchilarimizning yarmi milliy va xalqaro B2 darajasini muvaffaqiyatli qo'lga kiritishgan.",
  },
  {
    category: "C1 Milliy Sertifikat",
    percentage: 20,
    color: "#1E3A8A", // Deep Blue
    description: "Yuqori akademik talablarga javob beradigan C1 darajasi sohiblari.",
  },
  {
    category: "Kelajak Egalari",
    percentage: 30,
    color: "#64748B", // Slate
    description: "Navbatdagi imtihonlarga katta maqsadlar va ishonch bilan tayyorlanayotgan talabalar.",
  },
];

export const SPECIAL_STATS = {
  totalStudents: "250+",
  ieltsHighAchievers: "7-8 ta",
  ieltsHighScoreRange: "B2 va C1 darajasidagi yuqori ballar sohiblari.",
};

export const QUOTES: Quote[] = [
  {
    id: "q2",
    text: "Sen birdaniga zo'r bo'lib ketishing shart emas, shunchaki kechagidan yaxshiroq bo'l.",
    author: "Lola Chamanova",
  },
  {
    id: "q1",
    text: "Hech narsa o'zidan o'zi paydo bo'lib qolmaydi.",
    author: "Lola Chamanova",
  },
  {
    id: "q3",
    text: "Sening ertangi kuning, bugungi qilayotgan amalingga bog'liq.",
    author: "Lola Chamanova",
  },
  {
    id: "q4",
    text: "Agar sen harakat qilmasang, hattoki oddiy patni ham o'z joyidan qo'zg'atolmaysan.",
    author: "Lola Chamanova",
  },
  {
    id: "q5",
    text: "Motivatsiya bilan emas, intizom bilan harakat qil.",
    author: "Lola Chamanova",
  },
];
