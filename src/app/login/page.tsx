"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col w-fit mx-auto rounded-2xl border-2 border-foreground text-center mt-20 gap-10 items-center p-6">
      <div className="flex flex-col gap-5">
        <h1 className="max-w-6xl text-3xl sm:text-5xl lg:text-6xl font-bold">
          Login
        </h1>
        <h2>Signup required for access to course material</h2>
      </div>

      <div className="flex flex-col gap-5">
        {session ? (
          <>
            <p className="text-lg">Signed in as {session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 flex items-center gap-2 border border-red-500 rounded-lg shadow-md bg-red-600 text-white hover:bg-red-700"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 9V5l7 7-7 7v-4H3V9h7Z"></path>
              </svg>
              Sign out
            </button>
          </>
        ) : (
          <>
            {/* GitHub Sign-in button */}
            <button
              onClick={() => signIn("github")}
              className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg shadow-md bg-gray-800 text-white hover:bg-gray-900"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.32C3.73 14.8 3.25 13.88 3.1 13.42c-.09-.24-.48-1.02-.82-1.23-.28-.16-.68-.56-.01-.57.63-.01 1.08.58 1.23.82.72 1.21 1.88.86 2.34.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.47v2.18c0 .21.15.46.55.38A8.003 8.003 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
              </svg>
              Sign in with GitHub
            </button>

            {/* Google Sign-in button */}
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg shadow-md bg-white text-black hover:bg-gray-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M12 7.83v4.44h6.26c-.28 1.4-1.04 2.56-2.22 3.38l3.58 2.79c2.09-1.93 3.28-4.77 3.28-8.17 0-.73-.06-1.44-.17-2.13H12Z"></path>
                <path fill="#34A853" d="M5.5 14.91c-.55-1.63-.85-3.39-.85-5.2s.3-3.57.85-5.2L1.92 3.08C.69 5.2 0 7.52 0 9.91c0 2.39.69 4.71 1.92 6.83l3.58-2.79Z"></path>
                <path fill="#FBBC05" d="M12 23.91c2.84 0 5.21-1.02 6.95-2.69l-3.58-2.79c-1.04.71-2.36 1.14-3.87 1.14-2.99 0-5.52-2.02-6.44-4.75l-3.58 2.79c1.89 3.75 5.84 6.3 10.52 6.3Z"></path>
                <path fill="#EA4335" d="M12 4.44c1.72 0 3.24.59 4.45 1.75l3.32-3.32C17.21 1.02 14.84 0 12 0 7.32 0 3.37 2.55 1.48 6.3l3.58 2.79c.92-2.73 3.45-4.75 6.44-4.75Z"></path>
              </svg>
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
