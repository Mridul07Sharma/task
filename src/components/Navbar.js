import React from 'react'
import "../css/Navbar.css";
import { FaSistrix } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import {FaUserCircle } from "react-icons/fa";
export default function Navbar() {
    return (
        <>
            <div className="nab sticky-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid box-model">
                        <div>
                        <a className="navbar-brand fixer" href="/"><FaSistrix/></a>
                        </div>
                        <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='sizer spacer'><img src="assets/images/flag.png" alt="...." /></div>
                        <div className='sizer spacer'><FaBell/></div>
                        <div className='sizer spacer'><FaUserFriends/></div>
                        <div className='sizer2 spacer'><FaUserCircle/></div>
                       
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
