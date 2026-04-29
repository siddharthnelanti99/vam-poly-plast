import { useEffect } from "react";
import type { PageType } from "../App";

interface GetAQuotePageProps {
  onNavigate: (page: PageType) => void;
}

/**
 * GetAQuotePage — immediately redirects the user to the Contact section
 * on the home page. This is a transitional page, not a standalone view.
 */
export function GetAQuotePage({ onNavigate }: GetAQuotePageProps) {
  useEffect(() => {
    // Navigate home, then scroll to #contact
    onNavigate("quote");
  }, [onNavigate]);

  return null;
}
