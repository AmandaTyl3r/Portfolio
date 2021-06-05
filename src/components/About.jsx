import React from "react";
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class About extends React.Component{

    render(){
        return(
           
            <div id="about" className="about">
             <div className="container">
              <div className="row no-gutters">
                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"/>
                    
                
                <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                  <div className="content d-flex flex-column justify-content-center">
                    <h3>About Amanda</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <div className="row">
                      <div className="col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className="bi bi-emoji-smile" />
                          <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={1} className="purecounter" />
                          <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                        </div>
                      </div>
                      <div className="col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className="bi bi-journal-richtext" />
                          <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
                          <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                        </div>
                      </div>
                      <div className="col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className="bi bi-clock" />
                          <span data-purecounter-start={0} data-purecounter-end={12} data-purecounter-duration={1} className="purecounter" />
                          <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                        </div>
                      </div>
                      <div className="col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className="bi bi-award" />
                          <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                          <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                        </div>
                      </div>
                    </div>
                  </div>{/* End .content*/}
                </div>
              </div>
            </div>
          </div>
        
        );
    }
}

export default About;