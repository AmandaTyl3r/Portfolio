import React from "react";

class Resume extends React.Component{

    render(){
        return(
            <section id="resume" className="resume section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Resume</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Amanda Tyler</h4>
                    <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
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
                    <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
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
                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                    </ul>
                    <p />
                  </div>
                  <div className="resume-item">
                    <h4>Executive Recruiter</h4>
                    <h5> Nov 2016 - Feb 2021</h5>
                    <p><em>Valor Partners - Roanoke, VA</em></p>
                    <p>
                    </p><ul>
                      <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                      <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                      <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
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