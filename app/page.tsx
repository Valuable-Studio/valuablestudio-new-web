import Section from '@/components/layout/section'
import EmailLink from '@/components/ui/email-link'
import s from './page.module.css'

export default function Home() {
  return (
    <main className={s.wrapper}>
      <Intro />
      <Problem />
      <Work />
    </main>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////

function Intro() {
  return (
    <Section title="Intro" isIntro>
      <h1 className="text-h1">
        You’re building something real. <br />
        Design keeps getting in the way.
      </h1>
      <p>
        Not because it’s hard to find a designer. Because the ones you find are
        always one step outside the problem, waiting for a brief, working from
        assumptions, delivering something that’s almost right but not quite.{' '}
        <br />
        And you don’t have time for almost.
      </p>
      <EmailLink>Tell me what you’re building</EmailLink>
    </Section>
  )
}

function Problem() {
  return (
    <Section title="Problem">
      <p>
        You’ve probably tried patching it. A freelancer for the landing page, a
        template for the product screens, a brief to an agency that came back
        two weeks later and missed the point. You’ve probably tried AI too. It
        got you ~70% of the way there and then stalled, because the remaining is
        judgment about your specific product, not pattern matching.
      </p>
      <p>
        None of those options were close enough to what you’re actually building
        <br className="desktop-only" />
        to get it right.
      </p>
      <p>
        What changes when someone thinks in both design and code is that the gap
        between “good idea” and “thing that can ship” basically disappears. No
        designs that break in development. No explaining your stack to someone
        who’ll nod and ignore it.
      </p>
      <p>
        <em>You just move.</em>
      </p>
    </Section>
  )
}

function Work() {
  return (
    <Section title="Work">
      <div></div>
    </Section>
  )
}
