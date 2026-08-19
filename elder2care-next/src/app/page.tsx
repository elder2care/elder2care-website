import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

const journey = [
  {
    number: "01",
    title: "Reactive Healthcare",
    text: "Support often begins after a problem becomes visible or a crisis has already occurred.",
  },
  {
    number: "02",
    title: "Proactive Community Navigation",
    text: "Identify needs earlier and connect older adults and caregivers with relevant support.",
  },
  {
    number: "03",
    title: "Predictive Healthy Aging",
    text: "Recognize patterns and emerging needs before they become larger challenges.",
  },
  {
    number: "04",
    title: "Community Intelligence",
    text: "Bring together community knowledge, relationships and resources so communities can respond intelligently.",
  },
  {
    number: "05",
    title: "Thriving Communities",
    text: "Build toward greater independence, connection, dignity and healthier aging.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Navigate",
    text: "Help older adults and caregivers discover the right support, programs and resources.",
  },
  {
    number: "02",
    title: "Connect",
    text: "Bring people, organizations, services and community resources together around real needs.",
  },
  {
    number: "03",
    title: "Understand",
    text: "Turn community knowledge and emerging signals into insight that can strengthen healthy aging.",
  },
];

const roadmap = [
  {
    year: "2026",
    title: "Community Navigation",
    text: "Proactive support and referrals across Brampton and the GTA.",
  },
  {
    year: "2027",
    title: "Digital Community Intelligence",
    text: "Mapping community resources and strengthening the invisible care network.",
  },
  {
    year: "2028",
    title: "Predictive Community Healthcare",
    text: "Moving toward earlier recognition of needs before they become crises.",
  },
  {
    year: "2029",
    title: "Healthy Aging Dashboard",
    text: "Shared outcome tracking for families and community partners.",
  },
  {
    year: "2030",
    title: "AI-Powered Community Intelligence Network",
    text: "A connected model designed to scale healthy aging intelligence across Canada.",
  },
];

export default function Home() {
  return (
    <>
      <main className="homepage">

        {/* HERO — existing Elder2Care Hero remains unchanged */}
        <Hero />

        {/* =====================================================
            WHAT IS ELDER2CARE?
            ===================================================== */}
        <section className="home-intro">
          <div className="home-section-inner home-intro-grid">
            <div>
              <span className="home-kicker">WHAT IS ELDER2CARE?</span>
              <h2>A healthier way to navigate aging.</h2>
            </div>

            <div className="home-intro-copy">
              <p className="home-lead">
                Elder2Care is a Healthy Aging Community Navigation and
                Community Intelligence platform connecting older adults,
                families, caregivers, healthcare providers and community
                resources.
              </p>

              <p>
                We help people discover the right support earlier while
                building the infrastructure communities need to understand,
                connect and strengthen the networks surrounding older adults.
              </p>

              <p className="home-emphasis">
                Healthy aging starts before healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            THE ELDER2CARE JOURNEY
            ===================================================== */}
        <section className="home-journey">
          <div className="home-section-inner">
            <div className="home-section-heading">
              <div>
                <span className="home-kicker">THE ELDER2CARE JOURNEY</span>
                <h2>From reacting to illness to building thriving communities.</h2>
              </div>

              <p>
                Every community moves through this journey. Elder2Care is
                designed to help move it toward earlier support, stronger
                connections and healthier aging.
              </p>
            </div>

            <div className="home-journey-track">
              {journey.map((step) => (
                <article className="home-journey-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
            ===================================================== */}
        <section className="home-how">
          <div className="home-section-inner">
            <div className="home-section-heading">
              <div>
                <span className="home-kicker">HOW IT WORKS</span>
                <h2>Simple for people. Intelligent behind the scenes.</h2>
              </div>

              <p>
                Elder2Care brings together human relationships, community
                resources and intelligent technology without replacing the
                people who provide care.
              </p>
            </div>

            <div className="home-how-grid">
              {howItWorks.map((item) => (
                <article className="home-how-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            THE ECOSYSTEM
            ===================================================== */}
        <section className="home-visual-section home-ecosystem">
          <div className="home-section-inner">

            <div className="home-section-heading home-ecosystem-heading">
              <div>
                <span className="home-kicker">THE ELDER2CARE ECOSYSTEM</span>
                <h2>Put the older adult at the center.</h2>
              </div>

              <p>
                Healthy aging does not happen inside one institution. It is
                shaped by the people, organizations, services and places
                surrounding an older adult every day.
              </p>
            </div>

            <div className="home-ecosystem-feature">
              <div className="home-ecosystem-image">
                <Image
                  src="/images/homepage/the-ecosystem.png"
                  alt="The Elder2Care ecosystem surrounding an older adult"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 900px) 100vw, 70vw"
                />
              </div>

              <div className="home-ecosystem-principles">

                <article className="home-ecosystem-principle home-trust-principle">
                  <span className="home-principle-number">01</span>
                  <div>
                    <strong>TRUST AT THE FOUNDATION</strong>
                    <p>
                      Every connection begins with trust, dignity, safety
                      and respect.
                    </p>
                  </div>
                </article>

                <article className="home-ecosystem-principle">
                  <span className="home-principle-number">02</span>
                  <div>
                    <strong>INTELLIGENCE BEHIND THE COMMUNITY</strong>
                    <p>
                      Data, technology and community intelligence help
                      recognize needs, connect resources and act earlier.
                    </p>
                  </div>
                </article>

                <article className="home-ecosystem-principle">
                  <span className="home-principle-number">03</span>
                  <div>
                    <strong>HUMAN CONNECTION AT THE HEART</strong>
                    <p>
                      Technology strengthens relationships; it does not
                      replace them.
                    </p>
                  </div>
                </article>

              </div>
            </div>

            <div className="home-ecosystem-statement">
              <span>THE ELDER2CARE PRINCIPLE</span>
              <p>
                Put the older adult at the center. Put trust at the
                foundation. Put intelligence behind the community. Put
                human connection at the heart of healthy aging.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            INVISIBLE CARE NETWORK
            ===================================================== */}
        <section className="home-visual-section home-visual-dark">
          <div className="home-visual-inner reverse">
            <div className="home-visual-copy">
              <span className="home-kicker">INVISIBLE CARE NETWORK</span>
              <h2>Make the care that already exists visible.</h2>

              <p>
                Neighbours, volunteers, family members, friends and community
                members already provide countless acts of support that may
                never appear in a formal healthcare system.
              </p>

              <p>
                Elder2Care aims to make these relationships more visible,
                coordinated and useful — strengthening the human network
                around older adults.
              </p>
            </div>

            <div className="home-visual-image">
              <Image
                src="/images/homepage/invisible-care-network.png"
                alt="Invisible care network connecting people around an older adult"
                width={1600}
                height={1000}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY INTELLIGENCE PLATFORM
            ===================================================== */}
        <section className="home-visual-section">
          <div className="home-visual-inner">
            <div className="home-visual-copy">
              <span className="home-kicker">COMMUNITY INTELLIGENCE PLATFORM™</span>
              <h2>The infrastructure behind proactive care.</h2>

              <p>
                Elder2Care is developing an interconnected platform that
                turns community knowledge into timely, human action.
              </p>

              <div className="home-module-list">
                <span>Community Digital Twin</span>
                <span>Neighborhood Health Pulse</span>
                <span>Invisible Care Network</span>
                <span>Community Navigation Engine</span>
                <span>Healthy Aging Dashboard</span>
              </div>

              <Link href="/platform" className="button button-primary">
                Explore Community Intelligence
              </Link>
            </div>

            <div className="home-visual-image">
              <Image
                src="/images/homepage/community-intelligence-platform.png"
                alt="Elder2Care Community Intelligence Platform"
                width={1600}
                height={1000}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            CARE CHAMPIONSHIP
            ===================================================== */}
        <section className="home-visual-section home-champion">
          <div className="home-visual-inner reverse">
            <div className="home-visual-copy">
              <span className="home-kicker">CARE CHAMPIONSHIP</span>
              <h2>Every act of care matters.</h2>

              <p>
                A healthier aging community is built through thousands of
                ordinary acts: a conversation, a walk, a shared meal, a visit,
                or helping someone stay connected.
              </p>

              <p>
                Anyone can become a Care Champion by sharing one meaningful
                act of care with an older adult.
              </p>

              <Link href="/community" className="button button-primary">
                Become a Care Champion
              </Link>
            </div>

            <div className="home-visual-image">
              <Image
                src="/images/homepage/care-champion.png"
                alt="Elder2Care Care Champion sharing an act of care"
                width={1600}
                height={1000}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            ROADMAP
            ===================================================== */}
        <section className="home-roadmap">
          <div className="home-section-inner">
            <div className="home-section-heading">
              <div>
                <span className="home-kicker">WHERE ELDER2CARE IS GOING</span>
                <h2>Building toward community intelligence at scale.</h2>
              </div>

              <p>
                Our strategy moves from proactive navigation toward a
                connected model where community knowledge, human relationships
                and intelligent technology can work together.
              </p>
            </div>

            <div className="home-roadmap-track">
              {roadmap.map((item) => (
                <article className="home-roadmap-card" key={item.year}>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CALL TO ACTION
            ===================================================== */}
        <section className="home-final-cta">
          <div className="home-final-cta-inner">
            <span className="home-kicker">JOIN THE MOVEMENT</span>
            <h2>Let&apos;s build healthier aging, together.</h2>
            <p>
              Whether you are an older adult, caregiver, healthcare provider,
              volunteer, community organization, municipality, business or
              researcher, there is a role for you in the Elder2Care ecosystem.
            </p>

            <div className="home-final-actions">
              <Link href="/contact" className="button button-primary">
                Let&apos;s Connect
              </Link>

              <Link href="/serve" className="button button-secondary">
                Who We Serve
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
