import Image from "next/image";
import Link from "next/link";

const projects: {
  href: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Jotion",
    href: "https://note-taking-app-tan.vercel.app/",
    description: "My take on the popular note-taking web app Notion.",
    image: "/jotion.png",
  },
  {
    title: "Memorable Messages",
    href: "https://nextmemorablemessages.netlify.app/",
    description:
      "A web app that automatically sends personalized wishes to loved ones on special occasions.",
    image: "/memorable_messages.png",
  },
  {
    title: "Snippet Forge",
    href: "https://snippet-forge.netlify.app/",
    description:
      "A web app to facilitate quick copying and pasting of frequently used code snippets.",
    image: "/snippet-forge.png",
  },
];

export default function PersonalProjects() {
  return (
    <section className="pb-16">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Personal Projects
      </h2>
      <p className="leading-7 mt-2 text-muted-foreground">
        Below is a selection of recent projects that I&apos;ve worked on.
      </p>

      <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
        {projects.map((project) => (
          <Link
            href={project.href}
            key={project.title}
            className="flex flex-col justify-center bg-secondary hover:bg-slate-200/70 transition-colors rounded-xl p-8"
          >
            <div className="relative rounded-xl mb-4 shadow-project">
              <Image
                width={450}
                height={240}
                src={project.image}
                alt={project.title}
                className="rounded-xl bg-cover"
              />
            </div>
            <h3 className="font-semibold tracking-tight text-xl">
              {project.title}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
