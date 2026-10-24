import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  House,
  Building2,
  ChefHat,
  LayoutGrid,
  RefreshCw,
  Settings,
  Clock3,
  HeartHandshake,
  Leaf,
  Menu,
  Phone,
  Mail,
  MapPin,
  Check,
  UserRound,
  MessageCircle,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./interiorDesign.css";

const images = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
  living:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85",
  kitchen:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
  cafe: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=700&q=85",
  about:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
  contact:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
};

const services = [
  {
    icon: House,
    title: "Residential Interiors",
    text: "Beautiful, functional spaces for your home.",
  },
  {
    icon: Building2,
    title: "Commercial Interiors",
    text: "Modern spaces for work & business.",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchens",
    text: "Stylish & smart kitchen solutions.",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    text: "Optimized layouts for better living.",
  },
  {
    icon: RefreshCw,
    title: "Renovation & Makeover",
    text: "Give your space a fresh new look.",
  },
];

const projects = [
  {
    image: images.living,
    title: "Modern Living Room",
    category: "Residential",
    year: "2024",
  },
  {
    image: images.bedroom,
    title: "Luxury Bedroom",
    category: "Residential",
    year: "2024",
  },
  {
    image: images.kitchen,
    title: "Modular Kitchen",
    category: "Residential",
    year: "2024",
  },
  {
    image: images.office,
    title: "Modern Office Space",
    category: "Commercial",
    year: "2024",
  },
  {
    image: images.cafe,
    title: "Cafe Interior",
    category: "Commercial",
    year: "2024",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    text: "The team understood our vision perfectly and turned our home into a dream space. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    role: "Office Owner",
    text: "Professional, creative and easy to work with. Our office space looks amazing!",
  },
  {
    name: "Neha Kapoor",
    role: "Homeowner",
    text: "Excellent design ideas and great attention to detail. We couldn't be happier with the final result!",
  },
];

const process = [
  {
    icon: UserRound,
    title: "1. Consultation",
    text: "Discuss your needs and vision.",
  },
  {
    icon: LayoutGrid,
    title: "2. Concept Design",
    text: "We create mood boards & layouts.",
  },
  {
    icon: Building2,
    title: "3. Design Development",
    text: "Detailed plans & 3D visuals.",
  },
  {
    icon: Settings,
    title: "4. Execution",
    text: "We bring the design to life.",
  },
  {
    icon: Check,
    title: "5. Handover",
    text: "Your dream space, ready to enjoy.",
  },
];

const benefits = [
  {
    icon: House,
    title: "Creative Designs",
    text: "Unique & modern concepts",
  },
  {
    icon: Settings,
    title: "Quality Materials",
    text: "Long lasting & premium",
  },
  {
    icon: HeartHandshake,
    title: "Client Focused",
    text: "Your vision, our priority",
  },
  {
    icon: Leaf,
    title: "Sustainable Approach",
    text: "Eco-friendly & responsible",
  },
];

export default function InteriorDesign() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const message = [
      "Hello The Space Studio, I would like to discuss an interior design project.",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Project Type: ${data.get("projectType")}`,
      `Location: ${data.get("location")}`,
      `Budget: ${data.get("budget")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    window.open(
      `https://wa.me/917354400317?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="interior-site" id="home">
      {/* NAVBAR */}
      <header className="is-navbar">
        <a href="#home" className="is-brand">
          <House size={31} strokeWidth={1.4} />
          <span>
            <strong>THE SPACE STUDIO</strong>
            <small>INTERIORS | DESIGN | LIFESTYLE</small>
          </span>
        </a>

        <nav className="is-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#process">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="is-button is-button-dark is-nav-cta">
          <MessageCircle size={15} />
          Book a Consultation
        </a>

        <a href="#contact" className="is-mobile-menu" aria-label="Contact us">
          <Menu size={25} />
        </a>
      </header>

      {/* HERO */}
      <section
        className="is-hero"
        style={{ backgroundImage: `url("${images.hero}")` }}
      >
        <div className="is-hero-overlay" />

        <div className="is-hero-content">
          <span className="is-eyebrow is-light">
            INTERIOR DESIGNERS & STUDIO
          </span>

          <h1>
            Beautiful Spaces
            <br />
            for a <em>Better Life</em>
          </h1>

          <p>
            We design functional, stylish and personalized spaces that reflect
            your taste, lifestyle and dreams.
          </p>

          <div className="is-hero-actions">
            <a href="#contact" className="is-button is-button-cream">
              Book a Consultation <ArrowRight size={16} />
            </a>

            <a href="#portfolio" className="is-watch-link">
              <span className="is-play">▶</span>
              Watch Our Work
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="is-benefit-strip">
        {[
          ["✳", "Personalized Designs", "Tailored to Your Lifestyle"],
          ["♧", "Expert Designers", "With Years of Experience"],
          ["◷", "On-Time Delivery", "We Respect Your Time"],
          ["♡", "End-to-End Support", "From Concept to Completion"],
        ].map(([icon, title, text]) => (
          <div className="is-benefit" key={title}>
            <span className="is-benefit-icon">{icon}</span>
            <div>
              <strong>{title}</strong>
              <small>{text}</small>
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="is-section is-services" id="services">
        <div className="is-services-intro">
          <span className="is-eyebrow">OUR SERVICES</span>
          <h2>What We Offer</h2>
          <p>
            From concept to completion, we provide end-to-end interior design
            solutions for your home, office and more.
          </p>
          <a href="#contact" className="is-button is-button-dark">
            Explore All Services <ArrowRight size={16} />
          </a>
        </div>

        <div className="is-service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <a href="#contact" className="is-service-card" key={title}>
              <Icon size={30} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="is-section is-dark is-portfolio" id="portfolio">
        <div className="is-section-heading">
          <div>
            <span className="is-eyebrow is-light">OUR PORTFOLIO</span>
            <h2>Featured Projects</h2>
            <p>
              A glimpse of our recent work. Each space is designed
              <br className="is-desktop-break" /> with care, creativity and
              attention to detail.
            </p>
          </div>
          <a href="#contact" className="is-outline-button">
            View All Projects <ArrowRight size={15} />
          </a>
        </div>

        <div className="is-project-grid">
          {projects.map((project) => (
            <a href="#contact" className="is-project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="is-project-info">
                <div>
                  <h3>{project.title}</h3>
                  <span>
                    {project.category} <i>|</i> {project.year}
                  </span>
                </div>
                <ArrowUpRight size={17} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="is-section is-about" id="about">
        <div className="is-about-image">
          <img src={images.about} alt="Beautifully designed interior space" />
        </div>

        <div className="is-about-copy">
          <span className="is-eyebrow">ABOUT US</span>
          <h2>
            Designing Spaces,
            <br /> Creating Experiences
          </h2>
          <p>
            We are a team of passionate interior designers dedicated to creating
            beautiful, functional and inspiring spaces. With a keen eye for
            detail and a deep understanding of our clients' needs, we bring
            ideas to life, one space at a time.
          </p>

          <div className="is-stats">
            <div>
              <strong>5+</strong>
              <span>Years of Experience</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Happy Clients</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Projects Completed</span>
            </div>
          </div>

          <a href="#contact" className="is-button is-button-dark">
            Learn More About Us <ArrowRight size={15} />
          </a>
        </div>

        <div className="is-about-benefits">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="is-about-benefit" key={title}>
              <span className="is-about-benefit-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="is-section is-testimonials" id="testimonials">
        <div className="is-section-heading">
          <div>
            <span className="is-eyebrow">TESTIMONIALS</span>
            <h2>What Our Clients Say</h2>
            <p>
              We take pride in creating spaces that our clients love.
              <br /> Here's what they have to say about working with us.
            </p>
          </div>

          <a href="#contact" className="is-outline-button is-outline-light">
            View More Reviews <ArrowRight size={15} />
          </a>
        </div>

        <div className="is-review-grid">
          {testimonials.map((review, index) => (
            <article className="is-review-card" key={review.name}>
              <div className="is-review-avatar">{review.name.charAt(0)}</div>
              <div className="is-review-content">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
                <p>“{review.text}”</p>
                <div className="is-stars">★★★★★</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="is-process"
        id="process"
        style={{ backgroundImage: `url("${images.hero}")` }}
      >
        <div className="is-process-shade" />

        <div className="is-process-intro">
          <span className="is-eyebrow is-light">OUR PROCESS</span>
          <h2>How It Works</h2>
          <p>
            Turning your ideas into beautiful spaces is simple with our easy
            5-step process.
          </p>
          <a href="#contact" className="is-button is-button-cream">
            Start Your Project <ArrowRight size={15} />
          </a>
        </div>

        <div className="is-process-steps">
          {process.map(({ icon: Icon, title, text }, index) => (
            <div className="is-process-step" key={title}>
              <span className="is-process-icon">
                <Icon size={22} strokeWidth={1.4} />
              </span>
              {index < process.length - 1 && (
                <span className="is-process-line" />
              )}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="is-contact" id="contact">
        <div
          className="is-contact-banner"
          style={{ backgroundImage: `url("${images.contact}")` }}
        >
          <div className="is-contact-banner-overlay" />
          <div className="is-contact-banner-content">
            <span className="is-eyebrow is-light">YOUR DREAM SPACE</span>
            <h2>
              Let's Create
              <br /> Your Dream Space
            </h2>
            <p>
              Have a project in mind? Let's discuss how we can bring your vision
              to life.
            </p>
            <a href="#contact-form" className="is-button is-button-cream">
              Start Your Project <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="is-contact-details">
          <span className="is-eyebrow">GET IN TOUCH</span>
          <h3>Contact Us</h3>

          <a href="tel:+919876543210">
            <Phone size={17} />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:hello@thespacestudio.com">
            <Mail size={17} />
            <span>hello@thespacestudio.com</span>
          </a>
          <p>
            <MapPin size={17} />
            <span>Indore, Madhya Pradesh</span>
          </p>
          <p>
            <Clock3 size={17} />
            <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
          </p>
        </div>

        <form
          className="is-contact-form"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="is-form-row">
            <input name="name" placeholder="Your Name *" required />
            <input
              name="email"
              type="email"
              placeholder="Your Email *"
              required
            />
          </div>

          <div className="is-form-row">
            <select name="projectType" defaultValue="" required>
              <option value="" disabled>
                Project Type *
              </option>
              <option>Residential Interiors</option>
              <option>Commercial Interiors</option>
              <option>Modular Kitchen</option>
              <option>Renovation</option>
              <option>Space Planning</option>
            </select>

            <input name="location" placeholder="Project Location" />
          </div>

          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select Your Budget
            </option>
            <option>Below ₹2 Lakhs</option>
            <option>₹2–5 Lakhs</option>
            <option>₹5–10 Lakhs</option>
            <option>₹10 Lakhs+</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={3}
            required
          />

          <button type="submit" className="is-button is-button-dark">
            Send Message <ArrowRight size={15} />
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="is-footer">
        <a href="#home" className="is-brand is-footer-brand">
          <House size={28} strokeWidth={1.4} />
          <span>
            <strong>THE SPACE STUDIO</strong>
            <small>INTERIORS | DESIGN | LIFESTYLE</small>
          </span>
        </a>

        <div className="is-footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="is-socials">
          <a
            href="https://instagram.com/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="https://facebook.com/"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={17} />
          </a>

          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={17} />
          </a>
        </div>

        <div className="is-footer-bottom">
          <span>© 2026 The Space Studio. All rights reserved.</span>
          <span>Designed for Beautiful Living</span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        className="is-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </div>
  );
}
