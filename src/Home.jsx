// import React, { useEffect, useState } from "react";
// import "./Home.css";

// export default function Home() {
//   const [showMenu, setShowMenu] = useState(false);

//   useEffect(() => {
//     const cursorDot = document.createElement("div");
//     cursorDot.classList.add("cursor-dot");
//     document.body.appendChild(cursorDot);

//     document.addEventListener("mousemove", function (e) {
//       const x = e.clientX;
//       const y = e.clientY;

//       cursorDot.style.left = `${x}px`;
//       cursorDot.style.top = `${y}px`;
//     });

//     document.addEventListener("mousedown", function () {
//       cursorDot.classList.add("small-dot");
//     });

//     document.addEventListener("mouseup", function () {
//       cursorDot.classList.remove("small-dot");
//     });

//     return () => {
//       document.body.removeChild(cursorDot);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       {!showMenu && (
//         <div className="container">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             src="public/video1.mp4"
//             className="video"
//           ></video>
//           <div
//             className="centered-text"
//             onMouseEnter={toggleMenu}
//             onMouseLeave={toggleMenu}
//           >
//             PINNACLE
//           </div>
//         </div>
//       )}

//       {/* Remove the menu */}
//     </>
//   );
// }

// import React from "react";
// import "./Home.css";

// export default function Home() {
//   return (
//     <div className="container">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         src="public/video1.mp4"
//         className="video"
//       ></video>
//       <div className="centered-text">PINNACLE</div>
//     </div>
//   );
// }

/// Import necessary dependencies
// Home.jsx
import React, { useEffect } from "react";
import "./Home.css";
import { TweenMax, Power3 } from "gsap/all";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const Home = () => {
  // useEffect hook to handle animations
  useEffect(() => {
    const videoElement = document.querySelector(".video");
    const letters = Array.from(document.querySelectorAll(".letter"));

    const expandText = () => {
      // Increase the playback rate for faster video when hovering over the text
      videoElement.playbackRate = 9.0; // Adjust the playbackRate as needed

      // TweenMax animation for expanding text with increased letter spacing
      TweenMax.staggerTo(
        letters,
        0.3,
        { scaleX: 1.2, letterSpacing: "0.2em", ease: Power3.easeOut },
        0.05 // Adjust the stagger delay for even spacing
      );
    };

    const shrinkText = () => {
      // Reset the playback rate when not hovering over the text
      videoElement.playbackRate = 0.75;

      // TweenMax animation for shrinking text with normal letter spacing
      TweenMax.staggerTo(
        letters,
        0.3,
        { scaleX: 1, letterSpacing: "0", ease: Power3.easeInOut },
        0.05
      );
    };

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", expandText);
      letter.addEventListener("mouseleave", shrinkText);
    });

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", expandText);
        letter.removeEventListener("mouseleave", shrinkText);
      });
    };
  }, []);

  // JSX structure for the component
  return (
    <div className="container">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/video1.mp4"
        className="video grayscale"
      ></video>
      <div className="overlay"></div>
      <div className="text-container">
        <span className="letter t1">P</span>
        <span className="letter t2">I</span>
        <span className="letter t3">N</span>
        <span className="letter t4">N</span>
        <span className="letter t5">A</span>
        <span className="letter t6">C</span>
        <span className="letter t7">L</span>
        <span className="letter t8">E</span>
      </div>

      <div className="linkedin-logo">
        <a
          href="https://www.linkedin.com/company/pinnaclefund/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Use the FaLinkedin component to render the LinkedIn icon with a white color */}
          <FaLinkedin size={24} color="#ffffff" />
        </a>
      </div>

      <div className="address">
        <p>Berlin, Germany</p>
      </div>

      <div className="utc-time">
        {/* Add a function to display the current UTC time */}
        {getCurrentUTCTime()}
      </div>

      <div className="description">
        <p>
          Pinnacle is an early-stage venture capital firm with a mission to
          empower and elevate the next generation of innovative companies.
        </p>
      </div>

      <div className="tagline">
        Venture Capital and Private Equity Principals
      </div>
    </div>
  );
};

export default Home;

// Function to get current UTC time
function getCurrentUTCTime() {
  const now = new Date();
  const utcString = now.toISOString().slice(11, 19);
  return ` UTC Time: ${utcString}`;
}
