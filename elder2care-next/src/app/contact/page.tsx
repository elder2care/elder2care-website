import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Elder2Care",
  description:
    "Connect with Elder2Care to collaborate, partner, volunteer or help build a more connected healthy aging ecosystem across Canada.",
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">

      {/* HERO */}
      <section className="page-hero contact-hero">
        <span className="page-eyebrow">LET&apos;S CONNECT</span>
        <h1>Let&apos;s build healthier aging, together.</h1>
        <p>
          Reach out as an older adult, caregiver, volunteer, healthcare
          provider, business, municipality, researcher or community
          organization. We&apos;d love to hear from you.
        </p>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-layout">

        <div className="contact-info-card">
          <span className="section-number">01</span>

          <span className="section-kicker">GET IN TOUCH</span>

          <h2>
            Help build Canada&apos;s most connected healthy aging ecosystem.
          </h2>

          <p>
            Elder2Care brings together people, organizations and communities
            that believe aging can be healthier, safer and more connected.
          </p>

          <p>
            Whether you are looking to collaborate, partner, volunteer,
            support an older adult or help shape the future of healthy aging,
            there is a place for you in the conversation.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span className="contact-icon">⌖</span>
              <div>
                <strong>Location</strong>
                <span>Brampton, Ontario, Canada</span>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">✉</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:info@elder2care.ca">
                  info@elder2care.ca
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">◎</span>
              <div>
                <strong>Website</strong>
                <span>www.elder2care.ca</span>
              </div>
            </div>

          </div>

          <Link href="/community" className="contact-secondary-link">
            Explore the Elder2Care community →
          </Link>
        </div>

        {/* FORM */}
        <div className="contact-form-card">
          <span className="section-kicker">SEND A MESSAGE</span>
          <h2>How can we connect?</h2>

          <ContactForm />
        </div>

      </section>

      {/* ROADMAP */}
      <section className="contact-roadmap">
        <div className="roadmap-heading">
          <span className="section-number">02</span>
          <span className="section-kicker">FUTURE ROADMAP</span>
          <h2>Where Elder2Care is headed.</h2>
          <p>
            We are building toward a connected healthy-aging ecosystem —
            from proactive community navigation today to predictive
            community intelligence tomorrow.
          </p>
        </div>

        <div className="roadmap-grid">
          <div className="roadmap-item">
            <span>2026</span>
            <h3>Community Navigation</h3>
            <p>
              Proactive support and referrals across Brampton and the GTA.
            </p>
          </div>

          <div className="roadmap-item">
            <span>2027</span>
            <h3>Digital Community Intelligence</h3>
            <p>
              Mapping community resources and the invisible care network.
            </p>
          </div>

          <div className="roadmap-item">
            <span>2028</span>
            <h3>Predictive Community Healthcare</h3>
            <p>
              Anticipating needs before they become crises.
            </p>
          </div>

          <div className="roadmap-item">
            <span>2029</span>
            <h3>Healthy Aging Dashboard</h3>
            <p>
              Shared outcome tracking for families and partners.
            </p>
          </div>

          <div className="roadmap-item">
            <span>2030</span>
            <h3>AI-Powered Community Intelligence</h3>
            <p>
              A connected model ready to scale across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ANTHEM */}
      <section className="anthem-panel contact-anthem">
        <span className="section-number">03</span>
        <span className="section-kicker">THE ELDER2CARE ANTHEM</span>
        <h2>Every act of care strengthens our communities.</h2>
        <p>
          Behind every system, every technology and every community
          initiative are people who care.
        </p>

        <div className="anthem-video">
          <video controls playsInline preload="metadata">
            <source src="/video/anthem.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

    </main>
  );
}
