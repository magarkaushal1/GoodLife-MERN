import React, { useEffect, useState } from 'react';
import "../assets/ContactUs.css";
import axios from 'axios';

export default function ContactUs() {
    const [contact, setContact] = useState([]);
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
        axios.get(`${process.env.REACT_APP_SERVER_URL}/contactus`)
        .then(response => {
            setContact(response.data[0].data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <div>
                <section>
                    <div className='container shadow my-5'>
                        <div className='component-page-heading text-center shadow my-5'>
                            <h1>Contact US</h1>
                        </div>
                        {
                            contact.map(el => {
                                return (
                                    <>
                                    <div className="image-container" key={el._id}>
                                        <div id="carouselExample" className="carousel slide">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/japan2.jpeg" alt="" className="background-image" />
                                                </div>
                                                <div className="image-text">
                                                    <span>Contact Us</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                      
                        <section className='divider'>
                            <div className='container shadow my-5 pt-30 pb-60'>
                                <div className='section-title'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='title text-center'>
                                                <h3>Have any Questions?</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='row mt-60'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='image-container'>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14125.927191430186!2d85.3051582!3d27.7332818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19faf2dd66f5%3A0x968480c6772edd58!2sGoodLife%20Educational%20Consultancy!5e0!3m2!1sen!2snp!4v1692521406160!5m2!1sen!2snp"
                                                width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div className="icon-box-wrapper">
                                            <div className="icon-box-icon">
                                                <span className="icon-animation">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>GOODLIFE EDUCATIONAL CONSULTANCY</h5>
                                                <hr className="foooterhr"></hr>
                                                <p>
                                                    {el.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div className="icon-box-wrapper">
                                            <div className="icon-box-icon">
                                                <span className="icon-animation">
                                                    <i className="fas fa-phone"></i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>Contact Number</h5>
                                                <hr className="foooterhr"></hr>
                                                <p>
                                                    +977-01-4956887,
                                                    {el.phone}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div className="icon-box-wrapper">
                                            <div className="icon-box-icon">
                                                <span className="icon-animation">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>Email Address</h5>
                                                <hr className="foooterhr"></hr>
                                                <p>
                                                    <a href='/'>
                                                        <span style={{ color: '#0000ff' }}>{el.email}</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='icon-box'>
                                        <div className="icon-box-wrapper">
                                            <div className="icon-box-icon">
                                                <span className="icon-animation">
                                                    <i className="fas fa-globe"></i>
                                                </span>
                                            </div>
                                            <div className='media-body'>
                                                <h5 className='mt-2'>URL</h5>
                                                <hr className="foooterhr"></hr>
                                                <p>
                                                    <a href='/'>
                                                        <span style={{ color: '#0000ff' }}>{el.url}</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                                  );
                                })
                            }
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
                                        <div className='form-img'>
                                            <img src="/images/office.jpeg" alt="japan" className="w-75 mt-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <div></div>
        </>
    );
}
