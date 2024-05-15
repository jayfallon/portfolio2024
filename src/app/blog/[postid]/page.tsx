import { Metadata } from "next";

type Props = {
  params: {
    postid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog Post ${params.postid}`,
  };
};

export default function page({ params }: Props) {
  return <h1>details page {params.postid}</h1>;
}
