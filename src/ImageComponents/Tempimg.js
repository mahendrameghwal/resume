import React from 'react'
import img1 from "../Images/temp1.PNG"
import { Link } from 'react-router-dom'
import "./Tempimg.css"



export const Tempimg = () => {
  return (
    <div className='tempimg-container'>
<div className='temp1-inner-container'>   
 <img  className='temp1-img' src={img1}/> <br/>
 
<Link to={"/temp1"}><button  className='usebtn'>Use This Template</button></Link>
 </div>
    
    </div>
  )
}
