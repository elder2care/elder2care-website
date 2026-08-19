import type { Metadata } from "next";

import Link from "next/link";

const audiences = [
  {
    icon: "◐",
    title: "Older Adults",
    text: "Direct navigation to the right support, at the right time.",
  },
  {
    icon: "♥",
    title: "Family Caregivers",
    text: "Guidance and relief for those coordinating day-to-day care.",
  },
  {
    icon: "✦",
    title: "Adult Children",
    text: "Peace of mind when caring for aging parents from afar.",
  },
  {
    icon: "✚",
    title: "Healthcare Providers",
    text: "A trusted community navigation partner for patients.",
  },
  {
    icon: "▣",
    title: "Hospitals",
    text: "Safer transitions from clinical to community care.",
  },
  {
    icon: "◈",
    title: "Municipalities",
    text: "Data and infrastructure for age-friendly communities.",
  },
  {
    icon: "◎",
    title: "Community Organizations",
    text: "Better visibility, referrals and reach.",
  },
  {
    icon: "☼",
    title: "Faith Communities",
    text: "Extending congregational care into structured support.",
  },
  {
    icon: "✈",
    title: "Volunteers",
    text: "Meaningful, matched opportunities to give time.",
  },
  {
    icon: "◇",
    title: "Businesses",
    text: "Partnership opportunities in the healthy aging economy.",
  },
  {
    icon: "◍",
    title: "Researchers",
    text: "Real-world community intelligence and insight.",
  },
  {
    icon: "✺",
    title: "Healthy Aging Innovators",
    text: "A platform to pilot and scale new ideas.",
  },
];

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Elder2Care connects older adults, caregivers, healthcare providers, community organizations, municipalities and partners with the support they need.",
};

export default function ServePage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">Who We Serve</span>
        <h1>One ecosystem, built for everyone around the older adult.</h1>
        <p>
          Elder2Care is designed to serve the full network of people and
          institutions who shape healthy aging.
        </p>
      </section>

      <section className="serve-intro">
        <div>
          <span className="section-kicker">ONE CONNECTED NETWORK</span>
          <h2>
            Healthy aging is a community effort.
          </h2>
        </div>

        <div>
          <p>
            An older adult does not experience aging through one organization
            or one healthcare appointment. Their experience is shaped by
            family, neighbours, healthcare providers, community organizations,
            municipalities, businesses and many others.
          </p>

          <p>
            Elder2Care connects these parts of the ecosystem so that support
            can become easier to discover, easier to coordinate and more
            responsive to the needs of the people they serve.
          </p>
        </div>
      </section>

      <section className="audience-section">
        <div className="audience-grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <span className="audience-icon">{audience.icon}</span>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="serve-principle">
        <span className="section-kicker">THE ELDER2CARE PRINCIPLE</span>
        <h2>
          Put the older adult at the center. Connect everyone around them.
        </h2>
        <p>
          The goal is not simply to create another service directory. It is
          to build a connected ecosystem where people, resources and
          intelligence can work together to support healthier aging.
        </p>
      </section>

      <section className="page-cta">
        <h2>Help build a more connected healthy aging ecosystem.</h2>
        <Link href="/contact" className="button button-primary">
          Build with us
        </Link>
      </section>
    </main>
  );
}
