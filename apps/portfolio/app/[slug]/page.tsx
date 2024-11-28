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

export async function generateStaticParams() {
  const articles = getArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getArticles().find((article) => article.slug === slug);

  if (!article) return;

  return {
    title: article.title,
  };
}
