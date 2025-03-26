import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/assets/mut-logo.png" alt="MUTC Logo" />
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/tracks">Tracks</a>
          <a href="/leadership">Leadership</a>
          <a href="/Events">Events</a>
        </div>

        <div className="footer-social">
          <a href="https://x.com/Elkido502" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com/elkido_official/" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/elias-ngugi/" target="_blank">LinkedIn</a>
        </div>

        <div className="footer-copy">
          <p>© 2025 Murang'a University Tech Club. All rights reserved.</p>
          <p>Created by ❤Elkido❤</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
