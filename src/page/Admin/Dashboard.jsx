
import React from 'react'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FeedIcon from '@mui/icons-material/Feed';
import CollectionsIcon from '@mui/icons-material/Collections';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import MessageIcon from '@mui/icons-material/Message';
import PublicIcon from '@mui/icons-material/Public';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LayersIcon from '@mui/icons-material/Layers';
import DashboardIcon from '@mui/icons-material/Dashboard';
import "./Dashboard.css"
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import axios from 'axios'
import  { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    return (
        <div>
            <Sidebar />
            <div class="container-fluid">
                <div class="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div class="offcanvas-lg offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                            <div className='offcanvas-header'>
                                <h5 class="offcanvas-title" id="sidebarMenuLabel">
                                    GoodLife</h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu"
                                    aria-label="Close"></button>
                            </div>
                            {/* <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column nav-pills  mb-auto">
                                    <li>
                                        <a href='/' className="nav-link d-flex align-items-center gap-2 active">
                                            <i className='icon'>
                                                <DashboardIcon />
                                            </i>
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className='divider' data-text="main">
                                        Quick Menu
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                            <a href="#">
                                                <i className="icon"><LayersIcon /></i>
                                                Pages
                                                <i className="icon-right"><ArrowDropDownIcon /></i>
                                            </a>
                                        </button>
                                        <div className="collapse" id="home-collapse" >
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <a href="/">
                                                        <i className="icon"><ContactPageIcon /></i>
                                                        Contact Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="icon"><AnalyticsIcon /></i>
                                                        Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/admin/about">
                                                        <i className="icon">
                                                            <AssessmentIcon /></i>
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="icon"><FlightTakeoffIcon /></i>

                                                        Study Abroad
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="icon">   <CollectionsIcon /></i>

                                                        Gallery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="icon">  <RecentActorsIcon /></i>

                                                        Testimonials
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="mb-1">
                                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                            <a href="/" >
                                                <i className="icon"><NotificationsActiveIcon /></i>
                                                Notifications
                                                <i className="icon-right"><ArrowDropDownIcon /></i>
                                            </a>
                                        </button>
                                        <div className="collapse" id="dashboard-collapse">
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <a href="/admin/application/form">
                                                        <i>
                                                            <FeedIcon />
                                                        </i>
                                                        Application Form
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/admin/message">
                                                        <i>
                                                            <MessageIcon />
                                                        </i>
                                                        Messages
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="mb-1">
                                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                            <a href="/" >
                                                <i className="icon"><PublicIcon /></i>
                                                Countries
                                                <i className="icon-right"><ArrowDropDownIcon /></i>
                                            </a>
                                        </button>
                                        <div className="collapse" id="orders-collapse">
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <a href="/">
                                                        <i>
                                                            <img src="/flags/japan.png" alt="flag-japan" className="img" style={{ margin: '5px' }} />
                                                        </i>
                                                        Japan
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i>
                                                            <img src="/flags/australia.png" alt="flag-australia" className="img" style={{ margin: '5px' }} />
                                                        </i>
                                                        Australia
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i>
                                                            <img src="/flags/canada.png" alt="flag-australia" className="img" style={{ margin: '5px' }} />
                                                        </i>
                                                        Canada
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <img src="/flags/uk.png" alt="flag-uk" className="img" style={{ margin: '5px' }} />
                                                        UK
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i>
                                                            <img src="/flags/usa.png" alt="flag-usa" className="img" style={{ margin: '5px' }} />
                                                        </i>
                                                        USA
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
            </div> */}
           
            {/* <table class="table caption-top">
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
                    <Link to={`/admin/application/form/show/${el._id}`}>
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

            </table> */}
            </div>
        </div>
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                       
                        <h2>Section title</h2>
                        <div class="table-responsive small">
                            <table class="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>text</td>
                                        <td>random</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>placeholder</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>irrelevant</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div >

        </div >
    )
}
