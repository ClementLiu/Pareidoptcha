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
    title: "STUNNED Face" /* 标题 */,
    level: "Rookie" /* 困难等级 */,
    showFace: false,
    drawSrc: "./assets/surprise-draw.jpg",
    id: uuid(),
    checkPoints: ["5", "6", "9", "10"] /* 正确答案的九宫格位置 */,
    imageParts: [
      /* 里面有16张图片 */
      {
        alt: "surprise-0" /* 16分之一图片的标题 */,
        imgsrc: "./assets/images/surprise-01.jpg" /* 16分之一图片地址 */,
        id: uuid(),
        selected: false /* 图片是不是被选中 */,
      },
      {
        alt: "surprise-1",
        imgsrc: "./assets/images/surprise-02.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-2",
        imgsrc: "./assets/images/surprise-03.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-3",
        imgsrc: "./assets/images/surprise-04.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-4",
        imgsrc: "./assets/images/surprise-05.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-5",
        imgsrc: "./assets/images/surprise-06.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-6",
        imgsrc: "./assets/images/surprise-07.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-7",
        imgsrc: "./assets/images/surprise-08.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-8",
        imgsrc: "./assets/images/surprise-09.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-9",
        imgsrc: "./assets/images/surprise-10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-10",
        imgsrc: "./assets/images/surprise-11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-11",
        imgsrc: "./assets/images/surprise-12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-12",
        imgsrc: "./assets/images/surprise-13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-13",
        imgsrc: "./assets/images/surprise-14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-14",
        imgsrc: "./assets/images/surprise-15.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "surprise-15",
        imgsrc: "./assets/images/surprise-16.jpg",
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

export default function getQuestionsLists() {
  return afterLabel;
}
