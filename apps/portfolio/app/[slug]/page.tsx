import { getArticles } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getArticles().find((article) => article.slug === slug);

  if (!article) redirect("/");

  return (
    <article>
      <MDXRemote source={article.content} />
    </article>
  );
}
