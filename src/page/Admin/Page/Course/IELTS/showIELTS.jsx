import React, { useEffect, useState } from 'react';
import './ielts.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowIELTS() {
    let { id } = useParams();
    const [ielts, setIELTS] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/ielts/${id}`)
            .then((response) => {
                setIELTS(response.data);
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
                           IELTS
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>IELTS Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${ielts.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {ielts.title}</div>
                <br />
                
                <div className='japan-details'>
                    <strong>Description:</strong> {ielts.des}</div>
                <br />
                <div className='japan-details' >
                    <strong >Content:</strong>
                    {ielts.content}
                </div>
                <br />
                <div className='japan-details'> {ielts.testformat}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle1}:</strong> {ielts.des1}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle2}:</strong> {ielts.des2}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle3}:</strong> {ielts.des3}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle4}:</strong> {ielts.des4}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle5}:</strong> {ielts.des5}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle6}:</strong> {ielts.des6}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle7}:</strong> {ielts.des7}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle8}:</strong> {ielts.des8}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle9}:</strong> {ielts.des9}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{ielts.subtitle10}:</strong> {ielts.des10}</div>
                <hr class="foooterhr"></hr>
           
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/ielts">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
