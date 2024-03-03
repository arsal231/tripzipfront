import React, { useEffect,useState } from 'react';

import {usePlacesWidget} from 'react-google-autocomplete';
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



const  navigate =  useNavigate();
const [preloader,Setpreloader] = useState(true);
const [counter,setCounter] = useState(3);
const [addstop,setAddstop] = useState(true);
const [rmstop,setRmstop] = useState(false);

//const [pickupdate,setPickUpDate] = useState('');
const [returndate,setReturnDate] = useState('');

//const [pickUpTime,setPickUpTime] = useState('');
//const [passengervalue,setPassendgerValue] = useState(1);

//const [childerenvalue,setChilderenValue] = useState(1);
// const [showpassengerlist,setShowPassengerList] = useState(false);
//const [showchilderenlist,setShowChilderenList] = useState(false);  //infantvalue childerenvalue passengervalue 

 const [adultcounter, setIncreaseAdultCounter] = useState(2);
 const [childrencounter, setIncreaseChildrenCounter] = useState(0);
 const [infantscounter, setIncreaseInfantsCounter] = useState(0);
 const [pessengervalue, setPessengerValue] = useState(false);
 const [pickupdate, setPickUpDate] = useState('');



const [showinfantlist,setShowInfantList] = useState(false);
const [infantvalue,setInfantValue] = useState('Select Infant');

const [showtimelist,setShowTimeList] = useState(false);
const [timevalue,setTimeValue] = useState('00:00');
const [timevaluereturn,setTimeValueReturn] = useState('00:00');

const [selectedPlace, setSelectedPlace] = useState(null);
const [selectedPlace2, setSelectedPlace2] = useState(null);
const [selectedPlace3, setSelectedPlace3] = useState(null); 
const [stop3, setStop3] = useState('none');

const [selectedPlace4, setSelectedPlace4] = useState(null); 
const [stop4, setStop4] = useState('none');

const [selectedPlace5, setSelectedPlace5] = useState(null); 
const [stop5, setStop5] = useState('none');

const [selectedPlace6, setSelectedPlace6] = useState(null); 
const [stop6, setStop6] = useState('none');

const [selectedPlace7, setSelectedPlace7] = useState(null); 
const [stop7, setStop7] = useState('none');
//const [removes, setRemoves] = useState([]); 
const [isChecked, setIsChecked] = useState(false);
const [showreturn, setShowReturn] = useState(false);
const [ifreturn, setIfReturn] = useState(true);


// onClick={()=>setShowReturn(!showreturn)} 
// ifreturn handleReturn

    const handleReturn=()=>
    {
        setShowReturn(!showreturn);
        setIfReturn(false);
    }
    const cancelReturn=()=>
    {
        setShowReturn(!showreturn);
        setIfReturn(true);
        setReturnDate('');
        setTimeValueReturn('');
    }

// Function to handle checkbox change
const handleCheckboxChange = () => {
 // setIsChecked(event.target.checked);
//   if(!showreturn)
//   {
//     setShowReturn(true);
//   }
//   else{
//     setShowReturn(false);
//   }
  //event.target.checked
 // alert('isChecked'+event.target.checked);
  // alert('isChecked' + isChecked)
};
useEffect(() => {
    document.body.classList.add('home-3');
    
    localStorage.removeItem('stop_3');
    localStorage.removeItem('stop_4');
    localStorage.removeItem('stop_5');
    localStorage.removeItem('stop_6');
    localStorage.removeItem('stop_7');
    
    //console.log("Selected Place 3:", selectedPlace3);
  }, [selectedPlace3]);

  useEffect(() => {
   // console.log("Selected Place 4:", selectedPlace4);
  }, [selectedPlace4]);

  useEffect(() => {
   // console.log("Selected Place 5:", selectedPlace5);
  }, [selectedPlace5]);

  useEffect(() => {
    //console.log("Selected Place 6:", selectedPlace6);
  }, [selectedPlace6]);

  useEffect(() => {
   // console.log("Selected Place 7:", selectedPlace7);
  }, [selectedPlace7]);

const BookNow=()=>{

  
    
            localStorage.setItem('pickup_location', JSON.stringify(selectedPlace));
            localStorage.setItem('drop_off_location', JSON.stringify(selectedPlace2));
            
          


           localStorage.setItem('stop_3', JSON.stringify(selectedPlace3 || ''));
           localStorage.setItem('stop_4', JSON.stringify(selectedPlace4 || ''));
           localStorage.setItem('stop_5', JSON.stringify(selectedPlace5 || ''));
           localStorage.setItem('stop_6', JSON.stringify(selectedPlace6 || ''));
           localStorage.setItem('stop_7', JSON.stringify(selectedPlace7 || ''));
           
           localStorage.setItem('pick_up_date', JSON.stringify(pickupdate || ''));
           localStorage.setItem('pick_up_time', JSON.stringify(timevalue || ''));
          
           localStorage.setItem('is_return', JSON.stringify(showreturn || 0));
           localStorage.setItem('return_date', JSON.stringify(returndate || ''));
           localStorage.setItem('return_time', JSON.stringify(timevaluereturn || ''));
           
           localStorage.setItem('infant', JSON.stringify(infantscounter || 0));
           localStorage.setItem('passenger', JSON.stringify(pessengervalue || 0));
           localStorage.setItem('childeren', JSON.stringify(childrencounter || 0));
           localStorage.setItem('adult', JSON.stringify(adultcounter || 0));
               
           console.log('selectedPlace3' + selectedPlace3);
           console.log('selectedPlace4' + selectedPlace4);
           console.log('selectedPlace5' + selectedPlace5);
           console.log('selectedPlace6' + selectedPlace6);
           console.log('selectedPlace7' + selectedPlace7);
           console.log('pickUpDate' + pickupdate);
           console.log('timevalue' + timevalue);
          // console.log('showreturn' + showreturn);
           console.log('returndate' + returndate);
           console.log('timevaluereturn' + timevaluereturn);
           console.log('infantvalue' + infantscounter);
           console.log('passengervalue' + pessengervalue);
           console.log('childerenvalue' + childrencounter);
           navigate('/choose-taxi');
 }
    // const selectPasswnerValue = (value)=>{
    //     setPassendgerValue(value)
    //     setShowPassengerList(false);
    // }
    // const selectChilderenValue = (value)=>{
    //     setChilderenValue(value)
    //     setShowChilderenList(false);
    // }
    // const selectInfantValue = (value)=>{
    //     setInfantValue(value)
    //     setShowInfantList(false);
    // }

    // const selectTimeValue = (value)=>{
    //     setTimeValue(value)
    //     setShowTimeList(false);
    // }
    // const selectTimeValueReturn = (value)=>{
    //     setTimeValueReturn(value)
    //     setShowTimeList(false);
    // }
const { ref: ref1 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o", 
    onPlaceSelected: place => {
       console.log(place.formatted_address);
        setSelectedPlace(place.formatted_address);
    },
    
    inputAutocompleteValue: selectedPlace ? selectedPlace.formatted_address : '',
}); 

const { ref: ref2 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o", 
    onPlaceSelected: place => {
        console.log(place.formatted_address);
        setSelectedPlace2(place.formatted_address);
    },
    inputAutocompleteValue: selectedPlace2 ? selectedPlace2.formatted_address : '',
}); 


const { ref: ref3 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o", 
    onPlaceSelected: place => {
        console.log(place.formatted_address);
        setSelectedPlace3(place.formatted_address);
    },
    inputAutocompleteValue: selectedPlace3 ? selectedPlace3.formatted_address : '',
});

const { ref: ref4 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o",
    onPlaceSelected: place => {
        console.log(place.formatted_address);
        setSelectedPlace4(place.formatted_address);
    },
    inputAutocompleteValue: selectedPlace4 ? selectedPlace4.formatted_address : '',
});

const { ref: ref5 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o", 
    onPlaceSelected: place => {
        console.log(place.formatted_address);
        setSelectedPlace5(place.formatted_address);
    },
    inputAutocompleteValue: selectedPlace5 ? selectedPlace5.formatted_address : '',
});

const { ref: ref6 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o", 
    onPlaceSelected: place => {
        console.log(place.formatted_address);
        setSelectedPlace6(place.formatted_address);
    },
    inputAutocompleteValue: selectedPlace6 ? selectedPlace6.formatted_address : '',
});

const { ref: ref7 } = usePlacesWidget({
    apiKey: "AIzaSyDl32moNNiXnunmHcKB7XVRku7hqgt-F5o", 
    onPlaceSelected: place => {
        console.log(place.formatted_address);
        setSelectedPlace7(place.formatted_address);
    },
    inputAutocompleteValue: selectedPlace7 ? selectedPlace7.formatted_address : '',
});

useEffect(()=>{
     const timeoutId = setTimeout(() => {
        // Code to be executed after the delay
        Setpreloader(false);
      }, 1000);
},[])

  const addMoreStops = () => {
   
    if(counter==8) return;

    switch (counter) {
      case 3:
        setStop3('block');
        setRmstop(true)
        break;
      case 4:
        setStop4('block');
        setRmstop(true)
        break;
      case 5:
        setStop5('block');
        setRmstop(true)
        break;
      case 6:
        setStop6('block');
        setRmstop(true)
        break;
      case 7:
        setStop7('block');
        setRmstop(true)
        break;
      default:
        break;
    }
    setCounter(counter + 1); // Increment counter
  };

 const removeStop =(counterr)=>{
    
     if(counterr==2)
     {
        
        return false;
    }
    // alert(counterr)
//return false;
     switch (counterr) {
        case 3:
          setStop3('none');
          setRmstop(false)
          setSelectedPlace3('');
          setCounter(counter-1)
          break;
        case 4:
          setStop4('none');
          setSelectedPlace4('');
          setCounter(counter-1)
          break;
        case 5:
          setStop5('none');
          setSelectedPlace5('');
          setCounter(counter-1)
        
          break;
        case 6:
          setStop6('none');
          setSelectedPlace6('');
          setCounter(counter-1)
          
          break;
        case 7:
          setStop7('none');
          setSelectedPlace7('');
          setCounter(counter-1)
          
          break;
        default:
          break;
      }
     
   // setStop+counterr('none');
   
 }
 const numbersList = [1, 2, 3, 4, 5, 6, 7, 8];
 const timeList = ['12:00 AM', '01:30 AM', '01:30 PM', '03:30 PM', '03:30 PM ', '02:30 PM', '03:00 PM', '04:00 PM'];
 
  const PessengerBlock=()=>{
    return (
        <div className='col-md-6 passndgercls'>
                 <ul className="">
                     <li> 
                        <div className='fl'>
                         <span className='labelcls'>Adults</span><br/>
                        
                         <span className='labelinfo'> 12+ years</span>
                        </div> 

                        <div className='fr'> 
                         <span onClick={()=>setIncreaseAdultCounter((adultcounter==1 ? 1 : adultcounter-1))}>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                         </span>  
                             <span className='countcls'>
                                 {adultcounter}
                             </span> 
                         <span onClick={()=>setIncreaseAdultCounter((adultcounter==15 ? 15 : adultcounter+1))}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                         </span>
                        </div>

                     </li>

                     <li> 
                        <div className='fl'>
                         <span className='labelcls'>Children</span><br/>
                        
                         <span className='labelinfo'>2-12years</span>
                        </div> 

                        <div className='fr'>
                         <span onClick={()=>setIncreaseChildrenCounter((childrencounter==0 ? 0 : childrencounter-1))}>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                         </span>  
                             <span className='countcls'>
                                 {childrencounter}
                             </span> 
                         <span onClick={()=>setIncreaseChildrenCounter((childrencounter==10 ? 10 : childrencounter+1))}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                         </span>
                        </div>

                     </li>
                     <li> 
                        <div className='fl'>
                         <span className='labelcls'>Infants</span><br/>
                        
                         <span className='labelinfo'>0-2years</span>
                        </div> 

                        <div className='fr'>
                         <span onClick={()=>setIncreaseInfantsCounter((infantscounter==0 ? 0 : infantscounter-1))}>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                         </span>  
                             <span className='countcls'>
                                 {infantscounter}
                             </span> 
                         <span onClick={()=>setIncreaseInfantsCounter((infantscounter==10 ? 10 : infantscounter+1))}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                         </span>
                        </div>

                     </li>
                     <li> 
                        <div className='theme-btn' onClick={()=>setPessengerValue(!pessengervalue)}>
                          Confirm 
                        </div>

                     </li>
                 </ul>
                 </div> 
    )
  }
  const handleDateChange = (e) => 
  {
      const selectedDate = e.target.value;
      setPickUpDate(selectedDate);
  };
  const today = new Date().toISOString().split('T')[0];

    const today1 = new Date();
    const tomorrow = new Date(today1);
    tomorrow.setDate(today1.getDate() + 1);
    const minDate1 = tomorrow.toISOString().split('T')[0];
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
              


<main className="main">

<div className="hero-section">
<div className="hero-single" style={{paddingBottom: '40px',paddingTop:'96px'}}> 
  
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
        <h4 className="booking-title">Book Your Ride 
       
             {(rmstop)  ? 
             
             <a href="javascript:void(0)" style={{ color: 'red', fontSize: '14px', float: 'right',textDecoration:'none' }}
             onClick={()=>removeStop(counter-1)}
             >  -stop  </a>
           :''}

            {(addstop)  ? 
             <a href="javascript:void(0)" style={{ color: 'green', fontSize: '14px', float: 'right',textDecoration:'none' }} 
            
            onClick={addMoreStops}
            > +stop <i className="far fa-location-dot"></i> </a> 
            :''}  
        </h4>
        <form action="#">
        <div className='scrollblock'>
            <div className="row"  style={{overFlow: 'hidden'}}>
            <div className="col-lg-6">

            <div className="form-group">
            <label>Pick Up Location</label>
            

            <input
                    ref={ref1}
                    type="text"
                    className="form-control"
                    placeholder="Type Location"
                   // onChange={(event)=>setSelectedPlace(event.target.value)}
                    
                />
 {/* {(selectedPlace) ? selectedPlace : ''} */}

            <i className="far fa-location-dot"></i>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="form-group">
            <label style={{display:'block'}}>
                Drop Off Location
             </label>
                

                
            <input type="text"
            ref={ref2}
           // onChange={(event)=>setSelectedPlace2(event.target.value)}
            
            className="form-control" placeholder="Type Location" 
        
            />
         {/* {(selectedPlace2) ? selectedPlace2 : ''} */}
        
            <i className="far fa-location-dot"></i>
            </div>
            </div> 
            <div className="col-lg-12 stopcls" style={{display:`${stop3}`}}>
            <label style={{display:'block'}}>Stop  

            
            </label>
                        <input
                        ref={ref3}
                            type="text"
                            className="form-control"
                            placeholder="Add Stop"
                           onChange={(event)=>setSelectedPlace3(event.target.value)}

                        />
                        {/* {(selectedPlace3) ? selectedPlace3 : ''} */}
            </div>
            

            <div className="col-lg-12 stopcls" style={{display:`${stop4}`}} >
            <label style={{display:'block'}}>Stop  

        
            </label>
                        <input
                        ref={ref4}
                            type="text"
                            className="form-control"
                            placeholder="Add Stop"
                            onChange={(event)=>setSelectedPlace4(event.target.value)}

                        />
                         {/* {(selectedPlace4) ? selectedPlace4 : ''} */}
            </div>

            <div className="col-lg-12 stopcls" style={{display:`${stop5}`}} >
            <label style={{display:'block'}}>Stop  

        
            </label>
                        <input
                        ref={ref5}
                            type="text"
                            className="form-control"
                            placeholder="Add Stop"
                            onChange={(event)=>setSelectedPlace5(event.target.value)}

                        />
                        {/* {(selectedPlace5) ? selectedPlace5 : ''} */}
            </div>

            <div className="col-lg-12 stopcls" style={{display:`${stop6}`}} >
            <label style={{display:'block'}}>Stop  
            </label>
                        <input
                        ref={ref6}
                            type="text"
                            className="form-control"
                            placeholder="Add Stop"
                            onChange={(event)=>setSelectedPlace6(event.target.value)}

                        />
                         {/* {(selectedPlace6) ? selectedPlace6 : ''} */}
            </div>

            <div className="col-lg-12 stopcls" style={{display:`${stop7}`}} >
            <label style={{display:'block'}}>Stop 
            </label>
                        <input
                        ref={ref7}
                            type="text"
                            className="form-control"
                            placeholder="Add Stop"
                            onChange={(event)=>setSelectedPlace7(event.target.value)}

                        />
                        
            </div>
        
        
            <div className="col-lg-6 pickupdatecls">
                <div className="form-group">
                <label>Pick Up Date</label>
                <input type="date" className="form-control date-picker" placeholder="DD/MM/YY" 
                 onChange={handleDateChange}
                // onChange={(e)=>setPickUpDate(e.target.value)}
                min={today}
                value={pickupdate}
                />
                <i className="far fa-calendar-days"></i>
                </div>
                {/* {(pickupdate) ? pickupdate : ''} */}
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                <label>Pick Up Time</label>
                <input type="time" className="form-control "    placeholder={timevalue}  onClick={()=>setShowTimeList(true)} />
                
                <i className="far fa-clock"></i>
                </div>
           </div>
    
            {
                (showreturn) ? 
                        <div className="col-lg-6 pickupdatecls">
                            <div className="form-group">
                                <label>Return Date</label>
                                <input type="date" className="form-control date-picker" placeholder="DD/MM/YY" 
                                 onChange={(e)=>setReturnDate(e.target.value)}
                                min={minDate1}
                                value={returndate}
                                />
                                <i className="far fa-calendar-days"></i>
                            </div>
                        </div>
                
                :''
            }
        
        {
                (showreturn) ? 
                    <div className="col-lg-6">
                        
                    <div className="form-group">
                    <label>Return Time</label>
                    <input type="time" className="form-control "    placeholder={timevaluereturn} 
                    onChange={()=>setTimeValueReturn}  />

                    <i className="far fa-clock"></i>
                    </div>
                    <i class="fa fa-close cancelbtn" onClick={cancelReturn}></i>
                    
                    </div>
                :''
            }
                {(ifreturn) ? 

                    <div className="col-lg-12 stopcls"  >
                        <div onClick={()=>handleReturn()}>
                            <p className='returnbtn'>ADD RETURN</p> 
                        </div>
                    </div>
                : 
                ''}
                    
            <div className="col-lg-12">
            <div className="form-group">
            <label>Passangers</label>
            <input type="text" className="form-control time-picker" placeholder={adultcounter + infantscounter + childrencounter}  
            onClick={()=>setPessengerValue(!pessengervalue)}
            readOnly/>
            <i className="far fa-user"></i>
            </div> 
            </div>
            {(pessengervalue) ?  <PessengerBlock />:''}  
            <div>&nbsp;</div> 
            
            
            
            </div>
            </div>
            <div className="col-lg-4 align-self-end">
            <button className="theme-btn" type="button" onClick={BookNow}>Book Taxi<i className="fas fa-arrow-right"></i></button>
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
<support />
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