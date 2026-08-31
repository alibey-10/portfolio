import { CircleArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

const projects = [
  {
    name: "Shoogle",
    href: "https://shoogle.dev",
    description: "Shadcn search engine",
  },
  {
    name: "Formcn",
    href: "https://formcn.dev",
    description: "Production-ready shadcn UI form builder",
  },
  {
    name: "Cardcn",
    href: "https://cardcn.dev",
    description: "Collection of shadcn cards",
  },
  {
    name: "Nextradar",
    href: "https://nextradar.dev/",
    description: "Curated resources for Next.js",
  },
  {
    name: "Indie UI",
    href: "https://ui.indie-starter.dev/",
    description: "Collection of UI blocks",
  },
] as const

const links = [
  { label: "Email", href: "mailto:ali.hussein.pre@gmail.com" },
  { label: "GitHub", href: "https://github.com/alibey-10" },
  { label: "X", href: "https://x.com/Alibey_10" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%F0%9F%92%BB-ali-h-4292a6156/",
  },
  {
    label: "Discord",
    href: "https://shoogle.dev/shadcord",
  },
] as const

function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-2xl flex-col px-6 leading-relaxed text-foreground">
      <header className="mb-14 pt-10 md:pt-14">
        <h1
          className="font-bold tracking-tight uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ali Hussein
        </h1>
        <p className="mt-2 text-lg leading-tight font-medium text-pretty text-muted-foreground">
          AI-native design engineer based in Hamburg, Germany.
        </p>
      </header>

      <section aria-labelledby="projects-heading" className="mb-14">
        <h2
          id="projects-heading"
          className="mb-3 font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          I built
        </h2>
        <ul className="flex flex-col gap-4">
          {projects.map((p) => (
            <li key={p.href} className="flex items-center gap-2 text-pretty">
              <HugeiconsIcon
                icon={CircleArrowRight01Icon}
                className="size-4 text-muted-foreground/80"
              />
              <div>
                <a
                  href={p.href + "?utm_source=portfolio"}
                  className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {p.name}
                </a>
                <span className="text-muted-foreground"> - </span>
                <p className="inline-block text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto border-t border-dashed border-border py-3">
        <nav aria-label="Social and contact">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  )
}
