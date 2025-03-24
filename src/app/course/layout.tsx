"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

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

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl font-bold mb-4">Please sign in to access the course</h1>
        <Link
          href="/login"
          className="py-2 text-center uppercase text-nowrap w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-accent bg-accent text-background hover:border-accent hover:scale-105 hover:bg-background hover:text-accent transition"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap divide-y-2 sm:divide-none justify-between mt-20">
      <div className="min-w-60 bg-background p-5">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Course Modules</h2>
        <nav className="space-y-2">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.path}
              className={`block p-3 rounded-lg ${
                pathname === module.path
                  ? "border-2 border-accent"
                  : "hover:bg-foreground/5"
              }`}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{module.title}</h3>
              <p className="text-base sm:text-lg lg:text-xl opacity-80">{module.description}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-10 sm:mx-auto">{children}</div>
    </div>
  );
}