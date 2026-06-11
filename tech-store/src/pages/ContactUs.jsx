import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="contact-page">
      <div className="page-header contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Tech Street</p>
            <p>San Francisco, CA 94102</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Monday - Friday, 9AM - 6PM PST</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>support@techstore.com</p>
            <p>hello@techstore.com</p>
          </div>
          <div className="info-item">
            <h3>🌐 Follow Us</h3>
            <div className="social-links">
              <button>Facebook</button>
              <button>Twitter</button>
              <button>Instagram</button>
              <button>LinkedIn</button>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us your thoughts..."
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>❓ What is your return policy?</h4>
            <p>We offer 30-day returns on all products with full refunds.</p>
          </div>
          <div className="faq-item">
            <h4>🚚 How long does shipping take?</h4>
            <p>Standard shipping takes 5-7 business days. Express shipping available.</p>
          </div>
          <div className="faq-item">
            <h4>💳 What payment methods do you accept?</h4>
            <p>We accept credit cards, PayPal, and digital wallets.</p>
          </div>
          <div className="faq-item">
            <h4>🔒 Is my data secure?</h4>
            <p>Yes, we use SSL encryption to protect all transactions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
