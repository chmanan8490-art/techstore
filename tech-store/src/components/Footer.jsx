import { Link } from "react-router-dom";

function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About TechStore</h4>
          <p>Your premier destination for cutting-edge technology products. We offer the latest gadgets, laptops, smartphones, and accessories at competitive prices.</p>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Twitter">X</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/shop">Shop All Products</Link></li>
            <li><Link to="/deals">Special Deals</Link></li>
            <li><Link to="/new">New Arrivals</Link></li>
            <li><Link to="/brands">Browse by Brand</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns Policy</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><Link to="/track-order">Track Order</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>📧 support@techstore.com</li>
            <li>📞 1-800-TECH-FUN</li>
            <li>🏢 123 Tech Avenue, Silicon Valley, CA 94025</li>
            <li>🕐 Mon-Fri: 9AM - 6PM PST</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-policies">
          <a href="#privacy">Privacy Policy</a>
          <span>•</span>
          <a href="#terms">Terms & Conditions</a>
          <span>•</span>
          <a href="#cookies">Cookie Settings</a>
        </div>
        <p className="copyright">
          &copy; {currentYear} TechStore. All rights reserved. Made with ❤️ for tech enthusiasts.
        </p>
      </div>
    </footer>
  );
}

export default Footer;