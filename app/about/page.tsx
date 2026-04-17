import { ProfileAvatar } from "@/components/profile-avatar";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <>
        <div className="container py-12">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Background & Values
            </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex flex-col items-center text-center">
                <ProfileAvatar size={200} />
                <h2 className="text-2xl font-bold mt-4">{siteConfig.name}</h2>
                <p className="text-muted-foreground">{siteConfig.role}</p>
                <div className="flex items-center gap-4 mt-4">
                <a
                    href={`mailto:${siteConfig.contact.email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                >
                    <Mail className="h-6 w-6" />
                </a>
                <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                >
                    <Linkedin className="h-6 w-6" />
                </a>
                <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                >
                    <Github className="h-6 w-6" />
                </a>
                </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground">
                <p>
                My path into engineering was not traditional. I started with a
                degree in Biotechnology, drawn to complex systems and how things
                work at a fundamental level. What I discovered along the way was
                that building software scratched the same itch, with one
                difference: you could ship something real in weeks, put it in
                front of users, and watch it either work or fail. I taught myself
                to code and never looked back.
                </p>
                <p>
                Over 8 years I have worked across the stack at every scale, from
                employee #3 at a financial automation startup to Lead Engineer at
                Petco, where I own a production AWS serverless platform supporting
                a ~$6B revenue business. Along the way I integrated Claude LLM via
                AWS Bedrock into live IVR and chat systems, led a team of 5
                engineers, and built three independent products that generate real
                revenue today: Fitte, a gym ERP with 10+ paying fitness centers;
                Zetio, an operations platform for instructors running paid online
                batches; and PodOS, an AI podcast research assistant with paying
                users.
                </p>
                <p>My work is guided by three principles:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                    <span className="font-semibold text-foreground">
                    Ownership:
                    </span>{" "}
                    I treat every system I build as if the business depends on it,
                    because it usually does. Architecture decisions, on-call
                    incidents, customer feedback — all of it is my problem to solve.
                </li>
                <li>
                    <span className="font-semibold text-foreground">
                    Precision over speed:
                    </span>{" "}
                    Moving fast matters, but shipping the right thing faster matters
                    more. I invest time upfront in understanding the problem before
                    writing the first line of code.
                </li>
                <li>
                    <span className="font-semibold text-foreground">
                    Measurable outcomes:
                    </span>{" "}
                    Every project I have shipped ties back to a concrete result.
                    Reduced handling time, eliminated errors, paying customers,
                    uptime numbers. If it cannot be measured, it is hard to defend.
                </li>
                </ul>
                <p>
                I am based in Guadalajara, Mexico, available across US timezones,
                and open to US relocation. If you are building an AI-powered
                product and need an engineer who has done this in production, not
                just in side projects, reach out.
                </p>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}