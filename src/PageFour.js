import { useState, useEffect } from "react"
import ProjectModal from './ProjectModal/index.js'
import airbnbLogo from './Images/airbnb/airbnblogo.png'
import airbnbSplash from './Images/airbnb/airbnbsplash.png'
import airbnbOneSpot from './Images/airbnb/onespot.gif'
import airbnbSearch from './Images/airbnb/search-bar.gif'
import hardLogo from './Images/hard/diamond.png'
import hardSplash from './Images/hard/hardsplash.gif'
import hardStory from './Images/hard/hardstory.png'
import hardReview from './Images/hard/hardreview.gif'
import tvLogo from './Images/teamviewer/tv.ico'
import tvAddGame from './Images/teamviewer/tv-addgame.gif'
import tvBoxScore from './Images/teamviewer/tv-boxscore.png'
import tvRoster from './Images/teamviewer/tv-rosterpic.png'


export const PageFour = () => {


    const [hide, setHide] = useState(true)
    const [source, setSource] = useState(false)

    const [uTube, setUTube] = useState(false)
    const [hard, setHard] = useState(false)
    const [bnb, setBnB] = useState(false)

    const sources = {
        "uTube": "https://team-viewer.onrender.com/",
        "Hard": "https://hard.onrender.com/",
        "BnB": "https://sharebnb-owhp.onrender.com/"
    }

    return (
        <div className="Page Four">
            <div className="left">
                <div className="left-stuff">
                    <div id="left-title">
                        Projects
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right-stuff">
                    <div className="right-stuff-items">
                        <span id="title">Team Viewer</span>
                        {/* <div><a href="https://team-viewer.onrender.com/" target="_blank" rel="noopener noreferrer">Project link</a>&nbsp;&nbsp;<a href="https://www.maxpreps.com/" target="_blank" rel="noopener noreferrer">Original Site</a></div> */}
                        <div className='view-modal'>
                            <ProjectModal
                                icon={tvLogo}
                                altText='Team Viewer Logo'
                                title='Team Viewer'
                                snippet='MaxPreps clone where users can create and manage their sports team! Equipped with the ability to manage teams, players, games, and scores!'
                                tech={['Python', 'JavaScript', 'React', 'Redux', 'Flask', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy', 'Render']}
                                description="As a sports nut myself, I was excited to create something that could be used positively for my fellow athletes. This site was created
                                with the goal of showcasing the talent of athletes so they can have an opportunity to play at the next level."
                                // challenges="One of the challenges I faced during this project was creating a journal entry when the user completed a routine.
                                // With two routines available to complete, an AM and/or PM routine, the entry should either be created or updated depending on whether the
                                // user submitted a routine for that day."
                                goals={['Increase the speed in which the site queries and renders data', 'Clean up and make my database more efficient', 'Create notification system where teams can challenge others!']}
                                githubURL='https://github.com/adotk24/team-viewer'
                                liveLink='https://team-viewer.onrender.com/'
                                images={[tvBoxScore, tvAddGame, tvRoster]}
                            />
                        </div>
                    </div>
                    <div className="right-stuff-items">
                        <span id="title">Hard</span>
                        <div className='view-modal'>
                            <ProjectModal
                                icon={hardLogo}
                                altText='hardLogo'
                                title='Hard'
                                snippet='Medium clone where users can create blog posts, review/like them, as well as follow their favorite authors!'
                                tech={['Python', 'JavaScript', 'React', 'Redux', 'Flask', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy', 'Render']}
                                description="As a frequent user of the popular blog site, Medium, I was excited to create a site where people around
                                the world can show off their knowledge and creativity freely!"
                                // challenges="One of the challenges I faced during this project was creating a journal entry when the user completed a routine.
                                // With two routines available to complete, an AM and/or PM routine, the entry should either be created or updated depending on whether the
                                // user submitted a routine for that day."
                                goals={['Create notification and system to accept or decline follow requests', 'Give option to user to share blog posts privately or within a small group', 'Implement Google Maps API for optional location viewing']}
                                githubURL='https://github.com/Ykk2/medium-clone'
                                liveLink='https://hard.onrender.com/'
                                images={[hardSplash, hardStory, hardReview]}
                            />
                        </div>
                    </div>
                    <div className="right-stuff-items">
                        <span id="title">BnB</span>
                        <div className='view-modal'>
                            <ProjectModal
                                icon={airbnbLogo}
                                altText='sharebnbLogo'
                                title='shareBnb'
                                snippet='Airbnb clone where users can create listings, book spots, leave comments, and search for for a place to stay!.'
                                tech={['JavaScript', 'React', 'Redux', 'Express', 'HTML', 'CSS', 'PostgreSQL', 'SQLAlchemy', 'Render', 'Herokuapp']}
                                description="I've always been interesteed in building an e-commerce site but had yet developed
                                the necessary skills to completely build it out. Using all the knowledge I learned over the last few months
                                to finally build this project was a rewarding experiencing! My goals for this project was to create a clean and efficient
                                user interface that leads to a good user experience!"
                                // challenges="One of the challenges I faced during this project was creating a journal entry when the user completed a routine.
                                // With two routines available to complete, an AM and/or PM routine, the entry should either be created or updated depending on whether the
                                // user submitted a routine for that day."
                                goals={['Implement Google Maps API for better location viewing', 'Improve the styling to be pixel-perfect to airbnb', 'Notifications for both a booker and bookee when bookings details change']}
                                githubURL='https://github.com/adotk24/shareBnb'
                                liveLink='https://sharebnb-owhp.onrender.com/'
                                images={[airbnbSplash, airbnbOneSpot, airbnbSearch]}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className={`preview-container ${hide ? "hide" : "show"}`}>
                    <iframe
                        title="preview"
                        src={source}>
                    </iframe>
                </div> */}
            </div>
        </div>
    )

}

export default PageFour
