import { getProjects } from "@/utils/mdx";

export default function Page() {
  const projects = getProjects();
  const robocup = projects.find((project) => project.slug === "robocup");
  const cypher = projects.find((project) => project.slug === "cypher");
  const kaspok = projects.find((project) => project.slug === "kaspok");
  const farfler = projects.find((project) => project.slug === "farfler");
  const oktatas = projects.find((project) => project.slug === "oktatas");

  const age = Math.floor(
    (new Date().getTime() - new Date("2005-07-21").getTime()) / 31557600000
  );

  return (
    <main className="min-h-dvh grid place-items-center">
      <section className="max-w-xl space-y-4">
        <section className="space-y-4">
          <p className="text-justify">
            My name is Daniel Bacsur, and I'm a {age}-year-old student and over
            the years, I worked on numerous projects. I have participated in
            over 25 competitions and more than 10 hackathons, securing 27
            victories and podium finishes.
          </p>
        </section>
        <section className="space-y-4">
          <p className="text-justify">
            Childhood & Acting - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi justo sem, maximus eu accumsan non,
            vestibulum sit amet orci. Sed viverra mauris quis iaculis ultrices.
            Sed et libero ut velit dapibus facilisis non sit amet augue.
            Vestibulum quam ligula, fringilla id sapien sed, blandit fringilla
            mauris. Duis facilisis luctus magna eget venenatis.
          </p>
        </section>
        <section className="space-y-4">
          <p className="text-justify">
            Robocup - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue. Vestibulum quam ligula
          </p>
          <div className="flex flex-wrap gap-x-4">
            {robocup && (
              <a href={`projects/${robocup.slug}`} className="hover:underline">
                &#8599; {robocup.metadata.title}
              </a>
            )}
          </div>
        </section>
        <section className="space-y-4">
          <p className="text-justify">
            Kaspok - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue. Vestibulum quam ligula,
            fringilla id sapien sed, blandit fringilla mauris.
          </p>
          <div className="flex flex-wrap gap-x-4">
            {kaspok && (
              <a href={`projects/${kaspok.slug}`} className="hover:underline">
                &#8599; {kaspok.metadata.title}
              </a>
            )}
          </div>
        </section>
        <section className="space-y-4">
          <p className="text-justify">
            Cypher - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue. Vestibulum quam ligula,
            fringilla id sapien sed, blandit fringilla mauris. Duis facilisis
            luctus magna eget venenatis. Integer nec diam suscipit, pretium leo
            vitae, mattis risus. Nunc efficitur ultrices placerat.
          </p>
          <div className="flex flex-wrap gap-x-4">
            {cypher && (
              <a href={`projects/${cypher.slug}`} className="hover:underline">
                &#8599; {cypher.metadata.title}
              </a>
            )}
          </div>
        </section>
        <section className="space-y-4">
          <p className="text-justify">
            Avatar & Farfler - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi justo sem, maximus eu accumsan non,
            vestibulum sit amet orci. Sed viverra mauris quis iaculis ultrices.
            Sed et libero ut velit dapibus facilisis non sit amet augue.
            Vestibulum quam ligula, fringilla id sapien sed, blandit fringilla
            mauris. Duis facilisis luctus magna eget venenatis. Integer nec diam
            suscipit, pretium leo vitae, mattis risus. Nunc efficitur ultrices
            placerat.
          </p>
          <div className="flex flex-wrap gap-x-4">
            {farfler && (
              <a href={`projects/${farfler.slug}`} className="hover:underline">
                &#8599; {farfler.metadata.title}
              </a>
            )}
            {oktatas && (
              <a href={`projects/${oktatas.slug}`} className="hover:underline">
                &#8599; {oktatas.metadata.title}
              </a>
            )}
          </div>
        </section>
        <section className="space-y-4">
          <p className="text-justify">
            Currently, I am focused on launching my business and exploring new
            innovation opportunities.
          </p>
        </section>
      </section>
    </main>
  );
}
