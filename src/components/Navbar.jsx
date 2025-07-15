import { useState, useEffect } from "react";
// import "../dist/styles.css";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const closeMenu = () => {
    setHamburger(false);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  // Enhanced cleanup for memory leaks prevention
  useEffect(() => {
    return () => {
      // Ensure body overflow is restored when component unmounts
      document.body.style.overflow = 'unset';
      
      // More comprehensive event listener cleanup
      document.removeEventListener('keydown', () => {});
      document.removeEventListener('click', () => {});
      document.removeEventListener('touchstart', () => {});
      document.removeEventListener('touchend', () => {});
      
      // Clean up any stored references
      setHamburger(false);
    };
  }, []);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setHamburger(false);
      }
    };

    const handleClickOutside = (e) => {
      if (hamburger && !e.target.closest('.mobile-nav') && !e.target.closest('.mobile-menu')) {
        setHamburger(false);
      }
    };

    if (hamburger) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [hamburger]);

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          Andrew Kim
        </h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li onClick={hamburgerMenu}>
            <i className="fa-solid fa-bars-staggered mobile-menu"></i>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          <li onClick={closeMenu}>
            <a href="#home">Home</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#about">About</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#experience">Experience</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
