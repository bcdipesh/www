import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects: {
  href: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Memorable Messages",
    href: "https://github.com/bcdipesh/memorable-messages",
    description:
      "A web app that automatically sends personalized wishes to loved ones on special occasions.",
    image: "/memorable_messages.png",
  },
  {
    title: "Snippet Forge",
    href: "https://github.com/bcdipesh/snippet-forge",
    description:
      "A web app to facilitate quick copying and pasting of frequently used code snippets.",
    image: "/snippet-forge.png",
  },
];

export default function PersonalProjects() {
  return (
    <section className="pb-14">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Personal Projects
      </h2>
      <p className="leading-7 mt-2 text-muted-foreground">
        Below is a selection of recent projects that I&apos;ve worked on.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {projects.map((project, index) => (
          <Link href={project.href} key={index}>
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Image
                  width={800}
                  height={400}
                  src={project.image}
                  alt={project.title}
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
