import { QuizQuestions } from '@/types/quizquestions';

export const quizQuestions: QuizQuestions[] = [
  {
    id: 1,
    question: "What is the primary goal of Green Code?",
    options: [
      "Making code visually appealing",
      "Reducing software's environmental impact",
      "Writing code faster",
      "Using green-colored syntax highlighting"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of these practices contributes to energy-efficient code?",
    options: [
      "Using more RAM for faster processing",
      "Running multiple redundant processes",
      "Optimizing algorithms for fewer operations",
      "Storing duplicate data for quick access"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the impact of inefficient code on the environment?",
    options: [
      "No impact at all",
      "Only affects development time",
      "Increases power consumption and CO2 emissions",
      "Makes the code harder to read"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Which approach is best for sustainable software architecture?",
    options: [
      "Always using microservices",
      "Maximizing server resources",
      "Using the newest frameworks only",
      "Choosing architecture based on actual needs"
    ],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "How can caching contribute to green code?",
    options: [
      "It doesn't affect energy consumption",
      "By reducing unnecessary computations",
      "By using more storage space",
      "By making the code more complex"
    ],
    correctAnswer: 1
  }
];