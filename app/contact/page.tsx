import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="pb-16">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl border-b pb-6">
        Contact
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        If you'd like to get in touch, you can reach me using the following
        methods. I am seeking a role in front end web development, ideally with
        JavaScript (TypeScript) and React, where I can leverage my skills to
        make a meaningful impact. If you're hiring, let's chat!
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
            Email
          </h3>
          <Link
            href="mailto:bcdipeshwork@gmail.com"
            className="text-muted-foreground"
          >
            bcdipeshwork@gmail.com
          </Link>
        </section>
        <section>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
            GitHub
          </h3>
          <Link
            href="https://github.com/bcdipesh"
            target="_blank"
            className="text-muted-foreground"
          >
            git/bcdipesh
          </Link>
        </section>
        <section>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
            LinkedIn
          </h3>
          <Link
            href="https://linkedin.com/in/dipeshbc"
            target="_blank"
            className="text-muted-foreground"
          >
            in/dipeshbc
          </Link>
        </section>
        <section>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
            X
          </h3>
          <Link
            href="https://x.com/b_c_dipesh"
            target="_blank"
            className="text-sm text-muted-foreground"
          >
            @b_c_dipesh
          </Link>
        </section>
      </div>
    </section>
  );
}
