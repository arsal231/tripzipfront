
import React, {useEffect, useState } from 'react';

import Header  from "../common/Header";
import Footer  from "../common/Footer";
import logo from '../assets/img/logo/logo.png'
import shape9 from '../assets/img/shape/shape-9.png'
import three from '../assets/img/about/03.png'

import taxi_booking from '../assets/img/icon/taxi-booking.png'
import taxi_safety from '../assets/img/icon/taxi-safety.png'
import pickup  from '../assets/img/icon/pickup.png'
import money from '../assets/img/icon/money.png'
import support from '../assets/img/icon/support.png'
import taxi1 from '../assets/img/icon/taxi-1.png'
import happy from '../assets/img/icon/happy.png'
import driver from '../assets/img/icon/driver.png'
import trip from '../assets/img/icon/trip.png'
import rate1 from '../assets/img/rate/01.png'

import team1 from '../assets/img/team/01.jpg'
import team2 from '../assets/img/team/02.jpg'
import team3 from '../assets/img/team/03.jpg'
import team4 from '../assets/img/team/04.jpg'

import backgroundImage from '../assets/img/breadcrumb/01.jpg';

import aboutbanner from '../assets/img/about/01.png';


import choose1 from '../assets/img/choose/01.png'

import taxi_location from '../assets/img/icon/taxi-location.png'
import faq1 from '../assets/img/faq/01.jpg'
import testimonial1 from '../assets/img/testimonial/01.jpg'
import testimonial2 from '../assets/img/testimonial/02.jpg'
import testimonial3 from '../assets/img/testimonial/03.jpg'
import testimonial4 from '../assets/img/testimonial/04.jpg'
import testimonial5 from '../assets/img/testimonial/05.jpg'
import partner1 from '../assets/img/partner/01.png'
import partner2 from '../assets/img/partner/02.png'
import partner3 from '../assets/img/partner/03.png'

import download1 from '../assets/img/download/01.png'

const About = ()=>
{
    const [preloader,Setpreloader] = useState(true);
    const [inputs, setInputs] = useState([]); // State to store inputs
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            // Code to be executed after the delay
            Setpreloader(false);
          }, 2000);
    },[])

    useEffect(()=>{
       console.log('length is '+inputs.length)
       console.log(inputs);
    },[inputs])


    // Function to handle adding new input
    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };

    // Function to handle removing input at a specific index
    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    // Function to handle input change
    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };
 
    // Function to render inputs
    const renderInputs = () => {
        return inputs.map((input, index) => (
            <div key={index}>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => handleInputChange(index, event)}
                />
                <button onClick={() => handleRemoveInput(index)}>Remove</button>
            </div>
        ));
    };







 return (
        <>
     {
    (preloader ? 

 <div className="preloader" >
    <div className="loader-ripple">
    <div></div>
    <div></div>
    </div>
</div>
 : '') 
}  








        <Header/>
              
        <div className="sidebar-popup">
<div className="sidebar-wrapper">
<div className="sidebar-content">
<button type="button" className="close-sidebar-popup"><i className="far fa-xmark"></i></button>
<div className="sidebar-logo">
<img src={logo} alt="" />
</div>
<div className="sidebar-about">
<h4>About Us</h4>
<p>There are many variations of passages available sure there majority have suffered alteration in
some form by injected humour or randomised words which don't look even slightly believable.</p>
</div>
<div className="sidebar-contact">
<h4>Contact Info</h4>
<ul>
<li>
<h6>Email</h6>
<a href="/cdn-cgi/l/email-protection#0b62656d644b6e736a667b676e25686466"><i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="89e0e7efe6c9ecf1e8e4f9e5eca7eae6e4">[email&#160;protected]</span></a>
</li>
<li>
<h6>Phone</h6>
<a href="tel:+21236547898"><i className="far fa-phone"></i>+2 123 654 7898</a>
</li>
<li>
<h6>Address</h6>
<a href="#"><i className="far fa-location-dot"></i>25/B Milford Road, New York</a>
</li>
</ul>
</div>
<div className="sidebar-social">
<h4>Follow Us</h4>
<a href="#"><i className="fab fa-facebook"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-instagram"></i></a>
<a href="#"><i className="fab fa-linkedin"></i></a>
</div>
</div>
</div>
</div>

<main className="main">

<div className="site-breadcrumb"  style={{ background: `url(${backgroundImage})` }}>
<div className="container">
<h2 className="breadcrumb-title">About Us</h2> 
<ul className="breadcrumb-menu">
<li><a href="index.html">Home</a></li>
<li className="active">About Us</li>
</ul>
</div>
</div>


<div className="about-area py-120">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-6">
<div className="about-left wow fadeInLeft" data-wow-delay=".25s">
<div className="about-img">
<img src={aboutbanner} alt="" />
</div>


<div>
            <h2>Dynamic Input Form</h2>
            {renderInputs()}
            <button onClick={handleAddInput}>Add More</button>
        </div>





<div className="about-experience">
<div className="about-experience-icon">
<img src={taxi_booking} alt="" />
</div>
<b>30 Years Of <br /> Quality Service</b>
</div>
</div>
</div>
<div className="col-lg-6">
<div className="about-right wow fadeInRight" data-wow-delay=".25s">
<div className="site-heading mb-3">
<span className="site-title-tagline justify-content-start">
<i className="flaticon-drive"></i> About Us
</span>
<h2 className="site-title">
We Provide Trusted <span>Cab Service</span> In The World
</h2>
</div>
<p className="about-text">
There are many variations of passages of Lorem Ipsum available, but the majority have
suffered alteration in some form, by injected humour.
</p>
<div className="about-list-wrapper">
<ul className="about-list list-unstyled">
<li>
At vero eos et accusamus et iusto odio.
</li>
<li>
Established fact that a reader will be distracted.
</li>
<li>
Sed ut perspiciatis unde omnis iste natus sit.
</li>
</ul>
</div>
<a href="about.html" className="theme-btn mt-4">Discover More<i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>


<div className="counter-area">
<div className="container">
<div className="counter-wrapper mb-0">
<div className="row">
<div className="col-lg-3 col-sm-6">
<div className="counter-box">
<div className="icon">
<img src={taxi1} alt="" />
</div>
<div>
<span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
<h6 className="title">+ Available Taxi </h6>
</div>
</div>
</div>
<div className="col-lg-3 col-sm-6">
<div className="counter-box">
<div className="icon">
<img src={happy} alt="" />
</div>
<div>
<span className="counter" data-count="+" data-to="900" data-speed="3000">900</span>
<h6 className="title">+ Happy Clients</h6>
</div>
</div>
</div>
<div className="col-lg-3 col-sm-6">
<div className="counter-box">
<div className="icon">
<img src={driver} alt="" />
</div>
<div>
<span className="counter" data-count="+" data-to="700" data-speed="3000">700</span>
<h6 className="title">+ Our Drivers</h6>
</div>
</div>
</div>
<div className="col-lg-3 col-sm-6">
<div className="counter-box">
<div className="icon">
<img src={trip} alt="" />
</div>
<div>
<span className="counter" data-count="+" data-to="1800" data-speed="3000">1800</span>
<h6 className="title">+ Road Trip Done</h6>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="team-area py-120">
<div className="container">
<div className="row">
<div className="col-lg-6 mx-auto">
<div className="site-heading text-center">
<span className="site-title-tagline">Drivers</span>
<h2 className="site-title">Our Expert Drivers</h2>
<div className="heading-divider"></div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-lg-3">
<div className="team-item wow fadeInUp" data-wow-delay=".25s">
<div className="team-img">
<img src={team1} alt="thumb" />
</div>
<div className="team-content">
<div className="team-bio">
<h5><a href="#">Alma Mcelroy</a></h5>
<span>Expert Driver</span>
</div>
</div>
<div className="team-social">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="team-item wow fadeInDown" data-wow-delay=".25s">
<div className="team-img">
<img src={team2} alt="thumb" />
</div>
<div className="team-content">
<div className="team-bio">
<h5><a href="#">Marie Hooks</a></h5>
<span>Expert Driver</span>
</div>
</div>
<div className="team-social">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="team-item wow fadeInUp" data-wow-delay=".25s">
<div className="team-img">
<img src={team3} alt="thumb" />
</div>
<div className="team-content">
<div className="team-bio">
<h5><a href="#">Daniel Nesmith</a></h5>
<span>Expert Driver</span>
</div>
</div>
<div className="team-social">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="team-item wow fadeInDown" data-wow-delay=".25s">
<div className="team-img">
<img src={team4} alt="thumb" />
</div>
<div className="team-content">
<div className="team-bio">
<h5><a href="#">Gertrude Barrow</a></h5>
<span>Expert Driver</span>
</div>
</div>
<div className="team-social">
<a href="#"><i className="fab fa-facebook-f"></i></a>
<a href="#"><i className="fab fa-twitter"></i></a>
<a href="#"><i className="fab fa-linkedin-in"></i></a>
<a href="#"><i className="fab fa-youtube"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="testimonial-area py-120">
<div className="container">
<div className="row">
<div className="col-lg-6 mx-auto">
<div className="site-heading text-center">
<span className="site-title-tagline"><i className="flaticon-drive"></i> Testimonials</span>
<h2 className="site-title text-white">What Our Client <span>Say's</span></h2>
<div className="heading-divider"></div>
</div>
</div>
</div>
<div className="testimonial-slider owl-carousel owl-theme">
<div className="testimonial-single">
<div className="testimonial-content">
<div className="testimonial-author-img">
<img src={testimonial1} alt="" />
</div>
<div className="testimonial-author-info">
<h4>Sylvia Green</h4>
<p>Customer</p>
</div>
</div>
<div className="testimonial-quote">
<span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
<p>
There are many variations of words suffered available to the have majority but the majority
suffer to alteration injected hidden the middle text.
</p>
</div>
<div className="testimonial-rate">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<div className="testimonial-single">
<div className="testimonial-content">
<div className="testimonial-author-img">
<img src={testimonial2} alt="" />
</div>
<div className="testimonial-author-info">
<h4>Gordo Novak</h4>
<p>Customer</p>
</div>
</div>
<div className="testimonial-quote">
<span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
<p>
There are many variations of words suffered available to the have majority but the majority
suffer to alteration injected hidden the middle text.
</p>
</div>
<div className="testimonial-rate">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<div className="testimonial-single">
<div className="testimonial-content">
<div className="testimonial-author-img">
<img src={testimonial3} alt="" />
</div>
<div className="testimonial-author-info">
<h4>Reid Butt</h4>
<p>Customer</p>
</div>
</div>
<div className="testimonial-quote">
<span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
<p>
There are many variations of words suffered available to the have majority but the majority
suffer to alteration injected hidden the middle text.
</p>
</div>
<div className="testimonial-rate">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<div className="testimonial-single">
<div className="testimonial-content">
<div className="testimonial-author-img">
<img src={testimonial4} alt="" />
</div>
<div className="testimonial-author-info">
<h4>Parker Jime</h4>
<p>Customer</p>
</div>
</div>
<div className="testimonial-quote">
<span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
<p>
There are many variations of words suffered available to the have majority but the majority
suffer to alteration injected hidden the middle text.
</p>
</div>
<div className="testimonial-rate">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
<div className="testimonial-single">
<div className="testimonial-content">
<div className="testimonial-author-img">
<img src={testimonial5} alt="" />
</div>
<div className="testimonial-author-info">
<h4>Heruli Nez</h4>
<p>Customer</p>
</div>
</div>
<div className="testimonial-quote">
<span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
<p>
There are many variations of words suffered available to the have majority but the majority
suffer to alteration injected hidden the middle text.
</p>
</div>
<div className="testimonial-rate">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
</div>
</div>
</div>
</div>
</div>


<div className="download-area pt-120">
<div className="container">
<div className="download-wrapper">
<div className="row">
<div className="col-lg-6">
<div className="download-content">
<div className="site-heading mb-4">
<span className="site-title-tagline justify-content-start">
<i className="flaticon-drive"></i> Get Our App
</span>
<h2 className="site-title mb-10">Download <span>Our Taxica</span> App For Free</h2>
<p>
There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.
</p>
</div>
<div className="download-btn">
<a href="#">
<i className="fab fa-google-play"></i>
<div className="download-btn-content">
<span>Get It On</span>
<strong>Google Play</strong>
</div>
</a>
<a href="#">
<i className="fab fa-app-store"></i>
<div className="download-btn-content">
<span>Get It On</span>
<strong>App Store</strong>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="download-img">
<img src={download1} alt="" />
</div>
</div>
</div>
</div>


<div className="partner pt-80 pb-80">
<div className="container">
<div className="partner-slider owl-carousel owl-theme">
<div className="partner-item">
<div className="partner-img">
<img src={partner1} alt="" />
</div>
</div>
<div className="partner-item">
<div className="partner-img">
<img src={partner2} alt="" />
</div>
</div>
<div className="partner-item">
<div className="partner-img">
<img src={partner3} alt="" />
</div>
</div>
<div className="partner-item">
<div className="partner-img">
<img src={partner1} alt="" />
</div>
</div>
<div className="partner-item">
<div className="partner-img">
<img src={partner2} alt="" />
</div>
</div>
<div className="partner-item">
<div className="partner-img">
<img src={partner3} alt="" />
</div>
</div>
</div>
</div>
</div>

</main>

            <a href="#" id="scroll-top"><i className="far fa-arrow-up"></i></a>

        <Footer/>
        </>
    )



}

export default About;