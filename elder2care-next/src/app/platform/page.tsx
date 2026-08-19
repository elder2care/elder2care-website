import type { Metadata } from "next";

import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "Community Digital Twin",
    text: "A living map of the services, people and resources available to older adults — helping communities understand what exists, where it is, and how it connects.",
  },
  {
    number: "02",
    title: "Neighborhood Health Pulse",
    text: "A privacy-respecting view of emerging community needs, helping partners understand where support and resources may be needed most.",
  },
  {
    number: "03",
    title: "Invisible Care Network",
    text: "The informal network of family members, neighbours, volunteers and community members already supporting older adults — made more visible and connected.",
  },
  {
    number: "04",
    title: "Community Navigation Engine",
    text: "A matching layer designed to connect a need with the right service, program, resource or person — reducing the time spent searching for help.",
  },
  {
    number: "05",
    title: "Healthy Aging Dashboard",
    text: "A shared view for families, providers and community partners to understand progress, connections and outcomes over time.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Data infrastructure",
    text: "Connecting the information needed to understand the healthy-aging ecosystem.",
  },
  {
    number: "02",
    title: "Development",
    text: "Turning the architecture into practical, technology-enabled services.",
  },
  {
    number: "03",
    title: "Testing",
    text: "Learning directly from older adults, caregivers and communities.",
  },
  {
    number: "04",
    title: "Partnerships",
    text: "Connecting organizations, services and community resources around real needs.",
  },
  {
    number: "05",
    title: "Measurement",
    text: "Building toward measurable outcomes for people, communities and population health.",
  },
];

const futureConcepts = [
  "Community Digital Twin",
  "Neighborhood Health Pulse",
  "Invisible Care Network",
  "Aging GPS",
  "Independence Index",
  "Community Immunity Against Loneliness",
  "Compassion Infrastructure",
  "Healthy Aging Operating System",
  "Human Connectivity Engine",
  "Community Prescriptions",
  "15-Minute Aging Community",
  "Age-Friendly Intelligence Network",
];

export const metadata: Metadata = {
  title: "Community Intelligence Platform",
  description:
    "Explore the Elder2Care Community Intelligence Platform, including community mapping, the invisible care network, community navigation and healthy aging intelligence.",
};

export default function PlatformPage() {
  return (
    <main className="inner-page platform-page">

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="page-hero">
        <span className="page-eyebrow">Community Intelligence</span>

        <h1>Intelligence behind the community.</h1>

        <p>
          Elder2Care is building technology that makes the people, resources,
          relationships and signals surrounding older adults more visible,
          connected and actionable.
        </p>
      </section>

      {/* =====================================================
          WHY IT MATTERS
          ===================================================== */}
      <section className="content-section platform-intro">
        <div className="content-grid">
          <div>
            <span className="section-number">01</span>
            <h2>The infrastructure behind proactive care.</h2>
          </div>

          <div>
            <p>
              Healthy aging depends on more than healthcare. It depends on
              whether people can discover support, whether organizations can
              connect around real needs, and whether communities understand
              the resources already surrounding them.
            </p>

            <p>
              Community Intelligence brings these elements together so that
              earlier knowledge can lead to earlier, more human action.
            </p>

            <p className="platform-principle">
              The goal is not to replace human care. It is to help people find
              the right human and community connections sooner.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIVE CORE MODULES
          ===================================================== */}
      <section className="platform-modules">
        <div className="platform-modules-heading">
          <span className="section-number">02</span>
          <span className="section-kicker">
            COMMUNITY INTELLIGENCE PLATFORM™
          </span>

          <h2>Five connected capabilities.</h2>

          <p>
            Together, these components create the infrastructure for a more
            connected, proactive approach to healthy aging.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <article
              className={`module-card ${
                module.number === "01" ? "module-featured" : ""
              }`}
              key={module.number}
            >
              <span className="module-number">{module.number}</span>

              <h3>{module.title}</h3>

              <p>{module.text}</p>

              <span className="module-plus">+</span>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          TRUST + HUMAN CONNECTION
          ===================================================== */}
      <section className="dark-panel platform-foundation">
        <span className="section-number">03</span>

        <h2>
          Technology with <strong>trust</strong> at its foundation.
        </h2>

        <p>
          Community intelligence only works when people trust the system,
          understand how it serves them and remain at the center of decisions.
        </p>

        <div className="platform-values">
          <div>
            <span>01</span>
            <strong>Older adult at the center</strong>
            <p>
              Technology should begin with the person, their goals,
              independence and dignity.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Trust at the foundation</strong>
            <p>
              Privacy, transparency and responsible use of information are
              essential to meaningful community intelligence.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Intelligence behind the community</strong>
            <p>
              Technology should strengthen the ability of communities to
              understand needs and respond earlier.
            </p>
          </div>

          <div>
            <span>04</span>
            <strong>Human connection at the heart</strong>
            <p>
              The purpose of intelligence is stronger relationships — not
              replacing the people who provide care.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE BUILD IT
          ===================================================== */}
      <section className="content-section platform-build">
        <div className="content-grid">
          <div>
            <span className="section-number">04</span>
            <h2>From architecture to measurable impact.</h2>
          </div>

          <div>
            <p>
              Community Intelligence is not only a technology project. It is
              an ongoing process of building, testing, learning and measuring
              with the people and communities it is intended to serve.
            </p>
          </div>
        </div>

        <div className="feature-grid platform-grid">
          {buildSteps.map((step) => (
            <div key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FUTURE INTELLIGENCE
          ===================================================== */}
      <section className="innovation-section">
        <div className="innovation-heading">
          <span className="section-number">05</span>
          <span className="section-kicker">FUTURE INTELLIGENCE</span>

          <h2>Ideas shaping what comes next.</h2>

          <p>
            As Community Intelligence evolves, Elder2Care is exploring
            additional concepts that could strengthen independence,
            connection, navigation and community resilience. These represent
            areas for research, experimentation and future development — not
            products currently available.
          </p>
        </div>

        <div className="innovation-grid">
          {futureConcepts.map((concept) => (
            <div key={concept}>{concept}</div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="page-cta">
        <h2>Help build the intelligence behind healthier aging.</h2>

        <p>
          Elder2Care is bringing people, organizations and communities
          together to build a more connected future for healthy aging.
        </p>

        <Link href="/contact" className="button button-primary">
          Age Better
        </Link>
      </section>
    </main>
  );
}
