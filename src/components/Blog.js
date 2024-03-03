
import Header  from "../common/Header";
import Footer  from "../common/Footer";
import logo from '../assets/img/logo/logo.png'
import backgroundImage from '../assets/img/breadcrumb/01.jpg';
import blog1 from '../assets/img/blog/01.jpg';
import blog2 from '../assets/img/blog/02.jpg';
import blog3 from '../assets/img/blog/03.jpg';


const Blog = ()=>
{

 return (
        <>
       


        <Header/>
              
        <div classNameName="sidebar-popup">
<div classNameName="sidebar-wrapper">
<div classNameName="sidebar-content">
<button type="button" classNameName="close-sidebar-popup"><i classNameName="far fa-xmark"></i></button>
<div classNameName="sidebar-logo">
<img src={logo} alt="" />
</div>
<div classNameName="sidebar-about">
<h4>About Us</h4>
<p>There are many variations of passages available sure there majority have suffered alteration in
some form by injected humour or randomised words which don't look even slightly believable.</p>
</div>
<div classNameName="sidebar-contact">
<h4>Contact Info</h4>
<ul>
<li>
<h6>Email</h6>
<a href="/cdn-cgi/l/email-protection#0b62656d644b6e736a667b676e25686466"><i classNameName="far fa-envelope"></i><span classNameName="__cf_email__" data-cfemail="89e0e7efe6c9ecf1e8e4f9e5eca7eae6e4">[email&#160;protected]</span></a>
</li>
<li>
<h6>Phone</h6>
<a href="tel:+21236547898"><i classNameName="far fa-phone"></i>+2 123 654 7898</a>
</li>
<li>
<h6>Address</h6>
<a href="#"><i classNameName="far fa-location-dot"></i>25/B Milford Road, New York</a>
</li>
</ul>
</div>
<div classNameName="sidebar-social">
<h4>Follow Us</h4>
<a href="#"><i classNameName="fab fa-facebook"></i></a>
<a href="#"><i classNameName="fab fa-twitter"></i></a>
<a href="#"><i classNameName="fab fa-instagram"></i></a>
<a href="#"><i classNameName="fab fa-linkedin"></i></a>
</div>
</div>
</div>
</div>

<main className="main">

<div className="site-breadcrumb" style={{ background: `url(${backgroundImage})` }}>
    <div className="container">
        <h2 className="breadcrumb-title">Our Blog</h2>
        <ul className="breadcrumb-menu">
            <li><a href="index.html">Home</a></li>
            <li className="active">Our Blog</li>
        </ul>
    </div>
</div>


<div className="blog-area py-120">
<div className="container">
<div className="row">
<div className="col-lg-6 mx-auto">
<div className="site-heading text-center">
<span className="site-title-tagline"><i className="flaticon-drive"></i> Our Blog</span>
<h2 className="site-title">Latest News & Blog</h2>
<div className="heading-divider"></div>
</div>
</div>
</div>
                <div className="row">
                        <div className="col-md-6 col-lg-4">
                        <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                        <div className="blog-item-img">
                        <img src={blog1} alt="Thumb" />
                        </div>
                        <div className="blog-item-info">
                        <div className="blog-item-meta">
                        <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                        </ul>
                        </div>
                        <h4 className="blog-title">
                        <a href="#">There are many variations of passage available.</a>
                        </h4>
                        <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <div className="blog-item wow fadeInUp" data-wow-delay=".50s">
                        <div className="blog-item-img">
                        <img src={blog2} alt="Thumb" />
                        </div>
                        <div className="blog-item-info">
                        <div className="blog-item-meta">
                        <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                        </ul>
                        </div>
                        <h4 className="blog-title">
                        <a href="#">There are many variations of passage available.</a>
                        </h4>
                        <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <div className="blog-item wow fadeInUp" data-wow-delay=".75s">
                        <div className="blog-item-img">
                                <img src={blog3} alt="Thumb" />
                        </div>
                        <div className="blog-item-info">
                        <div className="blog-item-meta">
                        <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                        </ul>
                        </div>
                        <h4 className="blog-title">
                        <a href="#">There are many variations of passage available.</a>
                        </h4>
                        <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                        <div className="blog-item-img">
                        <img src={blog1} alt="Thumb" />
                        </div>
                        <div className="blog-item-info">
                        <div className="blog-item-meta">
                        <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                        </ul>
                        </div>
                        <h4 className="blog-title">
                        <a href="#">There are many variations of passage available.</a>
                        </h4>
                        <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <div className="blog-item wow fadeInUp" data-wow-delay=".50s">
                        <div className="blog-item-img">
                        <img src={blog2} alt="Thumb" />
                        </div>
                        <div className="blog-item-info">
                        <div className="blog-item-meta">
                        <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                        </ul>
                        </div>
                        <h4 className="blog-title">
                        <a href="#">There are many variations of passage available.</a>
                        </h4>
                        <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                        <div className="blog-item wow fadeInUp" data-wow-delay=".75s">
                        <div className="blog-item-img">
                        <img src={blog3} alt="Thumb" />
                        </div>
                        <div className="blog-item-info">
                        <div className="blog-item-meta">
                        <ul>
                        <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                        <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                        </ul>
                        </div>
                        <h4 className="blog-title">
                        <a href="#">There are many variations of passage available.</a>
                        </h4>
                        <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                        </div>
                        </div>
                        </div>
                </div>



                    <div className="pagination-area">
                        <div aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true"><i className="far fa-arrow-left"></i></span>
                                </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true"><i className="far fa-arrow-right"></i></span>
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>

</div>
</div>

</main>



            <a href="#" id="scroll-top"><i classNameName="far fa-arrow-up"></i></a>

        <Footer/>
        </>
    )



}

export default Blog;