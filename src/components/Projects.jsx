import Gymate from "../images/gymate-home.webp";
import Raouf from "../images/ecom.webp";
import ProBox from "./ProBox";
import CarRental from "../images/car-rental-full.webp";
import CoinDom from "../images/coindom-full.png";
import Hard from '../images/hardweb.png'
import Share from '../images/sharebnbweb.png'
import TV from '../images/tvweb.png'



function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                img={CarRental}
                description="A car rental site that provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="CSS"
                code="https://github.com/adotk24/car-rental"
                demo="https://car-rental-ten.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />

              <ProBox
                title="coindom"
                img={CoinDom}
                description="Crypto app that allows users to search for information about various cryptocurrencies in real-time."
                techno1="React"
                techno2="CSS"
                code="https://github.com/adotk24/Coindom"
                demo="https://coindom-crypto-search.vercel.app/"
                scrollY="-74%"
                icon="💸"
                cName="reversed-proj"
              />

              <ProBox
                title="gymate"
                img={Gymate}
                description="Comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="React"
                techno2="CSS"
                code="https://github.com/adotk24/Gymate"
                demo="https://gymate-iota.vercel.app/"
                scrollY="-89%"
                icon="🏋️"
              />
{/*
              <ProBox
                title="Raouf Ecommerce"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making the shopping experience quick yet enjoyable."
                techno1="React"
                techno2="CSS"
                code=""
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              /> */}
                <ProBox
                title="Hard"
                img={Hard}
                description="Clone of Medium that allows any user to be their own favorite blogger. *Hosted on render, please allow 30 seconds to load."
                techno1="Python/Flask"
                techno2="React"
                code="https://github.com/Ykk2/medium-clone"
                demo="https://hard-bijp.onrender.com/"
                scrollY="-30%"
                icon="📖"
                cName="reversed-proj"
              />
               <ProBox
                title="shareBnb"
                img={Share}
                description="Clone of airBnb.com that shows off the easy transactions in dealing with the temporary housing industry. *Hosted on render, please allow 30 seconds to load."
                techno1="Express.js"
                techno2="React"
                code="https://github.com/adotk24/shareBnb"
                demo="https://sharebnb-owhp.onrender.com/"
                scrollY="-22%"
                icon="🏠"
                // cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
