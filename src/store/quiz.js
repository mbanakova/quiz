

export default {
  state: {
    timeout: 300,
    questions: [
      {
        question: "Если смешать поровну жёлтый, красный и синий цвета, какой цвет получится?",
        img: require('@/assets/quiz1.jpg'),
        answers: {
          a: "Фиолетовый",
          b: "Малиновый",
          c: "Бирюзовый",
          d: "Бордовый",
        },
        correctAnswer: "d",
      },
      {
        question: "Что на картинке?",
        img: require('@/assets/quiz2.jpg'),
        answers: {
          a: "Шуруп",
          b: "Винт",
          c: "Саморез",
          d: "Болт",
        },
        correctAnswer: "d",
      },
      {
        question: "В Лондоне 23:00. Который час в Нью-Дели?",
        img: require('@/assets/quiz3.jpg'),
        answers: {
          a: "4:30",
          b: "6:00",
          c: "3:00",
          d: "5:30",
        },
        correctAnswer: "a",
      },
      {
        question: "В Windows XP помогали искать файлы:",
        img: require('@/assets/quiz4.jpg'),
        answers: {
          a: "Мышка, Ветка, Машинка, Чашка",
          b: "Кот, Скрепка, Волшебник, Собачка",
          c: "Ручка, Лупа, Дискета, Колокольчик",
          d: "Линейка, Ежик, Курсор, Магнит",
        },
        correctAnswer: "b",
      },
      {
        question: "Что в бутылке?:",
        img: require('@/assets/quiz5.jpg'),
        answers: {
          a: "Ром",
          b: "Текила",
          c: "Мескаль",
          d: "Кальвадос",
        },
        correctAnswer: "c",
      },
      {
        question: "Копальхен — это",
        img: require('@/assets/quiz6.jpg'),
        answers: {
          a: "Насекомое из Африки, родственник термита",
          b: "Сорт сладкого картофеля",
          c: "Ферментированное в болоте мясо оленя",
          d: "Устройство для подъёма якоря",
        },
        correctAnswer: "c",
      },
      {
        question: "Какого моря нет на Земле?",
        img: require('@/assets/quiz7.jpg'),
        answers: {
          a: "Содружества",
          b: "Флорес",
          c: "Изобилия",
          d: "Баффина",
        },
        correctAnswer: "c",
      },
      {
        question: "Сухое вино отличается от других тем, что...",
        img: require('@/assets/quiz8.jpg'),
        answers: {
          a: "В нём нет сахара",
          b: "Имеет минимум 3 года выдержки",
          c: "Виноград для него собирают после окончания сезона дождей",
          d: "Сильнее прочих обезвоживает организм",
        },
        correctAnswer: "a",
      },
      {
        question: "Куда шли пузырь, соломинка и лапоть из сказки?",
        img: require('@/assets/quiz9.jpg'),
        answers: {
          a: "Косить сено на лугу",
          b: "Ставить капкан на зайцев",
          c: "В город на ярмарку",
          d: "В лес дрова рубить",
        },
        correctAnswer: "d",
      },
      {
        question: "Какая это модель Боинга?",
        img: require('@/assets/quiz10.jpg'),
        answers: {
          a: "737-300",
          b: "777-200",
          c: "777-300",
          d: "787-Dreamliner",
        },
        correctAnswer: "c",
      },
      {
        question: "В 1895 году этот учёный сделал открытие, ставшее мощным толчком для развития медицины. Что он открыл?",
        img: require('@/assets/quiz11.jpg'),
        answers: {
          a: "Пенициллин",
          b: "Группы крови",
          c: "Витамины",
          d: "Х-излучение",
        },
        correctAnswer: "d",
      },
      {
        question: "6! = ",
        img: require('@/assets/quiz12.jpg'),
        answers: {
          a: "12",
          b: "720",
          c: "36",
          d: "21"
        },
        correctAnswer: "b",
      },
      {
        question: "Куллинан || «Малая Звезда Африки» — один из самых крупных бриллиантов в мире, весит 317 карат и украшает...",
        img: require('@/assets/quiz13.jpg'),
        answers: {
          a: "Корону Британской Империи",
          b: "Скипетр Российской Империи",
          c: "Корону королевы Елизаветы",
          d: "Корону династии Великих Моголов",
        },
        correctAnswer: "a",
      },
      {
        question: "((0,2)¹⁴ * (0,2)⁹) / ((0,2)¹⁵ * (0,2)⁶)  = ...",
        img: require('@/assets/quiz12.jpg'),
        answers: {
          a: "0,0004",
          b: "0,04",
          c: "0,16",
          d: "4",
        },
        correctAnswer: "b",
      },
      {
        question: "С 1932 года во всех столовых на советских предприятиях четверг стал рыбным днём. А кто его придумал?",
        img: require('@/assets/quiz15.jpg'),
        answers: {
          a: "Полина Жемчужина",
          b: "Иосиф Сталин",
          c: "Анастас Микоян",
          d: "Александра Коллонтай",
        },
        correctAnswer: "c",
      },
      {
        question: "Из этих моллюсков научились добывать краситель ещё древние финикийцы. О каком красителе идёт речь?",
        img: require('@/assets/quiz16.jpg'),
        answers: {
          a: "Пурпур",
          b: "Индиго",
          c: "Ализарин",
          d: "Анилин",
        },
        correctAnswer: "a",
      },
      {
        question: "Следующий знак опасности это — ... ",
        img: require('@/assets/quiz17.jpg'),
        answers: {
          a: "Ядовитый газ",
          b: "Ионизирующее излучение",
          c: "Биологическая угроза",
          d: "Коррозионные вещества",
        },
        correctAnswer: "c",
      },
      {
        question: "Всех этих известных людей — Чарлз Дарвин, Николай Гоголь, Фредерик Шопен, Пётр Чайковский, Чарли Чаплин, Майкл Джексон - объединяет одна общая характеристика. Какая именно?",
        img: require('@/assets/quiz18.jpg'),
        answers: {
          a: "Они левши",
          b: "Они меланхолики",
          c: "Их отчисляли из школы",
          d: "В детстве переболели оспой",
        },
        correctAnswer: "b",
      },
      {
        question: "Что на фото?",
        img: require('@/assets/quiz19.jpg'),
        answers: {
          a: "Морской огурец",
          b: "Плод опунции",
          c: "Кофе лювак до просушки",
          d: "Желчный пузырь с камнями",
        },
        correctAnswer: "d",
      },
      {
        question: "Традиционное жилище эскимосов это —",
        img: require('@/assets/quiz20.jpg'),
        answers: {
          a: "Иглу",
          b: "Чум",
          c: "Юрта",
          d: "Вигвам",
        },
        correctAnswer: "a",
      },
    ],
  },
  mutations: {
    timeout(state, timeout) {
      state.timeout = timeout
    }
  },
  actions: {

  },
  getters: {
    getQuestions(state) {
      return state.questions
    },
    getQuestionsLength(state) {
      return state.questions.length
    },
    getTimeout(state) {
      return state.timeout
    }
  },
}