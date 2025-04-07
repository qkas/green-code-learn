"use client";

import { useState } from 'react';
import { quizQuestions } from '@/data/quiz';
import { QuizState } from '@/types/quiz';
import Link from 'next/link';

export default function TestPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: Array(quizQuestions.length).fill(-1),
    score: 0,
    isSubmitted: false,
  });

  const handleAnswerSelect = (optionIndex: number) => {
    if (quizState.isSubmitted) return;

    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = optionIndex;
    setQuizState({ ...quizState, answers: newAnswers });
  };

  const handleSubmit = () => {
    if (quizState.answers.includes(-1)) {
      alert('Please answer all questions before submitting!');
      return;
    }

    const score = quizState.answers.reduce((total, answer, index) => {
      return total + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);

    setQuizState({ ...quizState, score, isSubmitted: true });
  };

  const handleNext = () => {
    if (quizState.currentQuestion < quizQuestions.length - 1) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion + 1 });
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion - 1 });
    }
  };

  const currentQuestion = quizQuestions[quizState.currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link
        href="/course/module-3"
        className="inline-block mb-6 px-4 py-2 rounded-lg bg-accent border-2 border-accent text-black hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent] transition"
        onClick={(e) => {
          if (quizState.answers.some(answer => answer !== -1) && !quizState.isSubmitted) {
            if (!confirm('You have unsaved answers. Are you sure you want to leave?')) {
              e.preventDefault();
            }
          }
        }}
      >
        ← Back to Module
      </Link>
      <h1 className="text-2xl font-bold mb-8">Green Code Knowledge Test</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-4">
          Question {currentQuestion.id}: {currentQuestion.question}
        </h2>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                quizState.answers[quizState.currentQuestion] === index
                  ? 'border-accent bg-accent/10'
                  : 'border-gray-200 hover:border-accent'
              } ${
                quizState.isSubmitted
                  ? index === currentQuestion.correctAnswer
                    ? 'border-green-500'
                    : quizState.answers[quizState.currentQuestion] === index
                    ? 'border-red-500'
                    : ''
                  : ''
              }`}
              disabled={quizState.isSubmitted}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={quizState.currentQuestion === 0}
          className="px-4 py-2 rounded-lg bg-accent border-2 border-accent text-black hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent] transition"
        >
          Previous
        </button>
        
        {quizState.currentQuestion === quizQuestions.length - 1 ? (
          !quizState.isSubmitted && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-lg bg-accent border-2 border-accent text-black hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent] transition"
            >
              Submit
            </button>
          )
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-accent border-2 border-accent text-black hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent] transition"
          >
            Next
          </button>
        )}
      </div>

      {quizState.isSubmitted && (
        <div className="mt-8 p-4 bg-accent/10 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Quiz Results</h3>
          <p>Your score: {quizState.score} out of {quizQuestions.length}</p>
          <p>Percentage: {(quizState.score / quizQuestions.length * 100).toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
}