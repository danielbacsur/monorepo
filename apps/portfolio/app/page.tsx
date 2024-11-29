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
            Since childhood, I have been fascinated by physics and robotics.
            During kindergarten, I became obsessed with disassembling various
            everyday objects, and by the time I started elementary school, it
            was clear that this would be my field of interest. It was then that
            I met my early mentor, Zoltán Jarosievitz, and not long after, as a
            second-grader, I won my first physics competition against
            eighth-graders.
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
            Art, dance, and music have always been important to me. However, in
            fifth grade, I had the opportunity to play the lead role in the
            Hungarian State Opera House&apos;s production of Billy Elliot — the
            largest children's role in the world — which marked a major turning
            point in my life. For a little over three years, I trained more than
            40 hours a week, learning dance, singing, guitar, and, not least,
            performance techniques and speech skills. Looking back, I&apos;m
            deeply grateful for this experience, as it continues to enrich my
            life even today, shaping me into a better entrepreneur and person.
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
            In the summer of 2021, the RoboCup World Championship took place,
            attracting teams from all over the world. My team represented
            Hungary in the OnStage category, where the goal was to deliver a
            two-minute performance using robots designed and built by the
            participants. We created a robotic band featuring a fully automated
            piano robot and a drum robot, accompanied by a separate piano and an
            electric guitar. After winning the national round in the spring, we
            advanced to the international competition, where, after three days
            of challenges, the jury unanimously awarded us the World
            Championship title for Best Hardware in the OnStage category.
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
            After the World Championship, I founded my first student
            business—since, in compliance with Hungarian laws, I couldn't
            establish a real LLC yet—in which my classmates and I managed
            everything from production to the sale of our products. We encased
            ceramic planters with abstract 3D silicone molds that I designed,
            and then planted stabilized moss in them. As a result, after a month
            or two of work, we exited the business with a profit of a few
            thousand dollars.
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
            In 2023, a classmate and I submitted a proposal to the National
            Science and Innovation Olympiad. For the competition, we developed a
            credit card-sized computer capable of preventing a significant
            portion of data thefts and supporting the work of cybersecurity
            professionals. The device was able to verify, based on the presence
            of nearby networks, whether the user was authorized to access the
            contents of the built-in drive, thus preventing unauthorized access.
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
            After the science olympiad, I became friends with one of my
            competitors at the time, Ádám Vajda. Together, in 2024, we developed
            the world&apos;s first self-driving wheelchair. We began development
            in January, achieved fully autonomous indoor navigation by March,
            patented our technology in April, and continued working on
            implementing outdoor navigation over the summer.
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
            Meanwhile, I was also working on another project. At the beginning
            of the year, I realized that Hungary's education system is short of
            16,000 teachers and that a reliable and friendly AI model could help
            solve this problem. This led me to develop Sophie, the world&apos;s
            first virtual teacher, with whom students could have spoken
            conversations, and she would respond based on the Hungarian
            curriculum. Currently, at the time of writing this article, I have
            helped over 5,000 students and am in negotiations with the Hungarian
            government regarding a potential acquisition.
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
