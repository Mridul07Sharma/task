import React from 'react'
import "../css/Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { FaRecordVinyl } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillBank } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
export default function Sidebar() {
  return (
    <>
      <div className="main p-3 bg-light d-flex flex-column flex-shrink-0" >


        <div className="fs-4 d-flex justify-content-between">
          <div><img className="get" src="assets/images/footh.png" alt="" /></div>
          <div style={{ paddingRight: '0.5em', paddingTop: '0.3em' }}><FaRecordVinyl /></div>
        </div>

        <hr />
        <div className="container3">
          <span className='hate d-flex align-items-center'><FaUserCircle /></span>
          <span style={{ paddingLeft: '0.8em' }}><strong>Minimal UI</strong><br />
            admin
          </span></div>
        <hr />
        <div style={{ paddingLeft: '0.5em' }}><h6>GENERAL</h6></div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"><AiOutlineCloudDownload /></svg>
              App
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><AiOutlineShoppingCart /></svg>
              E-Commerce
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><FaRegChartBar /></svg>
              Analytics
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><AiFillBank /></svg>
              Banking
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><FaRegCalendar /></svg>
              Booking
            </a>
          </li>
        </ul>
        <div style={{ paddingLeft: '0.5em' }}><h6>MANAGEMENT</h6></div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link link-dark" aria-current="page">
              <svg className="bi me-2" width="16" height="16"><FaUserAlt /></svg>
              User
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><BsFillBagFill /></svg>
              E-Commerce
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16"><FaBlogger /></svg>
              Blog
            </a>
          </li>
        </ul>
        <div style={{ paddingLeft: '0.5em' }}><h6>APP</h6></div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link link-dark" aria-current="page">
              <svg className="bi me-2" width="16" height="16"><AiFillMail /></svg>
              Mail <span className="badge bg-danger" style={{ marginLeft: '6.9em' }}>4</span>
            </a>
          </li>
        </ul>
      </div>

    </>
  )
}
