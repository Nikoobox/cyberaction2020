import {
  CashIcon,
  ClockIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import pic1 from "../../media/images/pic1.jpg";
import pic2 from "../../media/images/pic2.jpg";
import pic3 from "../../media/images/pic3.jpeg";
import pic4 from "../../media/images/pic4.jpg";
import pic5 from "../../media/images/pic5.jpeg";
import pic6 from "../../media/images/pic6.jpg";
import pic7 from "../../media/images/pic7.jpeg";
import pic8 from "../../media/images/pic8.jpg";
import pic9 from "../../media/images/pic9.jpg";
import bdayPic1 from "../../media/images/bday/imgbday1.jpg";
import bdayPic2 from "../../media/images/bday/imgbday2.jpg";
import bdayPic3 from "../../media/images/bday/imgbday3.jpg";
import bdayPic4 from "../../media/images/bday/imgbday4.jpg";
import bdayPic5 from "../../media/images/bday/imgbday5.jpg";
// import bdayPic6 from "../../media/images/bday/imgbday6.jpg";
// import bdayPic7 from "../../media/images/bday/imgbday7.jpg";
import bunker1 from "../../media/images/games/bunker/bunker1.png";
import bunker2 from "../../media/images/games/bunker/bunker2.png";
import bunker3 from "../../media/images/games/bunker/bunker3.png";
import bunker4 from "../../media/images/games/bunker/bunker4.png";
import bunkerVideo from "../../media/images/games/bunker/bunker.mp4";
import containers1 from "../../media/images/games/containers/containers1.png";
import containers2 from "../../media/images/games/containers/containers2.png";
import containers3 from "../../media/images/games/containers/containers3.png";
import containers4 from "../../media/images/games/containers/containers4.png";
import containersVideo from "../../media/images/games/containers/containers.mp4";
import office1 from "../../media/images/games/office/office1.png";
import office2 from "../../media/images/games/office/office2.png";
// import office3 from "../../media/images/games/office/office3.png";
import office4 from "../../media/images/games/office/office4.png";
import officeVideo from "../../media/images/games/office/office.mp4";
import poligon1 from "../../media/images/games/poligon/poligon1.png";
import poligon2 from "../../media/images/games/poligon/poligon2.png";
import poligon3 from "../../media/images/games/poligon/poligon3.png";
import poligon4 from "../../media/images/games/poligon/poligon4.png";
import poligonVideo from "../../media/images/games/poligon/poligon.mp4";
import prototype1 from "../../media/images/games/prototype/prototype1.png";
import prototype2 from "../../media/images/games/prototype/prototype2.png";
import prototype3 from "../../media/images/games/prototype/prototype3.png";
import prototype4 from "../../media/images/games/prototype/prototype4.png";
import prototypeVideo from "../../media/images/games/prototype/prototype.mp4";
import speedball1 from "../../media/images/games/speedball/speedball1.jpg";
import speedball2 from "../../media/images/games/speedball/speedball2.png";
import speedball3 from "../../media/images/games/speedball/speedball3.png";
import speedball4 from "../../media/images/games/speedball/speedball4.png";
import speedballVideo from "../../media/images/games/speedball/speedball.mp4";
import warehouse1 from "../../media/images/games/warehouse/warehouse1.jpeg";
import warehouse2 from "../../media/images/games/warehouse/warehouse2.jpeg";
import warehouse3 from "../../media/images/games/warehouse/warehouse3.jpeg";
// import warehouse4 from "../../media/images/games/warehouse/warehouse4.jpeg";
import warehouseVideo from "../../media/images/games/warehouse/warehouse.mp4";
import bank1 from "../../media/images/games/bank/bank1.jpeg";
import bank2 from "../../media/images/games/bank/bank2.jpeg";
import bank3 from "../../media/images/games/bank/bank3.jpeg";
import bankVideo from "../../media/images/games/bank/bank.mp4";
import lab1 from "../../media/images/games/lab/lab1.jpeg";
import lab2 from "../../media/images/games/lab/lab2.jpeg";
import lab3 from "../../media/images/games/lab/lab3.jpeg";
import labVideo from "../../media/images/games/lab/lab.mp4";
import house1 from "../../media/images/games/house/house1.jpeg";
import house2 from "../../media/images/games/house/house2.jpeg";
import house3 from "../../media/images/games/house/house3.jpeg";
import houseVideo from "../../media/images/games/house/house.mp4";

export const IMAGES = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
export const BIRTHDAY_IMAGES = [
  bdayPic1,
  bdayPic2,
  bdayPic3,
  bdayPic4,
  bdayPic5,
  // bdayPic6,
  // bdayPic7,
];

export const BDAY_DATA = [
  ["Продолжительность:", "от 2х часов"],
  ["Будни:", "12000 руб/10 чел. за 2 часа"],
  ["Выходные:", "16000 руб/10 чел. за 2 часа"],
];

export const BDAY_DATA_EXTRA = [
  [
    "*В случае визита бОльшего количества игроков, каждый следующий (после 10 чел) оплачивается дополнительно:",
  ],
  ["Будний день:", "500 руб/чел/2 часа"],
  ["Выходной:", "700 руб/чел/2 часа"],
];

export const BDAY_DATA_INCLUDED = [
  ["Аренда специальной гостевой комнаты"],
  ["Столы, стулья, кулер с горячей/холодной водой, чай, кофе"],
  ["Аренда 10 игровых очков"],
  ["Количество гостей не ограничено"],
];

export const RULES_DATA = [
  {
    category: "price",
    header: "Цены",
    headerIcon: CashIcon,
    rows: [
      ["Будни:", "500 руб/чел"],
      ["Выходные:", "700 руб/чел."],
      ["Продолжительность сеанса:", "60 мин*."],
      ["*Смотри Правила"],
    ],
  },
  {
    category: "rules",
    header: "Правила",
    headerIcon: ClockIcon,
    rows: [
      ["Длительность игры:", "40 мин."],
      ["Инструктаж:", "10 мин."],
      ["Фотосессия:", "5-10 мин."],
      ["Количество команд:", "2"],
      ["Команда:", "2-5 чeл."],
    ],
  },
  {
    category: "technologies",
    header: "Технологии",
    headerIcon: StatusOnlineIcon,
    rows: [
      ["Очки:", "Oculus Quest."],
      ["Контроллеры:", "Oculus Touch."],
      ["Технология отслеживания:", "Oculus Insight."],
      ["Абсолютное погружение в виртуальную реальность."],
      ["100% беспроводные технологии."],
    ],
  },
];

export const GAMES_DATA = [
  {
    name: "Локация ·Лаборатория·",
    isNew: true,
    description:
      "Максимально насыщенное элементами и деталями пространство с яркими флористическими акцентами. 18+",
    video: labVideo,
    pictures: [lab1, lab2, lab3],
  },
  {
    name: "Локация ·Банк·",
    isNew: true,
    description:
      "Достаточно камерное пространство с немногочисленными количеством укрытий и ярким дизайном.",
    video: bankVideo,
    pictures: [bank1, bank2, bank3],
  },

  {
    name: "Локация ·Склад·",
    isNew: true,
    description:
      "Новая площадка «под открытым небом» с множеством препятствий-для любителей более объемного ощущения пребывания.",
    video: warehouseVideo,
    pictures: [warehouse1, warehouse2, warehouse3],
  },
  {
    name: "Локация ·Дом·",
    isNew: true,
    description:
      "Сочетания интерьера и экстерьера традиционного дома. Простой и типичный дизайн создают немного жутковатое ощущение от пребывания в таком знакомом доме в нетипичных обстоятельствах.",
    video: houseVideo,
    pictures: [house1, house2, house3],
  },
  {
    name: "Локация ·Бункер·",
    isNew: false,
    description:
      "Скорее к нам если готовы к напряженным перестрелкам в секретном Бункере. Оцените улучшенную механику взаимодействия и новейший геймплей карты.",
    video: bunkerVideo,
    pictures: [bunker1, bunker2, bunker3, bunker4],
  },
  {
    name: "Локация ·Контейнеры·",
    isNew: false,
    description:
      "Здесь полицейские вновь сразятся с плохими парнями. Улучшенная графика и новероятная реалестичность только в CyberAction Samara.",
    video: containersVideo,
    pictures: [containers1, containers2, containers3, containers4],
  },
  {
    name: "Локация ·Офис·",
    isNew: false,
    description:
      "Разрабатывайте тактику вместе с товарищами по команде либо действуйте как герой одиночка в новой локации от CyberAction Samara.",
    video: officeVideo,
    pictures: [office1, office2, office4],
  },
  {
    name: "Локация ·Полигон·",
    isNew: false,
    description:
      "Идеальное место чтобы немного пострелять и побегать. Настоящий командный VR шутер для любителей как компютерных игр, так и активного отдыха.",
    video: poligonVideo,
    pictures: [poligon1, poligon2, poligon3, poligon4],
  },
  {
    name: "Локация ·Прототип·",
    isNew: false,
    description:
      "Оранжевый или синий? Плохой парень или хороший полицейский? Все просто, но со вкусом. Новейшая локация теперь и на нашей Арене!",
    video: prototypeVideo,
    pictures: [prototype1, prototype3, prototype4],
  },
  {
    name: "Локация ·Спидбол·",
    isNew: false,
    description:
      "Спидбол-это командное VR приключение где ваши друзья превращаются либо в братьев по оружию, либо в виртуальных соперников.",
    video: speedballVideo,
    pictures: [speedball1, speedball2, speedball3, speedball4],
  },
];

export const FAQ_DATA = [
  ["Можно я с другом приду поиграть?", "-Нельзя 😄. Бронируем от 4-х человек."],
  [
    "Хотим забронировать День Рождения на 5 игроков-человек?",
    "-Да, можно. Вы бронируете праздник, исходя из количества гостей-игроков плюс отдельно арендуете комнату для съедобной части мероприятия.",
  ],
  [
    "Аренда комнаты?",
    "-2000₽/час. Бронировать можно от 30 мин и не с первого игрового часа! Т.е. вы, как конструктор, собираете свой праздник, исходя из количества гостей и бюджета.",
  ],
  [
    "Есть ли скидки именинникам? Впервые вас посещающим? Второй раз вас посещающим? Есть ли скидки от количества игроков?",
    "-Все наши скидки и плюшки собраны под постами в ВК и инсте с кибер-красивыми девушками 👸🏼.  Ищите, сохраняйте и пользуйтесь.",
  ],
  [
    "Продолжительность игры?",
    "-Общее время – 1 час. Из них минусуем время на инструктаж и подготовку, получается примерно 45 минут на игру.",
  ],
  [
    "А можно выбрать игру для 9/13/65 лет?",
    "-У нас одна, основная уникальная игра! Величайшая виртуальная битва между плохими парнями и копами 👮🏼‍♂️. Сражение на 10+ виртуальных локациях. Да прибудет с вами сила. 💪🏻",
  ],
  [
    "А можно комнату для пиццы забронить на 30 мин?",
    "-Можно! 30/60/90/120мин… ",
  ],
  [
    "Какой у вас график работы?",
    "-В будние дни: 16:00 - 22:00. В выходные дни: 10:00 - 22:00. По предварительной записи.",
  ],
  [
    "За какое время бронировать?",
    "-Тут такое дело: мы не можем ответить на этот вопрос 🙄. Кто-то умудряется за день до забронировать ДР, а иногда и за месяц нужная дата не свободна.",
  ],
  [
    "А мы пришли, а было закрыто...",
    "-Работаем только по предварительной записи! И это не лень-это разумно👆🏻. У нас командная игра и ребята собираются и договариваются о посещении нас заблаговременно.",
  ],
  [
    "А можно ли заказать к вам пиццу и слегка перекусить после?",
    "-Можно 🍕 ! У нас есть для этого специально отведённая комната! Время ее аренды-от 30мин. 2000₽/час. Такие же условия и для бронирования комнаты вне пакета ДР! (т.е. игровое время + комната на час-два-три).",
  ],
  [
    "Средний возраст игроков и есть ли что-то на постарше?",
    "-Погружению все возрасты покорны 🤿 . Что это значит? Акцент не на сложности, возрасте, умениях и навыках! Все просто. Все игроки становятся непосредственными героями и участниками событий и их, при этом, ничто не ограничивает. А испытать это невероятное ощущение, побегать, порезвиться, покричать, пребывая в абсолютно нереальном пространстве «не здесь и не сейчас» знаете ли...возрастными цензами такое не облагается. 👴",
  ],
  ["А, можно, мы, все-таки, вдвоем?", "-Нет. Не интересно 😑, не бронируем."],
  [
    "Работаете ли вы на неделе, днем?",
    "-Да, но: по предварительному согласованию, заранее!",
  ],
  [
    "Интересно ли девочкам?",
    "-Огромное количество посетивших нас дам различного возраста и проведённых девчачьих дней рождений, говорит о том, что, ДА! интересно 😉. Конечно, если ваша феечка не из тех, кто не планирует покидать свой цветочек или облачко 🦄 . Всё-таки, характер и настрой должны быть боевые.",
  ],
  [
    "Есть у вас не кровожадные игры?",
    "-Все локации достаточно мирные 🦖 - это когда без агрессии и трясущихся частей тела! Да да, такое бывает! Мирные стрелялки, от которых балдеют все, без скидки на возраст (9-10 +). За любовь, мир и щщщастье 🙌🏻",
  ],
];
