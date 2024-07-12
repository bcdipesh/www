import Image from "next/image";
import Link from "next/link";

const workExperience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: "BizFlow Corp.",
    role: "Software Engineer",
    date: "Aug 2023 → Today",
    logo: "/bizflow-logo.jpeg",
  },
  {
    company: "Friend For You Tech Pvt. Ltd.",
    role: "Front End Developer",
    date: "Feb 2020 → Jan 2023",
    logo: "/friend-for-you-tech-logo.png",
  },
];

export default function InfoPage() {
  return (
    <>
      <section className="pb-14">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-6">
          Information
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am currently a Software Engineer at BizFlow Corp., where I am
          dedicated to building the future of low-code/no-code application
          platforms and Business Process Automation. My work focuses on
          enhancing user experience and streamlining operations, leading to
          significant improvements in user engagement and efficiency.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Before joining BizFlow Corp., I was a Front End Developer at Friend
          For You Tech Pvt. Ltd., where I developed and maintained web
          applications using React and Redux. My contributions significantly
          boosted user engagement and revenue by integrating seamless payment
          APIs and enhancing overall site performance.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I started my journey experimenting with Java, Python, and Node
          (Express) before focusing on front-end technologies. My enthusiasm for
          crafting reusable and visually appealing components with React has
          driven my career towards building responsive and scalable Progressive
          Web Apps.
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
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-6">
          Experience
        </h2>

        {workExperience.map((experience) => (
          <div
            key={experience.company}
            className="flex gap-4 py-6 [&:not(:last-child)]:border-b"
          >
            <Image
              className="w-16 h-16 rounded-xl"
              width={56}
              height={56}
              src={experience.logo}
              alt={experience.company}
            />

            <div className="flex flex-col">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {experience.company}
              </h4>
              <p className="text-secondary-foreground mb-4">
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
