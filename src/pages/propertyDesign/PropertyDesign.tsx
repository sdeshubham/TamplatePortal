import React, { useMemo, useState } from "react";
import "./PropertyDesign.css";

type Listing = {
  title: string;
  type: string;
  status: "For Sale" | "For Rent";
  location: string;
  beds: string;
  area: string;
  price: string;
  image: string;
};
const listings: Listing[] = [
  {
    title: "3 BHK Apartment",
    type: "Apartment",
    status: "For Sale",
    location: "Vijay Nagar, Indore",
    beds: "3 Beds · 3 Baths",
    area: "1,850 sqft",
    price: "₹85,00,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "4 BHK Villa",
    type: "Villa",
    status: "For Sale",
    location: "Bicholi Mardana, Indore",
    beds: "4 Beds · 4 Baths",
    area: "3,200 sqft",
    price: "₹2,50,00,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Office Space",
    type: "Commercial",
    status: "For Rent",
    location: "Scheme 54, Indore",
    beds: "Furnished Office",
    area: "1,300 sqft",
    price: "₹45,000 / month",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Residential Plot",
    type: "Plot",
    status: "For Sale",
    location: "Super Corridor, Indore",
    beds: "Residential Land",
    area: "1,000 sqft",
    price: "₹45,00,000",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Premium 2 BHK Flat",
    type: "Apartment",
    status: "For Rent",
    location: "Palasia, Indore",
    beds: "2 Beds · 2 Baths",
    area: "1,200 sqft",
    price: "₹25,000 / month",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Modern Family Home",
    type: "House",
    status: "For Sale",
    location: "Nipania, Indore",
    beds: "3 Beds · 3 Baths",
    area: "2,100 sqft",
    price: "₹1,15,00,000",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
  },
];
export default function PropertyDesign() {
  const [mode, setMode] = useState<"All" | "For Sale" | "For Rent">("All");
  const [propertyType, setPropertyType] = useState("Any Property");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("Any Budget");
  const [searched, setSearched] = useState(false);
  const filtered = useMemo(
    () =>
      listings.filter(
        (p) =>
          (mode === "All" || p.status === mode) &&
          (propertyType === "Any Property" || p.type === propertyType) &&
          (!location ||
            p.location.toLowerCase().includes(location.toLowerCase()) ||
            location.toLowerCase().includes("indore")) &&
          (budget === "Any Budget" ||
            (budget === "Under ₹50 Lakh" &&
              Number(p.price.replace(/[^0-9]/g, "")) < 5000000) ||
            (budget === "₹50 Lakh–₹1 Crore" &&
              Number(p.price.replace(/[^0-9]/g, "")) >= 5000000 &&
              Number(p.price.replace(/[^0-9]/g, "")) <= 10000000) ||
            (budget === "Above ₹1 Crore" &&
              Number(p.price.replace(/[^0-9]/g, "")) > 10000000)),
      ),
    [mode, propertyType, location, budget],
  );
  const enquire = (title: string) => {
    window.location.href =
      "https://wa.me/917354400317?text=" +
      encodeURIComponent(
        `Hi Shubham, I am interested in ${title}. Please share more details.`,
      );
  };
  return (
    <div className="prime-site">
      <header className="prime-header">
        <a href="#home" className="prime-brand">
          <span className="prime-logo">⌂</span>
          <span>
            <b>PrimeHomes</b>
            <small>BUY · SELL · RENT</small>
          </span>
        </a>
        <nav className="prime-nav">
          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="prime-phone" href="tel:+917354400317">
          ☎ +91 73544 00317
        </a>
        <a className="prime-header-cta" href="#contact">
          Get In Touch
        </a>
      </header>
      <main>
        <section className="prime-hero" id="home">
          <div className="prime-hero-overlay">
            <span className="prime-eyebrow">YOUR TRUSTED PROPERTY PARTNER</span>
            <h1>
              Find Your Dream Home
              <br />
              With Us
            </h1>
            <p>
              Buy, Sell or Rent — We help you find the perfect property
              <br className="prime-desktop" /> that fits your lifestyle and
              budget.
            </p>
          </div>
          <div className="prime-search">
            <div className="prime-search-tabs">
              {(["For Sale", "For Rent", "All"] as const).map((v) => (
                <button
                  key={v}
                  className={mode === v ? "active" : ""}
                  onClick={() => setMode(v)}
                >
                  {v === "All" ? "Buy / Sell / Rent" : v}
                </button>
              ))}
            </div>
            <div className="prime-search-fields">
              <label>
                Property Type
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option>Any Property</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                  <option>House</option>
                </select>
              </label>
              <label>
                Location
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter area or city"
                />
              </label>
              <label>
                Budget
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option>Any Budget</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50 Lakh–₹1 Crore</option>
                  <option>Above ₹1 Crore</option>
                </select>
              </label>
              <button
                className="prime-search-button"
                onClick={() => {
                  setSearched(true);
                  document
                    .getElementById("properties")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Search <span>⌕</span>
              </button>
            </div>
          </div>
        </section>
        <section className="prime-benefits">
          {[
            {
              icon: "♧",
              title: "Verified Properties",
              sub: "Genuine listings",
            },
            {
              icon: "♙",
              title: "Expert Guidance",
              sub: "From search to handover",
            },
            { icon: "◇", title: "Best Deals", sub: "Get the right value" },
            {
              icon: "♧",
              title: "End-to-End Support",
              sub: "We're with you always",
            },
          ].map((x) => (
            <div className="prime-benefit" key={x.title}>
              <span>{x.icon}</span>
              <div>
                <b>{x.title}</b>
                <small>{x.sub}</small>
              </div>
            </div>
          ))}
        </section>
        <section className="prime-section" id="properties">
          <div className="prime-section-head">
            <div>
              <span className="prime-eyebrow prime-blue-eyebrow">
                HANDPICKED LISTINGS
              </span>
              <h2>Featured Properties</h2>
              <p>Explore our latest residential and commercial properties.</p>
              {searched && (
                <small className="prime-results-note">
                  Showing {filtered.length} matching properties
                </small>
              )}
            </div>
            <div className="prime-filter-pills">
              {(["All", "For Sale", "For Rent"] as const).map((v) => (
                <button
                  key={v}
                  className={mode === v ? "active" : ""}
                  onClick={() => setMode(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="prime-property-grid">
            {filtered.slice(0, 4).map((p) => (
              <article className="prime-property-card" key={p.title}>
                <div className="prime-property-photo">
                  <img src={p.image} alt={p.title} />
                  <span className={p.status === "For Rent" ? "rent" : "sale"}>
                    {p.status}
                  </span>
                  <button
                    className="prime-heart"
                    aria-label="Save property"
                    onClick={(e) => e.currentTarget.classList.toggle("saved")}
                  >
                    ♡
                  </button>
                </div>
                <div className="prime-property-info">
                  <h3>{p.title}</h3>
                  <p className="prime-location">⌖ {p.location}</p>
                  <div className="prime-property-meta">
                    <span>{p.beds}</span>
                    <span>{p.area}</span>
                  </div>
                  <strong>{p.price}</strong>
                  <button
                    className="prime-details"
                    onClick={() => enquire(p.title)}
                  >
                    View Details <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="prime-empty">
              No matching sample properties. Try another filter or contact us
              for assistance.
            </div>
          )}
          <div className="prime-center">
            <a href="#contact" className="prime-outline-button">
              View All Properties <span>→</span>
            </a>
          </div>
        </section>
        <section className="prime-services" id="services">
          <div className="prime-services-panel">
            <span className="prime-eyebrow">WHAT WE DO</span>
            <h2>Our Services</h2>
            <p>
              We offer a complete range of real estate services to make your
              property journey simple and successful.
            </p>
            <div className="prime-service-grid">
              {[
                {
                  icon: "⌂",
                  title: "Buy Property",
                  desc: "Find your dream home",
                },
                {
                  icon: "↗",
                  title: "Sell Property",
                  desc: "Get the best value",
                },
                {
                  icon: "▣",
                  title: "Rent Property",
                  desc: "Find or list rentals",
                },
                {
                  icon: "▤",
                  title: "Property Investment",
                  desc: "Secure your future",
                },
              ].map((s) => (
                <div key={s.title}>
                  <span>{s.icon}</span>
                  <b>{s.title}</b>
                  <small>{s.desc}</small>
                </div>
              ))}
            </div>
            <a className="prime-outline-light" href="#contact">
              Explore All Services <span>→</span>
            </a>
          </div>
          <div className="prime-services-promo">
            <span className="prime-eyebrow">
              PERSONALIZED REAL ESTATE ADVICE
            </span>
            <h2>
              Get Expert Advice
              <br />
              for Your Property Needs
            </h2>
            <p>
              Talk to our experts and get personalized guidance for buying,
              selling or renting a property.
            </p>
            <a className="prime-blue-button" href="#contact">
              Contact Us <span>→</span>
            </a>
          </div>
        </section>
        <section className="prime-why" id="why">
          <div className="prime-why-title">
            <span className="prime-eyebrow prime-blue-eyebrow">
              WHY CHOOSE US
            </span>
            <h2>Your Trusted Real Estate Partner</h2>
          </div>
          <div className="prime-stats">
            <div>
              <b>100+</b>
              <small>Properties Listed</small>
            </div>
            <div>
              <b>50+</b>
              <small>Happy Clients</small>
            </div>
            <div>
              <b>5+</b>
              <small>Years of Experience</small>
            </div>
            <div>
              <b>100%</b>
              <small>Transparent Process</small>
            </div>
          </div>
        </section>
        <section className="prime-section prime-reviews" id="reviews">
          <div className="prime-section-head">
            <div>
              <span className="prime-eyebrow prime-blue-eyebrow">
                WHAT OUR CLIENTS SAY
              </span>
              <h2>Real Stories, Real Trust</h2>
              <p>Real stories from our happy clients.</p>
            </div>
            <div className="prime-slider-arrows">←　→</div>
          </div>
          <div className="prime-review-grid">
            {[
              {
                name: "Rohit Mehta",
                role: "Home Buyer",
                text: "Excellent service and very professional approach. Helped us find our dream home in just 2 weeks!",
              },
              {
                name: "Pooja Sharma",
                role: "Property Seller",
                text: "The team was supportive throughout the process. Got the best price for my property. Highly recommended!",
              },
              {
                name: "Amit Verma",
                role: "Tenant",
                text: "Found a great rental property within my budget. Very smooth and hassle-free experience.",
              },
            ].map((r, i) => (
              <article className="prime-review-card" key={r.name}>
                <div className="prime-review-person">
                  <span className={`prime-avatar prime-avatar-${i + 1}`} />
                  <div>
                    <b>{r.name}</b>
                    <small>{r.role}</small>
                  </div>
                </div>
                <p>“{r.text}”</p>
                <div className="prime-stars">★★★★★</div>
              </article>
            ))}
          </div>
        </section>
        <section className="prime-bottom-cta">
          <div>
            <h2>Ready to Find Your Perfect Property?</h2>
            <p>
              Whether you want to buy, sell or rent — we're here to help you at
              every step.
            </p>
          </div>
          <div>
            <a className="prime-white-button" href="#contact">
              Get In Touch <span>→</span>
            </a>
            <a
              className="prime-whatsapp-button"
              href="https://wa.me/917354400317"
            >
              ◉ Chat on WhatsApp
            </a>
          </div>
        </section>
        <section className="prime-contact" id="contact">
          <div>
            <span className="prime-eyebrow prime-blue-eyebrow">
              LET'S CONNECT
            </span>
            <h2>
              Tell Us What
              <br />
              You're Looking For
            </h2>
            <p>
              Share a few details and our property advisor will get in touch.
            </p>
            <p className="prime-contact-detail">☎　+91 73544 00317</p>
            <p className="prime-contact-detail">✉　shubh18tech@gmail.com</p>
            <p className="prime-contact-detail">⌖　Mumbai, Maharashtra</p>
          </div>
          <form
            className="prime-contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const d = new FormData(e.currentTarget);
              const msg = `Hi PrimeHomes, my name is ${d.get("name")}. I am interested in ${d.get("interest")}. Location: ${d.get("location")}. Budget: ${d.get("budget")}. Phone: ${d.get("phone")}.`;
              window.location.href =
                "https://wa.me/917354400317?text=" + encodeURIComponent(msg);
            }}
          >
            <label>
              Your Name
              <input name="name" required placeholder="Full name" />
            </label>
            <label>
              Phone Number
              <input
                name="phone"
                required
                type="tel"
                placeholder="Mobile number"
              />
            </label>
            <label>
              I'm interested in
              <select name="interest">
                <option>Buying a property</option>
                <option>Selling a property</option>
                <option>Renting a property</option>
                <option>Commercial property</option>
              </select>
            </label>
            <label>
              Preferred Location
              <input name="location" placeholder="Area or city" />
            </label>
            <label className="prime-form-full">
              Budget Range
              <select name="budget">
                <option>Not decided yet</option>
                <option>Under ₹25 Lakh</option>
                <option>₹25–50 Lakh</option>
                <option>₹50 Lakh–₹1 Crore</option>
                <option>Above ₹1 Crore</option>
              </select>
            </label>
            <button type="submit" className="prime-form-submit">
              Send Enquiry <span>→</span>
            </button>
          </form>
        </section>
      </main>
      <footer className="prime-footer">
        <div className="prime-footer-main">
          <a className="prime-brand prime-footer-brand" href="#home">
            <span className="prime-logo">⌂</span>
            <span>
              <b>PrimeHomes</b>
              <small>BUY · SELL · RENT</small>
            </span>
          </a>
          <div>
            <b>Quick Links</b>
            <a href="#properties">Properties</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#why">Why Choose Us</a>
          </div>
          <div>
            <b>Contact Us</b>
            <span>+91 73544 00317</span>
            <span>shubh18tech@gmail.com</span>
            <span>Mumbai, Maharashtra</span>
          </div>
          <div>
            <b>Follow Us</b>
            <div className="prime-socials">
              <a href="#contact">f</a>
              <a href="#contact">◎</a>
              <a href="#contact">in</a>
            </div>
          </div>
        </div>
        <div className="prime-footer-bottom">
          <span>© 2026 PrimeHomes. All rights reserved.</span>
          <span>Find · Invest · Build Your Future</span>
        </div>
      </footer>
    </div>
  );
}
