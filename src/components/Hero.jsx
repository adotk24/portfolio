// import "../dist/styles.css";
import Waving from "../images/waving.png";
import Html from "../images/icons/html.svg";
import Css from "../images/icons/css3.svg";
import Js from "../images/icons/javascript.svg";
import React from "../images/icons/react.svg";
import Python from '../images/icons/python.png'
import Node from '../images/icons/node.svg'
import Flask from '../images/icons/flask.png'
import Docker from '../images/icons/docker.png'
import Resume from '../images/resume.svg'

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Hi there, I'm Andrew</h1>
                <img src={Waving} alt="waving_hand" />

                <p>
                  Current Software Engineer @ Scale AI (contract) looking for a full time position!
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/andrewkimcode/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/adotk24"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href='./MyResume.pdf'
                  target='_blank'
                  rel='noreferrer'>
                    <i class="fa-solid fa-print"></i>
                    </a>
                </span>
              </div>

              <div className="hero-img">
              </div>
            </div>

            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={Js} title="Javascript" alt="program_img" />
                  </li>
                  <li>
                    <img src={Python}title="Python"alt="program_img"/>
                  </li>
                  <li>
                    <img src={Html} title="HTML5" alt="program_img" />
                  </li>
                  <li>
                    <img src={Css} title="CSS3" alt="program_img" />
                  </li>
                  <li>
                    <img src={React} title="React JS" alt="program_img" />
                  </li>
                  <li>
                    <img src={Node} title="Node.js" alt="program_img" />
                  </li>
                  <li>
                    <img src={Flask} title="Flask" alt="program_img" />
                  </li>
                  <li>
                    <img src={Docker} title="Docker" alt="program_img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
