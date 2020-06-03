// const questionsCollection = ["test", "test2", "tes3"];
//   const initialQuestionsList = () => {
//     let ques = [];
//     for (let i = 0; i < questionsCollection.length; i++) {
//       const element = questionsCollection[i];
//       ques.push({ task: element, id: uuid(), selected: false });
//     }
//     return { questions: ques };
//   };

// const questionList = {
//   id: "1-1",
//   title: "title",
//   questions: [
//     { task: element, id: uuid(),  selected: false },
//     { task: element, id: uuid(),  selected: false },
//   ],
// };
import { v4 as uuid } from "uuid";

const imageLists = [
  {
    title: "吃惊的脸",
    id: "frist-test-imgage",
    checkPoints: ["5", "6", "9", "10"],
    imageParts: [
      {
        alt: "",
        imgsrc: "./assets/images/surprise-0.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-1.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-2.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-3.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-4.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-5.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-6.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-7.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-8.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-9.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/surprise-15.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    title: "呕吐的家伙",
    id: "second-test-imgage",
    checkPoints: ["5", "6", "9", "10", "13", "14"],
    imageParts: [
      {
        alt: "hrow-up-guy-00",
        imgsrc: "./assets/images/hrow-up-guy-00.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-01",
        imgsrc: "./assets/images/hrow-up-guy-01.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-02",
        imgsrc: "./assets/images/hrow-up-guy-02.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-03",
        imgsrc: "./assets/images/hrow-up-guy-03.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-04",
        imgsrc: "./assets/images/hrow-up-guy-04.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-05",
        imgsrc: "./assets/images/hrow-up-guy-05.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-06",
        imgsrc: "./assets/images/hrow-up-guy-06.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-07",
        imgsrc: "./assets/images/hrow-up-guy-07.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-08",
        imgsrc: "./assets/images/hrow-up-guy-08.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-09",
        imgsrc: "./assets/images/hrow-up-guy-09.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-10",
        imgsrc: "./assets/images/hrow-up-guy-10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-11",
        imgsrc: "./assets/images/hrow-up-guy-11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-12",
        imgsrc: "./assets/images/hrow-up-guy-12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-13",
        imgsrc: "./assets/images/hrow-up-guy-13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-14",
        imgsrc: "./assets/images/hrow-up-guy-14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-15",
        imgsrc: "./assets/images/hrow-up-guy-15.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    title: "乐高人",
    id: "third-test-imgage",
    checkPoints: ["5", "6", "9", "10"],
    imageParts: [
      {
        alt: "hrow-up-guy-00",
        imgsrc: "./assets/images/lego-00.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-01",
        imgsrc: "./assets/images/lego-01.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-02",
        imgsrc: "./assets/images/lego-02.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-03",
        imgsrc: "./assets/images/lego-03.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-04",
        imgsrc: "./assets/images/lego-04.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-05",
        imgsrc: "./assets/images/lego-05.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-06",
        imgsrc: "./assets/images/lego-06.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-07",
        imgsrc: "./assets/images/lego-07.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-08",
        imgsrc: "./assets/images/lego-08.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-09",
        imgsrc: "./assets/images/lego-09.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-10",
        imgsrc: "./assets/images/lego-10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-11",
        imgsrc: "./assets/images/lego-11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-12",
        imgsrc: "./assets/images/lego-12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-13",
        imgsrc: "./assets/images/lego-13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-14",
        imgsrc: "./assets/images/lego-14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-15",
        imgsrc: "./assets/images/lego-15.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    title: "偷看熊",
    id: "forth-test-imgage",
    checkPoints: ["4", "5", "6", "7", "8", "9", "10", "11"],
    imageParts: [
      {
        alt: "hrow-up-guy-00",
        imgsrc: "./assets/images/peeking-bear00.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-01",
        imgsrc: "./assets/images/peeking-bear01.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-02",
        imgsrc: "./assets/images/peeking-bear02.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-03",
        imgsrc: "./assets/images/peeking-bear03.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-04",
        imgsrc: "./assets/images/peeking-bear04.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-05",
        imgsrc: "./assets/images/peeking-bear05.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-06",
        imgsrc: "./assets/images/peeking-bear06.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-07",
        imgsrc: "./assets/images/peeking-bear07.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-08",
        imgsrc: "./assets/images/peeking-bear08.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-09",
        imgsrc: "./assets/images/peeking-bear09.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-10",
        imgsrc: "./assets/images/peeking-bear10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-11",
        imgsrc: "./assets/images/peeking-bear11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-12",
        imgsrc: "./assets/images/peeking-bear12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-13",
        imgsrc: "./assets/images/peeking-bear13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-14",
        imgsrc: "./assets/images/peeking-bear14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-15",
        imgsrc: "./assets/images/peeking-bear15.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    title: "狗头",
    id: "fifth-test-imgage",
    checkPoints: [
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
    imageParts: [
      {
        alt: "hrow-up-guy-00",
        imgsrc: "./assets/images/dogy-head-00.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-01",
        imgsrc: "./assets/images/dogy-head-01.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-02",
        imgsrc: "./assets/images/dogy-head-02.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-03",
        imgsrc: "./assets/images/dogy-head-03.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-04",
        imgsrc: "./assets/images/dogy-head-04.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-05",
        imgsrc: "./assets/images/dogy-head-05.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-06",
        imgsrc: "./assets/images/dogy-head-06.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-07",
        imgsrc: "./assets/images/dogy-head-07.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-08",
        imgsrc: "./assets/images/dogy-head-08.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-09",
        imgsrc: "./assets/images/dogy-head-09.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-10",
        imgsrc: "./assets/images/dogy-head-10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-11",
        imgsrc: "./assets/images/dogy-head-11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-12",
        imgsrc: "./assets/images/dogy-head-12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-13",
        imgsrc: "./assets/images/dogy-head-13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-14",
        imgsrc: "./assets/images/dogy-head-14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-15",
        imgsrc: "./assets/images/dogy-head-15.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    title: "小黄鸡",
    id: "second-test-imgage",
    checkPoints: ["5", "6", "7", "9", "10", "11", "13", "14"],
    imageParts: [
      {
        alt: "hrow-up-guy-00",
        imgsrc: "./assets/images/yellow-chick-00.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-01",
        imgsrc: "./assets/images/yellow-chick-01.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-02",
        imgsrc: "./assets/images/yellow-chick-02.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-03",
        imgsrc: "./assets/images/yellow-chick-03.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-04",
        imgsrc: "./assets/images/yellow-chick-04.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-05",
        imgsrc: "./assets/images/yellow-chick-05.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-06",
        imgsrc: "./assets/images/yellow-chick-06.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-07",
        imgsrc: "./assets/images/yellow-chick-07.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-08",
        imgsrc: "./assets/images/yellow-chick-08.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-09",
        imgsrc: "./assets/images/yellow-chick-09.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-10",
        imgsrc: "./assets/images/yellow-chick-10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-11",
        imgsrc: "./assets/images/yellow-chick-11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-12",
        imgsrc: "./assets/images/yellow-chick-12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-13",
        imgsrc: "./assets/images/yellow-chick-13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-14",
        imgsrc: "./assets/images/yellow-chick-14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "hrow-up-guy-15",
        imgsrc: "./assets/images/yellow-chick-15.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
];

// add label
const afterLabel = imageLists.map((qL, a) => {
  const newImgParts = qL.imageParts.map((q, b) => {
    return { ...q, label: `${b}` };
  });

  return { ...qL, imageParts: newImgParts };
});
// return catalog
// let test = compare(afterLabel[0], 0, 1);
// console.log("test", test);

export default function getQuestionsLists() {
  return afterLabel;
}
// export default  getQuestionsLists = () => questionsLists;
