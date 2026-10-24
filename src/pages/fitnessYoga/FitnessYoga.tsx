import {
  ArrowRight,
  Activity,
  Dumbbell,
  Heart,
  Menu,
  X,
  CheckCircle2,
  Clock3,
  Users,
  Leaf,
  Mail,
  MapPin,
  Phone,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./FitnessYoga.css";

const fitnessImages = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85",
  strength:
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=85",
  weightLoss:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85",
  yoga: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=85",
  functional:
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=700&q=85",
  wellness:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  coach:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=85",
};

const programs = [
  {
    title: "Strength Training",
    subtitle: "Build Muscle & Power",
    description: "Structured workouts to help you become stronger.",
    image: fitnessImages.strength,
    icon: Dumbbell,
  },
  {
    title: "Weight Loss Program",
    subtitle: "Get Fit & Feel Healthy",
    description: "A sustainable approach to fitness and fat loss.",
    image: fitnessImages.weightLoss,
    icon: Activity,
  },
  {
    title: "Yoga & Flexibility",
    subtitle: "Improve Balance & Focus",
    description: "Build flexibility, mobility and inner calm.",
    image: fitnessImages.yoga,
    icon: Leaf,
  },
  {
    title: "Functional Fitness",
    subtitle: "Move Better, Live Better",
    description: "Everyday strength, balance and endurance.",
    image: fitnessImages.functional,
    icon: Heart,
  },
];

const reviews = [
  {
    name: "Pooja Sharma",
    type: "Weight Loss Client",
    text: "The personalized plan and consistent support helped me build healthier habits and feel stronger.",
  },
  {
    name: "Amit Verma",
    type: "Strength Training Client",
    text: "Best trainer I've worked with. Very motivating and approachable. Highly recommended!",
  },
  {
    name: "Sneha Patel",
    type: "Yoga Client",
    text: "The yoga sessions have brought more calm, balance and flexibility to my daily routine.",
  },
];

export default function FitnessYoga() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "Personal Training",
    mode: "In-person",
    message: "",
  });

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello Shubham Fitness & Yoga!",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Fitness Goal: ${form.goal}`,
      `Training Preference: ${form.mode}`,
      `Message: ${form.message || "I'd like to know more about your programs."}`,
    ].join("\n");

    window.open(
      `https://wa.me/917354400317?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fy-site">
      <header className="fy-header">
        <a href="#fy-home" className="fy-brand" onClick={closeMenu}>
          <span className="fy-brand-icon">
            <Activity size={27} />
          </span>
          <span>
            <strong>FITLIFE</strong>
            <small>FITNESS & YOGA</small>
          </span>
        </a>

        <button
          className="fy-menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`fy-nav ${menuOpen ? "fy-nav-open" : ""}`}>
          {[
            ["Home", "#fy-home"],
            ["About", "#fy-about"],
            ["Services", "#fy-programs"],
            ["Programs", "#fy-programs"],
            ["Testimonials", "#fy-reviews"],
            ["Blog", "#fy-process"],
            ["Contact", "#fy-contact"],
          ].map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="fy-nav-cta" href="#fy-contact" onClick={closeMenu}>
            Join Now <ArrowRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section
          className="fy-hero"
          id="fy-home"
          style={{ backgroundImage: `url(${fitnessImages.hero})` }}
        >
          <div className="fy-hero-overlay" />
          <div className="fy-hero-content">
            <span className="fy-eyebrow">
              FITNESS TRAINER & YOGA INSTRUCTOR
            </span>
            <h1>
              Stronger Body
              <br />
              <span>Calmer Mind</span>
            </h1>
            <p>
              Personalized fitness and yoga programs to help
              <br className="fy-desktop-break" /> you build a healthier, happier
              and more confident you.
            </p>
            <div className="fy-hero-actions">
              <a className="fy-button fy-button-green" href="#fy-contact">
                Start Your Fitness Journey <ArrowRight size={16} />
              </a>
              <a className="fy-button fy-button-outline" href="#fy-programs">
                View Programs
              </a>
            </div>
          </div>
          <div className="fy-hero-badge">
            <span>
              <CheckCircle2 size={17} />
            </span>
            <div>
              <strong>Your Goals. Your Pace.</strong>
              <small>Your personal fitness journey starts here.</small>
            </div>
          </div>
        </section>

        <section className="fy-benefits">
          {[
            {
              icon: Users,
              title: "Personal Training",
              text: "1-on-1 Guidance",
            },
            { icon: Dumbbell, title: "Group Classes", text: "Train Together" },
            { icon: Leaf, title: "Yoga Sessions", text: "Find Your Balance" },
            {
              icon: Heart,
              title: "Lifestyle Guidance",
              text: "Build Better Habits",
            },
          ].map(({ icon: Icon, title, text }) => (
            <a href="#fy-programs" className="fy-benefit" key={title}>
              <span>
                <Icon size={22} />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            </a>
          ))}
        </section>

        <section className="fy-section fy-programs" id="fy-programs">
          <div className="fy-section-heading">
            <div>
              <span className="fy-eyebrow fy-eyebrow-dark">OUR PROGRAMS</span>
              <h2>Transform Your Life</h2>
              <p>
                Choose from personalized fitness and yoga programs designed
                around your goals and lifestyle.
              </p>
            </div>
            <a className="fy-outline-button" href="#fy-contact">
              Explore All Programs <ArrowRight size={15} />
            </a>
          </div>

          <div className="fy-program-grid">
            {programs.map(
              ({ title, subtitle, description, image, icon: Icon }) => (
                <article className="fy-program-card" key={title}>
                  <a href="#fy-contact" className="fy-program-image">
                    <img src={image} alt={title} loading="lazy" />
                    <span className="fy-program-icon">
                      <Icon size={19} />
                    </span>
                  </a>
                  <div className="fy-program-copy">
                    <h3>{title}</h3>
                    <span className="fy-program-subtitle">{subtitle}</span>
                    <p>{description}</p>
                    <a href="#fy-contact" className="fy-text-link">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="fy-about" id="fy-about">
          <div className="fy-about-image">
            <img
              src={fitnessImages.wellness}
              alt="Yoga and mindful wellness"
              loading="lazy"
            />
            <div className="fy-image-tag">
              <Leaf size={20} />
              <span>Mind • Body • Balance</span>
            </div>
          </div>

          <div className="fy-about-copy">
            <span className="fy-eyebrow fy-eyebrow-dark">ABOUT YOUR COACH</span>
            <h2>
              Your Fitness &<br />
              Wellness Partner
            </h2>
            <p>
              I'm a fitness trainer and yoga instructor passionate about helping
              people achieve their health and wellness goals. With personalized
              plans and consistent support, I'm here to guide you every step of
              the way.
            </p>

            <ul className="fy-check-list">
              <li>
                <CheckCircle2 size={17} /> Personalized workout plans
              </li>
              <li>
                <CheckCircle2 size={17} /> Flexible training options
              </li>
              <li>
                <CheckCircle2 size={17} /> Progress tracking & guidance
              </li>
              <li>
                <CheckCircle2 size={17} /> Supportive, judgment-free approach
              </li>
            </ul>

            <div className="fy-stats">
              <div>
                <strong>5+</strong>
                <small>Years Experience</small>
              </div>
              <div>
                <strong>1000+</strong>
                <small>Happy Clients</small>
              </div>
              <div>
                <strong>5000+</strong>
                <small>Hours Trained</small>
              </div>
            </div>

            <a href="#fy-contact" className="fy-button fy-button-dark">
              Know More About Me <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section className="fy-section fy-reviews" id="fy-reviews">
          <div className="fy-section-heading">
            <div>
              <span className="fy-eyebrow fy-eyebrow-dark">CLIENT STORIES</span>
              <h2>Real People. Real Results.</h2>
              <p>
                Every fitness journey is different. Here's what our clients say.
              </p>
            </div>
            <a href="#fy-contact" className="fy-outline-button">
              Start Your Journey <ArrowRight size={15} />
            </a>
          </div>

          <div className="fy-review-grid">
            {reviews.map((review) => (
              <article className="fy-review-card" key={review.name}>
                <div className="fy-review-top">
                  <span className="fy-review-avatar">
                    <Activity size={21} />
                  </span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.type}</small>
                  </div>
                </div>
                <div className="fy-review-stars">★★★★★</div>
                <p>“{review.text}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fy-process" id="fy-process">
          <div className="fy-process-heading">
            <span className="fy-eyebrow">YOUR NEXT CHAPTER</span>
            <h2>
              Small Steps.
              <br />
              Stronger You.
            </h2>
            <p>Build a routine that works for your real life.</p>
            <a className="fy-button fy-button-green" href="#fy-contact">
              Get Started <ArrowRight size={15} />
            </a>
          </div>

          <div className="fy-process-steps">
            {[
              ["01", "Set Your Goals", "Tell me what you want to achieve."],
              ["02", "Get Your Plan", "A program tailored to your needs."],
              [
                "03",
                "Train Consistently",
                "Build healthy habits step by step.",
              ],
              ["04", "Track Progress", "Review your progress together."],
            ].map(([number, title, description]) => (
              <div className="fy-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fy-contact" id="fy-contact">
          <div className="fy-contact-promo">
            <img
              src={fitnessImages.coach}
              alt="Fitness training session"
              loading="lazy"
            />
            <div className="fy-contact-promo-overlay" />
            <div className="fy-contact-promo-copy">
              <span className="fy-eyebrow">READY TO BEGIN?</span>
              <h2>
                Your Health.
                <br />
                Your Goals.
                <br />
                My Support.
              </h2>
              <p>Let's build a healthier, stronger and happier you.</p>
              <a href="#fy-contact-form" className="fy-button fy-button-green">
                Book a Free Consultation <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="fy-contact-info">
            <span className="fy-eyebrow fy-eyebrow-dark">GET IN TOUCH</span>
            <h3>Let's Talk Fitness</h3>
            <p>
              <Phone size={17} /> +91 73544 00317
            </p>
            <p>
              <Mail size={17} /> shubh18tech@gmail.com
            </p>
            <p>
              <MapPin size={17} /> Mumbai, Maharashtra
            </p>
            <p>
              <Clock3 size={17} /> Mon–Sun · 10 AM–10 PM
            </p>
            <p>
              <FaInstagram size={17} /> @shubhamk.online
            </p>
            <div className="fy-contact-note">
              <CalendarDays size={19} />
              <span>
                <strong>First consultation</strong>
                <small>Discuss your goals and find your ideal program.</small>
              </span>
            </div>
          </div>

          <form
            className="fy-contact-form"
            id="fy-contact-form"
            onSubmit={submitEnquiry}
          >
            <h3>Start Your Journey</h3>
            <p>Fill in your details and we'll connect with you.</p>

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
                required
                type="email"
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Fitness Goal
              <select
                value={form.goal}
                onChange={(e) => updateForm("goal", e.target.value)}
              >
                <option>Personal Training</option>
                <option>Weight Loss</option>
                <option>Strength Training</option>
                <option>Yoga & Flexibility</option>
                <option>General Fitness</option>
              </select>
            </label>

            <label>
              Training Preference
              <select
                value={form.mode}
                onChange={(e) => updateForm("mode", e.target.value)}
              >
                <option>In-person</option>
                <option>Online</option>
                <option>Group Classes</option>
                <option>Not Sure Yet</option>
              </select>
            </label>

            <label>
              Tell Us About Your Goals
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => updateForm("message", e.target.value)}
                placeholder="What would you like help with?"
              />
            </label>

            <button
              className="fy-button fy-button-green fy-submit"
              type="submit"
            >
              Send Enquiry on WhatsApp <ArrowRight size={15} />
            </button>
          </form>
        </section>
      </main>

      <footer className="fy-footer">
        <a href="#fy-home" className="fy-brand">
          <span className="fy-brand-icon">
            <Activity size={26} />
          </span>
          <span>
            <strong>FITLIFE</strong>
            <small>FITNESS & YOGA</small>
          </span>
        </a>
        <p>Stronger every day. Healthier for life.</p>
        <div className="fy-footer-links">
          {[
            ["Home", "#fy-home"],
            ["About", "#fy-about"],
            ["Programs", "#fy-programs"],
            ["Testimonials", "#fy-reviews"],
            ["Contact", "#fy-contact"],
          ].map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="fy-footer-social">
          <a
            href="https://www.instagram.com/shubhamk.online?rpxt=MXVzajlmbW96MDNmbA=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a href="shubh18tech@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubhamkonline"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
        <small className="fy-copyright">
          © {new Date().getFullYear()} FitLife Fitness & Yoga. All rights
          reserved.
        </small>
      </footer>
    </div>
  );
}
