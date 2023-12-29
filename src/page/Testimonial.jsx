import React, { useEffect, useState } from 'react'
import "../assets/Testimonials.css"
import axios from 'axios'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Testimonial() {

    const [testimonials, setTestimonial] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/testimonials`,)
            .then(response => {
                setTestimonial(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className='container'>
                <section className='testinomial'>
                    <div className='testinomial-heading'>
                        <b>Our</b> Testimonials
                        <hr className='foooterhr'></hr>

                    </div>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='wrapper'>
                                    {
                                        testimonials.map(el => {
                                            return <>

                                                <div className='container-testimonials'>
                                                    <div className='profile'>
                                                        <div className='imgBox'>
                                                            <img src={`http://localhost:8000/${el.images[0]}`} key="img_id" alt='' />
                                                        </div>
                                                    </div>

                                                    <p>
                                                        <h2>{el.name}</h2>
                                                    </p>
                                                    <p>
                                                        <span className='fa fa-quote-left left'></span>
                                                        {el.quote}
                                                        <span className='fa fa-quote-right right'></span>
                                                    </p>
                                                    <div className='testimonial-social'>
                                                        <i href={el.facebooklink} className="fab fa-facebook-f icon"> <FacebookIcon /></i>
                                                        <i href={el.instalink} className="fab fa-instagram icon"><InstagramIcon /></i>
                                                        <i href={el.twitterlink} className="fab fa-twitter icon "><TwitterIcon /></i>
                                                    </div>
                                                </div>

                                            </>
                                        })
                                    }
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
