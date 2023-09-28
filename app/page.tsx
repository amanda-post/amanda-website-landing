import ContactMeFormCard from "~/components/ContactMeFormCard"
import { Button } from "~/components/ui/button"
import {
  ActionCatalystLogo,
  ColoredPokeBall,
  GitHubLogo,
  LinkedInLogo,
  PokeBall,
  ToolsIcon,
} from "~/components/ui/icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { Toaster } from "~/components/ui/toaster"

const socialButtonClassNames =
  "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-16"
const logoClassNames = "text-black h-12 w-12"

const skillsList1 = [
  "TypeScript",
  "React",
  "Redux",
  "Apollo Client",
  "GraphQL",
  "Styled Components",
  "Next.js",
  "Prisma",
  "PlanetScale",
  "Tailwind CSS",
  "React Testing Library",
  "Jest",
  "Cypress",
  "Formik",
  "React Hook Form",
  "React Router",
  "Radix UI",
  "Design Systems",
  "Storybook",
  "Figma",
  "JavaScript",
  "HTML & CSS",
  "Git",
  "AWS",
]

const skillsList2 = [
  "DataDog",
  "Amplitude",
  "HubSpot",
  "Zendesk",
  "FullStory",
  "Postman",
  "Node.js",
  "Express",
  "SQL and NoSQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "GitHub",
  "GitLab",
  "BitBucket",
  "VSCode",
  "Chrome DevTools",
  "Vercel",
  "Slack",
  "Zoom",
  "Google Workspace",
  "Atlassian Suite",
]

const whatILoveAboutMyJob = [
  "Cross-functional collaboration & strong teamwork/communication",
  "Learning new things",
  "Helping & mentoring others",
  "Building beautiful, intuitive UIs",
  "Writing clean, maintainable code",
  "Working with TypeScript",
  "Contributing to team culture via game nights, book clubs, etc.",
]

export default function Landing() {
  return (
    <main className="min-h-screen px-14 pt-14">
      <Toaster />
      <div className="flex min-h-screen rounded-lg bg-black px-12 py-10">
        <div className="mr-20 grow flex-col">
          <h1 className="text-8xl text-fuchsia-100">Amanda Slocum</h1>
          <h2 className="text-3xl italic text-fuchsia-200">
            Full-Stack Software Engineer
          </h2>

          <div className="my-8 flex space-x-12">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/amanda-post44/"
            >
              <Button className={socialButtonClassNames}>
                <LinkedInLogo className={logoClassNames} />
              </Button>
            </a>

            <a target="_blank" href="https://github.com/amanda-post">
              <Button className={socialButtonClassNames}>
                <GitHubLogo className={logoClassNames} />
              </Button>
            </a>

            <div>
              <Popover>
                <PopoverTrigger>
                  <Button className={socialButtonClassNames}>
                    <ActionCatalystLogo className={logoClassNames} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="right" sideOffset={15}>
                  <p className="mb-4 text-center text-sm">
                    <span className="text-lg font-extrabold">
                      Action Catalyst
                    </span>
                    <ToolsIcon className="mb-1 ml-2 inline h-6 w-6 pr-2" />
                    <span>WIP</span>
                    <p>
                      In a world of distractions and instant gratification, it
                      can be difficult to stay focused and motivated. Action
                      Catalyst is a tool that helps you stay on track by
                      rewarding you for completing tasks and achieving goals.
                    </p>
                  </p>

                  <a
                    target="_blank"
                    href="https://github.com/amanda-post/action-catalyst"
                  >
                    <Button className="group mb-2 w-full hover:bg-slate-400 hover:text-black">
                      <div className="flex w-full justify-between">
                        Repository
                        <GitHubLogo className="h-6 w-6 group-hover:text-black" />
                      </div>
                    </Button>
                  </a>

                  <a target="_blank" href="https://action-catalyst.vercel.app/">
                    <Button className="w-full hover:bg-slate-400 hover:text-black">
                      <div className="flex w-full justify-between">
                        Go to App! <ActionCatalystLogo className="h-6 w-6" />
                      </div>
                    </Button>
                  </a>
                </PopoverContent>
              </Popover>
              <p className="ml-[-3px] mt-1 text-center text-xs text-white">
                Action Catalyst
              </p>
            </div>

            <div>
              <Popover>
                <PopoverTrigger>
                  <Button className={socialButtonClassNames}>
                    <PokeBall className={logoClassNames} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="right" sideOffset={15}>
                  <p className="mb-4 text-center text-sm">
                    <span className="text-lg font-extrabold">Poké Pals</span>
                    <ToolsIcon className="mb-1 ml-2 inline h-6 w-6 pr-2" />
                    <span>WIP</span>
                    <p>
                      A community of Pokémon enthusiasts where you can find
                      friends, capture rare Pokémon, level up together, and
                      trade to your heart's content!
                    </p>
                  </p>

                  <a
                    target="_blank"
                    href="https://github.com/amanda-post/poke-pals-revived"
                  >
                    <Button className="group mb-2 w-full hover:bg-slate-400 hover:text-black">
                      <div className="flex w-full justify-between">
                        Repository
                        <GitHubLogo className="h-6 w-6 group-hover:text-black" />
                      </div>
                    </Button>
                  </a>

                  <a
                    target="_blank"
                    href="https://poke-pals-revived.vercel.app/"
                  >
                    <Button className="w-full hover:bg-slate-400 hover:text-black">
                      <div className="flex w-full justify-between">
                        Go to App! <ColoredPokeBall className="h-6 w-6" />
                      </div>
                    </Button>
                  </a>
                </PopoverContent>
              </Popover>
              <p className="mt-1 text-center text-xs text-white">Poké Pals</p>
            </div>
          </div>

          <Button
            asChild
            className={`${socialButtonClassNames} h-12 text-black`}
          >
            <a
              className="mb-10"
              href="https://docs.google.com/document/d/1SlRuUd2EufrSyCHbb13Mzx3Hl7kFG5Fm/export?format=pdf"
              download
            >
              Download Resume
            </a>
          </Button>

          <ContactMeFormCard />
        </div>

        <div className="w-3/5 flex-col text-white">
          <h3 className="mt-10 text-3xl">About Me</h3>
          <p className="mt-3 font-bold text-white">September 2023</p>
          <p className="space-y-4 text-indigo-200">
            <p>
              I'm a full-stack software engineer with 4.5 years of professional
              experience.
            </p>

            <p>
              I specialize in front-end, and I'm currently looking for a
              full-time position, after my company (Altruist) enacted a
              mandatory Return To Office policy to their office in Culver City,
              CA.
            </p>

            <p>
              <p className="font-bold text-white">
                What I love most about my job:
              </p>
              <ul className="list-inside list-disc text-sm leading-8">
                {whatILoveAboutMyJob.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </p>
          </p>

          <h3 className="py-3 text-3xl">Technical Skills</h3>
          <div className="flex flex-wrap text-indigo-200">
            <div className="w-1/2 flex-col">
              {skillsList1.map((skill) => (
                <div className="pb-2">{skill}</div>
              ))}
            </div>
            <div className="w-1/2 flex-col">
              {skillsList2.map((skill) => (
                <div className="pb-2">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
