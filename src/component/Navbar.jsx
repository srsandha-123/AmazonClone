import React from 'react';
import './navbar.css';

function Navbar() {
    return ( 
        <>
        <div>
  <div className="navbar ">
    <div className="nav-logo border">
      <div className="logo" />
    </div>
    <div className="nav-first border">
      <p className="address1">
        Deliver to
      </p>
      <div className="nav-second">
        <i className="fa-solid fa-location-dot" />
        <p className="address2">
          india
        </p>
      </div>
    </div>
    <div className="nav-search">
      <select className="search-select">
        <option>
          All
        </option>
      </select>
      <input
        className="search-input"
        placeholder="Seach amazon"
      />
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
    </div>
    <div className="nav-acc border">
      <p className="nav-signin">
        <span>
          Hello,sign in
        </span>
      </p>
      <select className="Acc">
        <option>
          Account & Lists
        </option>
      </select>
    </div>
    <div className=" nav-return border">
      <p className="nav-signin">
        <span>
          Returns
        </span>
      </p>
      <p className="Acc">
        <span>
          & Orders
        </span>
      </p>
    </div>
    <div>
      <div className="nav-cart border">
        <i className="fa-solid fa-cart-arrow-down" />
        Cart
      </div>
    </div>
  </div>
  <div className="panel">
    <div className="panel-all border">
      <i className="fa-solid fa-bars" />
      All
    </div>
    <div className="panel-items">
      <div className="items border">
        {' '}Today's Deals
      </div>
      <div className="items border">
        Customer Service
      </div>
      <div className="items border">
        {' '}Registry
      </div>
      <div className="items border">
        Gift Cards
      </div>
      <div className="items border">
        Sell
      </div>
    </div>
    <div className="panel-deals">
      <p>
        Shop Deals in Electronics
      </p>
    </div>
  </div>
</div>
        </>
     );
}

export default Navbar;