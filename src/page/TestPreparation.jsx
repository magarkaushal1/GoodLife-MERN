import axios from 'axios';
import React, { useState } from 'react'

export default function TestPreparation() {
    const [data, setData] = useState({
        full_name: "",
        last_name: "",
        address: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

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

    return (
        <>
            <div className='container shadow my-5'>
                <div class="container-services">
                    <div className='testinomial-heading'>
                        <b>Test</b> Preparation
                        <hr className='foooterhr'></hr>
                    </div>
                    <div className='row gy-3 my-3 '>
                        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                            <div className="card h-100" >
                                <div className="inner">
                                    <img src="/images/ielts.jpeg" className="card-img-top" alt="..." height="200px" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">ILETS</h5>
                                    <p class="card-text">Worldwide recognition for language skills in listening, reading, writing, and speaking.
                                        Accepted for education and immigration, your path to success.</p>
                                    <a href="/ielts" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                            <div className="card h-100" >
                                <div className="inner">
                                    <img src="/images/pte.jpeg" className="card-img-top" alt="..." height="200px" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">PTE</h5>
                                    <p class="card-text">Computer-based English test: listening, reading, speaking, and writing.
                                        Accepted worldwide for academics and immigration, PTE unlocks global opportunities.</p>
                                    <a href="/pte" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
                            <div className="card h-100" >
                                <div className="inner">
                                    <img src="/images/gmat.png" className="card-img-top" alt="..." height="200px" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">GMAT</h5>
                                    <p class="card-text">A globally recognized test for graduate business programs, focusing on critical thinking, writing, and problem-solving.
                                        GMAT: Your pathway to business success.</p>
                                    <a href="/gmat" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>

                            <div className="card h-100" >
                                <div className="inner">
                                    <img src="/images/toefl.jpeg" className="card-img-top" alt="..." height="200px" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">TOEFL</h5>
                                    <p class="card-text">Leading test in listening, reading, speaking, and writing.
                                        Accepted globally for study and work, TOEFL is your path to English fluency.</p>
                                    <a href="/toefl" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>

                            <div className="card h-100" >
                                <div className="inner">
                                    <img src="/images/sat.jpeg" className="card-img-top" alt="..." height="200px" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">SAT</h5>
                                    <p class="card-text">Key to U.S. college admissions, testing math, reading, and writing skills.
                                        Your path to higher education</p>
                                    <a href="/sat" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>

                            <div className="card h-100" >
                                <div className="inner">
                                    <img src="/images/gre.jpeg" className="card-img-top" alt="..." height="200px" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">GRE</h5>
                                    <p class="card-text">Global test for grad school. Assesses verbal, math, and writing skills.
                                        Your gateway to advanced studies.</p>
                                    <a href="/gre" className="btn btn-primary">Read More...</a>
                                </div>
                            </div>
                        </div>
                        <section className='divider bg-lighter'>
                            <div className='container shadow my-5 pt-30 pb-60'>
                                <div className='section-title'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='title text-center'>
                                                <h3>Get In Touch With Us</h3>
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

                    </div >
                </div >
            </div >

        </>
    )
}
