import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const [email, setEmail] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const roles = [
    'Data Scientist',
    'AI Engineer',
    'ML Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      
      // Change text after animation completes (600ms)
      setTimeout(() => {
        setDisplayIndex((prev) => (prev + 1) % roles.length);
        setIsRotating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mdalprpn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        alert('Thanks for subscribing! 🎉');
        setEmail('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  const getArticle = (role) => {
    return role.startsWith('A') ? 'an' : 'a';
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Alex Leu, {getArticle(roles[displayIndex])} <span key={displayIndex} className={`rotating-role ${isRotating ? 'rotating' : ''}`}>{roles[displayIndex]}</span></h1>

        <p className="intro">
          Welcome to my site, powered by AI fuels.
        </p>

        <ul className="activities">
          <li>
            <Link to="/about" className="about-link">Learn more about me</Link>
          </li>
          <li>
            <a href="projects">Check out my projects</a>
          </li>
        </ul>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="email-input-wrapper">
            <input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <span className="email-icon">📧</span>
          </div>
          <button type="submit" className="submit-btn">
            Get email updates
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
