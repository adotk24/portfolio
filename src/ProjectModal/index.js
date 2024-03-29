import React, { useState } from 'react';
import { Modal } from '../context/Modal'
import './ProjectModal.css';

function ProjectModal({ icon, altText, title, snippet, tech, description, challenges, goals, githubURL, liveLink, images }) {
    const [showModal, setShowModal] = useState(false);
    const viewProject = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    }

    const exitProject = () => {
        setShowModal(false);
        document.body.style.overflow = 'scroll';
    }
    return (
        <div className='project-modal'>
            <button className='view-btn' onClick={viewProject}>View</button>
            {showModal && (
                <Modal onClose={exitProject}>
                    <div className='project-container w3-animate-opacity'>
                        <button className='exit-modal-btn' onClick={exitProject}>X</button>
                        <div className='overview-modal'>
                            <img src={icon} alt={altText} height='87' />
                            <div className='overview-title-snippet'>
                                <div className='gh-ll-btns'>
                                    <button className='github'>
                                        <a href={githubURL} target='_blank' rel='noreferrer'>GitHub</a>
                                    </button>
                                    <button className='live-link'>
                                        <a href={liveLink} target='_blank' rel='noreferrer'>Visit Site</a>
                                    </button>
                                </div>
                                <h2 className='modaltext'>{title}</h2>
                                <p className='modaltext'>{snippet}</p>

                            </div>
                        </div>
                        <hr />
                        <div className='tech-used'>
                            <h4>Tech</h4>
                            <div className='tech-stack'>
                                {tech.map(tool => {
                                    return (
                                        <div key={tool} className='tech-container'>
                                            <p>{tool}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='project-gallery'>
                            {/* Create image carousel */}
                            {images?.map(image => {
                                return (
                                    <div key={image} className='slideshow-images w3-animate-right'>
                                        <img className='project-image' src={image} alt={altText} height='440' />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='description'>
                            {description && <h4>More Info</h4>}
                            <p className='modaltext'>{description}</p>
                            {challenges && <h4>Challenges</h4>}
                            {goals && <h4>Stretch Goals</h4>}
                            {goals.map(goal => {
                                return (
                                    <div key={goal} className='goal-container'>
                                        <li className='modaltext'>{goal}</li>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default ProjectModal;
