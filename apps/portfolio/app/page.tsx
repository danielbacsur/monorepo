import { AnimatedGallery } from "@/components/animated-gallery";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Page() {
  const age = Math.floor(
    (new Date().getTime() - new Date("2005-07-21").getTime()) / 31557600000
  );

  return (
    <main>
      <section className="relative h-[80vh] mb-16">
        <Image
          src="/cypher-otio-live-demo.jpg"
          alt="Hero Banner"
          fill
          style={{ objectPosition: "50% 20%" }}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-6">
            <Link
              href="https://www.instagram.com/danielbacsur"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/instagram.svg" alt="Logo" width={20} height={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/danielbacsur"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/linkedin.svg" alt="Logo" width={20} height={20} />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100069574172484"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/facebook.svg" alt="Logo" width={20} height={20} />
            </Link>

            <Link
              href="https://github.com/danielbacsur"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" alt="Logo" width={20} height={20} />
            </Link>

            <Link
              href="https://www.youtube.com/@danielbacsur"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/youtube.svg" alt="Logo" width={20} height={20} />
            </Link>

            <Link
              href="https://x.com/danielbacsur"
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/x.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            My name is Daniel Bacsur, and I&apos;m a {age}-year-old student and
            over the years, I worked on numerous projects. I have participated
            in over 25 competitions and more than 10 hackathons, securing 27
            victories and podium finishes.
          </p>
        </div>
      </section>

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Childhood - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/childhood-room-diorama.jpg",
            description: "Diorama of my bedroom",
            focus: "object-center",
          },
          {
            src: "/childhood-fan-and-light.jpg",
            description: "I don't know what I was doing :)",
            focus: "object-top",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Acting - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/acting-school-of-rock.jpg",
            description: "School of Rock",
            focus: "object-center",
          },
          {
            src: "/acting-vackor-nyomaban.jpg",
            description: "Vackor nyomában (Hungarian Tale)",
            focus: "object-left",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Robocup - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue. Vestibulum quam ligula.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/robocup-preparing-with-david.jpg",
            description: "Preparing with David",
            focus: "object-center",
          },
          {
            src: "/robocup-we-won.jpg",
            description: "We won!",
            focus: "object-center",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Kaspok - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue. Vestibulum quam ligula,
            fringilla id sapien sed, blandit fringilla mauris.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/kaspok-close-up.jpg",
            description: "Skull-shaped flower pot",
            focus: "object-center",
          },
          {
            src: "/kaspok-isometric.jpg",
            description: "Package design",
            focus: "object-left",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Cypher - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi justo sem, maximus eu accumsan non, vestibulum sit amet orci.
            Sed viverra mauris quis iaculis ultrices. Sed et libero ut velit
            dapibus facilisis non sit amet augue. Vestibulum quam ligula,
            fringilla id sapien sed, blandit fringilla mauris. Duis facilisis
            luctus magna eget venenatis. Integer nec diam suscipit, pretium leo
            vitae, mattis risus. Nunc efficitur ultrices placerat.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/cypher-otio-live-demo.jpg",
            description: "Proximity-based cyber-defense",
            focus: "object-center",
          },
          {
            src: "/cypher-ceramic-award.jpg",
            description: "We won!",
            focus: "object-center",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Farfler - Fringilla id sapien sed, blandit fringilla mauris. Duis
            facilisis luctus magna eget venenatis. Integer nec diam suscipit,
            pretium leo vitae, mattis risus. Nunc efficitur ultrices placerat.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/farfler-otio-isometric.jpg",
            description: "The first wheelchair prototype",
            focus: "object-center",
          },
          {
            src: "/farfler-talking-with-a-jury.jpg",
            description: "Fully autonomous manoeuvring",
            focus: "object-center",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-justify">
            Avatar - Sed et libero ut velit dapibus facilisis non sit amet
            augue. Vestibulum quam ligula, fringilla id sapien sed, blandit
            fringilla mauris. Duis facilisis luctus magna eget venenatis.
            Integer nec diam suscipit, pretium leo vitae, mattis risus. Nunc
            efficitur ultrices placerat.
          </p>
        </div>
      </section>

      <AnimatedGallery
        images={[
          {
            src: "/avatar-otio-live-demo.jpg",
            description: "The world's first virtual teacher",
            focus: "object-center",
          },
          {
            src: "/avatar-otio-microphone.jpg",
            description: "Talking with Sophie",
            focus: "object-center",
          },
        ]}
      />

      <div className="h-[25dvh] pointer-events-none" />

      <section className="px-4 py-3 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <p className="text-center">
            <Balancer>
              Currently, I am focused on launching my business and exploring new
              innovation opportunities.
            </Balancer>
          </p>
        </div>
      </section>

      <div className="h-[25dvh] pointer-events-none" />
    </main>
  );
}
