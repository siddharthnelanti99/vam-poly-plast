import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export function Footer() {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "vampoly.com";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="font-display text-xl text-white mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-pu-accent mt-0.5 shrink-0" />
                <span className="leading-relaxed font-body">
                  #4/8-A, Road No.16, IDA Nacharam,
                  <br />
                  Hyderabad-500076, Telangana, India.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-pu-accent shrink-0" />
                <a
                  href="tel:+919848050625"
                  className="font-body hover:text-pu-accent transition-colors"
                >
                  +91-98480-50625
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-pu-accent shrink-0" />
                <a
                  href="tel:+917799057575"
                  className="font-body hover:text-pu-accent transition-colors"
                >
                  +91-77990-57575
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-pu-accent shrink-0" />
                <a
                  href="mailto:info@vampoly.com"
                  className="font-body hover:text-pu-accent transition-colors"
                >
                  info@vampoly.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: FaFacebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/vampoly",
                  ocid: "footer.facebook_link",
                },
                {
                  icon: FaXTwitter,
                  label: "X (Twitter)",
                  href: "https://x.com/vampolyplast",
                  ocid: "footer.x_link",
                },
                {
                  icon: FaYoutube,
                  label: "YouTube",
                  href: "https://www.youtube.com/watch?v=8S545Sj_dRE",
                  ocid: "footer.youtube_link",
                },
              ].map(({ icon: Icon, label, href, ocid }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={ocid}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pu-accent flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-white mb-5">
              Useful Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Polyurethane", href: "#polyurethane" },
                { label: "All Products", href: "#products" },
                { label: "Blog", href: "#blog" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-body hover:text-pu-accent transition-colors flex items-center gap-2 group"
                    data-ocid="footer.link"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pu-accent/40 group-hover:bg-pu-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-white mb-5">
              About Vam Poly Plast
            </h3>
            <p className="text-sm leading-relaxed font-body mb-5">
              Established in 1988, Vam Poly Plast is one of the leading
              manufacturers of superior quality Polyurethane products. With our
              outstanding engineering knowledge and expertise in industrial
              applications, we offer customised polyurethane products built to
              last.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-pu-accent hover:text-pu-red-light font-medium transition-colors font-body"
              data-ocid="footer.link"
            >
              Learn More About Us{" "}
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p className="font-body">
            Copyright © {currentYear} Vam Poly Plast Pvt Ltd. All rights
            reserved.
          </p>
          <p className="font-body">
            Built with ❤️ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pu-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
