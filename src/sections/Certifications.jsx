
import {
  Award,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const certifications = [
  {
    title: "AI Search Optimization",
    issuer: "SURFER SEO",
    year: 2026,
    credential: "https://credsverse.com/credentials/d40e2545-b20a-4a2e-bd00-cebc6ac9b1d3?preview=1",
  },
  {
    title: "AI-Powered Performance Ads Certification",
    issuer: "Google",
    year: 2026,
    credential: "https://skillshop.credential.net/4a1f673a-d6a6-4da1-bda8-4d595389821e",
  },
  {
    title: "Conversion Optimization Certification",
    issuer: "Google",
    year: 2026,
    credential: "https://skillshop.credential.net/5b7c911c-176f-4f1a-b0ad-f3f0fce231b2#acc.SgdixqVc",
  },
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    year: 2026,
    credential: "https://skillshop.credential.net/86025c2e-f8a0-41e9-9add-9304872dc605",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    year: 2026,
    credential: "https://skillshop.credential.net/b0634c8b-e7b6-4d1c-a4c7-c2d31f9024e2#acc.r3NJjRvY",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    year: 2026,
    credential: "https://learn.microsoft.com/api/credentials/share/en-us/Javierurbina-7534/452BB4AEE60274A2?sharingId=ECEBB9E26AD1A138",
  },
  {
    title: "Certified Cloud Professional",
    issuer: "Arcitura Education",
    year: 2021,
    credential: "https://www.credly.com/badges/c280406c-0b9f-44a6-9fcd-073a2e334ea9?source=linked_in_profile",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    year: 2020,
    credential: "https://www.credly.com/badges/a017a813-c28b-4efd-bf44-9d7ecfd834ce?source=linked_in_profile",
  },
  {
    title: "Power BI",
    issuer: "Microsoft",
    year: 2020,
    credential: "https://www.credly.com/badges/a32e74d6-4bea-4f35-8124-e7dcf8ffc4dd/linked_in_profile",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          w-[800px] h-[800px]
          bg-primary/5
          rounded-full blur-3xl
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="
              text-secondary-foreground
              text-sm font-medium
              tracking-wider uppercase
              animate-fade-in
            "
          >
            Certifications
          </span>

          <h2
            className="
              text-4xl md:text-5xl
              font-bold mt-4 mb-6
              animate-fade-in
              animation-delay-100
              text-secondary-foreground
            "
          >
            Continuous learning,{" "}
            <span
              className="
                font-serif italic
                font-normal text-white
              "
            >
              proven expertise.
            </span>
          </h2>

          <p
            className="
              text-muted-foreground
              animate-fade-in
              animation-delay-200
            "
          >
            Professional certifications across SEO, digital marketing,
            analytics, web development, and user experience.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
        >
          {certifications.map((certification, idx) => (
            <div
              key={idx}
              className="
                group
                glass
                relative
                rounded-2xl
                p-6
                overflow-hidden
                glow-border
                animate-fade-in
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                animationDelay: `${(idx + 1) * 70}ms`,
              }}
            >
              {/* Decorative Glow */}
              <div
                className="
                  absolute -top-20 -right-20
                  w-40 h-40
                  bg-primary/10
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                "
              />

              {/* Top */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-primary/10
                    border border-primary/20
                    flex items-center justify-center
                    group-hover:bg-primary
                    transition-all duration-300
                  "
                >
                  <Award
                    className="
                      w-6 h-6
                      text-primary
                      group-hover:text-primary-foreground
                      transition-colors
                    "
                  />
                </div>

                <div
                  className="
                    flex items-center gap-1.5
                    text-xs
                    text-muted-foreground
                  "
                >
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  Verified
                </div>
              </div>

              {/* Certification Information */}
              <div className="relative z-10">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    text-primary
                    font-medium
                    mb-2
                  "
                >
                  {certification.issuer}
                </p>

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-secondary-foreground
                    leading-snug
                    min-h-14
                    group-hover:text-primary
                    transition-colors
                    duration-300
                  "
                >
                  {certification.title}
                </h3>

                <div
                  className="
                    mt-6 pt-5
                    border-t border-border/50
                    flex items-center
                    justify-between
                    gap-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className="
                        w-4 h-4
                        text-muted-foreground
                      "
                    />

                    <span className="text-sm text-muted-foreground">
                      {certification.year}
                    </span>
                  </div>

                  <a
                    href={certification.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certification.title} credential`}
                    className="
                      flex items-center gap-1.5
                      text-sm
                      text-muted-foreground
                      hover:text-primary
                      transition-colors
                    "
                  >
                    Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};