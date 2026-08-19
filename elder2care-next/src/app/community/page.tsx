import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";

const careActs = [
  "Watching a match together",
  "Sharing a meal",
  "Going for a walk",
  "Reading together",
  "Teaching technology",
  "Visiting a neighbour",
  "Listening to music",
  "Helping with groceries",
];

const stories = [
  [
    "maria-j.jpg",
    "Maria J.",
    "Care Champion",
    "We share a pot of tea and the crossword every Thursday. Small, but it's the highlight of both our weeks.",
  ],
  [
    "raj-s.jpg",
    "Raj S.",
    "Care Champion",
    "I taught my neighbour to video call her grandkids overseas. Now she does it every Sunday, on her own.",
  ],
  [
    "aisha-t.jpg",
    "Aisha T.",
    "Care Champion",
    "A walk around the block, twice a week. It's become the thing we both look forward to most.",
  ],
  [
    "ellen-l.jpg",
    "Ellen L.",
    "Care Champion",
    "We watched every World Cup match together. He still talks about that summer.",
  ],
];

export const metadata: Metadata = {
  title: "Care Championship",
  description:
    "Discover how everyday acts of connection and care can strengthen communities and help older adults live with greater independence, dignity and belonging.",
};

export default function CommunityPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <span className="page-eyebrow">Community</span>
        <h1>Every act of care matters.</h1>
        <p>
          Healthy aging is created through thousands of everyday connections
          between neighbours, families, volunteers, organizations and older
          adults.
        </p>
      </section>

      {/* CARE CHAMPIONSHIP */}
      <section className="championship-hero">
        <div className="championship-copy">
          <span className="section-kicker">CARE CHAMPIONSHIP</span>
          <h2>Care is something we can all give.</h2>
          <p>
            Anyone can become a Care Champion by sharing one meaningful act
            of care with an older adult. Visitors who share an act of care
            during our launch campaign become Founder Care Champions.
          </p>

          <Link href="/contact" className="button button-primary">
            Become a Founder Care Champion
          </Link>
        </div>

        <div className="championship-statement">
          <span>01</span>
          <strong>
            Small acts of care can become part of a much larger community
            network.
          </strong>
        </div>
      </section>

      <section className="care-acts-section">
        <div className="section-heading">
          <span className="section-kicker">EVERYDAY CARE</span>
          <h2>What does an act of care look like?</h2>
          <p>
            It doesn't have to be complicated. Sometimes the most meaningful
            support is simply showing up.
          </p>
        </div>

        <div className="care-acts-grid">
          {careActs.map((act, index) => (
            <div className="care-act-card" key={act}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{act}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* STORIES */}
      <section className="stories-section" id="stories">
        <div className="section-heading">
          <span className="section-kicker">STORIES</span>
          <h2>Voices from the Elder2Care community.</h2>
          <p>
            Real connection often begins with something very ordinary:
            spending time together, listening, walking, sharing or helping.
          </p>
        </div>

        <div className="story-grid">
          {stories.map(([image, name, role, quote]) => (
            <article className="story-card" key={name}>
              <Image
                src={`/images/${image}`}
                alt={`Portrait of ${name}`}
                width={110}
                height={110}
              />

              <p>&ldquo;{quote}&rdquo;</p>

              <strong>{name}</strong>
              <span>{role}</span>
            </article>
          ))}
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="impact-section">
        <div>
          <span className="section-kicker">COMMUNITY IMPACT</span>
          <h2>Building toward measurable community impact.</h2>
        </div>

        <div>
          <p>
            Our ambition is to understand not only whether people are
            connected, but whether those connections help communities
            support healthier aging.
          </p>

          <p>
            As Elder2Care grows, this section can connect to real community
            data, programs, referrals, outcomes and Care Champion activity.
          </p>
        </div>
      </section>

      <section className="page-cta">
        <h2>Your community can be part of the care network.</h2>
        <Link href="/contact" className="button button-primary">
          Build with Elder2Care
        </Link>
      </section>
    </main>
  );
}
