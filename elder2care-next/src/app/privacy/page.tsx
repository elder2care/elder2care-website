import type { Metadata } from "next";

import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Elder2Care Privacy Policy and learn how information is handled and protected.",
};

export default function PrivacyPage() {
  const filePath = path.join(
    process.cwd(),
    "legal",
    "privacy-policy.txt"
  );

  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">
          ← Back to Elder2Care
        </a>

        <h1>Privacy Policy</h1>

        <div className="legal-content">
          {content.split("\n").map((line, index) => (
            <p key={index}>{line || "\u00A0"}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
