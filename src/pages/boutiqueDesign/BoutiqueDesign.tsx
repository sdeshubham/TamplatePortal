import React from "react";
import "./BoutiqueDesign.css";

const collections = [
  {
    title: "Bridal Collection",
    subtitle: "Traditional elegance for your big day",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Lehenga Collection",
    subtitle: "Grace in every stitch",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Saree Collection",
    subtitle: "Timeless beauty, modern touch",
    image:
      "https://images.unsplash.com/photo-1617624775427-6b6c8b6f8b4f?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Indo-Western",
    subtitle: "Fusion of tradition & trend",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=800&q=85",
  },
];
const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Bride",
    text: "The team at Éclat made my bridal outfit feel like a dream. The quality and attention to detail were absolutely amazing!",
  },
  {
    name: "Riya Kapoor",
    role: "Customer",
    text: "Loved the custom design service! The outfit fit perfectly and I got so many compliments.",
  },
  {
    name: "Neha Verma",
    role: "Customer",
    text: "Beautiful collection and very professional service. Highly recommended!",
  },
];
const services = [
  "Custom Stitching",
  "Premium Fabrics",
  "Bridal & Festive Wear",
  "Personalized Consultation",
];

export default function BoutiqueDesign() {
  return (
    <div className="eclat-site">
      <header className="eclat-header">
        <a className="eclat-brand" href="#home">
          <span className="eclat-flower">❀</span>
          <span>
            <strong>Éclat</strong>
            <small>BOUTIQUE & DESIGN STUDIO</small>
          </span>
        </a>
        <nav className="eclat-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#collections">Collections</a>
          <a href="#custom">Custom Work</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="eclat-top-cta" href="#contact">
          Book Appointment
        </a>
      </header>
      <main>
        <section className="eclat-hero" id="home">
          <div className="eclat-hero-copy">
            <span className="eclat-eyebrow">
              TRADITIONAL ROOTS | MODERN DESIGNS
            </span>
            <h1>
              Custom Outfits
              <br />
              for Your Special
              <br />
              Moments
            </h1>
            <p>
              Ethnic wear, bridal collections, and custom designs crafted with
              love and attention to detail.
            </p>
            <div className="eclat-actions">
              <a className="eclat-btn eclat-btn-pink" href="#collections">
                Explore Collections <span>→</span>
              </a>
              <a
                className="eclat-btn eclat-btn-outline"
                href="https://wa.me/919876543210"
              >
                ◉ Chat on WhatsApp
              </a>
            </div>
          </div>
          <div
            className="eclat-hero-photo"
            role="img"
            aria-label="Bridal outfit inspiration"
          />
        </section>
        <section className="eclat-benefits">
          {services.map((s, i) => (
            <div className="eclat-benefit" key={s}>
              <span className="eclat-benefit-icon">
                {["♧", "◇", "✿", "♧"][i]}
              </span>
              <div>
                <b>{s}</b>
                <small>
                  {
                    [
                      "As per your style & size",
                      "Only the best quality",
                      "For every special occasion",
                      "Designed as per your vision",
                    ][i]
                  }
                </small>
              </div>
            </div>
          ))}
        </section>
        <section className="eclat-section eclat-collections" id="collections">
          <div className="eclat-section-head">
            <div>
              <span className="eclat-eyebrow eclat-muted">EXPLORE OUR</span>
              <h2>Our Collections</h2>
              <p>
                Discover a range of exquisite outfits designed for every
                occasion and style.
              </p>
            </div>
            <a className="eclat-text-link" href="#gallery">
              View All Collections <span>→</span>
            </a>
          </div>
          <div className="eclat-collection-grid">
            {collections.map((item) => (
              <article className="eclat-collection-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="eclat-card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <a href="#contact">
                    Explore Collection <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="eclat-custom" id="custom">
          <div className="eclat-custom-copy">
            <span className="eclat-eyebrow eclat-muted">HOW IT WORKS</span>
            <h2>Custom Design Process</h2>
            <p>Your dream outfit, our creative process.</p>
            <div className="eclat-steps">
              <div>
                <span>♧</span>
                <b>1. Consultation</b>
                <small>Share your ideas, style and requirements.</small>
              </div>
              <div>
                <span>✎</span>
                <b>2. Design & Fabric Selection</b>
                <small>Get expert suggestions for fabric and details.</small>
              </div>
              <div>
                <span>◇</span>
                <b>3. Trial & Fitting</b>
                <small>Ensure the perfect fit and look.</small>
              </div>
              <div>
                <span>✿</span>
                <b>4. Final Outfit</b>
                <small>Created with love, just for you.</small>
              </div>
            </div>
            <a className="eclat-btn eclat-btn-pink" href="#contact">
              Book a Consultation <span>→</span>
            </a>
          </div>
          <img
            className="eclat-custom-image"
            src="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1000&q=85"
            alt="Custom garment tailoring"
          />
        </section>
        <section className="eclat-section eclat-about" id="about">
          <div className="eclat-about-image" />
          <div className="eclat-about-copy">
            <span className="eclat-eyebrow eclat-muted">OUR STORY</span>
            <h2>
              Crafted with Passion,
              <br />
              Made for You
            </h2>
            <p>
              At Éclat, every outfit tells a story. We blend timeless Indian
              craftsmanship with contemporary design to create pieces that feel
              personal, beautiful, and uniquely yours.
            </p>
            <p>
              From your first consultation to the final fitting, we make every
              detail count.
            </p>
            <div className="eclat-stats">
              <div>
                <b>8+</b>
                <small>Years of Craft</small>
              </div>
              <div>
                <b>500+</b>
                <small>Happy Clients</small>
              </div>
              <div>
                <b>100%</b>
                <small>Personal Touch</small>
              </div>
            </div>
            <a className="eclat-text-link" href="#contact">
              Get to Know Us <span>→</span>
            </a>
          </div>
        </section>
        <section className="eclat-section eclat-reviews" id="reviews">
          <div className="eclat-section-head">
            <div>
              <span className="eclat-eyebrow eclat-muted">TESTIMONIALS</span>
              <h2>Our Happy Clients</h2>
              <p>Words from our beautiful customers.</p>
            </div>
            <div className="eclat-slider-arrows">←　→</div>
          </div>
          <div className="eclat-review-grid">
            {testimonials.map((t, i) => (
              <article className="eclat-review-card" key={t.name}>
                <div className="eclat-review-person">
                  <span className={`eclat-avatar eclat-avatar-${i + 1}`} />
                  <div>
                    <b>{t.name}</b>
                    <small>{t.role}</small>
                  </div>
                </div>
                <p>“{t.text}”</p>
                <div className="eclat-stars">★★★★★</div>
              </article>
            ))}
          </div>
        </section>
        <section className="eclat-cta-banner">
          <div>
            <h2>
              Let’s Create Something Beautiful
              <br />
              Together
            </h2>
            <p>Book a consultation and let us design your perfect outfit.</p>
            <div className="eclat-actions">
              <a className="eclat-btn eclat-btn-pink" href="#contact">
                Book Appointment <span>→</span>
              </a>
              <a
                className="eclat-btn eclat-btn-outline"
                href="https://wa.me/919876543210"
              >
                ◉ Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
        <section className="eclat-contact" id="contact">
          <div className="eclat-contact-intro">
            <span className="eclat-eyebrow">GET IN TOUCH</span>
            <h2>
              Let’s Design Your
              <br />
              Perfect Look
            </h2>
            <p>
              Have a design in mind? We’d love to bring your vision to life.
            </p>
            <div className="eclat-contact-line">
              <span>☎</span>
              <div>
                <b>+91 98765 43210</b>
                <small>Call or WhatsApp</small>
              </div>
            </div>
            <div className="eclat-contact-line">
              <span>✉</span>
              <div>
                <b>hello@eclatboutique.com</b>
                <small>Drop us an email</small>
              </div>
            </div>
            <div className="eclat-contact-line">
              <span>⌖</span>
              <div>
                <b>Indore, Madhya Pradesh</b>
                <small>Visit our studio</small>
              </div>
            </div>
          </div>
          <form
            className="eclat-form"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "https://wa.me/919876543210?text=" +
                encodeURIComponent(
                  "Hi Éclat, I would like to enquire about a custom outfit.",
                );
            }}
          >
            <label>
              Your Name
              <input required placeholder="Enter your name" />
            </label>
            <label>
              Phone Number
              <input required type="tel" placeholder="Enter phone number" />
            </label>
            <label>
              What are you looking for?
              <select defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option>Bridal Outfit</option>
                <option>Custom Stitching</option>
                <option>Festive Wear</option>
                <option>Ready Collection</option>
              </select>
            </label>
            <label>
              Event Date
              <input type="date" />
            </label>
            <label className="eclat-full">
              Tell us about your design
              <textarea
                rows={3}
                placeholder="Share your ideas, occasion, preferred style..."
              />
            </label>
            <button className="eclat-submit" type="submit">
              Send Enquiry <span>→</span>
            </button>
          </form>
        </section>
      </main>
      <footer className="eclat-footer">
        <div className="eclat-footer-top">
          <a className="eclat-brand eclat-footer-brand" href="#home">
            <span className="eclat-flower">❀</span>
            <span>
              <strong>Éclat</strong>
              <small>BOUTIQUE & DESIGN STUDIO</small>
            </span>
          </a>
          <div>
            <b>Quick Links</b>
            <a href="#about">About Us</a>
            <a href="#collections">Collections</a>
            <a href="#custom">Custom Work</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div>
            <b>Contact Us</b>
            <span>+91 98765 43210</span>
            <span>hello@eclatboutique.com</span>
            <span>Indore, Madhya Pradesh</span>
          </div>
          <div>
            <b>Follow Us</b>
            <div className="eclat-socials">
              <a href="#contact">◎</a>
              <a href="#contact">f</a>
              <a href="#contact">p</a>
              <a href="#contact">▶</a>
            </div>
          </div>
        </div>
        <div className="eclat-footer-bottom">
          <span>© 2026 Éclat Boutique. All rights reserved.</span>
          <span>Style　|　Elegance　|　You</span>
        </div>
      </footer>
    </div>
  );
}
