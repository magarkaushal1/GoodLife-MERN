import React from 'react';
import "./Header.css"
const Header = () => {

    return (
        <>
            <div className="container">
                <div className='carousel'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/images/11.jpg" className="d-block w-100 " alt="img" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/canada.jpg" className="d-block w-100 " alt="img" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/australia.jpg" className="d-block w-100 " alt="img" />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/uk.jpg" className="d-block w-100" alt="img" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" color="black" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;