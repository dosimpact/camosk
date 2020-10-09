import React from "react";
import { FaCode } from "react-icons/fa";

function AdPage() {
  return (
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <span style={{ fontSize: "2rem" }}>Movie Player</span>

        <video width="1280" height="720" controls autoplay>
          <source
            src="http://133.186.221.101:5000/api/video/range/1H7vnXa-Fog"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default AdPage;
