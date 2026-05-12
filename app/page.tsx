import Section from '@/components/layout/section'
import WorkTrigger from '@/components/layout/work-drawer/work-trigger'
import EmailLink from '@/components/ui/email-link'
import { WORKS } from '@/lib/data/works'
import s from './page.module.css'

export default function Home() {
  return (
    <main className={s.wrapper}>
      <Intro />
      <Problem />
      <Work />
      <Offer />
      <Fit />
      <Contact />
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
        template for the product screens, a brief to an agency that came back{' '}
        <br className="desktop-only" />
        two weeks later and missed the point. You’ve probably tried AI too. It
        got <br className="desktop-only" />
        you ~70% of the way there and then stalled, because the remaining is
        judgment about your specific product, not pattern matching.
      </p>
      <p>
        None of those options were close enough to what you’re actually building{' '}
        <br className="desktop-only" />
        to get it right.
      </p>
      <p>
        What changes when someone thinks in both design and code is that the{' '}
        <br className="desktop-only" />
        gap between “good idea” and “thing that can ship” basically disappears.{' '}
        <br className="desktop-only" />
        No designs that break in development. No explaining your stack to{' '}
        <br className="desktop-only" />
        someone who’ll nod and ignore it.{' '}
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
      <div className={s.grid}>
        {WORKS.map((work) => (
          <WorkTrigger key={work.name} work={work} className={s.work}>
            {work.logo}
          </WorkTrigger>
        ))}
      </div>
    </Section>
  )
}

function Offer() {
  const CAPABILITIES = [
    'Web design',
    'Wireframing',
    'User journeys',
    'Product design',
    'UX audits',
    'Copy direction',
    'Design systems',
    'Prototyping',
    'Conversion strategy',
  ] as const

  return (
    <Section title="Offer">
      <p>
        The retainer exists because every product is different and fixed-scope
        projects pretend otherwise. You get what you actually need, not what fit{' '}
        <br className="desktop-only" />
        into a proposal written before we understood the problem.
      </p>
      <p>
        One request at a time. First draft in 48 hours. Revisions until it’s
        right.
      </p>
      <p>
        <em>$2,500/month.</em>
      </p>
      <p>Cancel anytime for ultimate flexibility.</p>
      <p>
        Async workflows. Monthly call included. <br />
        No mandatory agenda, skip it if you <br className="mobile-only" />
        don’t need it.
      </p>
      <p>
        Before we start, a short call to align on priorities, walk through the
        workflow, <br className="mobile-only" />
        and agree on what to tackle first.
      </p>
      <p>
        <em>Capabilities</em>
      </p>
      <div className={s.grid}>
        {CAPABILITIES.map((capability) => (
          <p key={capability}>{capability}</p>
        ))}
      </div>
    </Section>
  )
}

function Fit() {
  return (
    <Section title="Fit check" slug="fit">
      <div className={s.flexbox}>
        <div className={s.fitWrapper}>
          <p>
            <em>In</em>
          </p>
          <ul className={s.list}>
            <li>You’re pre-seed to series A</li>
            <li>Design is slowing your velocity</li>
            <li>You treat design as a growth lever</li>
            <li>You’re comfortable working async</li>
          </ul>
        </div>

        <div className={s.fitWrapper}>
          <p>
            <em>Out</em>
          </p>
          <ul className={s.list}>
            <li>You need a full agency</li>
            <li>You need a project manager</li>
            <li>You want hand-holding</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section title="Contact">
      <p>
        <em>Ciao!</em>
      </p>
      <p>I’m Giaco, a designer with a software background based in Italy.</p>
      <p>
        I work with a small number of founders at a time, close enough to the
        work <br className="desktop-only" />
        to actually move with you, not just deliver to you. I care more about
        your outcome than the brief, which means if something isn’t working I’ll
        tell <br className="desktop-only" />
        you before you ask.
      </p>
      <p>
        If this sounds right and you want to talk,{' '}
        <br className="mobile-only" />
        just <EmailLink>tell me what you’re building</EmailLink>.
      </p>
      <div className={s.signature}>
        <svg
          role="img"
          aria-labelledby="signature-title"
          viewBox="0 0 92 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="signature-title">Giaco’s signature</title>
          <g opacity="0.6">
            <path
              d="M45.192 2.48257C40.8829 2.05637 36.5963 2.15758 32.332 2.78621C28.0677 3.41484 23.9305 4.51628 19.9203 6.09053C17.7189 6.97344 15.5726 7.98735 13.4813 9.13224C9.33303 11.4314 3.40862 15.3992 2.23872 20.452C2.04424 21.4054 2.25799 22.3122 2.87998 23.1722C3.63757 24.241 4.66595 24.9488 5.96513 25.2956C9.95556 26.4172 14.292 25.3601 18.1795 24.2906C21.2583 23.3978 24.3394 22.299 27.1428 20.7298C27.9337 20.317 28.5695 19.4382 29.5347 19.4213C29.8244 19.3899 30.0903 19.504 30.3324 19.7637C30.7091 20.1794 30.7685 20.561 30.5107 20.9086C30.2793 21.2557 30.021 21.5769 29.7358 21.8721C28.6462 22.9468 27.6102 24.0732 26.628 25.2516C25.6721 26.4294 24.8234 27.6978 24.0818 29.0566C23.7086 29.5988 22.7125 33.3368 21.3627 32.0334C21.1748 31.852 21.0649 31.6032 21.033 31.287C21.0051 29.6858 21.9253 28.1305 22.7365 26.8237C23.2762 25.9962 23.856 25.1944 24.4758 24.4183C23.663 24.7227 22.8627 24.9874 22.075 25.2123C19.3052 26.0962 16.5053 26.8615 13.6415 27.3783C11.5633 27.7577 9.49295 27.8334 7.43053 27.6055C5.31592 27.4079 3.03893 26.5928 1.52738 25.0563C1.04329 24.537 0.663115 23.9234 0.386859 23.2157C0.027311 22.2719 -0.0816051 21.3238 0.0601104 20.3713C2.02231 9.24712 18.3888 3.52337 27.6361 1.36393C32.0465 0.401513 36.5949 -0.110797 41.1113 0.0203263C42.51 0.0223015 43.9103 0.116615 45.3123 0.303267C45.6826 0.349585 45.9489 0.490083 46.1113 0.724761C46.4258 1.17906 46.4073 1.82843 46.0189 2.23062C45.8379 2.4449 45.5623 2.52889 45.192 2.48257Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.4485 10.1006C46.7623 9.93681 46.9156 9.64384 46.9054 9.06343C46.8333 8.2065 45.9055 7.78972 45.1775 7.58935C42.974 6.98283 38.1104 6.70393 37.1731 9.39165C36.9458 9.97621 36.9411 10.4645 37.1591 10.8566C38.2527 12.8235 41.7531 12.574 43.513 12.0124C44.0642 11.8444 44.4695 11.6262 44.7287 11.3578C45.0916 10.982 45.2687 10.5435 45.2599 10.0422C45.6414 10.1306 46.0649 10.236 46.4485 10.1006ZM48.098 18.4244L48.1037 18.4198L48.1094 18.4153C48.1072 18.4159 48.1059 18.4192 48.1037 18.4198C48.1015 18.4205 48.1002 18.4237 48.098 18.4244C47.9007 18.4829 47.7162 18.5466 47.5478 18.6261C47.7421 18.6003 47.9292 18.5494 48.098 18.4244ZM43.6277 9.5165C43.8689 9.72341 43.9392 9.97289 43.8387 10.2649C43.4244 10.6404 42.9118 10.7294 42.3842 10.8445C41.6835 10.8568 39.0723 11.0592 38.8081 10.0757C38.834 10.0488 38.8467 10.0222 38.8463 9.99582C39.5101 9.01137 41.3145 9.13182 42.3177 9.30185C42.7376 9.34384 43.2411 9.33155 43.6277 9.5165Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1094 18.4153C48.1084 18.4155 48.1045 18.419 48.1037 18.4198C48.1036 18.4199 48.1038 18.4197 48.1037 18.4198C48.1028 18.4208 48.1048 18.4195 48.1037 18.4198C48.1055 18.4179 48.1072 18.4159 48.1094 18.4153Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1037 18.4198C48.1045 18.419 48.1084 18.4155 48.1094 18.4153C48.1072 18.4159 48.1059 18.4192 48.1037 18.4198C48.1015 18.4205 48.1002 18.4237 48.098 18.4244C48.0989 18.4234 48.1026 18.4201 48.1037 18.4198Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.098 18.4244C48.098 18.4245 48.0981 18.4243 48.098 18.4244C48.0989 18.4234 48.1026 18.4201 48.1037 18.4198C48.1028 18.4208 48.1048 18.4195 48.1037 18.4198C48.1036 18.4199 48.1038 18.4197 48.1037 18.4198C48.1045 18.419 48.1084 18.4155 48.1094 18.4153C48.1072 18.4159 48.1059 18.4192 48.1037 18.4198C48.1015 18.4205 48.1002 18.4237 48.098 18.4244Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.098 18.4244C48.098 18.4245 48.0981 18.4243 48.098 18.4244C48.0989 18.4234 48.1026 18.4201 48.1037 18.4198C48.1028 18.4208 48.1048 18.4195 48.1037 18.4198C48.1036 18.4199 48.1038 18.4197 48.1037 18.4198C48.1045 18.419 48.1084 18.4155 48.1094 18.4153C48.1072 18.4159 48.1059 18.4192 48.1037 18.4198C48.1015 18.4205 48.1002 18.4237 48.098 18.4244Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.098 18.4244L48.1037 18.4198C48.1045 18.419 48.1084 18.4155 48.1094 18.4153C47.9071 18.4746 47.7199 18.5449 47.5478 18.6261C47.7162 18.5466 47.9007 18.4829 48.098 18.4244Z"
              fill="#101400"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M86.171 18.0765C87.5684 17.9993 88.9395 17.9358 90.2846 17.8859C90.6012 17.8804 90.8502 17.7837 91.0316 17.5958C91.2131 17.4079 91.3149 17.195 91.3372 16.9571C91.6094 15.6227 89.7958 15.5261 88.9393 15.653C87.8999 15.7617 86.8565 15.7533 85.8151 15.8263C84.8359 15.8434 83.8455 15.8364 82.8825 15.64C82.1288 15.4325 81.1947 14.5876 80.4179 15.0497C80.0522 15.2672 79.8462 15.5611 79.7999 15.9313C79.3694 15.8103 78.941 15.811 78.5148 15.9333C78.3912 15.913 78.2518 15.909 78.0966 15.9215C75.8969 16.07 73.9129 17.0917 71.8342 17.733C70.2195 18.2089 68.5635 18.6477 66.8711 18.6916C66.1169 18.7111 64.9725 18.7408 64.595 18.0177L64.7915 17.9351C65.1672 17.9285 65.4113 18.2924 65.8225 18.0358C67.4291 17.0333 65.4783 15.3806 64.0044 15.9299C63.8284 15.9955 63.6651 16.0752 63.5143 16.1691C63.3593 16.1434 63.2011 16.147 63.0526 16.1841C60.4045 16.8954 58.0313 18.4715 55.3015 18.8924C55.5061 18.5194 55.5924 18.1748 55.5605 17.8587C55.5282 17.5162 55.2456 17.2044 54.7129 16.9234C54.1816 16.7216 53.6526 16.6516 53.1258 16.7136C52.1134 15.7359 49.9345 15.8663 48.6805 16.0391C48.1199 16.1238 47.5937 16.3417 47.0682 16.5444C46.9162 16.5323 46.7702 16.5344 46.6402 16.5497C44.106 16.957 41.7863 18.0972 39.3155 18.736C38.9062 18.8804 38.471 18.8553 38.0526 18.956C38.1687 18.3177 38.3352 17.3408 37.7001 16.9037C37.5127 16.7486 37.2472 16.6609 36.9038 16.6405C36.4887 16.6477 36.0477 16.8953 35.8859 17.2916C35.7242 17.6298 35.7282 18.086 35.9449 18.399C35.732 19.1564 35.5391 20.1339 36.0661 20.8116C36.2022 21.0467 36.4297 21.2275 36.7486 21.3539C37.2526 21.5034 37.793 21.4676 38.3697 21.2464C40.325 20.6138 42.2557 19.8414 44.2386 19.2781C44.2184 19.5827 44.2984 19.8997 44.4784 20.2293C44.7237 20.6737 45.0844 20.9313 45.5607 21.0021C46.7223 21.175 47.8931 20.795 48.9537 20.3491C50.1249 19.875 51.3252 19.4271 52.5758 19.2171C51.6386 21.9932 56.0925 21.0952 57.3501 20.5984C58.5424 20.1274 59.7537 19.7067 60.9278 19.1901C61.4667 18.9353 62.0122 18.7328 62.5645 18.5825C63.1612 19.9844 65.0404 20.8158 66.4658 20.8747C67.0999 20.9165 67.7328 20.8922 68.3646 20.802C71.0921 20.5358 73.7885 19.6036 76.3355 18.6184C76.2856 19.143 76.3827 19.6738 76.7059 20.1022C76.8956 20.3892 77.1893 20.582 77.5869 20.6806C79.4633 21.1151 81.1932 19.2072 81.7291 17.5998C81.8356 17.6507 81.9416 17.6753 82.0471 17.6734C83.3986 17.9929 84.7732 18.1273 86.171 18.0765ZM78.4611 18.6069C78.5389 18.5264 78.6965 18.4841 78.9339 18.4799L78.9277 18.1238C78.7673 18.2898 78.5473 18.3801 78.4611 18.6069ZM48.1037 18.4198L48.098 18.4244C47.9292 18.5494 47.7421 18.6003 47.5478 18.6261C47.7199 18.5449 47.9071 18.4746 48.1094 18.4153L48.1037 18.4198Z"
              fill="#101400"
            />
          </g>
        </svg>
      </div>
    </Section>
  )
}
