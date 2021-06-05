import React from "react";

class Contact extends React.Component{

    render(){
        return(
            <section id="contact" className="contact section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Let's Talk!</p>
              </div>
              <div className="row">
              <div className="col-lg-4 col-md-4"></div>
                {/* <div className="col-lg-4 col-md-4">
                  <div className="contact-about">
                    <h3>Lonely</h3>
                    <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                    <div className="social-links">
                      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-4">
                  <div className="info">
                    {/* <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt" />
                      <p>A108 Adam Street<br />New York, NY 535022</p>
                    </div> */}
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-envelope" />
                      <p>200AmandaTyler@gmail.com</p>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="bi bi-phone" />
                      <p>540-520-7451</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-8">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group mt-3">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Contact;