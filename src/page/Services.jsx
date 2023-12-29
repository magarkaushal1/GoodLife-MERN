import React, { useEffect, useState } from 'react'
import "../assets/Services.css"
import axios from 'axios'

export default function Services() {
    const [service, setService] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/services`,)
            .then(response => {
                setService(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <div>
                <section>
                    <div className='container shadow my-5'>
                        <div className="services-container">
                            <div id="carouselExample" className="carousel-slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/images/services2.jpeg" alt="" className="background-image" />
                                    </div>
                                    <div className="image-text">
                                        <span>Our Services</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className='elementor-services'>
                            <div class="elementor-service-wrap">
                                <div class="elementor-widget-wrap">
                                    <div class="elementor-service" >
                                        <div class="service-widget-container">
                                            <div class="service-widget-heading">
                                                <div class="service-heading">
                                                    <h3 class="service-title">GoodLife Educational Consultancy Services</h3>
                                                    <hr className='foooterhr'></hr>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-elementor">
                                        <div class="service-widget-container">
                                            <div class="service-text-editor ">
                                                <h3>"GoodLife Educational Consultancy is dedicated to providing professional and user-friendly services to students seeking international education opportunities.</h3>
                                                <h3>Our comprehensive range of services includes country-comparison assistance, career counseling, application support, language and standardized testing services, and visa application assistance. We understand that selecting the right study destination, exploring career options, navigating through the application process, and dealing with language and testing requirements can be complex and daunting. That's why our team of experts is committed to delivering personalized guidance and support at every stage. Whether you need help in comparing study destinations, receiving career counseling, receiving assistance with applications, or ensuring a smooth visa application process, we are here to assist you in making well-informed decisions and achieving your educational aspirations."</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-service" >
                                        <div class="service-widget-container">
                                            <div class="service-widget-heading">
                                                <div class="service-heading">
                                                    <h3 class="service-title">Our Core Services</h3>
                                                    <hr className='foooterhr'></hr>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-service">
                                        <div class="service-widget-container">
                                            <div class="service-text-editor ">
                                                <h3>
                                                    "GoodLife Educational Consultancy provides country-comparison, career counseling, application support, language/testing services, and visa application assistance."
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='elementor-services'>
                            <div class="elementor-container">
                                <div class="row">
                                    {
                                        service.map(el => {
                                            return <>
                                                <div class="elementor-column">
                                                    <div class="elementor-column-wrap ">
                                                        <div class="service-widget-wrap">
                                                            <div class="elementor-service ">
                                                                <div class="elementor-widget-container">
                                                                    <div class="service-widget-single-images ">
                                                                        <div class="single-image">
                                                                            <picture>
                                                                                <img src={`http://localhost:8000/${el.images[0]}`} alt="" />
                                                                            </picture>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-column-1">
                                                    <div class="elementor-column-wrap ">
                                                        <div class="service-widget-wrap">
                                                            <div class="elementor-service">
                                                                <div class="eleservice-widget-container">
                                                                    <div class="s-text-editor">
                                                                        <h3>{el.coreTitle}</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-service">
                                                                <div class="elementor-widget-container">
                                                                    <div class="service-text-editor">
                                                                        <p>{el.description}</p> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        })
                                    }
                                </div>
                            </div>
                        </section>

                    </div>
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
                                                <p>We offer comprehensive study abroad assistance, covering popular countries like Japan, Australia, UK, and Canada. Our goal is a rewarding study abroad experience that helps achieve academic and career goals.</p>
                                                <a href="/studyabroad" class="btn btn-primary">Read More...</a>                                          
                                                  </div>
                                        </div>
                                        <div className=' col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/test.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Test Preparation</h3>
                                                </div>
                                                <p> Our Test Preparation service offers targeted guidance and resources to help students excel in standardized tests. We provide study materials, practice exams, and expert strategies to boost confidence and improve scores, opening doors for academic and career success.</p>
                                                <a href="/" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                        <div className='col-md-4 pt-3 pb-3 '>
                                            <div className='box h-100'>
                                                <img src='/icons/course.png' alt='' />
                                                <div className='service-content'>
                                                    <h3 className='text'>Courses</h3>
                                                </div>
                                                <p> Discover diverse educational programs for personal and professional growth. Enhance skills, explore interests, and advance your career with our expert-led courses. Expand your horizons through flexible learning options and unleash your full potential.</p>
                                                <a href="/" class="btn btn-primary">Read More...</a>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section >

                <div>
                </div >
            </div >
        </>
    )
}
