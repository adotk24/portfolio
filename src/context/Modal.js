import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
        
        // Cleanup function to ensure proper unmounting
        return () => {
            // Clear the modal reference when component unmounts
            setValue(null);
        };
    }, []);

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    
    // Add error handling and null checks
    if (!modalNode) {
        console.warn('Modal component used outside of ModalProvider context');
        return null;
    }

    // Add keyboard event handler for accessibility and cleanup
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && onClose) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        
        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    try {
        return ReactDOM.createPortal(
            <div id="modal">
                <div id="modal-background" onClick={onClose} />
                <div id="modal-content">
                    {children}
                </div>
            </div>,
            modalNode
        );
    } catch (error) {
        console.error('Error rendering modal:', error);
        return null;
    }
}
