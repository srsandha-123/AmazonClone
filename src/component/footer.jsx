import React from 'react'
import './footer.css';
function Footer() {
    return ( 
    <>
    <div>
  <div className="foot-panel1">
    Back to  Top
  </div>
  <div className="foot-panel2">
    <ul className="list">
      <p>
        Get to Know Us
      </p>
      <a href="#">
        Careers
      </a>
      <a href="#">
        Blog
      </a>
      <a href="#">
        About Amazon
      </a>
      <a href="#">
        Investor Relations
      </a>
      <a href="#">
        Amazon Devices
      </a>
      <a href="#">
        Amazon Science
      </a>
    </ul>
    <ul className="list">
      <p>
        Make Money with Us
      </p>
      <a href="#">
        Sell on Amazon Business
      </a>
      <a href="#">
        Sell apps on Amazon
      </a>
      <a href="#">
        Become an Affiliate
      </a>
      <a href="#">
        Advertise Your Products
      </a>
      <a href="#">
        Self-Publish with Us
      </a>
      <a href="#">
        Host an Amazon Hub
      </a>
      <a href="#">
        See More Make Money with Us
      </a>
    </ul>
    <ul className="list">
      <p>
        Amazon Payment Products
      </p>
      <a href="#">
        Amazon Business Card
      </a>
      <a href="#">
        Shop with Points
      </a>
      <a href="#">
        Reload Your Balance
      </a>
      <a href="#">
        Amazon Currency Converter
      </a>
    </ul>
    <ul className="list">
      <p>
        Let Us Help You
      </p>
      <a href="#">
        Amazon and COVID-19
      </a>
      <a href="#">
        Your Orders
      </a>
      <a href="#">
        Shipping Rates & Policies
      </a>
      <a href="#">
        Investor Relations
      </a>
      <a href="#">
        Returns & Replacements
      </a>
      <a href="#">
        Manage Your Content and Devices
      </a>
      <a href="#">
        Help
      </a>
    </ul>
  </div>
  <div className="foot-panel3">
    <div className="nav-logo border">
      <div className="logo" />
    </div>
    <div className="foot-boxes">
      <div className="foot-box">
        <i
          className="fa-solid fa-globe"
          style={{
            marginRight: '5px'
          }}
        />
        English
      </div>
      <div className="foot-box">
        {' '}
        <h5>
          $ USD-U.S Dollar
        </h5>
      </div>
      <div className="foot-box">
        <h5>
          United State
        </h5>
        {' '}
      </div>
    </div>
  </div>
</div>
    </> 
    );
}

export default Footer;