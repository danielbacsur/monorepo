import { notFound } from "next/navigation";
import { getProjects } from "@/utils/mdx";
import { ContributionCalendar } from "@/components/contribution-calendar";
import { getContributions } from "@/utils/github";
import { MDXRemote } from "next-mdx-remote/rsc";

const contributions = await getContributions();

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = getProjects().find((p) => p.id === id);

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
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-sm px-2 py-1">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-300 mb-6 text-justify">
            {project.description}
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Project Timeline
          </h2>
          <ContributionCalendar
            contributions={contributions}
            start={project.startDate}
            end={project.endDate}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Project Details
          </h2>
          <div className="markdown">
            <MDXRemote source={project.content} />
          </div>
        </section>
      </div>
    </main>
  );
}
