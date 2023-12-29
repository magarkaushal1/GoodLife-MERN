import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './applynow.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function () {

    const [applications, setApplication] = useState([]);
    const [search_term, setSearchTerm] = useState('')
    const [metadata, setMetaData] = useState({
        total: 0,
        page: 1,
        per_page: 50
    })
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_SERVER_URL}/applyforms?search_term=${search_term}`)
            .then(response => {
                setApplication(response.data[0].data)
                let { total, per_page, page } = response.data[0].metadata
                setMetaData(response.data[0].metadata)
            })
            .catch(err => {
                console.log(err)
            })

    }, [metadata.page, search_term])
    const deleteApply = async (id) => {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/applyforms/${id}`);
        // After deletion, refresh the page by calling the function that fetches data again.
        fetchData();
      };
    
      const fetchData = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/applyforms?search_term=${search_term}`)
          .then((response) => {
            setApplication(response.data[0].data);
            let { total, per_page, page } = response.data[0].metadata;
            setMetaData(response.data[0].metadata);
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Appication Form</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Apply Now</li>
                </ol>
            </nav>
            <div className='row g-3'>
                <div className="col-md-2 input-group">
                    <input className="form-control me-2" type="search"
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                        placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success"
                        type="submit">Search Jobs</button>

                </div>
            </div>
            <table class="table caption-top">
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Address</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Applied Country</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    applications.map((el, index) => {
                        return <tbody>
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{el.full_name} </td>
                                <td>{el.dateOfBirth}</td>
                                <td>{el.email}</td>
                                <td>{el.phone}</td>
                                <td>{el.address}</td>
                                <td>{el.gender}</td>
                                <td>{el.applyingCountry}</td>
                                <td>
                <div className='button'>
                    <Link to={`/admin/applyforms/show/${el._id}`}>
                    <button
                        className='btn btn-primary text-white'
                        style={{ padding: '5px',marginRight:'5px'}}
                        type='submit'
                      >
                        <VisibilityIcon/>
                        </button>
                    </Link>
                    </div>
                  <div className='button'>
                    <Link onClick={() => deleteApply(el._id)}>
                      <button
                        className='btn btn-danger text-white'
                        style={{ padding: '5px', background: '#f93535' }}
                        type='submit'
                      >
                        <DeleteIcon />
                      </button>
                    </Link>
                  </div>
                </td>
                            </tr>
                        </tbody>
                    })
                }

            </table>
        </div>
    )
}
