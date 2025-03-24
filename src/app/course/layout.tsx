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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Please sign in to access the course</h1>
        <Link
          href="/login"
          className="px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-background border-r border-foreground/10 p-4">
        <h2 className="text-xl font-bold mb-6">Course Modules</h2>
        <nav className="space-y-2">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.path}
              className={`block p-3 rounded-lg transition-colors ${
                pathname === module.path
                  ? "bg-accent text-background"
                  : "hover:bg-foreground/5"
              }`}
            >
              <h3 className="font-semibold">{module.title}</h3>
              <p className="text-sm opacity-80">{module.description}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}