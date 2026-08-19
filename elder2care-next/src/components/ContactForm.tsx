"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "We couldn't send your message. Please try again."
        );
      }

      form.reset();

      setStatus("success");
      setMessage("Thank you. Your submission has been received.");
    } catch (error) {
      console.error("Contact form submission error:", error);

      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            disabled={status === "sending"}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            disabled={status === "sending"}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            placeholder="Optional"
            disabled={status === "sending"}
          />
        </label>

        <label>
          Reason for enquiry
          <select
            name="reason"
            defaultValue=""
            disabled={status === "sending"}
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="partnership">Partnership</option>
            <option value="community">Community support</option>
            <option value="volunteer">Volunteer / Care Champion</option>
            <option value="healthcare">Healthcare organization</option>
            <option value="research">Research</option>
            <option value="general">General enquiry</option>
          </select>
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          rows={7}
          placeholder="Tell us how you would like to connect with Elder2Care..."
          required
          disabled={status === "sending"}
        />
      </label>

      <button
        type="submit"
        className="button button-primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="form-note" role="status">
          {message}
        </p>
      )}

      {status === "error" && (
        <p className="form-note" role="alert">
          {message}
        </p>
      )}

      {status === "idle" && (
        <p className="form-note">
          Need assistance? Complete the form and the Elder2Care team will
          respond as soon as possible.
        </p>
      )}
    </form>
  );
}
