import React, { useEffect, useState } from 'react';
import './pte.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowPTE() {
    let { id } = useParams();
    const [pte, setPTE] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/pte/${id}`)
            .then((response) => {
                setPTE(response.data);
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
                           PTE
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>PTE Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${pte.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {pte.title}</div>
                <br />
                
                <div className='japan-details'>
                    <strong>Description:</strong> {pte.des}</div>
                <br />
                <div className='japan-details' >
                    <strong >Content:</strong>
                    {pte.content}
                </div>
                <br />
                <div className='japan-details'><strong>Modules: </strong> {pte.modules}</div>
                <hr class="foooterhr"></hr>
                
                <div className='japan-details'><strong>Score Scale:</strong> {pte.scoreScale}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{pte.subtitle1}:</strong> {pte.des1}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{pte.subtitle2}:</strong> {pte.des2}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{pte.subtitle3}:</strong> {pte.des3}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{pte.subtitle4}:</strong> {pte.des4}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/pte">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
