import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";
import { useInViewReveal } from "../hooks/useScrollReveal";

const productCategories = [
  "PU Flip Flow Screen Mats",
  "PU Dewatering Screen Panels",
  "Pipe Cleaning PIGs",
  "Polyurethane Rollers",
  "Polyurethane Relining",
  "Polyurethane Wheels",
  "Polyurethane Scrapers",
  "PU Seals & HydroCyclones",
  "Other / General Inquiry",
];

export function ContactSection() {
  const ref = useInViewReveal<HTMLElement>();
  const { mutateAsync, isPending } = useSubmitContactForm();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    productInterest: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    if (!form.productInterest)
      errs.productInterest = "Please select a product category";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal py-12 sm:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-pu-accent font-medium text-sm tracking-widest uppercase mb-4">
            <div className="w-8 h-px bg-pu-accent" />
            Get In Touch
            <div className="w-8 h-px bg-pu-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pu-red">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-pu-red" />
                </div>
                <div>
                  <div className="font-semibold text-pu-red mb-1 font-body">
                    Address
                  </div>
                  <div className="text-muted-foreground text-sm leading-relaxed font-body">
                    #4/8-A, Road No.16, IDA Nacharam,
                    <br />
                    Hyderabad-500076, Telangana, India.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-pu-red" />
                </div>
                <div>
                  <div className="font-semibold text-pu-red mb-1 font-body">
                    Phone
                  </div>
                  <div className="text-muted-foreground text-sm font-body">
                    <a
                      href="tel:+919848050625"
                      className="hover:text-pu-accent transition-colors"
                    >
                      +91-98480-50625
                    </a>
                    <br />
                    <a
                      href="tel:+917799057575"
                      className="hover:text-pu-accent transition-colors"
                    >
                      +91-77990-57575
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-pu-red" />
                </div>
                <div>
                  <div className="font-semibold text-pu-red mb-1 font-body">
                    Email
                  </div>
                  <a
                    href="mailto:info@vampoly.com"
                    className="text-muted-foreground text-sm font-body hover:text-pu-accent transition-colors"
                  >
                    info@vampoly.com
                  </a>
                </div>
              </div>
            </div>

            {/* OpenStreetMap embed — no API key required */}
            <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="Vam Poly Plast Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.5270%2C17.3878%2C78.5470%2C17.4078&layer=mapnik&marker=17.3978%2C78.5370"
                className="w-full h-64 border-0"
                loading="lazy"
                allowFullScreen
              />
              <div className="bg-muted/30 px-3 py-1.5 text-right">
                <a
                  href="https://www.openstreetmap.org/?mlat=17.3978&mlon=78.5370#map=15/17.3978/78.5370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-pu-accent hover:underline font-body"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                data-ocid="contact.success_state"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="font-display text-3xl text-pu-red mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground font-body text-base">
                  Your message has been received. Our team will get back to you
                  within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6 border-pu-red text-pu-red hover:bg-pu-red hover:text-white"
                  data-ocid="contact.secondary_button"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.modal"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="text-foreground font-medium text-sm mb-1.5 block font-body"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      className={errors.name ? "border-red-400" : ""}
                      data-ocid="contact.input"
                    />
                    {errors.name && (
                      <p
                        className="text-red-500 text-xs mt-1 font-body"
                        data-ocid="contact.name_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="text-foreground font-medium text-sm mb-1.5 block font-body"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className={errors.email ? "border-red-400" : ""}
                      data-ocid="contact.input"
                    />
                    {errors.email && (
                      <p
                        className="text-red-500 text-xs mt-1 font-body"
                        data-ocid="contact.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="text-foreground font-medium text-sm mb-1.5 block font-body"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contact-product"
                    className="text-foreground font-medium text-sm mb-1.5 block font-body"
                  >
                    Product Interest *
                  </Label>
                  <Select
                    value={form.productInterest}
                    onValueChange={(val) =>
                      handleChange("productInterest", val)
                    }
                  >
                    <SelectTrigger
                      className={errors.productInterest ? "border-red-400" : ""}
                      data-ocid="contact.select"
                    >
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.productInterest && (
                    <p
                      className="text-red-500 text-xs mt-1 font-body"
                      data-ocid="contact.error_state"
                    >
                      {errors.productInterest}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-foreground font-medium text-sm mb-1.5 block font-body"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your requirement..."
                    className={`resize-none ${errors.message ? "border-red-400" : ""}`}
                    data-ocid="contact.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-red-500 text-xs mt-1 font-body"
                      data-ocid="contact.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-pu-red hover:bg-pu-red-mid text-white font-semibold py-3 text-base rounded-sm transition-all duration-200"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
