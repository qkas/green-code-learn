"use client";

import { useState } from 'react';
import { Check, Close } from '@mui/icons-material';
import { useQuiz } from '@/context/QuizContext';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  questions: Question[];
  onQuizSubmit?: (score: number) => void;
}

export default function CompactQuiz({ questions, onQuizSubmit }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setQuizSubmitted } = useQuiz();

  const handleAnswer = (optionIndex: number) => {
    if (isSubmitted) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      const finalScore = newAnswers.reduce((total, answer, index) => 
        total + (answer === questions[index].correctAnswer ? 1 : 0), 0);
      setIsSubmitted(true);
      onQuizSubmit?.(finalScore);
      setQuizSubmitted(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  return (
    <>
      <h2 className='text-2xl font-bold mt-8 mb-4"'>
        Quiz
      </h2>
    <div className="bg-accent/5 rounded-lg border-2 border-accent p-3 mt-10 sm:p-4 w-full max-w-lg">
      <h3 className="text-xl font-semibold sm:text-base text-foreground mb-2">
        {questions[currentQuestion].question}
      </h3>
      
      <div className="space-y-1.5">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={isSubmitted}
            className={`w-full p-2.5 text-xs sm:text-sm text-left rounded border flex items-center gap-2 ${
              !isSubmitted
                ? answers[currentQuestion] === index 
                  ? 'border-accent bg-accent/10' 
                  : 'border-gray-200 hover:border-accent'
                : answers[currentQuestion] === index
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'border-green-500'
                    : 'border-red-500'
                  : index === questions[currentQuestion].correctAnswer
                    ? 'border-green-500'
                    : 'border-gray-200'
            }`}
          >
            {isSubmitted && (
              <>
                {index === questions[currentQuestion].correctAnswer && (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                )}
                {answers[currentQuestion] === index && 
                 index !== questions[currentQuestion].correctAnswer && (
                  <Close className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                )}
              </>
            )}
            <span className="line-clamp-2 font-semibold text-base">{option}</span>
          </button>
        ))}
      </div>
    </div>
    </>
  );
}