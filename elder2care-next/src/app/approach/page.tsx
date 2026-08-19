import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Discover the Elder2Care approach to healthy aging, combining proactive community navigation, trust, community intelligence and human connection.",
};

export default function ApproachPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">Our Approach</span>
        <h1>Prevention, not just treatment.</h1>
        <p>
          Elder2Care shifts the conversation from responding to problems
          after they happen toward recognizing needs, strengthening
          connections and supporting healthier aging earlier.
        </p>
      </section>

      <section className="comparison-section">
        <div className="comparison-card traditional">
          <span>Traditional healthcare</span>
          <h2>Responding when something goes wrong.</h2>
          <ul>
            <li>Care often begins after a problem becomes visible.</li>
            <li>People navigate fragmented services.</li>
            <li>Community resources can remain disconnected.</li>
            <li>Families may discover support late.</li>
          </ul>
        </div>

        <div className="comparison-card elder">
          <span>Elder2Care</span>
          <h2>Building the conditions for healthier aging.</h2>
          <ul>
            <li>Identify needs and opportunities earlier.</li>
            <li>Connect people with relevant support.</li>
            <li>Make community resources visible.</li>
            <li>Keep the older adult at the center.</li>
          </ul>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-heading">
          <span className="section-kicker">THE ELDER2CARE JOURNEY</span>
          <h2>From reacting to illness, to building thriving communities.</h2>
          <p>
            Every community moves through the same journey — we help move it
            faster, and with fewer crises along the way.
          </p>
        </div>

        <div className="journey-track">
          <div className="journey-step">
            <span>01</span>
            <div>
              <h3>Reactive Healthcare</h3>
              <p>Support begins after a crisis occurs.</p>
            </div>
          </div>

          <div className="journey-step">
            <span>02</span>
            <div>
              <h3>Proactive Community Navigation</h3>
              <p>Elder2Care helps find the right support, early.</p>
            </div>
          </div>

          <div className="journey-step">
            <span>03</span>
            <div>
              <h3>Predictive Healthy Aging</h3>
              <p>Patterns are anticipated before needs arise.</p>
            </div>
          </div>

          <div className="journey-step">
            <span>04</span>
            <div>
              <h3>Community Intelligence</h3>
              <p>Whole communities coordinate around aging well.</p>
            </div>
          </div>

          <div className="journey-step">
            <span>05</span>
            <div>
              <h3>Thriving Communities</h3>
              <p>Independence, connection and dignity for all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-panel">
        <span className="section-number">01</span>
        <h2>Put the older adult at the center.</h2>
        <p>
          Put trust at the foundation. Put intelligence behind the
          community. Put human connection at the heart of healthy aging.
        </p>
      </section>

      <section className="content-section">
        <h2>How the ecosystem works</h2>
        <div className="feature-grid">
          <div><span>01</span><h3>Discover</h3><p>Understand needs, goals and opportunities earlier.</p></div>
          <div><span>02</span><h3>Connect</h3><p>Bring people and appropriate resources together.</p></div>
          <div><span>03</span><h3>Support</h3><p>Strengthen the people and communities surrounding older adults.</p></div>
          <div><span>04</span><h3>Measure</h3><p>Build toward meaningful, measurable community impact.</p></div>
        </div>
      </section>

      <section className="page-cta">
        <h2>See the infrastructure behind the approach.</h2>
        <Link href="/platform" className="button button-primary">
          Explore the platform
        </Link>
      </section>
    </main>
  );
}
