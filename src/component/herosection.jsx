import React from 'react';
import './hero.css';

function HeroSection() {
    return (
        <>
            <div>
                <div className="hero">
                    <p className="hero-message">
                        You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                        <a href="#"> Click here to go to amazon.in</a>
                    </p>
                </div>
                <div className="shop-content">
                    <div className="box1 box">
                        <div className="box-content">
                            <h2>Beauty steals under $25</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/beauty.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box2 box">
                        <div className="box-content">
                            <h2>Toys under $25</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/Toys.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box3 box">
                        <div className="box-content">
                            <h2>Deals in PCs</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/music-box.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box4 box">
                        <div className="box-content">
                            <h2>Laptop</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/laptop.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box5 box">
                        <div className="box-content">
                            <h2>Shoes</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/shoes.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box6 box">
                        <div className="box-content">
                            <h2>Business Solutions</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/business-solution.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box6 box">
                        <div className="box-content">
                            <h2>Watches</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/watches.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div className="box6 box">
                        <div className="box-content">
                            <h2>Home & Kitchen</h2>
                            <div className="box-img" style={{ backgroundImage: 'url("/photos/home-kitchen.jpg")' }} />
                            <p>Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
