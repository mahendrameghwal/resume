import React from 'react'
import "../Inputcss/Temp1input.css"


const Temp1input = () => {
  return (
    <div className='temp1-container'>
  <div className='temp1-heading' >  <h2>Build Your Resume Qucikly</h2></div>

<div className='temp1-input-container'>
<div className='inputs'>
<div className='names'>
<div className='inner-head'><p>Personal Information</p></div>
<input type={"text"} placeholder={"firstname"}/>
<input type={"text"} placeholder={"lastname"}/>
</div>

<div className='contact'>
<div className='inner-head'> <p>Contact Details</p></div>
<input type={"email"} placeholder={"Email"}/>
<input type={"tel"} placeholder={"Phone"}/>
<input type={"text"} placeholder={"Linkedin"}/>
<input type={"text"} placeholder={"Other social"}/>
</div>

<div className='Address'>
<div className='inner-head'><p>Address</p></div>
<input type={"text"} placeholder={"Country"}/>
<input type={"text"} placeholder={"City"}/>
</div>


<div className='Summary'>
<div className='inner-head'><p>Professional Summary</p></div>
<textarea placeholder='Professional Summary' cols={"43"} rows={"4"}></textarea>
</div>

<div className='Address'>
<div className='inner-head'><h3>Education</h3></div>
<div className='inner-head'><p>College name</p></div>

<input type={"text"} placeholder={"University"}/>
<input type={"text"} placeholder={"Deegree"}/>
</div>

<div className='Address'>
<div className='inner-head'><p>Start & End date</p></div>
<input type={"date"}/>
<input type={"date"}/>
<div>
<label></label><br/>

</div>

<div className='Address'><textarea className='inner-head' placeholder='what you learned in college...?' cols={"43"} rows={"4"}></textarea></div>

</div>

<div className='Summary'>
<div className='inner-head'><h3>Employment History</h3></div>
<div className='inner-head'><p>Company</p></div>

<input className='company' type={"text"} placeholder="company name" /> <br/>
</div>

<div className='Address'>
<div className='inner-head'><p>Start & End date</p></div>
<input type={"date"}/>
<input type={"date"}/>
<div>
<label></label><br/>

</div>

<div className='Address'><textarea className='inner-head' placeholder='which kind you worked you did in yor company..?' cols={"43"} rows={"4"}></textarea></div>

<button className='submit-btn'>Submit</button>
</div>

</div>




</div>  
    
    </div>
  )
}

export default Temp1input