"use client";
import { useEffect } from 'react';
import { useQuiz } from '@/context/QuizContext';
import CompactQuiz from "@/components/ui/CompactQuiz";
import { questions } from "@/data/questions";
import Image from 'next/image';

export default function Module1Page() {
  const { setQuizSubmitted } = useQuiz();

  useEffect(() => {
    setQuizSubmitted(false);
  }, [setQuizSubmitted]);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Module 1: Introduction to Green Code</h1>

      <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
      <p>
        Green coding is a field of software development that focuses on energy efficiency,
        resource optimization, and sustainable software development. The goal is to minimize
        the carbon footprint and electricity consumption of software without compromising
        performance or functionality.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why is Green Coding Important?</h2>
      <p>
        Software can impact energy consumption both directly and indirectly. Improving energy
        efficiency lowers operational costs and carbon emissions. Sustainable software development
        also supports corporate sustainability strategies, especially in cloud computing and data centers.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Concepts and Principles</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Energy-Efficient Coding</h3>
      <p>
        Optimizing code by reducing unnecessary computations, choosing efficient algorithms,
        and using static code analysis tools can significantly reduce energy consumption.
        Lean and concise code enhances performance and is more environmentally friendly.
      </p>

      <Image 
        src="/module1_energy_efficient_code.png" 
        alt="Energy-efficient code illustration" 
        width={443} 
        height={154} 
        className="rounded shadow-md my-4" 
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">2. Reducing Unnecessary Computations</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Eliminate redundant operations and inefficient loops</li>
        <li>Use caching and memoization</li>
        <li>Minimize background processes</li>
        <li>Write clean, concise logic</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">3. Selecting Efficient Algorithms</h3>
      <p>
        Choosing algorithms with better time complexity (e.g., O(log n) vs. O(n²)) reduces CPU cycles.
        Consider using data structures like hash tables for fast access, and always benchmark alternatives.
      </p>
      
      <Image 
        src="/module1_binary_search_vs_linear.png" 
        alt="Binary search vs linear search" 
        width={410} 
        height={328} 
        className="rounded shadow-md my-4" 
      />

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Using Analysis and Profiling Tools</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Static analysis: ESLint, SonarQube</li>
        <li>Profilers: gprof, Valgrind, Perf</li>
        <li>Identify slow functions and optimize bottlenecks</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">5. High-Performance Algorithms & Data Structures</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Use binary search instead of linear search for large datasets</li>
        <li>Choose hash tables or trees over basic lists</li>
        <li>Use lazy evaluation where possible</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Summary</h2>
      <p>
        Module 1 emphasizes optimizing code to reduce energy usage and improve performance.
        Techniques include eliminating redundant computations, choosing the right algorithms,
        and using static analysis and profiling tools. Smart data structure choices and
        clean code help create efficient, eco-friendly software.
      </p>

      <CompactQuiz 
        questions={[questions[0]]} 
        onQuizSubmit={() => setQuizSubmitted(true)}
      />
    </>
  );
}