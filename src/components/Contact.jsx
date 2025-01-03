import Resume from '../images/resume.svg'

function Contact() {
    return (
      <>
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact__content">
              <div className="contact__title">
                <p>contact</p>
                <h3>Let's Connect! 👇</h3>
              </div>
              <div className="contact__icons">
              

                <div className="contact__icon-box">
                  <span>
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </span>
                  <div className="contact__info">
                    <h3>Mail</h3>
                    <a href="mailto:andrewkim1998@gmail.com">
                      andrewkim1998@gmail.com
                    </a>
                  </div>
                  
                </div>
                <div
  className="contact__icon-box"
  onClick={() => window.open("https://www.linkedin.com/in/andrewkimcode/", "_blank")}
  style={{ cursor: "pointer" }} // Optional: changes the cursor to a pointer when hovering
>
  <span>
    <i className="fa-brands fa-linkedin"></i>
  </span>
  <div className="contact__info">
    <h3>Linkedin</h3>
  </div>
</div>


<div
  className="contact__icon-box"
  onClick={() => window.open("./MyResume.pdf", "_blank")}
  style={{ cursor: "pointer" }} // Optional: changes the cursor to a pointer when hovering
>
  <span>
    <i className="fa-solid fa-print"></i>
  </span>
  <div className="contact__info">
    <h3>Resume</h3>
  </div>
</div>

              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default Contact;
