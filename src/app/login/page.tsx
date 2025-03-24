"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Logout } from "@mui/icons-material";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col w-fit justify-center mx-auto rounded-2xl border-2 border-foreground text-center mt-20 items-center p-6">
      <h1 className="max-w-6xl text-3xl sm:text-5xl lg:text-6xl font-bold">
        Login
      </h1>
      <div className="flex flex-col gap-5">
        {session ? (
          <>
            <h2 className="my-5 text-lg">Signed in as {session.user?.email}</h2>
            <button
              onClick={() => signOut()}
              className="px-12 py-2 flex items-center mx-auto gap-2 border border-grey-300 rounded-lg w-fit shadow-md bg-red-600 text-white hover:bg-red-700"
            >
              <Logout/>
              Sign out
            </button> 
          </>
        ) : (
          <>
            <h2 className="my-5">Signup required to access course material</h2>
            <button
              onClick={() => signIn("github")}
              className="px-4 py-2 flex items-center mx-auto gap-2 border border-gray-300 rounded-lg w-fit shadow-md bg-gray-800 text-white hover:bg-gray-900"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.32C3.73 14.8 3.25 13.88 3.1 13.42c-.09-.24-.48-1.02-.82-1.23-.28-.16-.68-.56-.01-.57.63-.01 1.08.58 1.23.82.72 1.21 1.88.86 2.34.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.47v2.18c0 .21.15.46.55.38A8.003 8.003 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
              </svg>
              Sign in with GitHub
            </button>

            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 flex items-center mx-auto gap-2 border border-gray-300 rounded-lg w-fit shadow-md bg-white text-black hover:bg-gray-100"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
