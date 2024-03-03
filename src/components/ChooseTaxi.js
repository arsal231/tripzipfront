import Header  from "../common/Header";
import Footer  from "../common/Footer";
import {useEffect,useState,useRef}  from 'react'
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
import Isotope from 'isotope-layout';
const ChooseTaxi = ()=>
{
    const isMounted = useRef(true);
    const [preloader,Setpreloader] = useState(true);
    const [checkisload,setcheckisload] = useState(false);
    useEffect(()=>{
         const timeoutId = setTimeout(() => {
          
            Setpreloader(false);
          }, 1000);
         //return () => clearTimeout(timeoutId);
   },[])

 useEffect(() => {
    if (document.querySelector(".filter-box").children.length > 0) {
      const iso = new Isotope(".filter-box", { 
        itemSelector: ".filter-item", 
        masonry: { columnWidth: 1 } 
      });

      const filterBtns = document.querySelectorAll(".filter-btns li");

      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const filterValue = btn.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });

          filterBtns.forEach(btn => btn.classList.remove("active"));
          btn.classList.add("active");
        });
      });
    }
  }, []);


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
                <Header />


               

                <main className="main">
                <div id="map">
                    {/* <iframe
                    title="User Selected Route"
                    width="100%"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    src={process.env.PUBLIC_URL + '/route_map/index.html'}
                    frameBorder="0"
                    ></iframe> */}
                </div>
                    



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
                                <div className="col-md-6 col-lg-4 filter-item cat1">
                                <div className="taxi-item">
                                <div className="taxi-img">
                                <img src="assets/img/taxi/01.png" alt="" />
                                </div>
                                <div className="taxi-content">
                                <div className="taxi-head">
                                <h4>BMW M5 2019 Model cat 1 only </h4>
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
                                <h4>BMW M5 2019 Model (Suv/Limousine)</h4>
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
export default ChooseTaxi;
