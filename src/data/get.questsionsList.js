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
import compare from "../helper/compare";

const beforeLabel = [
  {
    option: "single",
    id: "emergency_single",
    title: "Is this an emergency?",
    details:
      "Stop and call 911 if you are experiencing:\n•   Severe, constant chest pain or pressure\n•   Extreme difficulty breathing\n•   Severe, constant lightheadedness\n•   Serious disorientation or unresponsiveness",
    questions: [
      {
        task: "I’m experiencing at least one of these symptoms",
        id: uuid(),
        selected: false,
      },
      {
        task: "I do not have any of these symptoms",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    option: "single",
    id: "old_single",
    title: "How old are you?",
    details: "",
    questions: [
      { task: "Under 18?", id: uuid(), selected: false },
      { task: "Between 18 and 64", id: uuid(), selected: false },
      { task: "65 or older", id: uuid(), selected: false },
    ],
  },
  {
    option: "multi",
    id: "symptoms_multi",
    title: "Are you experiencing any of these symptoms?",
    details: "",
    questions: [
      { task: "Fever, chills, or sweating", id: uuid(), selected: false },
      {
        task: "Difficulty breathing (not severe)",
        id: uuid(),
        selected: false,
      },
      { task: "Sore throat", id: uuid(), selected: false },
      { task: "Aching throughout the body", id: uuid(), selected: false },
      { task: "Vomiting or diarrhea", id: uuid(), selected: false },
    ],
  },
  {
    option: "multi",
    id: "condition_multi",
    title: "Do any of these apply to you?",
    details: "",
    questions: [
      {
        task: "Moderate to severe asthma or chronic lung disease",
        id: uuid(),
        selected: false,
      },
      {
        task: "Cancer treatment or medicines causing immune suppression",
        id: uuid(),
        selected: false,
      },
      {
        task: "Inherited immune system deficiencies or HIV",
        id: uuid(),
        selected: false,
      },
      {
        task:
          "Serious heart conditions, such as heart failure or prior heart attack",
        id: uuid(),
        selected: false,
      },
      { task: "InhDiabetes with complications", id: uuid(), selected: false },
      {
        task: "Kidney failure that needs dialysis",
        id: uuid(),
        selected: false,
      },
      { task: "Cirrhosis of the liver", id: uuid(), selected: false },
      {
        task: "Diseases or conditions that make it harder to cough",
        id: uuid(),
        selected: false,
      },
      { task: "Extreme obesity", id: uuid(), selected: false },
      { task: "Pregnancy", id: uuid(), selected: false },
    ],
  },
  {
    option: "single",
    id: "internationally_single",
    title: "In the last 14 days, have you traveled internationally?",
    details: "",
    questions: [
      {
        task: "I have traveled internationally",
        id: uuid(),
        selected: false,
      },
      {
        task: "I have not traveled internationally",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    option: "multi",
    id: "area_multi",
    title:
      "In the last 14 days, have you been in an area where COVID‑19 is widespread?",
    details: "",
    questions: [
      {
        task: "I live in an area where COVID‑19 is widespread",
        id: uuid(),
        selected: false,
      },
      {
        task: "I have visited an area where COVID‑19 is widespread",
        id: uuid(),
        selected: false,
      },
      {
        task: "I don’t know",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    option: "multi",
    id: "others_multi",
    title:
      "In the last 14 days, what is your exposure to others who are known to have COVID‑19?",
    details: "",
    questions: [
      {
        task: "I live with someone who has COVID‑19",
        id: uuid(),
        selected: false,
      },
      {
        task: "I’ve had close contact with someone who has COVID‑19",
        taskDetails:
          "I was within 6 feet of someone who’s sick, or I was exposed to a cough or sneeze.",
        id: uuid(),
        selected: false,
      },
      {
        task: "I’ve been near someone who has COVID‑19",
        taskDetails:
          "I was at least 6 feet away and was not exposed to a sneeze or cough.",
        id: uuid(),
        selected: false,
      },
      {
        task: "I’ve had no exposure",
        taskDetails:
          "I have not been in contact with someone who has COVID‑19.",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    option: "single",
    id: "care_single",
    title: "Do you live in a care facility?",
    details: "This includes nursing homes or assisted living facilities.",
    questions: [
      {
        task: "I live in a long-term care facility",
        id: uuid(),
        selected: false,
      },
      {
        task: "No, I don’t live in a long-term care facility",
        id: uuid(),
        selected: false,
      },
    ],
  },
  {
    option: "single",
    id: "medical_single",
    title: "Do you work in a medical facility?",
    details:
      "This includes a hospital, emergency room, other medical setting, or long-term care facility. Select all that apply.",
    questions: [
      {
        task:
          "I have worked in a hospital or other care facility in the past 14 days",
        taskDetails: "This includes volunteering.",
        id: uuid(),
        selected: false,
      },
      {
        task: "No, I don’t work or plan to work in a care facility",
        id: uuid(),
        selected: false,
      },
    ],
  },
];

// add label
const newbL = beforeLabel.map((qL, a) => {
  const newQL = { ...qL, questionId: a };
  const newQs = newQL.questions.map((q, b) => {
    return { ...q, label: `${a}-${b}` };
  });

  return { ...newQL, questions: newQs };
});
// return catalog
// let test = compare(newbL[0], 0, 1);
// console.log("test", test);

export default function getQuestionsLists() {
  return newbL;
}
// export default  getQuestionsLists = () => questionsLists;
