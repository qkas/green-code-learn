"use client";
import { useEffect } from 'react';
import { useQuiz } from '@/context/QuizContext';
import CompactQuiz from "@/components/ui/CompactQuiz";
import { questions } from "@/data/questions";

export default function Module2Page() {
  const { setQuizSubmitted } = useQuiz();

  useEffect(() => {
    setQuizSubmitted(false);
  }, [setQuizSubmitted]);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Module 2: Energy-Efficient Algorithms</h1>

      <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
      <p>
        This module focuses on understanding how different algorithms consume energy and
        how to choose and optimize algorithms for better energy efficiency.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Learning Objectives</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Analyze algorithm energy consumption</li>
        <li>Compare different algorithm implementations</li>
        <li>Optimize algorithms for energy efficiency</li>
        <li>Measure and benchmark energy usage</li>
      </ul>

      <CompactQuiz 
        questions={[questions[1]]} 
        onQuizSubmit={() => setQuizSubmitted(true)}
      />

      <h2 className="text-2xl font-bold mt-8 mb-4">Content</h2>
      <p>
        This module will be expanded with detailed content about energy-efficient algorithms,
        including performance analysis and optimization techniques.
      </p>
    </>
  );
}