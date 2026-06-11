import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Simulate login
    setSuccess(true);
    setFormData({ email: "", password: "", rememberMe: false });
    setTimeout(() => {
      setSuccess(false);
      // In a real app, you'd redirect to dashboard
      alert("Login successful! Welcome to TechStore");
    }, 1500);
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>🛍️ TechStore</h1>
            <h2>Sign In</h2>
            <p>Welcome back! Sign in to your account</p>
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">✓ Login successful!</div>}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-login">
            <button className="social-btn google">
              <span>🔍</span> Sign in with Google
            </button>
            <button className="social-btn apple">
              <span>🍎</span> Sign in with Apple
            </button>
          </div>

          <div className="login-footer">
            <p>Don't have an account?</p>
            <Link to="/register" className="signup-link">
              Create account
            </Link>
          </div>
        </div>

        <div className="login-side">
          <div className="side-content">
            <h3>Why Shop with TechStore?</h3>
            <div className="benefit-list">
              <div className="benefit-item">
                <span className="icon">✓</span>
                <span>Best prices on tech products</span>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <span>Fast and free shipping</span>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <span>30-day returns guarantee</span>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <span>24/7 customer support</span>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <span>100% secure payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;