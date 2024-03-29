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
                    <i className="fa-solid fa-map-location-dot"></i>
                  </span>
                  <div className="contact__info">
                    <h3>Location</h3>
                    <p>Dallas, Texas</p>
                  </div>
                </div>

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
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default Contact;
