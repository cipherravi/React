import { Link } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  return (
    <>
      <div className="div-wrapper">
        <div className="footer-logo">
          <img src="/foodie-logo.png" alt="" />
          <div className="title">Foodie</div>
        </div>
        <div className="company-info">
          <span>Company</span>
          <Link href="/">About us</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Team</Link>
        </div>
        <div className="contact-us">
          <span className="text-red-900">Contact us</span>
          <Link href="/">Help & Support</Link>
          <Link href="/">Partner with us</Link>
          <Link href="/">Ride With us</Link>
        </div>
        <div className="social-links">
          <span>Social Links</span>
          <a href="https://linkedin.com/in/cipherravi" target="_blank">
            Linkedin <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/cipherravi" target="_blank">
            Twitter <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://github.com/cipherravi" target="_blank">
            Github <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
