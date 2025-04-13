"use client";

import { useState } from 'react';
import { questions } from '@/data/questions';
import Link from 'next/link';
import { ArrowBackIos, Check, Close } from '@mui/icons-material';

export interface QuizState {
  currentQuestion: number
  answers: number[]
  score: number
  isSubmitted: boolean
}

export default function TestPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: Array(questions.length).fill(-1),
    score: 0,
    isSubmitted: false,
  });

  const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  const handleAnswerSelect = (optionIndex: number, questionIndex: number) => {
    if (quizState.isSubmitted) return;

    const newAnswers = [...quizState.answers];
    newAnswers[questionIndex] = optionIndex;
    setQuizState({ ...quizState, answers: newAnswers });

    // Find the next unanswered question
    const nextUnansweredIndex = newAnswers.findIndex((answer, index) => index > questionIndex && answer === -1);
    
    // If there's an unanswered question after the current one, scroll to it
    if (nextUnansweredIndex !== -1) {
      const nextQuestionElement = document.getElementById(`question-${nextUnansweredIndex}`);
      if (nextQuestionElement) {
        const elementRect = nextQuestionElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        window.scrollTo({
          top: middle,
          behavior: 'smooth'
        });
        setQuizState(prev => ({ ...prev, currentQuestion: nextUnansweredIndex }));
      }
    }
  };

  const handleSubmit = () => {
    const score = quizState.answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    setQuizState({ ...quizState, score, isSubmitted: true });
  };

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion + 1 });
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({ ...quizState, currentQuestion: quizState.currentQuestion - 1 });
    }
  };

  const currentQuestion = questions[quizState.currentQuestion];

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

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-12 mb-8">
        Green Code Knowledge Test
      </h1>

      <div className="space-y-12">
        {questions.map((question, index) => (
          <div key={index} id={`question-${index}`} className="scroll-mt-[50vh]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4">
              Question {question.id}: {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(optionIndex, index)}
                  className={`flex gap-5 w-full p-4 text-left rounded-lg border-2 transition-colors ${quizState.answers[index] === optionIndex
                    ? 'border-accent bg-accent/10'
                    : quizState.isSubmitted
                      ? ''
                      : 'hover:border-accent'
                    } ${quizState.isSubmitted
                      ? optionIndex === question.correctAnswer
                        ? quizState.answers[index] === optionIndex
                          ? 'border-green-500'
                          : 'border-green-500 border-dashed'
                        : quizState.answers[index] === optionIndex
                          ? 'border-red-500'
                          : ''
                      : ''} text-base sm:text-lg lg:text-xl`}
                  disabled={quizState.isSubmitted}
                >
                  {quizState.isSubmitted
                    ? optionIndex === question.correctAnswer
                      ? <Check className='text-green-500' />
                      : quizState.answers[index] === optionIndex
                        ? <Close className='text-red-500' />
                        : <span className='text-green-500'>
                          {alphabets[optionIndex]}
                        </span>
                    : <span className={`${quizState.answers[index] === optionIndex ? 'text-[--accent]' : ''}`}>
                      {alphabets[optionIndex]}
                    </span>
                  }
                  <span>{option}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {!quizState.isSubmitted && (
          <button
            onClick={handleSubmit}
            disabled={quizState.answers.includes(-1)}
            className={`px-4 py-2 rounded-lg bg-accent font-bold border-2 border-accent text-background sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${quizState.answers.includes(-1)
              ? 'opacity-50 cursor-default'
              : 'hover:bg-accent/90 hover:bg-background hover:text-[--accent]'
              }`}
          >
            Submit
          </button>
        )}
      </div>

      {quizState.isSubmitted && (
        <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-between items-center mt-8 bg-accent/10 rounded-lg">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              You <span className='text-green-500'>passed</span> the test!
            </h3>
            <p className="text-base sm:text-lg lg:text-xl">
              Your score: {quizState.score} out of {questions.length}
            </p>
            <p className="text-base sm:text-lg lg:text-xl">
              Percentage: {(quizState.score / questions.length * 100).toFixed(1)}%
            </p>
          </div>
          <a
            href="/certificate.pdf"
            download
            className="px-4 py-2 rounded-lg bg-foreground font-bold border-2 text-center border-foreground text-background sm:px-8 lg:px-10 text-lg lg:text-xl transition hover:bg-foreground/90 hover:scale-105 hover:bg-background hover:text-[--foreground]"
          >
            Download Certificate
          </a>
        </div>
      )}
    </div>
  );
}