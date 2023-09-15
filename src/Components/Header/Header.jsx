import React from 'react'
import './Header.css'
import logo from '../../assets/Ananya Academics.png'
export const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} className='logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
