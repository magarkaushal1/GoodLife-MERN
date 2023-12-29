import React, { useEffect, useState } from 'react';
import './testimonial.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MessageShow() {
    let { id } = useParams();
    const [testimonial, setTestimonial] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/testimonials/${id}`)
            .then((response) => {
                setTestimonial(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='container'>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5'>
                    <li className='breadcrumb-item text-sm'>
                        <a className='opacity-5 text-dark'>
                            Testimonials
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                         Details
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>Testimonials Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${testimonial.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Full Name:</strong> {testimonial.name}</div>
                <div className='details'><strong>Quote:</strong> {testimonial.quote}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to ="/admin/testimonial">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
