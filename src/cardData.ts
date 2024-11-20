import { Card } from "../types/Card";
import bg1 from "../src/assets/images/training/bg1.png"
import bg2 from "../src/assets/images/training/bg2.png"
import bg3 from "../src/assets/images/training/bg3.png"
import bg4 from "../src/assets/images/training/bg4.png"
import bg5 from "../src/assets/images/training/bg5.png"
import bg6 from "../src/assets/images/training/bg6.png"
import bg7 from "../src/assets/images/training/bg7.png"
import bg8 from "../src/assets/images/training/bg8.png"
import bg9 from "../src/assets/images/training/bg9.png"
import bg10 from "../src/assets/images/training/bg10.png"
import bg11 from "../src/assets/images/training/bg11.png"

export const cardData: Card[] = [
  {
    id: 1,
    title: "Сегодня",
    subtitle: "Комплекс ОФП для тела (корпус, кор)",
    time: 30,
    date: "Сегодня", // с бэкенда должен приходить Date или timestamp ?
    bgImage: bg1 // картинка с бэкенда или будет тип тренировки?
  },
  {
    id: 2,
    title: "Персональная тренировка",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 15,
    date: "Завтра",
    bgImage: bg2
  },
  {
    id: 3,
    title: "Корпус, кор",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Чт, 14 ноября",
    bgImage: bg3
  },
  {
    id: 4,
    title: "Своя тренировка",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Cб, 16 ноября", 
    bgImage: bg4
  },
  {
    id: 5,
    title: "Присед с весом",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Пн, 18 ноября", 
    bgImage: bg5
  },
  {
    id: 6,
    title: "Бегаем на дорожке",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Ср, 20 ноября", 
    bgImage: bg6
  },
  {
    id: 7,
    title: "Спринты",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Пт, 22 ноября", 
    bgImage: bg7
  },
  {
    id: 8,
    title: "Выносливость",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Вс, 24 ноября", 
    bgImage: bg8
  },
  {
    id: 9,
    title: "Бегаем на дорожке",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Вт, 26 ноября", 
    bgImage: bg9
  },
  {
    id: 10,
    title: "Прыжки на скакалке",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Чт, 28 ноября", 
    bgImage: bg10
  },
  {
    id: 11,
    title: "Своя тренировка",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Cб, 30 ноября", 
    bgImage: bg4
  },
  {
    id: 12,
    title: "Прыжки на скакалке",
    subtitle: "Тренировка для окрепших любителей среднего уровня и выше",
    time: 25,
    date: "Пн, 2 декабря", 
    bgImage: bg11
  },
  
];
