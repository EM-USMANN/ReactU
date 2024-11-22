import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
                <div className="container p-1">
                    <Link to={"/"} className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link">About</Link >
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/services/designing'} className="dropdown-item">Designing</Link></li>
                                    <li><Link to={'/services/development'} className="dropdown-item">Development</Link></li>
                                    <li><Link to={'/services/marketing'} className="dropdown-item">Marketing</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link" aria-disabled="true">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-outline-light">Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
