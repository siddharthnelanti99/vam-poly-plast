import { ArrowLeft } from "lucide-react";
import type { PageType } from "../App";

interface CareersPageProps {
  onNavigate: (page: PageType) => void;
}

// Exact content from www.vampoly.com/careers.php
const careerSections = [
  {
    heading: "Careers at Vam Poly Plast - PU Industry Jobs in India",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          Welcome to Careers at <strong>Vam Poly Plast</strong> where innovation
          meets opportunity. As a leading name in the polyurethane sector, Vam
          Poly Plast offers rewarding jobs in polyurethane manufacturing,
          research, and product development.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          If you are passionate about creating durable, efficient, and
          high-performance polyurethane products, your career journey begins
          here. We believe in empowering talent, encouraging innovation, and
          building a sustainable future through expertise in specialty urethanes
          and advanced polyurethane technologies.
        </p>
      </>
    ),
  },
  {
    heading: "Why Choose a Career with Vam Poly Plast",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          At <strong>Vam Poly Plast</strong>, we don't just manufacture
          polyurethane — we shape industries. Our commitment to quality and
          innovation makes us one of India's most trusted polyurethane
          producers. Joining Careers at Vam Poly Plast means becoming part of a
          team that drives meaningful change in the PU industry.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          We offer diverse PU industry jobs in India across multiple departments
          including:
        </p>
        <ul className="mt-3 space-y-1 font-body text-base text-foreground">
          <li>• Polyurethane manufacturing and process engineering</li>
          <li>• Product design and development.</li>
          <li>• Quality control and testing.</li>
          <li>• Sales, logistics and customer support.</li>
        </ul>
        <p className="text-foreground font-body text-base leading-relaxed mt-3">
          Every role contributes to our shared goal of delivering cutting edge
          PU solutions to global markets.
        </p>
      </>
    ),
  },
  {
    heading: "Explore Jobs in Polyurethane Manufacturing",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          We provide exciting jobs in polyurethane manufacturing for skilled
          professionals and fresh talent alike. From production supervisors to
          quality engineers, each position offers opportunities to grow with
          advanced equipment and smart systems.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          Our state-of-the-art facilities manufactures PU Screens, Rollers,
          liners and specialty urethanes, ensuring continuous innovation.
          Through Careers at Vam Poly Plast, you'll gain exposure to modern
          production techniques, safety standards, and R&D initiatives that
          define the next generation of polyurethane solutions.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          If you're eager to shape durable materials that power industries
          worldwide, a manufacturing career with us could be your perfect fit.
        </p>
      </>
    ),
  },
  {
    heading: "PU Industry Jobs in India – Grow with a Market Leader",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          The PU industry in India is expanding rapidly — and Vam Poly Plast
          stands at its forefront. We regularly post PU industry jobs in India
          for engineers, technicians, marketing professionals, and operations
          specialists who want to make an impact.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          Our dynamic work culture encourages collaboration, continuous
          learning, and innovation. As part of Careers at Vam Poly Plast, you'll
          experience:
        </p>
        <ul className="mt-3 space-y-1 font-body text-base text-foreground">
          <li>• Hands-on training with experienced mentors.</li>
          <li>• Exposure to international polyurethane standards.</li>
          <li>• Career progression opportunities across departments.</li>
          <li>• A supportive, inclusive, and safety-driven environment.</li>
        </ul>
        <p className="text-foreground font-body text-base leading-relaxed mt-3">
          Whether you are starting your career or seeking advanced roles in PU
          product development, <strong>Vam Poly Plast</strong> gives you the
          platform to achieve excellence.
        </p>
      </>
    ),
  },
  {
    heading: "Careers in Advanced Urethanes – Join the Future of Materials",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          Our expertise in advanced urethanes gives us a unique position in the
          market. Careers in specialty urethanes at Vam Poly Plast open doors to
          advanced material science, application development, and product
          customization.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          We work on projects across industries like automotive, mining,
          construction, and industrial machinery — where specialized
          polyurethane solutions are essential for performance and durability.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          By joining Careers at <strong>Vam Poly Plast</strong>, you'll be part
          of a future focused team that continually explores the boundaries of
          polyurethane technology and its endless possibilities.
        </p>
      </>
    ),
  },
  {
    heading: "How to Apply for Careers at Vam Poly Plast",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          If you're ready to begin your journey with{" "}
          <strong>Vam Poly Plast</strong>, applying is simple. Visit our Careers
          at Vam Poly Plast section and explore current openings in PU industry
          jobs India and PU product development careers.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          You can also e-mail your updated resume to{" "}
          <a
            href="mailto:info@vampoly.com"
            className="text-pu-red hover:underline font-semibold"
            data-ocid="careers.apply_email"
          >
            info(at)vampoly.com
          </a>
          , mentioning your preferred area of expertise whether it's jobs in
          polyurethane manufacturing or careers in specialty urethanes.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          Once shortlisted, our recruitment team will guide you through the next
          steps, including technical discussions and culture fit interviews.
        </p>
      </>
    ),
  },
  {
    heading: "Join Us — Build a Smarter Polyurethane Future",
    content: (
      <>
        <p className="text-foreground font-body text-base leading-relaxed">
          At <strong>Vam Poly Plast</strong>, your skills make a difference.
          Together, we innovate, manufacture, and deliver PU products that
          enhance performance, reduce waste, and support industries across the
          globe.
        </p>
        <br />
        <p className="text-foreground font-body text-base leading-relaxed">
          Careers at Vam Poly Plast aren't just jobs, they are pathways to
          growth, discovery, and leadership in the polyurethane industry.
        </p>
      </>
    ),
  },
];

export function CareersPage({ onNavigate }: CareersPageProps) {
  return (
    <main className="flex-1 bg-background">
      {/* Hero / Header */}
      <section className="bg-pu-red py-12 sm:py-16 px-4 relative">
        <div className="max-w-4xl mx-auto relative">
          {/* Back to Home — absolute top-left */}
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="absolute top-0 left-0 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-body"
            data-ocid="careers.back_link"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          {/* Centered heading */}
          <div className="text-center pt-10">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              Careers
            </h1>
            <nav className="text-white/70 text-sm font-body mt-3">
              <button
                type="button"
                className="hover:text-white transition-colors bg-transparent border-0 p-0 text-white/70 text-sm font-body cursor-pointer"
                onClick={() => onNavigate("home")}
              >
                Home
              </button>
              <span className="mx-2">/</span>
              <span>Careers</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content — exact info-card layout from vampoly.com/careers.php */}
      <section
        className="py-10 sm:py-16 px-4 bg-background"
        data-ocid="careers.section"
      >
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {careerSections.map((section, idx) => (
            <div
              key={section.heading}
              className="bg-card border border-border rounded-lg p-5 sm:p-8 shadow-sm"
              data-ocid={`careers.card.${idx + 1}`}
            >
              <h2 className="font-display text-xl sm:text-2xl text-pu-red mb-4 sm:mb-5 text-center leading-snug">
                {section.heading}
              </h2>
              {section.content}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
