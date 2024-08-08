import Image from "next/image";
import Link from "next/link";

const workExperience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: "PayPal",
    role: "Full Stack Developer",
    date: "Sep 2022 → Present",
    logo: "https://paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_74x46.jpg",
  },
  {
    company: "eSewa Pvt. Ltd.",
    role: "Full Stack Java Developer",
    date: "Nov 2020 → Sep 2022",
    logo: "/esewa-logo.png",
  },
];

export default function InfoPage() {
  return (
    <>
      <section className="pb-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-6">
          Information
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am currently a Full Stack Developer at PayPal., where I implement
          new features, resolve defects, develop APIs, and improve React
          components. I also design and develop micro-services, create SQL
          scripts using Liquibase, and utilize various AWS services.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Before joining PayPal, I worked as a Full Stack Java Developer at
          eSewa Pvt. Ltd., where I executed the full Software Development Life
          Cycle (SDLC) for fintech solutions. My work included developing Java
          applications, orchestrating microservices-based cloud architecture,
          and utilizing frameworks like Angular.js and Bootstrap.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          My journey in software development began with a Bachelor of Science in
          Honors Computing from Leeds Beckett University, where I graduated with
          First Class Honors. I further enhanced my skills through a Software
          Engineering Bootcamp at Springboard. I am passionate about leveraging
          technology to solve problems and continuously improving my craft.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In addition to my professional work, I enjoy creating my own projects
          to address personal needs. Some of my notable projects include{" "}
          <Link
            href="https://note-taking-app-tan.vercel.app/"
            target="_blank"
            className="font-semibold underline underline-offset-2"
          >
            Jotion
          </Link>
          ,{" "}
          <Link
            href="https://nextmemorablemessages.netlify.app/"
            target="_blank"
            className="font-semibold underline underline-offset-2"
          >
            Memorable Messages
          </Link>{" "}
          and{" "}
          <Link
            href="https://snippet-forge.netlify.app/"
            target="_blank"
            className="font-semibold underline underline-offset-2"
          >
            Snippet Forge
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="scroll-m-20 text-3xl mb-16 font-semibold tracking-tight first:mt-0">
          Experience
        </h2>

        {workExperience.map((experience) => (
          <div
            key={experience.company}
            className="flex gap-8 py-6 [&:not(:last-child)]:border-b"
          >
            <Image
              className="w-14 h-10 rounded-xl"
              width={56}
              height={56}
              src={experience.logo}
              alt={experience.company}
            />

            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
                {experience.company}
              </h4>
              <p className="text-secondary-foreground mb-8">
                {experience.role}
              </p>
              <p className="text-sm font-mono text-muted-foreground">
                {experience.date}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
