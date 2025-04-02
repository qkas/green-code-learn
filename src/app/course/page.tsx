"use client";

import Link from "next/link";
import { ArrowForwardIos } from "@mui/icons-material";

export default function CoursePage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Green Code Certificate Course</h1>

      <p className="text-lg mb-4">
        Welcome to the Green Code Certificate course! This comprehensive program will teach you
        how to write sustainable, energy-efficient code that minimizes environmental impact
        while maintaining high performance and reliability.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Course Overview</h2>
      <p>
        Throughout this course, you&apos;ll learn about:
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

      <div className="mt-12">
        <Link
          href="/course/module-1"
          className="flex py-2 text-center gap-2 items-center uppercase w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-[--accent] bg-[--accent] text-background hover:border-[--accent] hover:scale-105 hover:bg-background hover:text-[--accent] transition"
        >
          Start Module 1: Introduction to Green Code
          <ArrowForwardIos />
        </Link>
      </div>
    </>
  );
}
