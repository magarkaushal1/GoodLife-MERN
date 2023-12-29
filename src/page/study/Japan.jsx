import React, { useEffect, useState } from 'react'
import "./Japan.css"
import axios from 'axios'

export default function Japan() {
    const [japan, setJapan] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/studyinjapan`,)
            .then(response => {
                setJapan(response.data[0].data)
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
                            <h1>STUDY IN JAPAN</h1>
                        </div>
                        <div className="image-container">
                                        <div id="carouselExample" className="carousel slide">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="/images/japan2.jpeg" alt="" className="background-image" />
                                                </div>
                                                <div className="image-text">
                                                    <span>Study In Japan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        {
                            japan.map(el => {
                                return <>
                                  
                                    <div className="study shadow my-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={`http://localhost:8000/${el.images[0]}`} alt="japan" className="w-75 mt-5" />
                                            </div>
                                            <div className="col-md-6" >
                                                <h6 className="display-6 mb-2 front-weight-normal py-2">
                                                    {el.title}
                                                </h6>
                                                <hr className="w-100" />
                                                <p className="lead mb-4">
                                                   {el.description}
                                                    &nbsp; <a href="/" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Read More...</a>
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
                                                            <img src="/images/j.jpeg" alt="japan" className="w-75 mt-5" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Best Reason to Learn Japanese:</h1>
                                                </div>
                                                <div className="modal-body">
                                                    <p> 
                                                        {el.reason}
                                                     </p>
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13027764.816038217!2d132.80998329411509!3d37.138272337176474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2snp!4v1687003676322!5m2!1sen!2snp"
                                            width="600"
                                            height="450"
                                            style={{ border: "0" }}
                                            allowFullScreen="" loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <h6 className="display-6 mb-2 front-weight-normal py-2">
                                        About Japan
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
