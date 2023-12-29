import React, { useEffect, useState } from 'react';
import './toefl.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowTOEFL() {
    let { id } = useParams();
    const [toefl, setTOEFL] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/toefl/${id}`)
            .then((response) => {
                setTOEFL(response.data);
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
                           TOEFL
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>TOEFL Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${toefl.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {toefl.title}</div>
                <br />
                
                <div className='japan-details'>
                    <strong>Description:</strong> {toefl.des}</div>
                <br />
                <div className='japan-details' >
                    <strong >Content:</strong>
                    {toefl.content}
                </div>
                <br />
                <div className='japan-details'> <strong>Score Scale:</strong>{toefl.scoreScale}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{toefl.subtitle1}:</strong> {toefl.des1}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{toefl.subtitle2}:</strong> {toefl.des2}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{toefl.subtitle3}:</strong> {toefl.des3}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{toefl.subtitle4}:</strong> {toefl.des4}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/toefl">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
