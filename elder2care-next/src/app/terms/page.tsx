import type { Metadata } from "next";

import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Elder2Care Terms of Service governing use of the Elder2Care website and services.",
};

export default function TermsPage() {
  const filePath = path.join(
    process.cwd(),
    "legal",
    "terms-of-service.txt"
  );

  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="legal-page">
      <div className="legal-container">
        <a href="/" className="legal-back">
          ← Back to Elder2Care
        </a>

        <h1>Terms of Service</h1>

        <div className="legal-content">
          {content.split("\n").map((line, index) => (
            <p key={index}>{line || "\u00A0"}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
