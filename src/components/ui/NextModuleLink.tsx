"use client";
import Link from "next/link";
import { useQuiz } from "@/context/QuizContext";

const modules = [
  {
    id: "overview",
    title: "General Overview",
    description: "Course introduction and structure",
    path: "/course",
  },
  {
    id: "module-1",
    title: "Introduction to Green Code",
    description: "Learn the basics of sustainable programming practices",
    path: "/course/module-1",
  },
  {
    id: "module-2",
    title: "Energy-Efficient Algorithms",
    description: "Understanding algorithm complexity and energy consumption",
    path: "/course/module-2",
  },
  {
    id: "module-3",
    title: "Sustainable Architecture",
    description: "Designing eco-friendly software architectures",
    path: "/course/module-3",
  },
];

export function NextModuleLink({ currentPath }: { currentPath: string }) {
  const { isQuizSubmitted } = useQuiz();
  const currentIndex = modules.findIndex((module) => module.path === currentPath);
  const nextModule = modules[currentIndex + 1];

  if (currentPath === "/course") return null;

  return (
    <div className="mt-5 flex flex-col items-end justify-end">
      <Link
        href={nextModule?.path || "/test"}
        className={`flex py-2 text-center gap-2 items-center uppercase w-fit px-4 sm:px-8 lg:px-10 font-bold rounded-lg border-2 border-accent
          ${!isQuizSubmitted
            ? 'bg-gray-300 border-gray-300 cursor-not-allowed opacity-50'
            : 'bg-accent text-background hover:border-accent hover:scale-105 hover:bg-background hover:text-accent'
          } transition`}
        onClick={(e) => {
          if (!isQuizSubmitted) {
            e.preventDefault();
          }
        }}
      >
        {nextModule ? `Next Module: ${nextModule.title}` : 'Take Final Test'}
      </Link>
      {isQuizSubmitted
        ? null
        : <span className="text-red-500 text-sm sm:text-base lg:text-lg">
          Please answer the quiz to unlock the next module.
        </span>
      }
    </div>
  );
}