import React from 'react'
import "../css/Content.css";
import { FaRegChartBar } from "react-icons/fa";
export default function content() {
  return (
    <>
    <div className="cont">
    <div className="container">
  <div className="row my-3">
    
    <div className="courses-container col-8 b-1 ">
	<div className="course">
		<div className="course-preview">
			<h6>Welcome Back,</h6>
			<h2>Minimal UI!</h2>
			<a href="/">View all chapters <i className="fas fa-chevron-right"></i></a>
		</div>
		<div className="course-info">
			<h6>Welcome Back,</h6>
			<h2>Minimal UI!</h2>
			<button className="btn" style={{color:'white'}}>Go Now</button>
		</div>
	</div>
</div>
    
    <div className="col b-2 mx-3">
  
  <div className="card">
    
    <div className="contentBx">
      <h2 className='getter'>Assignment</h2>
      <div className="size">
        <h3 className='padder changer'>Ratings :</h3>
        <span className='padder'>7</span>
        <span className='padder'>8</span>
        <span className='padder'>9</span>
        <span className='padder'>10</span>
      </div>
      <a href="/">Submit</a>
    </div>
  </div>
</div>
  
  </div>
  <div className="row my-3">
    <div className="col b-3 mr-3">
    <div className="stati emerald ">
    <span className='charts'><FaRegChartBar /></span>
<div>
<b>86</b>
<span>Total downloads</span>
</div>
</div>
    </div>
    <div className="col b-4 mx-3">
    <div className="stati amethyst ">
    <span className='charts'><FaRegChartBar /></span>
<div>
<b>68</b>
<span>Total installed</span>
</div>
</div>
    </div>
    <div className="col b-5 mr-3">
    <div className="stati peter_river ">
    <span className='charts'><FaRegChartBar /></span>
<div>
<b>43</b>
<span>Active Users</span>
</div>
</div>
    </div>
  </div>
  <div className="row my-3">
    <div className="col b-6 ">
    <div className="frame">
  <div className="center">
		<div className="statistic">
		
			<div className="params">
				<span className="red">Views</span>
				<span className="blue">Purchases</span>
			</div>
			<div className="graph">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
				<div className="red data">
					<svg height='80px' width='245px'>
						<polyline className="red" points="9,46 50,18 90,29 130,17 171,40 211,50 251,25"></polyline>    
					</svg>
				</div>
				<div className="blue data">
					<svg height='80px' width='245px'>
						<polyline className="blue" points="9,61 50,50 90,65 130,55 171,59 211,68 251,60"></polyline>    
					</svg>
				</div>
			</div>
			<div className="days">
				<span>MON</span>
				<span>TUE</span>
				<span>WED</span>
				<span>THU</span>
				<span>FRI</span>
				<span>SAT</span>
				<span>SUN</span>
			</div>
		</div>
  </div>
</div>
    </div>
    <div className="col-8 b-7 mx-3 ">
     <img src="assets/images/chart.png" className='set' style={{height:'27vh',width:'98.5%'}} alt="" />
    </div>
  </div>
</div>
</div>
    
    </>
  )
}
