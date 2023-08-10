import ContactMeFormCard from "~/components/ContactMeFormCard"
import { Button } from "~/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card"
import { GitHubLogo, LinkedInLogo, PokeBall } from "~/components/ui/icons"

const socialButtonClassNames =
  "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-15"
const logoClassNames = "text-black  h-10 w-10"

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Amanda Slocum</h1>

      <div className="flex space-x-6">
        <Button className={socialButtonClassNames}>
          <LinkedInLogo className={logoClassNames} />
        </Button>
        <Button className={socialButtonClassNames}>
          <GitHubLogo className={logoClassNames} />
        </Button>

        <HoverCard openDelay={0} closeDelay={100}>
          <HoverCardContent side="top" sideOffset={10}></HoverCardContent>
          <HoverCardTrigger>
            <Button className={socialButtonClassNames}>
              <PokeBall className={logoClassNames} />
            </Button>
          </HoverCardTrigger>
        </HoverCard>

        <Button asChild className={socialButtonClassNames}>
          <a
            className="h-min self-center"
            href="https://docs.google.com/document/d/1SlRuUd2EufrSyCHbb13Mzx3Hl7kFG5Fm/export?format=pdf"
            download
          >
            Download Resume
          </a>
        </Button>
      </div>

      <ContactMeFormCard />
    </main>
  )
}
