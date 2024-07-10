import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import PersonalProjects from "@/components/personal-projects";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <section className="pb-14 border-b mb-14">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Ciao, I&apos;m Dipesh.
        </h1>
        <p className="text-xl mt-2 text-muted-foreground">
          A software engineer from the US based in Falls Church.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et iusto
          deleniti quam labore amet voluptates quae! Hic assumenda ut obcaecati
          dolor, asperiores deserunt nesciunt! Consequatur facilis eveniet
          reiciendis quibusdam iure, quos nam quia aliquam, nulla ipsa eos natus
          laudantium deserunt.
        </p>

        <Button className="mt-8 px-8 rounded-full group" asChild>
          <Link href="/info">
            More Information{" "}
            <ArrowRightIcon className="ml-2  group-hover:translate-x-2 transition-transform" />
          </Link>
        </Button>
      </section>
      <PersonalProjects />
    </>
  );
}
