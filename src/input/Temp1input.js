import React from "react";
import "../Inputcss/Temp1input.css";
import { MdOutlineAdd } from "react-icons/md";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const Temp1input = () => {
  const [Inputsection, SetInputsection] = useState([]);
  const [Employment,setEmployment] = useState([]);
  function Getinput(ins) {
    SetInputsection([...Inputsection, ins]);
  }
  function Getemployment(emp) {
    setEmployment([...Employment, emp]);
  }

  return (
    <div className="temp1-container">
      <div className="temp1-heading">
        {" "}
        <h2>Build Your Resume Qucikly</h2>
      </div>

      <div className="temp1-input-container">
        <div className="inputs">
          <div className="names">
            <div className="inner-head">
              <p>Personal Information</p>
            </div>
            <input type={"text"} placeholder={"firstname"} />
            <input type={"text"} placeholder={"lastname"} />
          </div>

          <div className="contact">
            <div className="inner-head">
              {" "}
              <p>Contact Details</p>
            </div>
            <input type={"email"} placeholder={"Email"} />
            <input type={"tel"} placeholder={"Phone"} />
            <input type={"text"} placeholder={"Linkedin"} />
            <input type={"text"} placeholder={"Other social"} />
          </div>

          <div className="Address">
            <div className="inner-head">
              <p>Address</p>
            </div>
            <input type={"text"} placeholder={"Country"} />
            <input type={"text"} placeholder={"City"} />
          </div>

          <div className="Summary">
            <div className="inner-head">
              <p>Professional Summary</p>
            </div>
            <textarea
              style={{ resize: "none", width: "100%" }}
              placeholder="Professional Summary"
              cols={"43"}
              rows={"4"}
            ></textarea>
          </div>

          <div className="Address">
            <div className="inner-head">
              <h3>Education<MdOutlineAdd onClick={Getinput} className="plusbtn" />{" "}</h3>{" "}
         
            </div>
            <div className="inner-head">
              <p>College name</p>
            </div>

            <input type={"text"} placeholder={"University"} />
            <input type={"text"} placeholder={"Deegree"} />
          </div>

          <div className="Address">
            <div className="inner-head">
              <p>Start & End date</p>
            </div>
            <input type={"date"} />
            <input type={"date"} />
            <div>
              <label></label>
              <br />
            </div>

            <div className="Address">
              <textarea
                style={{ resize: "none" }}
                className="inner-head"
                placeholder="what you learned in college...?"
                cols={"43"}
                rows={"4"}
              ></textarea>
            </div>
          </div>

          {
            
            Inputsection.map((ins,key ) => {
       
            return (
              
              <Fragment>
                <div className="Address">
                  <div className="inner-head">
                    <p>College name {key+1} </p>
                  </div>

                  <input type={"text"} placeholder={"University"} />
                  <input type={"text"} placeholder={"Deegree"} />
                </div>

                <div className="Address">
                  <div className="inner-head">
                    <p>Start & End date</p>
                  </div>
                  <input type={"date"} />
                  <input type={"date"} />
                  <div>
                    <label></label>
                    <br />
                  </div>

                  <div className="Address">
                    <textarea
                      style={{ resize: "none" }}
                      className="inner-head"
                      placeholder="what you learned in college...?"
                      cols={"43"}
                      rows={"4"}
                    ></textarea>
                  </div>
                </div>
              </Fragment>
            );
          })}

          <div className="Summary">
            <div className="inner-head">
              <h3>Employment History <MdOutlineAdd onClick={Getemployment}/></h3>
            </div>
            <div className="inner-head">
              <p>Company</p>
            </div>
            <input
              className="company"
              type={"text"}
              placeholder="company name"
            />{" "}
            <br />
          </div>

          <div className="Address">
            <div className="inner-head">
              <p>Start & End date</p>
            </div>
            <input type={"date"} />
            <input type={"date"} />
            <div>
              <label></label>
              <br />
            </div>

            <div className="Address">
              <textarea
                style={{ resize: "none" }}
                className="inner-head"
                placeholder="which kind you worked you did in yor company..?"
                cols={"43"}
                rows={"4"}
              ></textarea>
            </div>



            {

              Employment.map((emp ,i)=>{
              
              return(
                <Fragment >
                <div className="new">
                <div className="Summary newadd">
                <div className="inner-head">
             
                </div>
                <div className="inner-head">
                  <p key={i}>Company {i+2}</p>
                </div>
                <input
                  className="newcompany company"
                  type={"text"}
                  placeholder="company name"
                />{" "}
                <br />
              </div>
              
              <div className="Address">
                <div className="inner-head">
                  <p>Start & End date</p>
                </div>
                <input type={"date"} />
                <input type={"date"} />
                <div>
                  <label></label>
                  <br />
                </div>
              
                <div className="Address">
                  <textarea
                    style={{ resize: "none" }}
                    className="inner-head"
                    placeholder="which kind you worked you did in yor company..?"
                    cols={"43"}
                    rows={"4"}
                  ></textarea>
                </div>
              
              
              </div>
              </div>
                </Fragment>
              )
              
                
              })
              
                
              }
<Link to={"/Template1"}>   <button className="submit-btn">Submit</button></Link>

         
          </div>






        </div>
      </div>
    </div>
  );
};

export default Temp1input;
