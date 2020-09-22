import React from "react";
import { FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <span style={{ fontSize: "2rem" }}>Movie Player</span>

        <video width="1280" height="720" controls>
          <source src="http://localhost:5000/api/video" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default LandingPage;
