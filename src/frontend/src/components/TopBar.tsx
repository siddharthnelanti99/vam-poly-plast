import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function TopBar() {
  return (
    <div className="bg-pu-red text-white text-xs sm:text-sm py-1.5 sm:py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 min-w-0">
          <a
            href="mailto:info@vampoly.com"
            className="flex items-center gap-1 sm:gap-1.5 hover:text-white/70 transition-colors shrink-0"
          >
            <Mail size={12} className="shrink-0" />
            <span className="hidden xs:inline sm:inline truncate">
              info@vampoly.com
            </span>
          </a>
          <a
            href="tel:+919848050625"
            className="hidden sm:flex items-center gap-1.5 hover:text-white/70 transition-colors"
          >
            <Phone size={12} className="shrink-0" />
            <span>+91-98480-50625</span>
          </a>
          <a
            href="tel:+917799057575"
            className="hidden md:flex items-center gap-1.5 hover:text-white/70 transition-colors"
          >
            <Phone size={12} className="shrink-0" />
            <span>+91-77990-57575</span>
          </a>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.facebook.com/vampoly"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
            data-ocid="topbar.facebook_link"
          >
            <FaFacebook size={13} />
          </a>
          <a
            href="https://x.com/vampolyplast"
            aria-label="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
            data-ocid="topbar.x_link"
          >
            <FaXTwitter size={13} />
          </a>
          <a
            href="https://www.youtube.com/watch?v=8S545Sj_dRE"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
            data-ocid="topbar.youtube_link"
          >
            <FaYoutube size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
