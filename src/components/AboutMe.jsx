import AboutImg from "../images/about-img.webp";
import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
              </span>
            </div>
            <div className="text-side">
              <h4>About me</h4>
              <h3>
                With experience in bringing <br /> Full-Stack apps to life...

              </h3>
              <p>
              I am excited to
              bring my unique perspective and skills to the world of software.
              Initially pursuing a law degree, I realized that my true passion lay in coding. So, I decided to take the leap, pivot my career,
              and haven't looked back since. I am constantly learning and growing, and am excited to take on new challenges and develop innovative solutions that will benefit my
              users.
              When I'm not coding, you can find me engaged in all sorts of sports, especially basketball. I love the energy and excitement of the game. Whether it be on the court
              or on vscode I always bring my A-game and strive for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
