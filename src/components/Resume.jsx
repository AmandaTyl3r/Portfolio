import React from "react";

class Resume extends React.Component{

    render(){
        return(
            <section id="resume" className="resume section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Resume</h2> 
                </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Amanda Tyler</h4>
                    <p><em>Innovative full stack developer with a passion for debugging code, solving real world problems and maximizing efficiency.</em></p>
                    <p>
                    </p><ul>
                      <li>Roanoke, VA</li>
                      <li>(540) 520-7451</li>
                      <li>200AmandaTyler@gmail.com</li>
                    </ul>
                    <p />
                  </div>
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Bachelor of Computer Science</h4>
                    <h5>2009 - 2013</h5>
                    <p><em>James Madison University, Harrisonburg, VA</em></p>
                  </div>
               
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Professional Experience</h3>
                  <div className="resume-item">
                    <h4>Full Stack Developer</h4>
                    <h5>Feb 2021 - Present</h5>
                    <p><em>Host a Fan - Los Angeles, CA </em></p>
                    <p>
                    </p><ul>
                      <li>Designed and created complex SQL tables and stored procedures that add, update, and query information.</li>
                      <li>Built a SQL procedure that uses incoming coordinate parameters and the haversine formula to calculate a 50 mile radius and return all events within the radius. </li>
                      <li>Built responsive components in React that allow hosts to add / edit listing information. </li>
                      <li>Created React component that allows hosts to upload and edit images associated with listings.</li>
                      <li>Used Google Maps API to generate display maps with location markers based on user input and queries.</li>
                      <li>Used .Net Core to create API controllers, services, interfaces, and models to process front end user requests related to listings, events, venues, and properties.</li>
                    </ul>
                    <p />
                  </div>
                  <div className="resume-item">
                    <h4>Executive Recruiter</h4>
                    <h5> Nov 2016 - Feb 2021</h5>
                    <p><em>Valor Partners - Roanoke, VA</em></p>
                    <p>
                    </p><ul>
                      <li>Conducted research on potential client companies and their competitors to build an accurate candidate target profile.</li>
                      <li>Guided company wide data transfer from one ATS (Applicant Tracking System) to another.</li>
                      <li>Created custom SQL search queries in ATS, as requested by client companies.</li>
                    </ul>
                    <p />
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Resume;