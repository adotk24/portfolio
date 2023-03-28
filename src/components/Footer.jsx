function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footerc">
              <h3>
                Created by Andrew Kim
              </h3>
              <div className="footerc__socials">
                <a
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/andrewkimcode"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/adotk24"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }

  export default Footer;
