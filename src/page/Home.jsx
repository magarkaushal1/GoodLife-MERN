import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Home() {

    const [testimonials, setTestimonial] = useState([])
    const [data, setData] = useState({
        full_name: "",
        last_name: "",
        address: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

    function handleSubmit(event) {
        event.preventDefault();
        let { first_name, last_name, address, phone, email, message } = data;

        axios.post(`${process.env.REACT_APP_SERVER_URL}/messages`, {
            first_name,
            last_name,
            address,
            phone,
            email,
            message,
        })
            .then(function (response) {
                console.log(response);
                setSubmitted(true); // Form has been successfully submitted
            })
            .catch(function (error) {
                console.log(error?.response?.data?.errors);
                setErrors({});
                error?.response?.data?.errors?.forEach(el => {
                    setErrors((prev_errors) => {
                        return {
                            ...prev_errors,
                            [el.param]: el.msg
                        };
                    });
                });
            });
    }

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/testimonials`,)
            .then(response => {
                setTestimonial(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Header />

            <>
                <div className="container">
                    <div class="container-services">
                        <h2 class="text-uppercase title"> Study<span class="text-theme-colored2"> Abroad </span></h2>
                        <hr className='foooterhr'></hr>
                        <div className='row gy-3 my-3 '>
                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyinjapan">
                                    <div className="card h-100" >
                                        <div className="inner">
                                            <img src="/images/card1.jpeg" className="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At Japan</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyinjapan" className="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyinaustralia">
                                    <div class="card h-100" >
                                        <div className="inner">
                                            <img src="/images/card3.jpg" class="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At Australia</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyinaustralai" class="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyinuk">
                                    <div class="card h-100" >
                                        <div className="inner">
                                            <img src="/images/card2.jpeg" class="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At UK</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyinuk" class="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                                <Link to="/studyincanada">
                                    <div class="card h-100" >
                                        <div className="inner">
                                            <img src="/images/canada.jpg" class="card-img-top" alt="..." height="200px" />
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Study At Canada</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/studyincanada" class="btn btn-primary">Read More...</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <section class="parallax " data-bg-img="" >
                        <div class="container pt-70 pb-90">
                            <div class="section-content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="banner-text text-center">
                                            <h2 class="banner-text">Grow Up Your <span class="text-theme-colored2">career </span> With Us</h2>

                                            <h5 class="Banner-text  mt-15 mb-20">
                                                <p>We always try to provide you our best business consulting service</p>
                                            </h5>
                                            <a class="wow flash btn btn-dark btn-theme-colored2 font-16 btn-lg pr-40 pl-40 mt-15 mr-10"
                                                href="/contactus" >Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="feature-services">
                        <div class="section-content our_services">
                            <div class=" ">
                                <div class="container-services">
                                    <h2 class="text-uppercase title"> Our <span class="text-theme-colored2"> Services </span></h2>
                                    <hr className='foooterhr'></hr>
                                    <div className='row '>
                                        <div className=' col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/abroad.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Study Abroad</h3>
                                                </div>
                                                <p>
                                                    "We provide extensive support for studying abroad in Japan, Australia, the UK, and Canada, aiming to create a fulfilling academic and career-enhancing international education journey."</p>
                                                <a href="/studyabroad" class="btn btn-primary">Read More...</a>
                                            </div>
                                        </div>
                                        <div className=' col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/test.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Test Preparation</h3>
                                                </div>
                                                <p> "Our Test Preparation service enhances exam performance with tailored resources, practice tests, and expert strategies, paving the path to academic and career success."</p>
                                                <a href="/testpreparation" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                        <div className='col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/course.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Courses</h3>
                                                </div>
                                                <p>  "Explore diverse programs for personal and professional growth. Enhance skills, expand horizons, and unlock your potential with our expert-led courses."</p>
                                                <a href="/" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='testinomial ' style={{ minHeight: "40vh", display: "flex" }}>
                        <div className='testinomial-heading'>
                            <b>Our</b> Testimonials
                            <hr className='foooterhr'></hr>
                            <h2 style={{ fontSize: "large", color: "black" }}>
                                "We have empowered countless students on their educational journeys, enabling them to savor every moment of their student life around the world.
                                Discover what they have to share about their enriching experiences."</h2>
                        </div>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {testimonials.map((el, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={el._id}>
                                        <div className='container'>
                                            <div className='wrapper'>
                                                <div className='container-testimonials'>
                                                    <div className='profile'>
                                                        <div className='imgBox'>
                                                            <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt='' />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        <h2>{el.name}</h2>
                                                    </p>
                                                    <p>
                                                        <span className='fa fa-quote-left left'></span>
                                                        {el.quote}
                                                        <span className='fa fa-quote-right right'></span>
                                                    </p>
                                                    <div className='testimonial-social'>
                                                        <a href={el.facebooklink} className="fab fa-facebook-f icon"> <FacebookIcon /></a>
                                                        <a href={el.instalink} className="fab fa-instagram icon"><InstagramIcon /></a>
                                                        <a href={el.twitterlink} className="fab fa-twitter icon "><TwitterIcon /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className='divider bg-lighter'>
                        <div className='container shadow my-5 pt-30 pb-60'>
                            <div className='section-title'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='title text-center'>
                                            <h3>Interested in discussing?</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {submitted ? (
                        <div className="alert alert-success">Form submitted successfully!</div>
                    ) : (
                        <div className='forms'>
                            <div className='row pt-30'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div id='cont-form'>
                                                <form className="row g-3" onSubmit={handleSubmit}>
                                                    <div className="col-md-6">
                                                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                                                            id="inputEmail4"
                                                            name="first_name"
                                                            onChange={handleChange}
                                                        />
                                                        {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                                                            name="last_name"
                                                            onChange={handleChange}
                                                        />
                                                        {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                                            id="inputAddress"
                                                            name="address"
                                                            onChange={handleChange}
                                                        />
                                                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="inputMobile" className="form-label">Mobile No</label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                            id="inputAddress2"
                                                            name="phone"
                                                            onChange={handleChange}
                                                        />
                                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label htmlFor="inputEmail" className="form-label">Email Address</label>
                                                        <input
                                                            type="email"
                                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                            id="inputEmail"
                                                            name="email"
                                                            onChange={handleChange}
                                                        />
                                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                                    </div>
                                                    <div className="col-md-8">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                                            Your Message
                                                        </label>
                                                        <textarea
                                                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                            id="exampleFormControlTextarea1"
                                                            rows="5"
                                                            name="message"
                                                            onChange={handleChange}
                                                        ></textarea>
                                                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                            <label className="form-check-label" htmlFor="gridCheck">
                                                                Check me out
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary">Send Message <i className="fas fa-paper-plane ms-2"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='image-container'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14125.927191430186!2d85.3051582!3d27.7332818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19faf2dd66f5%3A0x968480c6772edd58!2sGoodLife%20Educational%20Consultancy!5e0!3m2!1sen!2snp!4v1692521406160!5m2!1sen!2snp"
                                            width="600" height="450"

                                            allowfullscreen=""
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )}


                </div>
            </>
        </div>

    );
}


