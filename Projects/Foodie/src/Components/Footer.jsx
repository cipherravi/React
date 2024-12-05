import "./Footer.css";

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
          <a href="/">About us</a>
          <a href="/">Careers</a>
          <a href="/">Team</a>
        </div>
        <div className="contact-us">
          <span>Contact us</span>
          <a href="/">Help & Support</a>
          <a href="/">Partner with us</a>
          <a href="/">Ride With us</a>
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
