import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';

import "./australia.css"

export default function StudyInAustralia() {
    const { id } = useParams()
    const [australia, setAustralia] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/studyinaustralia`)
            .then(response => {
                setAustralia(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Study In Australia</li>

                </ol>
            </nav>
            <table className="table caption-top">
                <thead>
                    <caption>Components
                    </caption>

                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Images</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Cost Of Living</th>
                        <th scope="col">Reason</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                {australia.map((el, index) => {
          return (
            <tbody key={el._id}>
              <tr>
                <td scope='row'>{index + 1}</td>
                <td className='img-te'>
                  <img src={`http://localhost:8000/${el.images[0]}`} key='img_id' alt='about' className='admin-about' />
                </td>
                <td>{el.title}</td>
                <td>{el.description.slice(0, 500)}...</td>
                <td>{el.costofliving.slice(0, 500)}...</td>
                <td>{el.reason.slice(0,500)}...</td>
                <td>
                <div className='button' style={{display: "flex"}}>
                    <Link to={`/admin/studyinaustralia/show/${el._id}`}>
                    <button
                        className='btn btn-primary text-white'
                        style={{ padding: '5px',margin:'5px', background:"green"}}
                        type='submit'
                      >
                        <VisibilityIcon/>
                        </button>
                    </Link>
                   
                    <Link to={`/admin/studyinaustralia/update/${el._id}`}>
                      <button className='btn text-white' style={{ padding: '5px', background: 'primary', margin: '5px' }} type='submit'>
                        Update
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}