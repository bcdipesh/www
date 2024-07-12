import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import PersonalProjects from "@/components/personal-projects";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <section className="pb-16 border-b mb-14">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Ciao, I&apos;m Dipesh.
        </h1>
        <p className="text-xl mt-2 text-muted-foreground">
          A software engineer from the US based in Falls Church.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a Software Engineer at BizFlow Corp., where I am dedicated to
          building the future of low-code/no-code application platforms and
          Business Process Automation. My work empowers businesses to streamline
          their operations and enhance efficiency.
        </p>

        <Button className="mt-16 px-8 rounded-full group" asChild>
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
