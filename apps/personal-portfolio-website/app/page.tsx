import Link from "next/link";
import { getProjects } from "@/utils/mdx";
import { formatAbsoluteDate, formatRelativeDate } from "@/utils/date";

export default function Projects() {
  const projects = getProjects();

  const sortedProjects = projects.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  return (
    <div>
      {sortedProjects.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">
              {formatAbsoluteDate(project.metadata.date)}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {formatRelativeDate(project.metadata.date)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {project.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
