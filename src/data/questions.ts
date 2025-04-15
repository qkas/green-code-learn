export interface Questions {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

export const moduleQuestions: Questions[] = [
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

export const finalQuestions: Questions[] = [
  {
    id: 1,
    question: "What is the primary goal of green software development?",
    options: [
      "To reduce software development costs.",
      "To increase software performance.",
      "To minimize energy consumption and reduce greenhouse gas emissions.",
      "To enhance user experience."
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "What is the Green Software Foundation?",
    options: [
      "A government organization promoting renewable energy.",
      "A non-profit organization focused on reducing the environmental impact of software",
      "An educational institution offering courses on green computing",
      "A software company specializing in green technologies."
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "How can simplifying the user experience reduce environmental impact in software development?",
    options: [
      "By encouraging users to open multiple tabs for faster access to information, overall device performance is optimized, reducing emissions.",
      "By adding more interactive features and animations, users stay engaged longer, which helps distribute energy consumption more evenly.",
      "By eliminating non-essential content and streamlining tasks, users spend less time on devices, reducing energy consumption and lowering emissions.",
      "By increasing the number of graphic elements, the design becomes more appealing and efficient."
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "How does reducing code redundancy contribute to environmental sustainability in software development?",
    options: [
      "Rewriting the same code multiple times across different files reduces complexity, which improves sustainability.",
      "Adding extra layers of code ensures better performance, as more code helps distribute the processing load evenly.",
      "By removing or simplifying redundant code, websites become more efficient, reducing server energy usage and lowering emissions.",
      "Duplicated code ensures that backup systems have more data to work with."
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What practical measures can developers take to improve the use of animations on websites?",
    options: [
      "Use animation whenever it looks good.",
      "Use animation only for decorative purposes.",
      "Add multiple animated backgrounds for performance testing.",
      "Use animation only when it adds value to a visitor’s experience."
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "How can supporting non-graphic ways to interact with content reduce environmental impact in software development?",
    options: [
      "Reducing the number of text-based interactions and focusing on complex animations will decrease data load and carbon footprint.",
      "By increasing the number of graphic elements for accessibility, energy consumption can be reduced as devices process data more efficiently.",
      "Using green-colored UI elements to indicate energy-efficient features.",
      "Aural (speech) browsers do not rely on screens, which reduces battery consumption—a major source of energy use when browsing—thereby lowering overall emissions."
    ],
    correctAnswer: 3
  },
  {
    id: 7,
    question: "How can unnecessary energy consumption be reduced in software development?",
    options: [
      "Reducing unnecessary processing tasks.",
      "Executing heavy database queries on every user action.",
      "Always using the highest possible resolution.",
      "Running tests in high-energy environments."
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Why is it important to monitor software energy consumption during the development phase?",
    options: [
      "By monitoring software energy consumption during the development phase, inefficient code sections can be identified and optimized, leading to more energy-efficient and environmentally friendly software.",
      "Monitoring software energy consumption during the development phase is unnecessary because modern hardware is so powerful that software optimization does not significantly impact energy consumption or environmental effects.",
      "Most energy usage happens during the hardware manufacturing process, not software execution.",
      "Developers rarely encounter performance issues related to energy consumption."
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "How does the choice of AI models impact environmental effects?",
    options: [
      "The choice of an AI model does not have a significant impact on environmental effects, as all AI models consume roughly the same amount of energy.",
      "More complex models automatically result in lower energy use due to better algorithms.",
      "Developing and using energy-efficient machine learning models, increasing code reuse, and utilizing hardware optimized for AI workloads can reduce the environmental impact of artificial intelligence.",
      "AI models only affect user experience, not environmental sustainability."
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "How do file size and format affect energy consumption?",
    options: [
      "File format does not affect energy consumption, as all files are processed the same way.",
      "File size only impacts server performance, not energy consumption.",
      "Smaller and optimized files reduce the energy used for data transfer and processing",
      "Larger files reduce energy consumption because they load faster"
    ],
    correctAnswer: 2
  }
];
