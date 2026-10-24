import {
  ArrowRight,
  Camera,
  CalendarDays,
  Heart,
  Menu,
  Play,
  Mail,
  MapPin,
  Phone,
  X,
  Images,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import "./WeddingPhotography.css";

const weddingImages = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
  bride:
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=700&q=85",
  couple:
    "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=85",
  detail:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85",
  wedding:
    "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=700&q=85",
  photographer:
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=85",
  prewedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85",
  reception:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=85",
};

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Complete wedding day coverage",
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description: "Create your love story",
  },
  {
    icon: Images,
    title: "Candid Photography",
    description: "Real moments, real emotions",
  },
  {
    icon: Play,
    title: "Albums & Films",
    description: "Relive your forever",
  },
];

const galleries = [
  { title: "Weddings", image: weddingImages.bride },
  { title: "Pre-Weddings", image: weddingImages.prewedding },
  { title: "Mehendi & Haldi", image: weddingImages.detail },
  { title: "Celebrations", image: weddingImages.reception },
];

const testimonials = [
  {
    names: "Riya & Karan",
    event: "Wedding Couple",
    text: "The team made our special day even more special. The photos preserve our memories beautifully.",
  },
  {
    names: "Neha & Arjun",
    event: "Pre-Wedding Couple",
    text: "Creative, professional and super friendly. We loved every moment!",
  },
  {
    names: "Simran & Vikram",
    event: "Wedding Couple",
    text: "The best decision we made. The photos are exactly how we imagined them.",
  },
];

export default function WeddingPhotography() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "Wedding Photography",
    date: "",
    message: "",
  });

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello EverAfter Photography!",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Event: ${form.event}`,
      `Date: ${form.date || "Not decided"}`,
      `Details: ${form.message || "Please share your packages."}`,
    ].join("\n");

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="wp-site">
      <header className="wp-header">
        <a className="wp-logo" href="#wp-home" onClick={closeMenu}>
          <span className="wp-logo-icon">
            <Camera size={27} />
          </span>
          <span>
            <strong>EverAfter</strong>
            <small>PHOTOGRAPHY</small>
          </span>
        </a>

        <button
          className="wp-menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`wp-nav ${menuOpen ? "wp-nav-open" : ""}`}>
          {[
            ["Home", "#wp-home"],
            ["About", "#wp-about"],
            ["Services", "#wp-services"],
            ["Portfolio", "#wp-portfolio"],
            ["Testimonials", "#wp-testimonials"],
            ["Blog", "#wp-process"],
            ["Contact", "#wp-contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="wp-nav-cta" href="#wp-contact" onClick={closeMenu}>
            Book Your Shoot
          </a>
        </nav>
      </header>

      <main>
        <section
          className="wp-hero"
          id="wp-home"
          style={{ backgroundImage: `url(${weddingImages.hero})` }}
        >
          <div className="wp-hero-overlay" />
          <div className="wp-hero-content">
            <span className="wp-eyebrow">WEDDING PHOTOGRAPHERS & STUDIOS</span>
            <h1>
              Your Love Story
              <br />
              Our Lens
            </h1>
            <p>
              Timeless photographs, genuine emotions
              <br className="wp-desktop-break" /> and memories that last
              forever.
            </p>
            <div className="wp-hero-actions">
              <a className="wp-button wp-button-pink" href="#wp-contact">
                Book Your Wedding Shoot <ArrowRight size={16} />
              </a>
              <a className="wp-watch-link" href="#wp-portfolio">
                <span className="wp-play-circle">
                  <Play size={15} />
                </span>
                View Our Work
              </a>
            </div>
          </div>
          <div className="wp-hero-caption">
            <Heart size={17} />
            <span>Every love story deserves to be remembered.</span>
          </div>
        </section>

        <section className="wp-service-strip" id="wp-services">
          {services.map(({ icon: Icon, title, description }) => (
            <a href="#wp-contact" className="wp-strip-item" key={title}>
              <span className="wp-strip-icon">
                <Icon size={22} />
              </span>
              <span>
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
            </a>
          ))}
        </section>

        <section className="wp-section wp-portfolio" id="wp-portfolio">
          <div className="wp-section-heading">
            <div>
              <span className="wp-eyebrow wp-eyebrow-dark">OUR WORK</span>
              <h2>Featured Galleries</h2>
              <p>
                Take a look at some of our best moments, captured with love and
                creativity.
              </p>
            </div>
            <a className="wp-outline-button" href="#wp-contact">
              View All Galleries <ArrowRight size={15} />
            </a>
          </div>

          <div className="wp-gallery-grid">
            {galleries.map((item, index) => (
              <a
                className="wp-gallery-card"
                href="#wp-contact"
                key={item.title}
              >
                <div className="wp-gallery-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="wp-gallery-number">0{index + 1}</span>
                </div>
                <div className="wp-gallery-caption">
                  <span>
                    <strong>{item.title}</strong>
                    <small>View Gallery ↗</small>
                  </span>
                  <ArrowRight size={17} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="wp-section wp-about" id="wp-about">
          <div className="wp-about-image">
            <img
              src={weddingImages.photographer}
              alt="Photographer capturing a special moment"
              loading="lazy"
            />
            <div className="wp-image-note">
              <Camera size={21} />
              <span>Stories told through photographs</span>
            </div>
          </div>

          <div className="wp-about-copy">
            <span className="wp-eyebrow wp-eyebrow-dark">ABOUT US</span>
            <h2>
              Capturing Emotions,
              <br /> Creating Memories
            </h2>
            <p>
              We are a team of passionate photographers who believe in the power
              of real moments. From intimate ceremonies to grand celebrations,
              we tell your love story through beautiful, natural and timeless
              photography.
            </p>

            <div className="wp-stats">
              <div>
                <strong>5+</strong>
                <small>Years of Experience</small>
              </div>
              <div>
                <strong>500+</strong>
                <small>Happy Couples</small>
              </div>
              <div>
                <strong>1000+</strong>
                <small>Photos Delivered</small>
              </div>
            </div>
            <a className="wp-button wp-button-dark" href="#wp-contact">
              Get to Know Us <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="wp-section wp-testimonials" id="wp-testimonials">
          <div className="wp-section-heading">
            <div>
              <span className="wp-eyebrow wp-eyebrow-dark">KIND WORDS</span>
              <h2>Love Notes From Our Clients</h2>
              <p>Real stories from couples whose moments we captured.</p>
            </div>
          </div>

          <div className="wp-testimonial-grid">
            {testimonials.map((item) => (
              <article className="wp-testimonial-card" key={item.names}>
                <div className="wp-review-heart">
                  <Heart size={19} />
                </div>
                <div className="wp-stars">★★★★★</div>
                <p>“{item.text}”</p>
                <strong>{item.names}</strong>
                <small>{item.event}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="wp-process" id="wp-process">
          <div className="wp-process-content">
            <span className="wp-eyebrow">YOUR STORY, OUR PROCESS</span>
            <h2>From First Hello to Forever</h2>
            <p>
              Thoughtfully planned, beautifully captured, forever remembered.
            </p>
            <a className="wp-button wp-button-pink" href="#wp-contact">
              Start Your Story <ArrowRight size={16} />
            </a>
          </div>
          <div className="wp-process-steps">
            {[
              ["01", "Connect", "Tell us about your plans."],
              ["02", "Plan", "Build your photography package."],
              ["03", "Capture", "We capture the real moments."],
              ["04", "Relive", "Receive your memories."],
            ].map(([number, title, description]) => (
              <div className="wp-process-step" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{description}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="wp-contact" id="wp-contact">
          <div className="wp-contact-image">
            <img
              src={weddingImages.couple}
              alt="Wedding couple"
              loading="lazy"
            />
            <div>
              <span className="wp-eyebrow">LET'S MAKE IT TIMELESS</span>
              <h2>
                Let's Capture
                <br />
                Your Beautiful Moments
              </h2>
              <p>Tell us about your big day. We'd love to hear your story.</p>
            </div>
          </div>

          <div className="wp-contact-details">
            <span className="wp-eyebrow wp-eyebrow-dark">GET IN TOUCH</span>
            <h3>We'd Love to Hear From You</h3>
            <p>
              <Phone size={17} /> +91 98765 43210
            </p>
            <p>
              <Mail size={17} /> hello@everafterstudio.com
            </p>
            <p>
              <MapPin size={17} /> Indore, Madhya Pradesh
            </p>
            <p>
              <FaInstagram size={17} /> @everafterphotography
            </p>
            <small>Available for weddings & destination shoots.</small>
          </div>

          <form className="wp-contact-form" onSubmit={submitEnquiry}>
            <h3>Plan Your Wedding Shoot</h3>
            <p>Share a few details and let's start planning.</p>
            <label>
              Your Name *
              <input
                required
                value={form.name}
                onChange={(e) => updateForm("name", e.target.value)}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Email Address *
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Photography Service
              <select
                value={form.event}
                onChange={(e) => updateForm("event", e.target.value)}
              >
                <option>Wedding Photography</option>
                <option>Pre-Wedding Shoot</option>
                <option>Candid Photography</option>
                <option>Wedding Films</option>
                <option>Other Event</option>
              </select>
            </label>
            <label>
              Wedding / Event Date
              <input
                type="date"
                value={form.date}
                onChange={(e) => updateForm("date", e.target.value)}
              />
            </label>
            <label>
              Tell Us More
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => updateForm("message", e.target.value)}
                placeholder="Venue, event details or questions..."
              />
            </label>
            <button
              className="wp-button wp-button-pink wp-submit"
              type="submit"
            >
              Send Enquiry on WhatsApp <ArrowRight size={16} />
            </button>
          </form>
        </section>
      </main>

      <footer className="wp-footer">
        <a className="wp-logo wp-footer-logo" href="#wp-home">
          <Camera size={25} />
          <span>
            <strong>EverAfter</strong>
            <small>PHOTOGRAPHY</small>
          </span>
        </a>
        <p>Every moment has a story. Let us tell yours.</p>
        <div className="wp-footer-links">
          {[
            ["Home", "#wp-home"],
            ["About", "#wp-about"],
            ["Services", "#wp-services"],
            ["Portfolio", "#wp-portfolio"],
            ["Contact", "#wp-contact"],
          ].map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="wp-footer-social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a href="#wp-contact" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <small className="wp-copyright">
          © {new Date().getFullYear()} EverAfter Photography. All rights
          reserved.
        </small>
      </footer>
    </div>
  );
}
