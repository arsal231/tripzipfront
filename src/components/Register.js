
import Header  from "../common/Header";
import Footer  from "../common/Footer";
import logo from '../assets/img/logo/logo.png'
import backgroundImage from '../assets/img/breadcrumb/01.jpg';
import {Link,useLocation } from 'react-router-dom'
const Register = ()=>
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

            <main className="main">

                <div className="site-breadcrumb" style={{ background: `url(${backgroundImage})` }}>
                <div className="container">
                <h2 className="breadcrumb-title">Register</h2>
                <ul className="breadcrumb-menu">
                <li><a href="index.html">Home</a></li>
                <li className="active">Register</li>
                </ul>
                </div>
                </div>


                <div className="login-area py-120">
                    <div className="container">
                        <div className="col-md-5 mx-auto">
                            <div className="login-form">
                            <div className="login-header">
                            <img src={logo}alt="" />
                            <p>Create your Taxica account</p>
                            </div>
                            <form action="#">
                                <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Your Password" />
                                </div>
                                <div className="form-check form-group">
                                <input className="form-check-input" type="checkbox" value="" id="agree" />
                                <label className="form-check-label" for="agree">
                                I agree with the <a href="#">Terms Of Service.</a>
                                </label>
                                </div>

                                <div className="d-flex align-items-center">
                                     <button type="submit" className="theme-btn"><i className="far fa-paper-plane"></i> Register</button>
                                </div>
                            </form>
                            <div className="login-footer">
                            <p>Already have an account? 
                                 <Link to="/login" > Login</Link>
                            </p>
                            <div className="social-login">
                            <p>Continue with social media</p>
                                {/* <div className="social-login-list">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-google"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                </div> */}
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

export default Register;