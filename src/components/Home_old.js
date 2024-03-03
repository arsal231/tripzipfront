import React, { useEffect,useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Header  from "../common/Header";
import Footer  from "../common/Footer";
import logo from '../assets/img/logo/logo.png'
import shape9 from '../assets/img/shape/shape-9.png'
import three from '../assets/img/about/03.png'
//import useRef from ''
import taxi_booking from '../assets/img/icon/taxi-booking.png'
import taxi_safety from '../assets/img/icon/taxi-safety.png'
import pickup  from '../assets/img/icon/pickup.png'
import money from '../assets/img/icon/money.png'
import taxi1 from '../assets/img/icon/taxi-1.png'
import happy from '../assets/img/icon/happy.png'
import driver from '../assets/img/icon/driver.png'
import trip from '../assets/img/icon/trip.png'
import rate1 from '../assets/img/rate/01.png'


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
import OwlCarousel from 'react-owl-carousel';
const Home = ()=>
{

  const navigate  = useNavigate();
  const [preloader,Setpreloader] = useState(true);


useEffect(()=>{
    const timeoutId = setTimeout(() => {
        // Code to be executed after the delay
        Setpreloader(false);
      }, 1000);
},[])


const bookNow = ()=>{
     
   navigate('./choose-taxi')
}


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

<div className="hero-section">
<div className="hero-single">
<div className="hero-shape">
<img src={shape9} alt="" />
</div>
<div className="container">
<div className="row align-items-center">
<div className="col-md-12 col-lg-6">
<div className="hero-content">
<h6 className="hero-sub-title wow fadeInUp" data-wow-delay=".25s">Welcome To
Taxica!</h6>
<h1 className="hero-title wow fadeInRight" data-wow-delay=".50s">
Book <span>Taxi</span> For Your Ride
</h1>
<p className="wow fadeInLeft" data-wow-delay=".75s">
There are many variations of passages available the majority have suffered
alteration in some form generators on the Internet tend to repeat predefined
chunks injected humour randomised words look even slightly believable.
</p>
<div className="hero-btn wow fadeInUp" data-wow-delay="1s">
<a href="#" className="theme-btn">About More<i className="fas fa-arrow-right"></i></a>
<a href="#" className="theme-btn theme-btn2">Learn More<i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
<div className="col-md-12 col-lg-6">
    <div className="booking-form">
        <h4 className="booking-title">Book Your Ride</h4>
        <form action="">
        <div className="row">
        <div className="col-lg-6">
        <div className="form-group">
        <label>Pick Up Location</label>
        <input type="text" className="form-control" placeholder="Type Location" />
        <i className="far fa-location-dot"></i>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="form-group">
        <label>Drop Off Location</label>
        <input type="text" className="form-control" placeholder="Type Location" />
        <i className="far fa-location-dot"></i>
        </div>
        </div>
       
       
        <div className="col-lg-6">
            <div className="form-group">
            <label>Pick Up Date</label>
            <input type="date" className="form-control date-picker" placeholder="MM/DD/YY" />
            <i className="far fa-calendar-days"></i>
            </div>
        </div>
        <div className="col-lg-6">
        <div className="form-group">
        <label>Pick Up Time</label>
        <input type="time" className="form-control time-picker" placeholder="00:00 AM" />
        <i className="far fa-clock"></i>
        </div>
        </div>
            <div className="col-lg-6">
                <div className="form-group">
                <label>Passengers</label>
                    <select className="select" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
        <div className="col-lg-6">
        <div className="form-group">
        <label>Children </label>
        <select className="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        </div>
        </div>
       <div>&nbsp;</div>
        <div className="col-lg-4 align-self-end">
        <button className="theme-btn" type="button" onClick={bookNow}>Book Taxi<i className="fas fa-arrow-right"></i></button>
        </div>
        
        
        </div>
        </form>
        </div>
</div>
</div>
</div>
</div>
</div>

<div className="about-area py-120">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-6">
<div className="about-left wow fadeInLeft" data-wow-delay=".25s">
<div className="about-img">
<img src={three} alt="" /> 
</div>
<div className="about-experience">
<div className="about-experience-icon">
<img src={taxi_booking} alt="" /> 

</div>
<b>30 Years Of <br/> Quality Service</b>
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


<div className="cta-area">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-7 text-center text-lg-start">
<div className="cta-text cta-divider">
<h1>Book Your Cab It's Simple And Affordable</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using is that it has normal distribution of letters.</p>
</div>
</div>
<div className="col-lg-5 text-center text-lg-end">
<div className="mb-20">
<a href="#" className="cta-number"><i className="far fa-headset"></i>+2 123 654 7898</a>
</div>
<div className="cta-btn">
<a href="#" className="theme-btn">Book Your Cab<i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>


<div className="feature-area py-120">
<div className="container">
<div className="row">
<div className="col-lg-6 mx-auto">
<div className="site-heading text-center">
<span className="site-title-tagline">Feature</span>
<h2 className="site-title">Our Awesome Feature</h2>
<div className="heading-divider"></div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-lg-3">
<div className="feature-item wow fadeInUp" data-wow-delay=".25s">
<div className="feature-icon">


<img src={taxi_safety} />

</div>
<div className="feature-content">
<h4>Safety Guarantee</h4>
<p>There are many variations of majority have suffered alteration in some form injected
humour randomised words.</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="feature-item wow fadeInDown" data-wow-delay=".25s">
<div className="feature-icon">


<img src={pickup} />
</div>
<div className="feature-content">
<h4>Fast Pickup</h4>
<p>There are many variations of majority have suffered alteration in some form injected
humour randomised words.</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="feature-item wow fadeInUp" data-wow-delay=".25s">
<div className="feature-icon">


<img src={money} />

</div>
<div className="feature-content">
<h4>Affordable Rate</h4>
<p>There are many variations of majority have suffered alteration in some form injected
humour randomised words.</p>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="feature-item wow fadeInDown" data-wow-delay=".25s">
<div className="feature-icon">
{/* <support /> */}
</div>
<div className="feature-content">
<h4>24/7 Support</h4>
<p>There are many variations of majority have suffered alteration in some form injected
humour randomised words.</p>
</div>
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


<img src={taxi1} />
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


<img src={happy} />
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

<img src={driver} />
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



<img src={trip} />
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


<div className="taxi-rate py-120">
<div className="container">
<div className="row">
<div className="col-lg-6 mx-auto">
<div className="site-heading text-center">
<span className="site-title-tagline">Taxi Rate</span>
<h2 className="site-title">Our Taxi Rate For You</h2>
<div className="heading-divider"></div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-lg-4">
<div className="rate-item wow fadeInUp" data-wow-delay=".25s">
<div className="rate-header">
<div className="rate-img">

<img src={rate1} />
</div>
</div>
<div className="rate-header-content">
<h4>Basic Pakage</h4>
<p className="rate-duration">One Time Payment</p>
</div>
<div className="rate-content">
<div className="rate-icon">

<img src={taxi1} />
</div>
<div className="rate-feature">
<ul>
<li><i className="far fa-check-double"></i> Base Charge: <span>$2.30</span></li>
<li><i className="far fa-check-double"></i> Distance Allowance: <span>5000m</span></li>
<li><i className="far fa-check-double"></i> Up To 50 kms: <span>$1.38/km</span></li>
<li><i className="far fa-check-double"></i> Booking Fee: <span>$0.99</span></li>
<li><i className="far fa-check-double"></i> Extra Passangers: <span>$0.45</span></li>
</ul>
<a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="rate-item wow fadeInDown" data-wow-delay=".25s">
<div className="rate-header">
<div className="rate-img">

<img src={rate1} />
</div>
</div>
<div className="rate-header-content">
<h4>Standard Pakage</h4>
<p className="rate-duration">One Time Payment</p>
</div>
<div className="rate-content">
<div className="rate-icon">

<img src={taxi1} />
</div>
<div className="rate-feature">
<ul>
<li><i className="far fa-check-double"></i> Base Charge: <span>$2.30</span></li>
<li><i className="far fa-check-double"></i> Distance Allowance: <span>5000m</span></li>
<li><i className="far fa-check-double"></i> Up To 50 kms: <span>$1.38/km</span></li>
<li><i className="far fa-check-double"></i> Booking Fee: <span>$0.99</span></li>
<li><i className="far fa-check-double"></i> Extra Passangers: <span>$0.45</span></li>
</ul>
<a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-4">
<div className="rate-item wow fadeInUp" data-wow-delay=".25s">
<div className="rate-header">
<div className="rate-img">

<img src={rate1} />
</div>
</div>
<div className="rate-header-content">
<h4>Premium Pakage</h4>
<p className="rate-duration">One Time Payment</p>
</div>
<div className="rate-content">
<div className="rate-icon">

<img src={taxi1} />
</div>
<div className="rate-feature">
<ul>
<li><i className="far fa-check-double"></i> Base Charge: <span>$2.30</span></li>
<li><i className="far fa-check-double"></i> Distance Allowance: <span>5000m</span></li>
<li><i className="far fa-check-double"></i> Up To 50 kms: <span>$1.38/km</span></li>
<li><i className="far fa-check-double"></i> Booking Fee: <span>$0.99</span></li>
<li><i className="far fa-check-double"></i> Extra Passangers: <span>$0.45</span></li>
</ul>
<a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="choose-area py-120">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-6">
<div className="choose-content">
<div className="site-heading wow fadeInDown mb-4" data-wow-delay=".25s">
<span className="site-title-tagline text-white justify-content-start">
<i className="flaticon-drive"></i> Why Choose Us
</span>
<h2 className="site-title text-white mb-10">We are dedicated <span>to provide</span> quality service</h2>
<p className="text-white">
There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.
</p>
</div>
<div className="choose-img wow fadeInUp" data-wow-delay=".25s">
<img src={choose1} alt="" />

</div>
</div>
</div>
<div className="col-lg-6">
<div className="choose-content-wrapper wow fadeInRight" data-wow-delay=".25s">
<div className="choose-item">
<span className="choose-count">01</span>
<div className="choose-item-icon">

<img src={taxi1} />
</div>
<div className="choose-item-info">
<h3>Best Quality Taxi</h3>
<p>There are many variations of passages available but the majority have suffered alteration in form injected humour words which don't look even slightly believable. If you are going passage you need there anything embar.</p>
</div>
</div>
<div className="choose-item ms-lg-5">
<span className="choose-count">02</span>
<div className="choose-item-icon">
<img src={driver} />

</div>
<div className="choose-item-info">
<h3>Expert Drivers</h3>
<p>There are many variations of passages available but the majority have suffered alteration in form injected humour words which even slightly believable. If you are going passage you need there anything.</p>
</div>
</div>
<div className="choose-item mb-lg-0">
<span className="choose-count">03</span>
<div className="choose-item-icon">
<img src={taxi_location} />

</div>
<div className="choose-item-info">
<h3>Many Locations</h3>
<p>There are many variations of passages available but the majority have suffered alteration in form injected humour words which don't look even slightly believable. If you are going passage you need there anything embar.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>





<div className="faq-area pb-120">
<div className="container">
<div className="row">
<div className="col-lg-6">
<div className="faq-right">
<div className="site-heading mb-3">
<span className="site-title-tagline justify-content-start">Faq's</span>
<h2 className="site-title my-3">General <span>frequently</span> asked questions</h2>
</div>
<p className="about-text">There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration in some form, by injected humour, or
randomised words which don't look even.</p>
<div className="faq-img mt-3">
<img src={faq1} alt="" />
</div>
</div>
</div>
<div className="col-lg-6">
<div className="accordion" id="accordionExample">
<div className="accordion-item">
<h2 className="accordion-header" id="headingOne">
<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<span><i className="far fa-question"></i></span> How Long Does A Booking Take ?
</button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div className="accordion-body">
We denounce with righteous indignation and dislike men who
are so beguiled and demoralized by the charms of pleasure of the moment, so
blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
eu orci id odio facilisis pharetra.
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingTwo">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
<span><i className="far fa-question"></i></span> How Can I Become A Member
?
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div className="accordion-body">
We denounce with righteous indignation and dislike men who
are so beguiled and demoralized by the charms of pleasure of the moment, so
blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
eu orci id odio facilisis pharetra.
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingThree">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
<span><i className="far fa-question"></i></span> What Payment Gateway You Support ?
</button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div className="accordion-body">
We denounce with righteous indignation and dislike men who
are so beguiled and demoralized by the charms of pleasure of the moment, so
blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
eu orci id odio facilisis pharetra.
</div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header" id="headingFour">
<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
<span><i className="far fa-question"></i></span> How Can I Cancel My Request ?
</button>
</h2>
<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
<div className="accordion-body">
We denounce with righteous indignation and dislike men who
are so beguiled and demoralized by the charms of pleasure of the moment, so
blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
eu orci id odio facilisis pharetra.
</div>
</div>
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
                        
                        <OwlCarousel className='testimonial-slider owl-carousel owl-theme' loop margin={30} nav items={4} autoplay={true}>
                     
                                <div className="testimonial-single item ">
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
                                <div className="testimonial-single item">
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
                                <div className="testimonial-single item">
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
                                <div className="testimonial-single item">
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
                                <div className="testimonial-single item">
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
                       
                        </OwlCarousel>
                </div>
            </div>



            <div className="partner pt-80 pb-80">
                <div className="container">
                   
                    <OwlCarousel className='partner-slider owl-carousel owl-theme' loop margin={25} nav items={6} autoplay={true}>
                        <div className="partner-item item">
                        <div className="partner-img">
                        <img src={partner1} alt="" />
                        </div>
                        </div>
                        <div className="partner-item item">
                        <div className="partner-img">
                        <img src={partner2} alt="" />
                        </div>
                        </div>
                        <div className="partner-item item">
                        <div className="partner-img">
                        <img src={partner3} alt="" />
                        </div>
                        </div>
                        <div className="partner-item item">
                        <div className="partner-img">
                        <img src={partner1} alt="" />
                        </div>
                        </div>
                        <div className="partner-item item">
                        <div className="partner-img">
                        <img src={partner2} alt="" />
                        </div>
                        </div>
                        <div className="partner-item item">
                        <div className="partner-img">
                        <img src={partner3} alt="" />
                        </div>
                        </div>
                        </OwlCarousel>
                </div>
            </div>


<div className="download-area mb-120">
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

</main>

            <a href="#" id="scroll-top"><i className="far fa-arrow-up"></i></a>

        <Footer/>
        </>
    )



}

export default Home;