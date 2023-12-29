import React, { useEffect } from 'react'
import "../../assets/IELTS.css"
import { useState } from 'react';
import axios from 'axios';


export default function IELTS() {

    const [ielts, setIELTS] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/ielts`,)
            .then(response => {
                setIELTS(response.data[0].data)
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
                        <h1>IELTS</h1>
                    </div>

                    <div className="image-container">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src='/images/ielts.jpeg' alt="" className="background-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        ielts.map(el => {
                            return <>
                                <div className="about shadow my-5">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt="pte" className="w-75 mt-5" />
                                        </div>
                                        <div className="col-md-6" >
                                            <h6 className="display-6 mb-2 front-weight-normal py-2">
                                                {el.title}
                                            </h6>
                                            <hr className='foooterhr'></hr>
                                            <p className="lead mb-4">
                                                {el.des}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <section className='divider'>
                                    <div className='container shadow my-5 pt-30 pb-60'>
                                        <div className='section-title'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='title text-center'>
                                                        <h3>About IELTS</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div class="elementor-widget-second">
                                    <p style={{ fontWeight: 'bold' }}>
                                        {el.content}
                                    </p>
                                    <hr className='foooterhr'></hr>

                                    <h3>
                                        <span>
                                            {el.testformat}
                                        </span>
                                    </h3>
                                </div>
                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle1}
                                    </h2>
                                    <hr className='foooterhr'></hr>

                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des1}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle2}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des2}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle3}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des3}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle4}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des4}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle5}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des5}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle6}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des6}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle7}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des7}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h2>
                                        {el.subtitle8}
                                    </h2>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des8}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h3>
                                        {el.subtitle9}
                                    </h3>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }} >
                                            {el.des9}
                                        </span>
                                    </p>
                                </div>

                                <div class="elementor-widget-container">
                                    <h3>
                                        {el.subtitle10}
                                    </h3>
                                    <hr className='foooterhr'></hr>
                                    <p>
                                        <span style={{ fontWeight: 'bold' }}>
                                            {el.des10}
                                        </span>
                                    </p>
                                </div>
                          

                            </>
                        })
                    }

                </div >
            </section >
        </>

    )
}
