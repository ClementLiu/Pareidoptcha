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

const beforeLabel = [
  {
    title: "test",
    id: "frist-test-imgage",
    imageParts: [
      {
        alt: "",
        imgsrc: "./assets/images/1.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/2.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/3.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/4.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/5.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/6.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/7.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/8.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/9.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/10.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/11.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/12.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/13.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/14.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/15.jpg",
        id: uuid(),
        selected: false,
      },
      {
        alt: "",
        imgsrc: "./assets/images/16.jpg",
        id: uuid(),
        selected: false,
      },
    ],
  },
];

// add label
const afterLabel = beforeLabel.map((qL, a) => {
  const newImg = { ...qL, imgId: a };
  const newImgParts = newImg.imageParts.map((q, b) => {
    return { ...q, label: `${a}-${b}` };
  });

  return { ...newImg, imageParts: newImgParts };
});
// return catalog
// let test = compare(afterLabel[0], 0, 1);
// console.log("test", test);

export default function getQuestionsLists() {
  return afterLabel;
}
// export default  getQuestionsLists = () => questionsLists;
