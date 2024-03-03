import logo from '../assets/img/logo/logo.png'
import userimg from '../assets/img/account/user.jpg'
import {Link,useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = ()=>
{
    const[openit,setOpenit] = useState(false);
        const opensearch =()=>
        {  
            if(!openit)
            {
                setOpenit('open')
            }
            else{
                setOpenit(false)
            }
            
        }
    return (
        <>
        
         
            <header className="header">

                    <div className="header-top">
                    <div className="container">
                    <div className="header-top-wrapper">
                    <div className="header-top-left">
                    <div className="header-top-contact">
                    <ul>
                    <li><a href="/cdn-cgi/l/email-protection#731a1d151c33160b121e031f165d101c1e"><i className="far fa-envelopes"></i>
                    <span className="__cf_email__" data-cfemail="e0898e868fa08598818d908c85ce838f8d">[email&#160;protected]</span></a></li>
                    <li><a href="tel:+21236547898"><i className="far fa-phone-volume"></i> +2 123 654 7898</a>
                    </li>
                    <li><a href="#"><i className="far fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)</a></li>
                    </ul>
                    </div>
                    </div>
                    <div className="header-top-right">
                    <div className="header-top-link">
                   
                    <Link to="/login" ><i className="far fa-arrow-right-to-bracket"></i> Login</Link>

                    <Link to="/register" ><i className="far fa-user-vneck"></i> Register</Link>
                    </div>
                    <div className="header-top-social">
                    <span>Follow Us: </span>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="main-navigation">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container position-relative">
                                <a className="navbar-brand" href="index.html">
                                <img src={logo} alt="logo" />
                                </a>
                                <div className="mobile-menu-right">
                                    <div className="search-btn">
                                    <button type="button" className="nav-right-link" ><i className="far fa-search"></i></button>
                                   
                                    </div>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                                    data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-mobile-icon"><i className="far fa-bars"></i></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="main_nav">
                                    <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                    
                                    <Link to="/" className="nav-link  active" >Home</Link>
                                    
                                    </li>
                                    <li className="nav-item">
                                      
                                        <Link to="/about" className="nav-link" >About</Link>
                                    
                                    </li>
                                    
                                    <li className="nav-item">
                                      
                                      <Link to="/testimonial" className="nav-link" >Testimonials</Link>
                                  
                                    </li>
                                    <li className="nav-item">
                                      
                                      <Link to="/blog" className="nav-link" >Blog</Link>
                                  
                                    </li>
                                    <li className="nav-item">
                                      
                                      <Link to="/faq" className="nav-link" >Faq</Link>
                                  
                                    </li>
                                    
                                    {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Taxi</a>
                                        <ul className="dropdown-menu fade-down">
                                        <li><a className="dropdown-item" href="taxi.html">Taxi</a></li>
                                        <li><a className="dropdown-item" href="taxi-single.html">Taxi Single</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Service</a>
                                    <ul className="dropdown-menu fade-down">
                                    <li><a className="dropdown-item" href="service.html">Service</a></li>
                                    <li><a className="dropdown-item" href="service-single.html">Service Single</a></li>
                                    </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                                    <ul className="dropdown-menu fade-down">
                                    <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                    <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="#">My Account</a>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                    <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                                    <li><a className="dropdown-item" href="profile-booking.html">My Booking</a></li>
                                    <li><a className="dropdown-item" href="profile-cancel-booking.html">Cancel
                                    Booking</a></li>
                                    <li><a className="dropdown-item" href="profile-payment.html">Payment History</a>
                                    </li>
                                    <li><a className="dropdown-item" href="profile-setting.html">Settings</a></li>
                                    </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="login.html">Login</a></li>
                                    <li><a className="dropdown-item" href="register.html">Register</a></li>
                                    <li><a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                    </li>
                                    </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="#">Driver</a>
                                    <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="driver.html">Driver</a></li>
                                    <li><a className="dropdown-item" href="driver-single.html">Driver Single</a>
                                    </li>
                                    </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="team.html">Our Team</a></li>
                                    <li><a className="dropdown-item" href="book-ride.html">Book A Ride</a></li>
                                    <li><a className="dropdown-item" href="taxi-rate.html">Our Taxi Rate</a></li>
                                    <li><a className="dropdown-item" href="faq.html">Faq</a></li>
                                    <li><a className="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                    <li><a className="dropdown-item" href="404.html">404 Error</a></li>
                                    <li><a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                    <li><a className="dropdown-item" href="terms.html">Terms Of Service</a></li>
                                    <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                                    </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                                        <ul className="dropdown-menu fade-down">
                                        <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                        <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li> */}

                                    <li className="nav-item">
                                      
                                        <Link to="/contact" className="nav-link" >Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="nav-right">
                                            <div className="search-btn">
                                                <button type="button" className="nav-right-link" onClick={opensearch}><i className="far fa-search"></i></button>
                                            
                                            </div>
                                            <div className="nav-right-account">
                                                    <div className="dropdown">
                                                    <div data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={userimg} alt="" />
                                                    </div>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><a className="dropdown-item" href="dashboard.html"><i className="far fa-gauge-high"></i> Dashboard</a></li>
                                                            <li><a className="dropdown-item" href="profile.html"><i className="far fa-user"></i> My Profile</a></li>
                                                            <li><a className="dropdown-item" href="profile-booking.html"><i className="far fa-layer-group"></i> My Booking</a></li>
                                                            <li><a className="dropdown-item" href="profile-setting.html"><i className="far fa-cog"></i> Settings</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="far fa-sign-out"></i> Log Out</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            <div className="nav-right-btn mt-2">
                                                <a href="#" className="theme-btn"><span className="fas fa-taxi"></span>Book A Taxi</a>
                                            </div>

                                              

                                            

                                        </div>
                                    </div>
                                    
                                    <div className={`search-area ${openit}`}>
                                   
                                <form action="#">
                                <div className="form-group">
                                <input type="text" className="form-control" placeholder="Type Keyword..." />
                                <button type="submit" className="search-icon-btn"><i className="far fa-search"></i></button>
                                </div>
                                </form>
                                </div>

                            </div>
                        </nav>
                    </div>
            </header>
        </>
    )



}

export default Header;