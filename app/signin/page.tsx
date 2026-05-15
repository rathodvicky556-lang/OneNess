import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | OneNess",
  description: "Sign in to OneNess",
};

export default function SignInPage() {
  return (
    <main className="mx-auto my-20 max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-800 dark:bg-slate-950">
      <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100">Sign In</h1>
      <p className="mb-6 text-slate-600 dark:text-slate-400">
        This is a placeholder sign-in page.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Back to home
      </Link>
    </main>
  );
}

