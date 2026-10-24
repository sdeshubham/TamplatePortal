import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import "./MakeOver.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  dark?: boolean;
};

type Service = { title: string; text: string; image: string };
type GalleryImage = { image: string; alt: string };
type Review = { name: string; text: string };
type MakeupPackage = { name: string; price: string; items: string[] };

const photos = {
  hero: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&w=1800&q=90",
  artist: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
  bridal: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=900&q=85",
  engagement: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
  party: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85",
  prewedding: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  hd: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
  gallery1: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
  gallery2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
  gallery3: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85",
  gallery4: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
  gallery5: "https://images.unsplash.com/photo-1508218756012-0b5e2e1a5c2c?auto=format&fit=crop&w=900&q=85",
  tools: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=85",
};

const services: Service[] = [
  { title: "Bridal Makeup", text: "For your big day, make it magical.", image: photos.bridal },
  { title: "Engagement Makeup", text: "Soft, elegant & radiant.", image: photos.engagement },
  { title: "Party Makeup", text: "Look stunning at every celebration.", image: photos.party },
  { title: "Pre-Wedding Makeup", text: "For all your special moments.", image: photos.prewedding },
  { title: "HD Makeup", text: "Long-lasting for camera-ready looks.", image: photos.hd },
];

const gallery: GalleryImage[] = [
  { image: photos.gallery1, alt: "Bridal jewellery and makeup look" },
  { image: photos.gallery2, alt: "Elegant beauty portrait" },
  { image: photos.gallery3, alt: "Close-up makeup inspiration" },
  { image: photos.gallery4, alt: "Soft glam makeup look" },
  { image: photos.gallery5, alt: "Bridal beauty inspiration" },
];

const reviews: Review[] = [
  { name: "Neha Phadtare", text: "Priya made me feel like a queen on my wedding day. Her work is absolutely amazing!" },
  { name: "Ridhima Verma", text: "The makeup was flawless and lasted the whole day. Highly recommended!" },
  { name: "Anjali Singh", text: "Professional, friendly and super talented. She understood my style perfectly!" },
];

const packages: MakeupPackage[] = [
  { name: "Bridal Makeup Package", price: "₹ 15,000", items: ["Bridal Makeup (Day & Night)", "HD Finish", "False Lashes", "Skincare Prep"] },
  { name: "Engagement Makeup Package", price: "₹ 7,000", items: ["Engagement Look", "HD Finish", "Light Hairstyle (Optional)", "Touch-Up Kit"] },
  { name: "Party Makeup Package", price: "₹ 5,000", items: ["Party / Anniversary Look", "HD Finish", "False Lashes", "Touch-Up Kit"] },
];

type BookingForm = {
  name: string;
  phone: string;
  date: string;
  service: string;
  venue: string;
  message: string;
};

function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${dark ? "heading-light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function GlowGrace() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    date: "",
    service: "Bridal Makeup",
    venue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const updateForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello Glow & Grace, I'd like to enquire about an appointment.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Wedding/Event Date: ${form.date || "Not decided"}`,
      `Service: ${form.service}`,
      `Venue/City: ${form.venue || "Not specified"}`,
      `Message: ${form.message || "—"}`,
    ].join("\n");

    // Replace this demo number with the makeup artist's WhatsApp number.
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="gg-site" id="home">
      <header className="gg-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Glow and Grace home">
          <span className="brand-script">Glow &amp; Grace</span>
          <span className="brand-subtitle">BRIDAL MAKEUP ARTIST</span>
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={`gg-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {["Home", "About", "Services", "Gallery", "Testimonials", "Packages", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="button button-pink header-cta" href="#contact"><span>▣</span> Book Appointment</a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-image" role="img" aria-label="Bridal makeup inspiration" />
          <div className="hero-shade" />
          <div className="hero-content">
            <span className="hero-kicker">MAKEUP THAT BRINGS OUT</span>
            <h1>Your Natural Beauty</h1>
            <div className="hero-script">On Your Special Day</div>
            <p>Professional Bridal Makeup Artist | Flawless Looks |<br />For Every Celebration</p>
            <div className="hero-actions">
              <a className="button button-pink" href="#contact">▣ &nbsp; Book Your Appointment</a>
              <a className="watch-link" href="#gallery"><span className="play-icon">▶</span> Watch My Work</a>
            </div>
          </div>
          <div className="hero-services">
            {["Bridal Makeup", "Party Makeup", "Engagement Makeup", "Pre-Wedding Makeup"].map((label, index) => (
              <a href="#services" className="hero-service" key={label}>
                <span className="service-round-icon">{["♧", "♙", "♡", "♜"][index]}</span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="promise-strip" aria-label="Our promises">
          <div className="promise-item"><span className="promise-icon">♙</span><div><strong>Premium Products</strong><small>Only the best for your skin</small></div></div>
          <div className="promise-item"><span className="promise-icon">♧</span><div><strong>Personalized Look</strong><small>As per your style &amp; outfit</small></div></div>
          <div className="promise-item"><span className="promise-icon">◷</span><div><strong>On-Time Service</strong><small>Because your time matters</small></div></div>
          <div className="promise-item"><span className="promise-icon">♡</span><div><strong>Hygienic &amp; Safe</strong><small>Your safety is our priority</small></div></div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-photo-wrap">
            <img src={photos.artist} alt="Makeup artist preparing a client" className="about-photo" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">ABOUT ME</span>
            <h2>Hi, I’m Priya Phadtare</h2>
            <h3>Professional Bridal Makeup Artist</h3>
            <p>With a passion for beauty and an eye for detail, I specialize in creating flawless, long-lasting makeup looks for brides and special occasions. My goal is to make you feel confident, beautiful and the best version of yourself on your special day.</p>
            <div className="stats-row">
              <div><strong>5+</strong><span>Years Experience</span></div>
              <div><strong>100+</strong><span>Happy Brides</span></div>
              <div><strong>4.9/5</strong><span>Client Rating</span></div>
            </div>
            <a className="button button-pink button-small" href="#contact">Know More About Me <span>→</span></a>
          </div>
        </section>

        <section className="services-section dark-section" id="services">
          <div className="section-wrap">
            <div className="section-topline">
              <SectionHeading eyebrow="MY SERVICES" title="Makeup Services" description="From your big day to special moments, I've got you covered." dark />
              <a className="button button-outline" href="#contact">View All Services <span>→</span></a>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href="#contact">Book Now <span>→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section section-wrap" id="gallery">
          <div className="section-topline">
            <SectionHeading eyebrow="MY WORK" title="Makeup Gallery" description="A glimpse of some of my favorite looks." />
            <a className="button button-outline button-outline-pink" href="#contact">View All Photos <span>→</span></a>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <a className={`gallery-tile gallery-tile-${index + 1}`} href={item.image} target="_blank" rel="noreferrer" key={item.image}>
                <img src={item.image} alt={item.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        <section className="testimonials-section dark-section" id="testimonials">
          <div className="section-wrap testimonials-layout">
            <SectionHeading eyebrow="WHAT MY CLIENTS SAY" title="Kind Words" description={<>Real brides. Real stories. <span className="heart">♥</span></>} dark />
            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</div>
                  <div className="review-content">
                    <p>“{review.text}”</p>
                    <strong>{review.name}</strong>
                    <small>Bridal Client</small>
                    <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="packages-section section-wrap" id="packages">
          <div className="section-topline">
            <SectionHeading eyebrow="PACKAGES" title="Choose Your Perfect Package" description="Custom packages available as per your needs." />
            <a className="button button-outline button-outline-pink" href="#contact">View All Packages <span>→</span></a>
          </div>
          <div className="packages-layout">
            <div className="packages-grid">
              {packages.map((pkg) => (
                <article className="package-card" key={pkg.name}>
                  <h3>{pkg.name}</h3>
                  <ul>{pkg.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  <strong className="package-price">{pkg.price}</strong>
                  <a className="button button-pink package-button" href="#contact">Book Now</a>
                </article>
              ))}
            </div>
            <div className="beauty-quote" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,237,231,.10), rgba(255,237,231,.12)), url(${photos.tools})` }}>
              <span>Because</span>
              <strong>you deserve<br />to feel beautiful</strong>
              <span className="quote-heart">♡</span>
            </div>
          </div>
        </section>

        <section className="contact-section dark-section" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-intro">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>Let's Create Your<br />Perfect Look</h2>
              <p>Have a question or want to book an appointment? I'd love to hear from you.</p>
            </div>
            <div className="contact-details">
              <a href="tel:+919876543210" className="contact-detail"><span className="contact-icon">☎</span><span><strong>+91 98766 43210</strong><small>Call or WhatsApp</small></span></a>
              <a href="mailto:priyasharma@example.com" className="contact-detail"><span className="contact-icon">✉</span><span><strong>priyasharma@example.com</strong><small>Drop me an email</small></span></a>
              <div className="contact-detail"><span className="contact-icon">⌖</span><span><strong>Indore, Madhya Pradesh</strong><small>Service available in Indore &amp; nearby areas</small></span></div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label className="sr-only" htmlFor="gg-name">Your Name</label>
              <input id="gg-name" name="name" value={form.name} onChange={updateForm} placeholder="Your Name *" required />
              <label className="sr-only" htmlFor="gg-phone">Phone Number</label>
              <input id="gg-phone" name="phone" type="tel" value={form.phone} onChange={updateForm} placeholder="Your Phone Number *" required />
              <div className="form-two-col">
                <label className="sr-only" htmlFor="gg-date">Wedding or event date</label>
                <input id="gg-date" name="date" type="date" value={form.date} onChange={updateForm} aria-label="Wedding or event date" />
                <label className="sr-only" htmlFor="gg-service">Service</label>
                <select id="gg-service" name="service" value={form.service} onChange={updateForm}>
                  <option>Bridal Makeup</option>
                  <option>Engagement Makeup</option>
                  <option>Party Makeup</option>
                  <option>Pre-Wedding Makeup</option>
                  <option>HD Makeup</option>
                </select>
              </div>
              <label className="sr-only" htmlFor="gg-venue">Venue or city</label>
              <input id="gg-venue" name="venue" value={form.venue} onChange={updateForm} placeholder="Venue / City" />
              <label className="sr-only" htmlFor="gg-message">Your Message</label>
              <textarea id="gg-message" name="message" value={form.message} onChange={updateForm} placeholder="Your Message" rows={3} />
              <button className="button button-pink form-submit" type="submit">➤ &nbsp; Send Message</button>
              {submitted && <p className="form-note" role="status">Your WhatsApp enquiry has been prepared. If WhatsApp didn't open, please contact us directly.</p>}
              <small className="form-disclaimer">This demo form opens WhatsApp with your enquiry details.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="gg-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-script">Glow &amp; Grace</span><span className="brand-subtitle">BRIDAL MAKEUP ARTIST</span></a>
        <div className="social-links" aria-label="Social links">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
          <a href="https://pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">p</a>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {["Home", "About", "Services", "Gallery", "Testimonials", "Packages", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <small className="copyright">© 2026 Glow &amp; Grace. All Rights Reserved.</small>
      </footer>
    </div>
  );
}
