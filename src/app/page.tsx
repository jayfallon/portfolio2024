import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-3xl bg-blue-200 h-screen">
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odio
          quis maiores pariatur minus aliquid quidem similique iusto? Maxime
          corporis vero iure aperiam voluptate hic perspiciatis perferendis,
          doloribus ducimus tempora.
        </p>
        <p>
          <Link href="/blog">Blog</Link>
        </p>
      </section>
    </main>
  );
}
