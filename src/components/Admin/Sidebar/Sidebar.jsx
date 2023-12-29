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
import Topbar from "../Topbar"
import "../../../page/Admin/Dashboard.css"


import React from 'react'

export default function Sidebar() {
    return (
        <>
        <Topbar />
            <section id='sidebar'>
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
                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
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
            </section>
        </>
    )
}




// import React, { useState, useEffect } from 'react';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
// import FeedIcon from '@mui/icons-material/Feed';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import RecentActorsIcon from '@mui/icons-material/RecentActors';
// import MessageIcon from '@mui/icons-material/Message';
// import PublicIcon from '@mui/icons-material/Public';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import LayersIcon from '@mui/icons-material/Layers';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import "./sidebar.css"

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () =>
//         setIsOpen(!isOpen)

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);

//     };

//     useEffect(() => {
//         const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
//         allDropdown.forEach((item) => {
//             const a = item.parentElement.querySelector('a:first-child');
//             a.addEventListener('click', function (e) {
//                 e.preventDefault();

//                 if (!this.classList.contains('active')) {
//                     allDropdown.forEach((i) => {
//                         const aLink = i.parentElement.querySelector('a:first-child');

//                         aLink.classList.remove('active');
//                         i.classList.remove('show');
//                     });
//                 }

//                 this.classList.toggle('active');
//                 item.classList.toggle('show');
//             });
//         });

//     }, []);

//     return (
//         <section id="sidebar" >
//             <a href="#" className="brand">
//                 < i >
//                     <img src="#" alt="logo" />
//                 </i > GoodLife

//             </a >

//             <ul className="side-menu">
//                 <li>
//                     <a href='#' className="active">
//                         <i className='icon'>
//                             <DashboardIcon />
//                         </i>
//                         Dashboard
//                     </a>
//                 </li>
//                 <li className='divider' data-text="main">
//                     Quick Menu
//                 </li>
//                 <li className='nav-link px-2'>
//                     <a href="#">
//                         <i className="icon"><LayersIcon /></i>
//                         Pages
//                         <i className="icon-right"><ArrowDropDownIcon /></i>
//                     </a>
//                     <ul className="side-dropdown">
//                         <li>
//                             <a href="#">
//                                 <i className="icon"><ContactPageIcon /></i>
//                                 Contact Us
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i className="icon"><AnalyticsIcon /></i>

//                                 Services
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/admin/about">
//                                 <i className="icon">
//                                     <AssessmentIcon /></i>

//                                 About Us
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i className="icon"><FlightTakeoffIcon /></i>

//                                 Study Abroad
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i className="icon">   <CollectionsIcon /></i>

//                                 Gallery
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i className="icon">  <RecentActorsIcon /></i>

//                                 Testimonials
//                             </a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className='nav-link px-2'>
//                     <a href="#" >
//                         <i className="icon"><NotificationsActiveIcon /></i>
//                         Notifications
//                         <i className="icon-right"><ArrowDropDownIcon /></i>
//                     </a>
//                     <ul className="side-dropdown">
//                         <li>
//                             <a href="/admin/application/form">
//                                 <i>
//                                     <FeedIcon />
//                                 </i>
//                                 Application Form
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/admin/message">
//                                 <i>
//                                     <MessageIcon />
//                                 </i>
//                                 Messages
//                             </a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className='nav-link px-2'>
//                     <a href="#" >
//                         <i className="icon"><PublicIcon /></i>
//                         Countries
//                         <i className="icon-right"><ArrowDropDownIcon /></i>
//                     </a>
//                     <ul className="side-dropdown">
//                         <li>
//                             <a href="#">
//                                 <i>
//                                     <img src="/flags/japan.png" alt="flag-japan" className="img" style={{ margin: '5px' }} />
//                                 </i>
//                                 Japan
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i>
//                                     <img src="/flags/australia.png" alt="flag-australia" className="img" style={{ margin: '5px' }} />
//                                 </i>
//                                 Australia
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i>
//                                     <img src="/flags/canada.png" alt="flag-australia" className="img" style={{ margin: '5px' }} />
//                                 </i>
//                                 Canada
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <img src="/flags/uk.png" alt="flag-uk" className="img" style={{ margin: '5px' }} />
//                                 UK
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <i>
//                                     <img src="/flags/usa.png" alt="flag-usa" className="img" style={{ margin: '5px' }} />
//                                 </i>
//                                 USA
//                             </a>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </section >

//     );
// };

// export default Sidebar;
