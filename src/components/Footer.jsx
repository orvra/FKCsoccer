import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer px-4 py-10 bg-base-100 text-base-content">
      <aside>
        <img className="w-20" src="/images/logo/FKC_v3.png" alt="logo" />
        <p>Footy King Championship Ltd.</p>
      </aside>
      <nav>
        <header className="footer-title">FKC</header>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/register" className="link link-hover">
          Register
        </Link>
        <Link to="/schedule" className="link link-hover">
          Schedule & Results
        </Link>
        <Link to="/standings" className="link link-hover">
          Standings
        </Link>
      </nav>
      <nav>
        <header className="footer-title">About Us</header>
        <Link to="/who-we-are" className="link link-hover">
          Who we are
        </Link>
        <Link to="/game-rules" className="link link-hover">
          Game rules
        </Link>
        <Link to="/tournament-format" className="link link-hover">
          Tournament format
        </Link>
        <Link to="/prize-money" className="link link-hover">
          Prize money
        </Link>
        <Link to="/eligibility" className="link link-hover">
          Eligibility
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
