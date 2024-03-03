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

const ChooseTaxi = ()=>
{


    return (
        <>
 
                <Header/>


                <div className="sidebar-popup">
                <div className="sidebar-wrapper">
                <div className="sidebar-content">
                <button type="button" className="close-sidebar-popup"><i className="far fa-xmark"></i></button>
                <div className="sidebar-logo">
                <img src="assets/img/logo/logo.png" alt="" />
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
                <a href="/cdn-cgi/l/email-protection#a0c9cec6cfe0c5d8c1cdd0ccc58ec3cfcd"><i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="3f565159507f5a475e524f535a115c5052">[email&#160;protected]</span></a>
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
                <div id="map"></div>
                    



                <div className="taxi-area py-120">
                <div className="container">
                <div className="row">
                <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                <span className="site-title-tagline">Our Taxi</span>
                <h2 className="site-title">Let's Check Available Taxi</h2>
                <div className="heading-divider"></div>
                </div>
                </div>
                </div>
                <div className="filter-controls">
                <ul className="filter-btns">
                <li className="active" data-filter="*">All Taxi</li>
                <li data-filter=".cat1">Hybrid Taxi</li>
                <li data-filter=".cat2">Town Taxi</li>
                <li data-filter=".cat3">Suv Taxi</li>
                <li data-filter=".cat4">Limousine Taxi</li>
                </ul>
                </div>
                <div className="row filter-box">
                <div className="col-md-6 col-lg-4 filter-item cat1 cat2">
                <div className="taxi-item">
                <div className="taxi-img">
                <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                <div className="taxi-head">
                <h4>BMW M5 2019 Model</h4>
                <span>$1.25/km</span>
                </div>
                <div className="taxi-feature">
                <ul>
                <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                </li>
                <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                </ul>
                </div>
                <a href="customer_info.html" className="theme-btn">Choose Taxi<i className="fas fa-arrow-right"></i></a>



                </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 filter-item cat3 cat4">
                <div className="taxi-item">
                <div className="taxi-img">
                <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                <div className="taxi-head">
                <h4>BMW M5 2019 Model</h4>
                <span>$1.25/km</span>
                </div>
                <div className="taxi-feature">
                <ul>
                <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                </li>
                <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                </ul>
                </div>
                <a href="customer_info.html" className="theme-btn">Choose Taxi<i className="fas fa-arrow-right"></i></a>


                </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 filter-item cat1 cat4">
                <div className="taxi-item">
                <div className="taxi-img">
                <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                <div className="taxi-head">
                <h4>BMW M5 2019 Model</h4>
                <span>$1.25/km</span>
                </div>
                <div className="taxi-feature">
                <ul>
                <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                </li>
                <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                </ul>
                </div>
                <a href="customer_info.html" className="theme-btn">Choose Taxi<i className="fas fa-arrow-right"></i></a>
                </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 filter-item cat1 cat3">
                <div className="taxi-item">
                <div className="taxi-img">
                <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                <div className="taxi-head">
                <h4>BMW M5 2019 Model</h4>
                <span>$1.25/km</span>
                </div>
                <div className="taxi-feature">
                <ul>
                <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                </li>
                <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                </ul>
                </div>
                <a href="customer_info.html" className="theme-btn">Choose Taxi<i className="fas fa-arrow-right"></i></a>
                </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 filter-item cat1 cat2 cat3">
                <div className="taxi-item">
                <div className="taxi-img">
                <img src="assets/img/taxi/01.png" alt="">
                </div>
                <div className="taxi-content">
                <div className="taxi-head">
                <h4>BMW M5 2019 Model</h4>
                <span>$1.25/km</span>
                </div>
                <div className="taxi-feature">
                <ul>
                <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                </li>
                <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                </ul>
                </div>
                <a href="customer_info.html" className="theme-btn">Choose Taxi<i className="fas fa-arrow-right"></i></a>
                </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 filter-item cat4">
                <div className="taxi-item">
                <div className="taxi-img">
                <img src="assets/img/taxi/01.png" alt="" />
                </div>
                <div className="taxi-content">
                <div className="taxi-head">
                <h4>BMW M5 2019 Model</h4>
                <span>$1.25/km</span>
                </div>
                <div className="taxi-feature">
                <ul>
                <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                </li>
                <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                </ul>
                </div>
                <a href="customer_info.html" className="theme-btn">Choose Taxi<i className="fas fa-arrow-right"></i></a>
                </div>
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
export default ChooseTaxi
