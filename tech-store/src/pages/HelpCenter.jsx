import { useState } from "react";

export default function HelpCenter() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "shipping",
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Overnight shipping is also available."
    },
    {
      category: "shipping",
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 150 countries. International shipping typically takes 10-15 business days."
    },
    {
      category: "shipping",
      question: "What's your shipping cost?",
      answer: "Shipping is FREE on all orders over $50. Standard shipping on smaller orders is $5.99."
    },
    {
      category: "returns",
      question: "What's your return policy?",
      answer: "We offer 30-day returns on all products. Items must be in original condition with packaging."
    },
    {
      category: "returns",
      question: "How do I return an item?",
      answer: "Log into your account, go to Orders, and click 'Return Item'. Print the return label and send it back."
    },
    {
      category: "returns",
      question: "How long do refunds take?",
      answer: "Refunds are processed within 5-7 business days after we receive your return."
    },
    {
      category: "payment",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and digital wallets."
    },
    {
      category: "payment",
      question: "Is my payment information secure?",
      answer: "Yes! We use SSL encryption and PCI compliance to protect all payment information."
    },
    {
      category: "payment",
      question: "Can I use multiple payment methods?",
      answer: "Yes, you can split payment between a credit card and PayPal at checkout."
    },
    {
      category: "account",
      question: "How do I create an account?",
      answer: "Click 'Account' in the navbar, then 'Sign Up'. Fill in your email and create a password."
    },
    {
      category: "account",
      question: "How do I reset my password?",
      answer: "On the login page, click 'Forgot Password' and follow the email instructions."
    },
    {
      category: "account",
      question: "Can I have multiple accounts?",
      answer: "Each email address can only have one account. However, you can add multiple shipping addresses."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="help-center-page">
      <div className="page-header">
        <h1>🆘 Help Center</h1>
        <p>Find answers to your questions</p>
      </div>

      <div className="help-container">
        <div className="help-search">
          <input
            type="text"
            placeholder="Search help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="help-content">
          <div className="help-categories">
            <h3>Categories</h3>
            <button
              className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All
            </button>
            <button
              className={`category-btn ${activeCategory === "shipping" ? "active" : ""}`}
              onClick={() => setActiveCategory("shipping")}
            >
              📦 Shipping
            </button>
            <button
              className={`category-btn ${activeCategory === "returns" ? "active" : ""}`}
              onClick={() => setActiveCategory("returns")}
            >
              🔄 Returns
            </button>
            <button
              className={`category-btn ${activeCategory === "payment" ? "active" : ""}`}
              onClick={() => setActiveCategory("payment")}
            >
              💳 Payment
            </button>
            <button
              className={`category-btn ${activeCategory === "account" ? "active" : ""}`}
              onClick={() => setActiveCategory("account")}
            >
              👤 Account
            </button>
          </div>

          <div className="faqs">
            <h3>{filteredFaqs.length} Results</h3>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="no-results">No results found. Try a different search.</p>
            )}
          </div>
        </div>

        <div className="help-contact">
          <h3>Still need help?</h3>
          <p>Can't find what you're looking for? Contact our support team.</p>
          <div className="contact-options">
            <a href="mailto:support@techstore.com" className="contact-btn">
              📧 Email Support
            </a>
            <a href="tel:+15551234567" className="contact-btn">
              📞 Call Us
            </a>
            <a href="/contact" className="contact-btn">
              💬 Contact Form
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
