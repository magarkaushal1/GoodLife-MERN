import React from 'react'
import { Link } from 'react-router-dom'

export default function StudyAbroad() {

    return (
        <>
            <div className='container shadow my-5'>
                <div class="container-services">

                    <div className='testinomial-heading'>
                        <b>Study </b>Abroad
                        <hr className='foooterhr'></hr>
                    </div>                   
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
            </div>
       
        </>
    )
}
