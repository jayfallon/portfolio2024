import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "absolute title",
  },
};

export default function page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <section className="mx-auto max-w-3xl bg-blue-200">
        <h1>
          <Link href="/blog/1">blog post 1</Link>
        </h1>
        <h1>
          <Link href="/blog/2">blog post 2</Link>
        </h1>
        <h1>
          <Link href="/blog/3">blog post 3</Link>
        </h1>
        <h1>
          <Link href="/blog/4">blog post 4</Link>
        </h1>
        <h1>
          <Link href="/blog/5" replace>
            blog post 5
          </Link>
        </h1>
      </section>
    </main>
  );
}
