import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Elder2Care",
  description:
    "Learn how Elder2Care is building a more connected approach to healthy aging through Community Navigation and Community Intelligence.",
};

export default function AboutPage() {
  return (
    <>

      <main className="inner-page">
        <section className="page-hero">
          <span className="section-kicker">ABOUT ELDER2CARE</span>
          <h1>A new category in healthy aging.</h1>
          <p>
            Elder2Care is building a more connected way for older adults,
            families, caregivers, communities and care systems to support
            healthy aging.
          </p>
        </section>

        <section className="about-vision">
          <div className="about-vision-card current">
            <span className="section-kicker">TODAY</span>
            <h2>Proactive community navigation.</h2>
            <p>
              Elder2Care is a Canadian Healthy Aging Community Navigation and
              Community Intelligence platform. Today, we help older adults
              and caregivers discover the right community support before
              problems become crises.
            </p>
          </div>

          <div className="about-vision-card future">
            <span className="section-kicker">LONG-TERM VISION</span>
            <h2>Predictive Community Intelligence.</h2>
            <p>
              Our long-term vision is to become the world's first AI-powered
              Predictive Community Intelligence Platform for Healthy Aging —
              enabling communities to anticipate needs, strengthen
              independence, reduce isolation and improve healthy aging,
              rather than waiting for illness.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Healthy aging starts before healthcare.</h2>
          <p>
            Aging well is shaped by much more than medical care. It is shaped
            by connection, independence, safety, belonging, access to
            resources and the people who surround an older adult every day.
          </p>
          <p>
            Elder2Care brings these pieces together so support can begin
            earlier — before everyday challenges become crises.
          </p>
        </section>

        <section className="ecosystem-section">
          <div className="ecosystem-heading">
            <span className="section-kicker">THE ECOSYSTEM</span>
            <h2>Everyone has a role to play in healthy aging.</h2>
            <p>
              Elder2Care brings together the people, organizations and
              institutions that surround the older adult.
            </p>
          </div>

          <div className="ecosystem-grid">
            <span>Older Adults</span>
            <span>Families</span>
            <span>Caregivers</span>
            <span>Volunteers</span>
            <span>Healthcare Providers</span>
            <span>Municipalities</span>
            <span>Businesses</span>
            <span>Community Organizations</span>
            <span>Researchers</span>
            <span>Faith Communities</span>
          </div>
        </section>

        <section className="not-home-care">
          <span className="section-kicker">IMPORTANT DISTINCTION</span>
          <h2>We are not a home care agency.</h2>
          <p>
            Elder2Care is a community navigation and intelligence platform.
            Our role is to help people discover, connect with and coordinate
            the resources and relationships that can support healthier aging.
          </p>
        </section>

        <section className="content-section split-section">
          <div>
            <span className="section-kicker">OUR PURPOSE</span>
            <h2>Connecting the people and places that make aging healthier.</h2>
          </div>
          <div>
            <p>
              Families should not have to navigate an increasingly complex
              aging system alone.
            </p>
            <p>
              Communities already contain many of the resources older adults
              need. Elder2Care helps make those resources more visible,
              connected and actionable.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
