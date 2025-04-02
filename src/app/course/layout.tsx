"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

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

function NextModuleLink({ currentPath }: { currentPath: string }) {
  const currentIndex = modules.findIndex((module) => module.path === currentPath);
  const nextModule = modules[currentIndex + 1];

  if (currentPath === "/course") return null;

  if (!nextModule) { // last module
    return (
      <div className="mt-12 flex justify-end">
        <Link
          href="/test"
          className="flex py-2 text-center gap-2 items-center uppercase w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-[--accent] bg-[--accent] text-background hover:border-[--accent] hover:scale-105 hover:bg-background hover:text-[--accent] transition"
        >
          Take Final Test
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-12 flex justify-end">
      <Link
        href={nextModule.path}
        className="flex py-2 text-center gap-2 items-center uppercase w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-[--accent] bg-[--accent] text-background hover:border-[--accent] hover:scale-105 hover:bg-background hover:text-[--accent] transition"
      >
        Next Module: {nextModule.title}
      </Link>
    </div>
  );
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center sm:mt-10">
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
    <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:divide-none justify-between p-10 sm:mt-10">
      <div className="bg-background">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Course Modules</h2>
        <nav className="space-y-2">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.path}
              className={`block p-3 rounded-lg ${pathname === module.path
                  ? "border-2 border-accent"
                  : "border-2 border-background"
                }`}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{module.title}</h3>
              <p className="text-base sm:text-lg lg:text-xl opacity-80">{module.description}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="sm:mx-auto w-full">
        {children}
        <NextModuleLink currentPath={pathname} />
      </div>
    </div>
  );
}