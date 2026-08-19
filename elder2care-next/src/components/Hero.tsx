import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            A new approach to healthy aging
          </div>

          <h1>
            Healthy aging starts{" "}
            <em>before</em> healthcare.
          </h1>

          <p className="hero-lead">
            Elder2Care connects older adults, families, caregivers,
            communities and care systems so that support can begin earlier,
            before everyday challenges become crises.
          </p>

          <div className="hero-actions">
            <a href="#approach" className="button button-primary">
              Discover Elder2Care
            </a>

            <a href="#contact" className="button button-secondary">
              Build with us
            </a>
          </div>

          <div className="hero-trust">
            <span>Prevention</span>
            <i />
            <span>Connection</span>
            <i />
            <span>Community</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              src="/images/hero-caregiver.jpg"
              alt="An older woman and a younger caregiver sharing a warm moment outdoors"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 48vw"
              className="hero-image"
            />
          </div>

          <div className="hero-floating-card">
            <span className="floating-label">The Elder2Care vision</span>
            <strong>
              Put the older adult at the center.
            </strong>
            <span className="floating-line" />
            <small>
              Put trust at the foundation. Put human connection at the heart
              of healthy aging.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
