import ContactMeFormCard from "~/components/ContactMeFormCard"
import { Button } from "~/components/ui/button"
import {
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

const socialButtonClassNames =
  "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-15"
const logoClassNames = "text-black h-10 w-10"

export default function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-700 to-fuchsia-800 px-14 pt-14">
      <div className="min-h-screen flex-col rounded-lg bg-black px-12 py-10">
        <h1 className="text-8xl text-white">Amanda Slocum</h1>
        <h2 className="text-3xl text-white">Full-Stack Software Engineer</h2>

        <div className="my-6 flex space-x-6 justify-self-center">
          <a target="_blank" href="https://www.linkedin.com/in/amanda-post44/">
            <Button className={socialButtonClassNames}>
              <LinkedInLogo className={logoClassNames} />
            </Button>
          </a>

          <a target="_blank" href="https://github.com/amanda-post">
            <Button className={socialButtonClassNames}>
              <GitHubLogo className={logoClassNames} />
            </Button>
          </a>

          <Popover>
            <PopoverTrigger>
              <Button className={socialButtonClassNames}>
                <PokeBall className={logoClassNames} />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="right" sideOffset={15}>
              <p className="mb-4 text-center text-sm">
                <ToolsIcon className=" inline h-6 w-6 pr-2" />
                <span>WIP - August 2023</span>
                <p className="ml-2 text-lg font-extrabold">Poké Pals:</p>
                <p>
                  A community of Pokémon enthusiasts where you can find friends,
                  capture rare Pokémon, level up together, and trade to your
                  heart's content!
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

              <a target="_blank" href="https://poke-pals-revived.vercel.app/">
                <Button className="w-full hover:bg-slate-400 hover:text-black">
                  <div className="flex w-full justify-between">
                    Go to App! <ColoredPokeBall className="h-6 w-6" />
                  </div>
                </Button>
              </a>
            </PopoverContent>
          </Popover>
        </div>

        <Button asChild className={socialButtonClassNames}>
          <a
            className="mb-5 h-min self-center"
            href="https://docs.google.com/document/d/1SlRuUd2EufrSyCHbb13Mzx3Hl7kFG5Fm/export?format=pdf"
            download
          >
            Download Resume
          </a>
        </Button>

        <ContactMeFormCard />
      </div>
    </main>
  )
}
