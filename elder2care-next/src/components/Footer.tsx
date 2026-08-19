"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to subscribe.");
      }

      setStatus("success");
      setMessage("You're subscribed. Thank you!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now. Please try again."
      );
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <strong>Elder2Care</strong>
          </div>

          <p className="footer-tagline">
            Guiding Seniors. Connecting Care. Enriching Lives.
          </p>

          <p className="footer-mission">
            Helping communities help older adults live healthier, safer,
            happier and more independent lives.
          </p>

          <div className="footer-social" aria-label="Elder2Care social media">
            <a
              href="https://www.facebook.com/Elder2Care"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/elder2care"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5ZM3 9h4v12H3V9Zm6 0h3.84v1.64h.05C13.43 9.69 14.62 8.5 16.87 8.5 20.47 8.5 21 10.87 21 13.95V21h-4v-6.25c0-1.49-.03-3.4-2.07-3.4-2.07 0-2.39 1.61-2.39 3.29V21H9V9Z" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/elder2care"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@elder2care"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 12s0-3.6-.46-5.32a2.96 2.96 0 0 0-2.08-2.08C18.74 4.14 12 4.14 12 4.14s-6.74 0-8.46.46A2.96 2.96 0 0 0 1.46 6.68C1 8.4 1 12 1 12s0 3.6.46 5.32a2.96 2.96 0 0 0 2.08 2.08c1.72.46 8.46.46 8.46.46s6.74 0 8.46-.46a2.96 2.96 0 0 0 2.08-2.08C23 15.6 23 12 23 12Z" fill="currentColor" />
                <path d="m10 8.5 6 3.5-6 3.5v-7Z" fill="#183038" />
              </svg>
            </a>

            <a
              href="https://bsky.app/profile/elder2care.bsky.social"
              aria-label="Bluesky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 10.8C10.9 8.7 8.01 4.56 5.3 2.58 2.7.68 1.7 1.01 1.05 1.3.3 1.64.14 2.77.14 3.43c0 .66.36 5.43.6 6.4.8 3.2 3.62 4.28 6.54 3.92-5.23.8-9.87 2.77-3.8 9.78 6.68 7.02 8.5-1.5 8.52-1.9.02.4 1.84 8.92 8.52 1.9 6.07-7.01 1.43-8.98-3.8-9.78 2.92.36 5.74-.72 6.54-3.92.24-.97.6-5.74.6-6.4 0-.66-.16-1.79-.91-2.13-.65-.29-1.65-.62-4.25 1.28C15.99 4.56 13.1 8.7 12 10.8Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">About</Link>
          <Link href="/approach">Our Approach</Link>
          <Link href="/serve">Who We Serve</Link>
          <Link href="/platform">Community Intelligence</Link>
          <Link href="/community">Care Championship</Link>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <Link href="/community#stories">Stories</Link>
          <Link href="/contact">Partners</Link>
          <Link href="/contact">Let&apos;s Connect</Link>
          <a href="mailto:info@elder2care.ca">info@elder2care.ca</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        <div className="footer-column footer-newsletter">
          <h3>Stay Informed</h3>
          <p>
            Get healthy aging insights and community updates.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              aria-label="Email for newsletter"
              required
              disabled={status === "loading"}
            />

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Joining..." : "Sign Up"}
            </button>
          </form>

          {message && (
            <p
              className={`newsletter-message newsletter-${status}`}
              role="status"
            >
              {message}
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Elder2Care. All rights reserved.
        </span>
        <span>Bramp­ton, Ontario, Canada.</span>
      </div>
    </footer>
  );
}
