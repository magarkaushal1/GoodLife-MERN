import React, { useEffect } from 'react'
import "../assets/About.css"
import { useState } from 'react';
import axios from 'axios';


export default function About() {

    const [about, setAbout] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/abouts`,)
            .then(response => {
                setAbout(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <section>
                <div className='container shadow my-5'>
                    <div className='component-page-heading text-center shadow my-5'>
                        <h1>About US</h1>
                    </div>
                    <div className="image-container">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/about.jpeg" alt="" className="background-image" />
                                </div>
                                <div className="image-text">
                                    <span>About Us</span>
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
                                            <h3>Introduction</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {
                        about.map(el => {
                            return <>
                                <div className="about shadow my-5">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt="about" className="w-75 mt-5" />
                                        </div>
                                        <div className="col-md-6" >
                                            <h6 className="display-6 mb-2 front-weight-normal py-2">
                                                {el.title}
                                            </h6>
                                            <hr className='foooterhr'></hr>
                                            <p className="lead mb-4">
                                                {el.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>


                                <section className='background-text'>
                                    <div class="container-about shadow my-5 ">
                                        <div className='row'>
                                            <div className='col'>
                                                <div class="elementor-widget-container">
                                                    <h3
                                                        class="title">
                                                        Our Vision
                                                    </h3>
                                                    <hr className='foooterhr'></hr>
                                                    <p >
                                                        <span style={{ color: 'white' }}>
                                                            {el.vision}
                                                        </span>
                                                    </p>
                                                </div>
                                                <div class="elementor-widget-second">
                                                    <h3 class="title">
                                                        Our Mission
                                                    </h3>
                                                    <hr className='foooterhr'></hr>

                                                    <p>
                                                        <span style={{ color: 'white' }}>
                                                            {el.mission}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </section >
                            </>
                        })
                    }

                </div>
            </section >
        </>

    )
}
