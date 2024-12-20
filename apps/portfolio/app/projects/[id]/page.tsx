import { notFound } from "next/navigation";
import { getProjects } from "@/utils/mdx";
import { ContributionCalendar } from "@/components/contribution-calendar";
import { getContributions } from "@/utils/github";
import { MDXRemote } from "next-mdx-remote/rsc";

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projects = getProjects();
  const project = projects.find((p) => p.id === id);

  if (!project) return;

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projects = getProjects();
  const project = projects.find((p) => p.id === id);
  const contributions = await getContributions();

  if (!project) {
    notFound();
  }

  return (
    <main className="px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-sm px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 mb-6 text-justify">
            {project.description}
          </p>
        </header>

        <section className="mb-12">
          <ContributionCalendar
            contributions={contributions}
            start={project.startDate}
            end={project.endDate}
          />
        </section>

        <section className="markdown">
          <MDXRemote source={project.content} />
        </section>
      </div>
    </main>
  );
}
