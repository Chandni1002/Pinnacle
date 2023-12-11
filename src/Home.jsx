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

// Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import { TweenMax, Power3 } from "gsap/all";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentBerlinTime);

  useEffect(() => {
    const videoElement = document.querySelector(".video");
    const letters = Array.from(document.querySelectorAll(".letter"));

    const expandText = () => {
      videoElement.playbackRate = 9.0;
      TweenMax.staggerTo(
        letters,
        0.3,
        { scaleX: 1.2, letterSpacing: "0.2em", ease: Power3.easeOut },
        0.05
      );
    };

    const shrinkText = () => {
      videoElement.playbackRate = 0.75;
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

    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentBerlinTime);
    }, 1000);

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", expandText);
        letter.removeEventListener("mouseleave", shrinkText);
      });
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentBerlinTime() {
    const now = new Date();
    const berlinTimeString = now.toLocaleTimeString("en-US", {
      timeZone: "Europe/Berlin",
      hour12: false,
    });
    return ` ${berlinTimeString}`;
  }

  const handleContactButtonClick = () => {
    // Replace 'your-email@example.com' with the desired email address
    const emailAddress = "hi.sridhar@fyi";
    window.location.href = `mailto:${emailAddress}`;
  };

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

      <div className="contact-button">
        <button onClick={handleContactButtonClick}>Contact</button>
      </div>

      <div className="address">
        <p>Locations : BRLN &amp; STKHM</p>
      </div>

      <div className="utc-time">{currentTime}</div>

      <div className="description">
        <p>
          Pinnacle is an early-stage venture capital firm with a mission to
          empower and elevate the next generation of innovative companies.
        </p>
      </div>

      <div className="tagline">
        Empowering Innovation in the Nordic and European Markets
      </div>
    </div>
  );
};

export default Home;
