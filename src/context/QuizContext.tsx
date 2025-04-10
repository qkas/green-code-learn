"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface QuizContextType {
  isQuizSubmitted: boolean;
  setQuizSubmitted: (submitted: boolean) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [isQuizSubmitted, setQuizSubmitted] = useState(false);

  return (
    <QuizContext.Provider value={{ isQuizSubmitted, setQuizSubmitted }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}