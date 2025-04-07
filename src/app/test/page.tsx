"use client";

import { useState } from 'react';
import { quizQuestions } from '@/data/quiz';
import { QuizState } from '@/types/quiz';
import Link from 'next/link';
import { ArrowBackIos } from '@mui/icons-material';

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
        className="flex my-4 py-2 text-center gap-2 items-center uppercase w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-[--accent] bg-[--accent] text-background hover:border-[--accent] hover:scale-105 hover:bg-background hover:text-[--accent] transition"
        onClick={(e) => {
          if (quizState.answers.some(answer => answer !== -1) && !quizState.isSubmitted) {
            if (!confirm('You have unsaved answers. Are you sure you want to leave?')) {
              e.preventDefault();
            }
          }
        }}
      >
        <ArrowBackIos />
        Back to Module
      </Link>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
        Green Code Knowledge Test
      </h1>

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4">
          Question {currentQuestion.id}: {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${quizState.answers[quizState.currentQuestion] === index
                  ? 'border-accent bg-accent/10'
                  : quizState.isSubmitted
                    ? ''
                    : 'hover:border-accent'
                } ${quizState.isSubmitted
                  ? index === currentQuestion.correctAnswer
                    ? 'border-green-500'
                    : quizState.answers[quizState.currentQuestion] === index
                      ? 'border-red-500'
                      : ''
                  : ''
                } text-base sm:text-lg lg:text-xl`}
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
          className={`px-4 py-2 rounded-lg bg-accent font-bold border-2 border-accent text-background sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg transition ${
            quizState.currentQuestion === 0
              ? 'opacity-50 cursor-default'
              : 'hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent]'
          }`}
        >
          Previous
        </button>

        {quizState.currentQuestion === quizQuestions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={quizState.answers.includes(-1) || quizState.isSubmitted}
            className={`px-4 py-2 rounded-lg bg-accent font-bold border-2 border-accent text-background sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg transition ${
              quizState.answers.includes(-1) || quizState.isSubmitted
                ? 'opacity-50 cursor-default'
                : 'hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent]'
            }`}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded-lg bg-accent font-bold border-2 border-accent text-background sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg transition ${
              quizState.currentQuestion === quizQuestions.length - 1
                ? 'opacity-50 cursor-default'
                : 'hover:bg-accent/90 hover:scale-105 hover:bg-background hover:text-[--accent]'
            }`}
          >
            Next
          </button>
        )}
      </div>

      {quizState.isSubmitted && (
        <div className="mt-8 p-4 bg-accent/10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Test Results
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">
            Your score: {quizState.score} out of {quizQuestions.length}
          </p>
          <p className="text-base sm:text-lg lg:text-xl">
            Percentage: {(quizState.score / quizQuestions.length * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}