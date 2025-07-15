import React, { useState, useEffect } from 'react';
import { Modal } from '../context/Modal'
import './ProjectModal.css';

function ProjectModal({ icon, altText, title, snippet, tech, description, challenges, goals, githubURL, liveLink, images }) {
    const [showModal, setShowModal] = useState(false);

    // Enhanced cleanup for memory leaks prevention  
    useEffect(() => {
        return () => {
            // Restore body overflow when component unmounts
            document.body.style.overflow = 'unset';
            
            // Clear modal state to free memory
            setShowModal(false);
            
            // Clean up any cached image data
            if (images && images.length > 0) {
                images.forEach(imageSrc => {
                    // Clear image from browser cache if possible
                    const img = new Image();
                    img.src = '';
                });
            }
        };
    }, [images]);

    // Manage body overflow when modal state changes with enhanced cleanup
    useEffect(() => {
        let timeoutId;
        
        if (showModal) {
            document.body.style.overflow = 'hidden';
            // Preload images with timeout cleanup
            if (images && images.length > 0) {
                images.forEach((imageSrc, index) => {
                    timeoutId = setTimeout(() => {
                        const img = new Image();
                        img.src = imageSrc;
                    }, index * 100); // Stagger loading to prevent memory spike
                });
            }
        } else {
            document.body.style.overflow = 'unset';
        }

        // Enhanced cleanup function
        return () => {
            document.body.style.overflow = 'unset';
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [showModal, images]);

    const viewProject = () => {
        setShowModal(true);
    }

    const exitProject = () => {
        setShowModal(false);
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
