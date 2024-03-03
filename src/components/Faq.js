
import Header  from "../common/Header";
import Footer  from "../common/Footer";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
import logo from '../assets/img/logo/logo.png'
import backgroundImage from '../assets/img/breadcrumb/01.jpg';
import faq1 from '../assets/img/faq/01.jpg';

const stripePromise = loadStripe('pk_test_G5K2PNB3NfGFuhy75qeIjShH');
const Faq = ()=>
{
    const options = {
        // passing the client secret obtained from the Stripe Dashboard
        clientSecret: '{{CLIENT_SECRET}}',
      };
 return (
        <>
       


        <Header/>
              
        

<main className="main">

<div className="site-breadcrumb"   style={{ background: `url(${backgroundImage})` }}>
<div className="container">
<h2 className="breadcrumb-title">Faq's</h2>
<ul className="breadcrumb-menu">
<li><a href="index.html">Home</a></li>
<li className="active">Faq's</li>
</ul>
</div>
</div>
   




<Elements stripe={stripePromise} options={options}>
     
<form>
      <PaymentElement />
      <button>Submit</button>
    </form>
    </Elements>

<div className="faq-area py-120">
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

</main>



            <a href="#" id="scroll-top"><i className="far fa-arrow-up"></i></a>

        <Footer/>
        </>
    )



}

export default Faq;