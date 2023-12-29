import React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './topbar.css';

const Topbar = () => {


    return (
        <>
            <Topbar
                class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
                data-bs-theme="dark">
                <a
                    class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
                    href="/">Company name</a>

                <ul class="navbar-nav flex-row d-md-none">
                    <li class="nav-item text-nowrap">
                        <button
                            class="nav-link px-3 text-black"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSearch"
                            aria-controls="navbarSearch"
                            aria-expanded="false"
                            aria-label="Toggle search">
                        </button>
                    </li>
                    <li class="nav-item text-nowrap">
                        <button
                            class="nav-link px-3 text-black"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        </button>
                    </li>
                </ul>

                <div id="navbarSearch" class="navbar-search w-100 collapse">
                    <input
                        class="form-control w-100 rounded-0 border-0"
                        type="text"
                        placeholder="Search"
                        aria-label="Search" />
                </div>

            </Topbar>
        </>
    );
};

export default Topbar;