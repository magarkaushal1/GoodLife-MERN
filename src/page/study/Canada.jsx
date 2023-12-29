import React, { useEffect, useState } from 'react'
import "./Canada.css"
import axios from 'axios'

export default function Canada() {
    const [canada, setCanada] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/studyincanada`,)
            .then(response => {
                setCanada(response.data[0].data)
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
                        <div className='component-page-heading text-center shadow my-5'>
                            <h1>STUDY IN Canada</h1>
                        </div>
                        <div className="image-container">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/images/canada.jpg" alt="Image" className="background-image" />
                                    </div>
                                    <div className="image-text">
                                        <span>Study In Canada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            canada.map(el=>{
                                return<>
                                   <div className="study shadow my-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={`http://localhost:8000/${el.images[0]}`}  alt="canada" className="w-75 mt-5" />
                                </div>
                                <div className="col-md-6" >
                                    <h6 className="display-6 mb-2 front-weight-normal py-2">
                                        {el.title}
                                    </h6>
                                    <hr className='foooterhr'></hr>
                                    <p className="lead mb-4">
                                       {el.description}
                                        &nbsp; <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More...</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Cost Of Living</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>
                                                    {el.costofliving}
                                                    </p>
                                            </div>
                                            <div className="col-md-6" >
                                                <img src="/images/canada.jpg" alt="canada" className="w-75 mt-5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Best Reason to Learn Japanese:</h1>
                                    </div>
                                    <div className="modal-body">
                                        <p>{el.reason}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                </>
                            })
                        }
                     
                        <div className="study shadow my-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="image-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733795.10505223!2d-120.80095404170548!3d61.22425644433178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2snp!4v1687380403233!5m2!1sen!2snp"
                                            width="600" height="450"
                                            style={{ border: "0" }}
                                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <h6 className="display-6 mb-2 front-weight-normal py-2">
                                        About Australia
                                    </h6>
                                    <hr className="w-100" />
                                    <p className="lead mb-4">
                                        <br />

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <div>
                </div >
            </div >
        </>
    )
}
