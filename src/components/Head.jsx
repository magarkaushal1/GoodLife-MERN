import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container '>
                    <div className="row top-bar">
                        <div className='col'>
                            <div className='left'>
                                <span className='text-white text-left'>
                                    <i className="fab fa-facebook-f icon" > <FacebookIcon /></i>
                                </span>
                                <span className='text-white'>
                                    <i className="fab fa-instagram icon"> <InstagramIcon /></i>
                                </span>
                                <span className='text-white'>
                                    <i className="fab fa-twitter icon "> <TwitterIcon /></i>
                                </span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='right'>
                                <span className='phone'>
                                    <i className='fas fa-phone-volume'></i>&nbsp;
                                    <a href="tel:+977-01-4956887">+977-01-4956887</a>

                                </span>
                                <span className='text-primary'>
                                    |
                                </span>
                                <span className='email'>
                                    <i className='fa fa-envelope'></i>&nbsp;
                                    <a href="mailto:contact@email.com">goodlifeconsultancy2022@gmail.com</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Head