
import Header  from "../common/Header";
import Footer  from "../common/Footer";
import logo from '../assets/img/logo/logo.png'
import backgroundImage from '../assets/img/breadcrumb/01.jpg';
import userimg from '../assets/img/account/user.jpg'


const MyBooking = ()=>
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
                <h2 className="breadcrumb-title">My Booking</h2>
                    <ul className="breadcrumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">My Booking</li>
                    </ul>
                </div>
            </div>


            <div className="user-profile py-120">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3">
                            <div className="user-profile-sidebar">
                                <div className="user-profile-sidebar-top">
                                    <div className="user-profile-img">
                                    <img src={userimg} alt="" />
                                    <button type="button" className="profile-img-btn"><i className="far fa-camera"></i></button>
                                    <input type="file" className="profile-img-file" />
                                    </div>
                                    <h5>Antoni Jonson</h5>
                                    <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="72131c061d1c1b32170a131f021e175c111d1f">[email&#160;protected]</a></p>
                                </div>

                                <ul className="user-profile-sidebar-list">
                                    <li><a href="dashboard.html"><i className="far fa-gauge-high"></i> Dashboard</a></li>
                                    <li><a href="profile.html"><i className="far fa-user"></i> My Profile</a></li>
                                    <li><a className="active" href="profile-booking.html"><i className="far fa-layer-group"></i> My Booking</a></li>
                                    <li><a href="profile-cancel-booking.html"><i className="far fa-xmark-circle"></i> Cancel Booking</a></li>
                                    <li><a href="profile-payment.html"><i className="far fa-credit-card"></i> Payment History</a></li>
                                    <li><a href="profile-setting.html"><i className="far fa-gear"></i> Settings</a></li>
                                    <li><a href="#"><i className="far fa-sign-out"></i> Logout</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="user-profile-wrapper">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="user-profile-card">
                                    <div className="user-profile-card-header">
                                    <h4 className="user-profile-card-title">My Booking</h4>
                                    <div className="user-profile-card-header-right">
                                    <div className="user-profile-search">
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <i className="far fa-search"></i>
                                    </div>
                                    </div>
                                    <a href="#" className="theme-btn"><span className="fas fa-taxi"></span>Book A Taxi</a>
                                    </div>
                                    </div>
                                    <div className="table-responsive">
                                    <table className="table text-nowrap">
                                    <thead>
                                    <tr>
                                    <th>Cab Info</th>
                                    <th>Journey Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>
                                    <div className="table-list-info">
                                    <a href="#">
                                    <img src="assets/img/taxi/01.png" alt="" />
                                    <div className="table-list-content">
                                    <h6>Mercedes Benz Taxi</h6>
                                    <span>Booking ID: #123456</span>
                                    </div>
                                    </a>
                                    </div>
                                    </td>
                                    <td>
                                    <span>24 February, 2023</span>
                                    <p>03:15 PM</p>
                                    </td>
                                    <td>$650</td>
                                    <td><span className="badge badge-primary">Upcoming</span></td>
                                    <td>
                                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-2" data-bs-toggle="tooltip" title="Details"><i className="far fa-eye"></i></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <div className="table-list-info">
                                    <a href="#">
                                    <img src="assets/img/taxi/01.png" alt="" />
                                    <div className="table-list-content">
                                    <h6>Mercedes Benz Taxi</h6>
                                    <span>Booking ID: #123456</span>
                                    </div>
                                    </a>
                                    </div>
                                    </td>
                                    <td>
                                    <span>24 February, 2023</span>
                                    <p>03:15 PM</p>
                                    </td>
                                    <td>$650</td>
                                    <td><span className="badge badge-danger">Cancel</span></td>
                                    <td>
                                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-2" data-bs-toggle="tooltip" title="Details"><i className="far fa-eye"></i></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <div className="table-list-info">
                                    <a href="#">
                                    <img src="assets/img/taxi/01.png" alt="" />
                                    <div className="table-list-content">
                                    <h6>Mercedes Benz Taxi</h6>
                                    <span>Booking ID: #123456</span>
                                    </div>
                                    </a>
                                    </div>
                                    </td>
                                    <td>
                                    <span>24 February, 2023</span>
                                    <p>03:15 PM</p>
                                    </td>
                                    <td>$650</td>
                                    <td><span className="badge badge-info">Confirmed</span></td>
                                    <td>
                                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-2" data-bs-toggle="tooltip" title="Details"><i className="far fa-eye"></i></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <div className="table-list-info">
                                    <a href="#">
                                    <img src="assets/img/taxi/01.png" alt="" />
                                    <div className="table-list-content">
                                    <h6>Mercedes Benz Taxi</h6>
                                    <span>Booking ID: #123456</span>
                                    </div>
                                    </a>
                                    </div>
                                    </td>
                                    <td>
                                    <span>24 February, 2023</span>
                                    <p>03:15 PM</p>
                                    </td>
                                    <td>$650</td>
                                    <td><span className="badge badge-success">Completed</span></td>
                                    <td>
                                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-2" data-bs-toggle="tooltip" title="Details"><i className="far fa-eye"></i></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <div className="table-list-info">
                                    <a href="#">
                                    <img src="assets/img/taxi/01.png" alt="" />
                                    <div className="table-list-content">
                                    <h6>Mercedes Benz Taxi</h6>
                                    <span>Booking ID: #123456</span>
                                    </div>
                                    </a>
                                    </div>
                                    </td>
                                    <td>
                                    <span>24 February, 2023</span>
                                    <p>03:15 PM</p>
                                    </td>
                                    <td>$650</td>
                                    <td><span className="badge badge-success">Completed</span></td>
                                    <td>
                                    <a href="#" className="btn btn-outline-secondary btn-sm rounded-2" data-bs-toggle="tooltip" title="Details"><i className="far fa-eye"></i></a>
                                    </td>
                                    </tr>
                                    </tbody>
                                    </table>
                                    </div>

                                    <div className="pagination-area">
                                    <div aria-label="Page navigation example">
                                    <ul className="pagination my-3">
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="far fa-angle-double-left"></i></span>
                                    </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="far fa-angle-double-right"></i></span>
                                    </a>
                                    </li>
                                    </ul>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
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

export default MyBooking;