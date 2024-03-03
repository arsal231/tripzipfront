
import Header  from "../common/Header";
import Footer  from "../common/Footer";
import logo from '../assets/img/logo/logo.png'
import backgroundImage from '../assets/img/breadcrumb/01.jpg';
import about1 from '../assets/img/about/01.png';
import taxi_booking from '../assets/img/icon/taxi-booking.png'
import testimonial1 from '../assets/img/testimonial/01.jpg'
import testimonial2 from '../assets/img/testimonial/02.jpg'
import testimonial3 from '../assets/img/testimonial/03.jpg'
import testimonial4 from '../assets/img/testimonial/04.jpg'
import testimonial5 from '../assets/img/testimonial/05.jpg'
import download1 from '../assets/img/download/01.png'

import OwlCarousel from 'react-owl-carousel';



const Testimonial = ()=>
{

 return (
        <>
       


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

<main class="main">

<div class="site-breadcrumb"  style={{ background: `url(${backgroundImage})` }}>
<div class="container">
<h2 class="breadcrumb-title">Testimonials</h2>
<ul class="breadcrumb-menu">
<li><a href="index.html">Home</a></li>
<li class="active">Testimonials</li>
</ul>
</div>
</div>


<div class="about-area py-120">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="about-left wow fadeInLeft" data-wow-delay=".25s">
<div class="about-img">
<img src={about1} alt="" />
</div>
<div class="about-experience">
<div class="about-experience-icon">
<img src={taxi_booking} alt="" />
</div>
<b>30 Years Of <br /> Quality Service</b>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="about-right wow fadeInRight" data-wow-delay=".25s">
<div class="site-heading mb-3">
<span class="site-title-tagline justify-content-start">
<i class="flaticon-drive"></i> About Us
</span>
<h2 class="site-title">
We Provide Trusted <span>Cab Service</span> In The World
</h2>
</div>
<p class="about-text">
There are many variations of passages of Lorem Ipsum available, but the majority have
suffered alteration in some form, by injected humour.
</p>
<div class="about-list-wrapper">
<ul class="about-list list-unstyled">
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
<a href="about.html" class="theme-btn mt-4">Discover More<i class="fas fa-arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>


            <div class="testimonial-area py-120">
                <div class="container">
                <div class="row">
                <div class="col-lg-6 mx-auto">
                <div class="site-heading text-center">
                <span class="site-title-tagline"><i class="flaticon-drive"></i> Testimonials</span>
                <h2 class="site-title text-white">What Our Client <span>Say's</span></h2>
                <div class="heading-divider"></div>
                </div>
                </div>
                </div>
                                   
                                    <OwlCarousel className='testimonial-slider owl-carousel owl-theme' loop margin={30} nav items={4} autoplay={true}>
                                        <div class="testimonial-single item">
                                        <div class="testimonial-content">
                                        <div class="testimonial-author-img">
                                        <img src={testimonial1} alt="" />
                                        </div>
                                        <div class="testimonial-author-info">
                                        <h4>Sylvia Green</h4>
                                        <p>Customer</p>
                                        </div>
                                        </div>
                                        <div class="testimonial-quote">
                                        <span class="testimonial-quote-icon"><i class="far fa-quote-right"></i></span>
                                        <p>
                                        There are many variations of words suffered available to the have majority but the majority
                                        suffer to alteration injected hidden the middle text.
                                        </p>
                                        </div>
                                        <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        </div>
                                        </div>
                                        <div class="testimonial-single item">
                                        <div class="testimonial-content">
                                        <div class="testimonial-author-img">
                                        <img src={testimonial2} alt="" />
                                        </div>
                                        <div class="testimonial-author-info">
                                        <h4>Gordo Novak</h4>
                                        <p>Customer</p>
                                        </div>
                                        </div>
                                        <div class="testimonial-quote">
                                        <span class="testimonial-quote-icon"><i class="far fa-quote-right"></i></span>
                                        <p>
                                        There are many variations of words suffered available to the have majority but the majority
                                        suffer to alteration injected hidden the middle text.
                                        </p>
                                        </div>
                                        <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        </div>
                                        </div>
                                        <div class="testimonial-single item">
                                        <div class="testimonial-content">
                                        <div class="testimonial-author-img">
                                        <img src={testimonial3} alt="" />
                                        </div>
                                        <div class="testimonial-author-info">
                                        <h4>Reid Butt</h4>
                                        <p>Customer</p>
                                        </div>
                                        </div>
                                        <div class="testimonial-quote">
                                        <span class="testimonial-quote-icon"><i class="far fa-quote-right"></i></span>
                                        <p>
                                        There are many variations of words suffered available to the have majority but the majority
                                        suffer to alteration injected hidden the middle text.
                                        </p>
                                        </div>
                                        <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        </div>
                                        </div>
                                        <div class="testimonial-single item">
                                        <div class="testimonial-content">
                                        <div class="testimonial-author-img">
                                        <img src={testimonial4} alt="" />
                                        </div>
                                        <div class="testimonial-author-info">
                                        <h4>Parker Jime</h4>
                                        <p>Customer</p>
                                        </div>
                                        </div>
                                        <div class="testimonial-quote">
                                        <span class="testimonial-quote-icon"><i class="far fa-quote-right"></i></span>
                                        <p>
                                        There are many variations of words suffered available to the have majority but the majority
                                        suffer to alteration injected hidden the middle text.
                                        </p>
                                        </div>
                                        <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        </div>
                                        </div>
                                        <div class="testimonial-single item">
                                        <div class="testimonial-content">
                                        <div class="testimonial-author-img">
                                        <img src={testimonial5}  alt="" />
                                        </div>
                                        <div class="testimonial-author-info">
                                        <h4>Heruli Nez</h4>
                                        <p>Customer</p>
                                        </div>
                                        </div>
                                        <div class="testimonial-quote">
                                        <span class="testimonial-quote-icon"><i class="far fa-quote-right"></i></span>
                                        <p>
                                        There are many variations of words suffered available to the have majority but the majority
                                        suffer to alteration injected hidden the middle text.
                                        </p>
                                        </div>
                                        <div class="testimonial-rate">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        </div>
                                        </div>
                                    </OwlCarousel>
                </div>
            </div>


<div class="download-area py-120">
<div class="container">
<div class="download-wrapper">
<div class="row">
<div class="col-lg-6">
<div class="download-content">
<div class="site-heading mb-4">
<span class="site-title-tagline justify-content-start">
<i class="flaticon-drive"></i> Get Our App
</span>
<h2 class="site-title mb-10">Download <span>Our Taxica</span> App For Free</h2>
<p>
There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.
</p>
</div>
<div class="download-btn">
<a href="#">
<i class="fab fa-google-play"></i>
<div class="download-btn-content">
<span>Get It On</span>
<strong>Google Play</strong>
</div>
</a>
<a href="#">
<i class="fab fa-app-store"></i>
<div class="download-btn-content">
<span>Get It On</span>
<strong>App Store</strong>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="download-img">
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

export default Testimonial;