import React from "react";

function getRandomInt(count: number) {
  return (Math.floor(Math.random() * count) + 1).toString();
}

export default function page({
  params,
}: {
  params: {
    postid: string;
    commentid: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === "1") {
    throw new Error("error thrown in page");
  }

  return (
    <main>
      <section className="mx-auto max-w-3xl bg-blue-200">
        <h1>
          Comment {params.commentid} for blogs post {params.postid}
        </h1>
      </section>
    </main>
  );
}
