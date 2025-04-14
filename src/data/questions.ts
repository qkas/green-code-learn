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
      "To enhance user experience.",
      "To minimize energy consumption and reduce greenhouse gas emissions."
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "What is the Green Software Foundation?",
    options: [
      "A government organization promoting renewable energy.",
      "A software company specializing in green technologies.",
      "An educational institution offering courses on green computing.",
      "A non-profit organization focused on reducing the environmental impact of software"
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "How can simplifying the user experience reduce environmental impact in software development?",
    options: [
      "By adding more interactive features and animations, users stay engaged longer.",
      "By encouraging users to open multiple tabs for faster access to information.",
      "By eliminating non-essential content and streamlining tasks, users spend less time on devices.",
      "By making interfaces more complex to better utilize modern hardware."
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "How does reducing code redundancy contribute to environmental sustainability in software development?",
    options: [
      "Rewriting the same code multiple times reduces complexity.",
      "Adding extra layers of code ensures better performance.",
      "By removing or simplifying redundant code, websites become more efficient.",
      "Duplicating code improves site speed across devices."
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "How can AI be made more sustainable?",
    options: [
      "By increasing the number of training iterations.",
      "By using energy-efficient hardware.",
      "By ignoring carbon offset strategies.",
      "By adding more neural network layers."
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Why is it important to monitor software energy consumption during the development phase?",
    options: [
      "Monitoring is unnecessary due to powerful hardware.",
      "It identifies inefficient code sections to improve energy efficiency.",
      "It prevents developers from using complex algorithms.",
      "It helps track user behavior more accurately."
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is a practical benefit of distraction-free design in UX?",
    options: [
      "It ensures all possible information is displayed at once.",
      "It helps users complete tasks efficiently, reducing cognitive load.",
      "It creates complex user flows for more control.",
      "It hides non-essential content to maintain visual interest."
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "How can properly marked-up metadata reduce environmental impact in web development?",
    options: [
      "Adding extra meta tags increases data processing, which balances energy use.",
      "Correct metadata helps search engines index content faster.",
      "More metadata reduces content duplication.",
      "Metadata helps improve font rendering on low-end devices."
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What is one of the main challenges in green software development?",
    options: [
      "High cost of green technologies.",
      "Limited availability of development tools.",
      "Lack of standardized metrics for measuring software sustainability.",
      "Lack of skilled developers."
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "How can unnecessary energy consumption be reduced in software development?",
    options: [
      "Reducing unnecessary processing tasks.",
      "Executing heavy database queries on every user action.",
      "Always using the highest possible resolution.",
      "Adding as many third-party plugins as possible."
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Which of the following practices can help reduce the carbon footprint of software applications?",
    options: [
      "Using energy-efficient algorithms.",
      "Adding more features to the software.",
      "Using non-renewable energy sources.",
      "Increasing the number of servers."
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "What practical measures can developers take to improve the use of animations on websites?",
    options: [
      "Use animation only when it adds value to a visitor’s experience.",
      "Use animation whenever it looks good.",
      "Use animation only for decorative purposes.",
      "Disable animations completely on mobile."
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "How can supporting non-graphic ways to interact with content reduce environmental impact?",
    options: [
      "Reducing the number of text-based interactions lowers carbon footprint.",
      "Focusing on complex animations decreases data load.",
      "Aural browsers reduce screen use, lowering emissions.",
      "Graphic-only sites load faster on all devices."
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "What is a practical benefit of implementing a human-readable sitemap?",
    options: [
      "It helps search engines index content more effectively.",
      "It hides key content from search engines.",
      "It lists everything in one long, unstructured document.",
      "It avoids search indexing for privacy."
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "What are some important ways of creating a greener website?",
    options: [
      "Compress images and videos; avoid autoplay and large animations.",
      "Use small font size and green coloring.",
      "Rely on server-side rendering only.",
      "Use as many custom fonts as possible."
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "What is a potential benefit of using third-party services?",
    options: [
      "They reduce development time.",
      "They eliminate latency.",
      "They lower emissions automatically.",
      "They reduce file sizes consistently."
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What issue can arise from using third-party services?",
    options: [
      "They can reduce file sizes.",
      "They result in a lack of control over emissions.",
      "They eliminate latency.",
      "They improve offline access."
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "How do file size and format affect energy consumption?",
    options: [
      "Larger files reduce energy consumption because they load faster.",
      "File format does not affect energy use.",
      "Smaller and optimized files reduce data transfer and processing energy.",
      "File size only impacts server performance."
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "How does the choice of AI models impact environmental effects?",
    options: [
      "All models consume the same amount of energy.",
      "Energy-efficient models and optimized hardware reduce environmental impact.",
      "Model choice has little effect on emissions.",
      "Larger models are always better for sustainability."
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "How can organizations support the adoption of Green Coding practices?",
    options: [
      "By defining their own methods and integrating them into all phases of the lifecycle.",
      "They don’t need to do anything—Green Coding is automatic.",
      "Only developers are responsible for Green Coding.",
      "By increasing hardware budgets for developers."
    ],
    correctAnswer: 0
  }
];