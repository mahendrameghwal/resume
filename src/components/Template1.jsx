import React from 'react'
import "../Css/Template1.css"

const Template1 = () => {
  return (
    <div>
    
    
    <div className="container">
        {
          // contact of candidate
        }
        <div className="intro">
        <h2 className="name">Mahnedra Kumar</h2>
        <h3 className="post">web Developer</h3>
        <div className="contact">
          <span>E-mail:mk@gmail.com</span>
          <span>Moblile:123456789</span>
          <span>Github:mahendrameghwal</span>
        </div>
        </div>
        <hr />
        {
          // summary
        }
        <div className="summary">
        <strong><h3>Summary:</h3> </strong> 
          <p>
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <hr />
        {
          //work exp-1
        }
        <diV className="work-exp">
          <h3>Work-Exprience</h3>
          <ul>
            <div className="row-flex">
              <span>GitHub , New Delhi , India</span>
              <span>Jun 2021 - Present</span>
            </div>
            <br />
            <div className="work-exp-detail">
              <li>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections
              </li>
              <li>
                Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh
                oleh isi tulisan dari{" "}
              </li>
          
            </div>
          </ul>
        </diV>

        {
          //work exp-2
        }

        <diV className="work-exp">
          <h3>Work-Exprience</h3>
          <ul>
            <div className="row-flex">
              <span>GitHub , New Delhi , India</span>
              <span>Jun 2018 - Present</span>
            </div>
            <br />
            <div className="work-exp-detail">
              <li>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections
              </li>
              <li>
                Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh
                oleh isi tulisan dari{" "}
              </li>
          
             
            </div>
          </ul>
        </diV>
        <hr/>
        {
          //education
        }

        <div className="Education">
        <h3>Education</h3>
        {
          //education-1
        }
        <div>
       <ul>
      <div  className="row-flex" >
      <span>University of Washington - Seattle, WA</span>
      <span>Jun 2021 - Present</span>
      </div>
      
      <li className="work-exp-detail">Bechlor of computer Apllication</li>
      </ul>
        
        </div>

        {
          //education-2
        }
        <div>
        <ul>
       <div className="row-flex">
       <span>University of Washington - Seattle, WA</span>
       <span>Jun 2021 - Present</span>
       </div>
       
       <li className="work-exp-detail">Bechlor of computer Apllication</li>
       </ul>
         
         </div>

<hr/>
         {
          //skill
         }

         <div className="skill">
         <h3>Skill</h3>
         <div>
         <span>HTML</span>
         <span>CSS</span>
         <span>JS</span>
         <span>REACT</span>
       


         </div>
         </div>
        </div>
      </div>
    
    </div>
  )
}

export default Template1