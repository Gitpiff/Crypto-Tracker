import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {




    return (
        <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                    <a
                        href="#"
                        class="navbar-brand mb-0 h1">
                            Crypto Tracker
                    </a>
                    <button
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        class="navbar-toggler"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle Navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <Link to="/"
                                    class="nav-link"> Home</Link>
                                </li>
                                <li class="nav-item active">
                                <Link to="/learn"
                                    class="nav-link"> Learn</Link>
                                </li>
                                <li class="nav-item active">
                                <Link to="/search"
                                    class="nav-link"> Search</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
            </nav>
        )
    }





export default Nav
