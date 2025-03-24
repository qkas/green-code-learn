"use client";

import Link from "next/link";

export default function CoursePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Green Code Certificate Course</h1>
      
      <div className="prose prose-lg mb-8">
        <p className="text-lg mb-4">
          Welcome to the Green Code Certificate course! This comprehensive program will teach you
          how to write sustainable, energy-efficient code that minimizes environmental impact
          while maintaining high performance and reliability.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Course Overview</h2>
        <p>
          Throughout this course, you'll learn about:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Fundamental principles of sustainable programming</li>
          <li>Energy-efficient algorithm design</li>
          <li>Sustainable software architecture</li>
          <li>Performance optimization techniques</li>
          <li>Environmental impact assessment</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Course Structure</h2>
        <p>
          The course is divided into three main modules, each focusing on different aspects
          of sustainable software development. You can access the modules through the sidebar
          or start with the first module below.
        </p>
      </div>

      <div className="mt-12">
        <Link
          href="/course/module-1"
          className="inline-flex items-center px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
        >
          Start Module 1: Introduction to Green Code
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
