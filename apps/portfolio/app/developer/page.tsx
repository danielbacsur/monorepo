import { ContributionCalendar } from "@/components/contribution-calendar";
import { getContributions } from "@/utils/github";
import { getProjects } from "@/utils/mdx";
import Link from "next/link";

const projects = getProjects();
const contributions = await getContributions();

export default async function Developer() {
  return (
    <main className="px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Daniel Bacsur</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm px-2 py-1">AI/ML Specialist</span>
            <span className="text-sm px-2 py-1">Full-Stack Developer</span>
            <span className="text-sm px-2 py-1">Draper University Alumni</span>
            <span className="text-sm px-2 py-1">Based in Hungary</span>
          </div>
          <p className="text-gray-300 mb-6 text-justify">
            Passionate AI/ML engineer with a strong background in full-stack
            development. Specializing in creating innovative solutions that
            bridge the gap between cutting-edge AI technologies and practical,
            user-centric applications.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Contribution Activity
          </h2>
          <div className="w-full">
            <ContributionCalendar contributions={contributions} />
            <div className="flex justify-between items-center mt-2 text-sm text-gray-400 opacity-70">
              <span>{contributions[0].date.toDateString()}</span>
              <span>
                ~
                {Math.floor(
                  (contributions[contributions.length - 1].date.getTime() -
                    contributions[0].date.getTime()) /
                    (1000 * 60 * 60 * 10)
                )}{" "}
                hours • 20k lines
              </span>
              <span>
                {contributions[contributions.length - 1].date.toDateString()}
              </span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Recent Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Link
                href={`/projects/${project.id}`}
                key={index}
                className="block p-4 hover:bg-gray-900 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1">
                      {tag}
                    </span>
                  ))}
                  {project.technologies.map((technology, technologyIndex) => (
                    <span key={technologyIndex} className="text-xs px-2 py-1">
                      {technology}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}