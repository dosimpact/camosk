import React, { useState } from "react";
import QRcode from "qrcode";

function QRCodeP({ url, sizeable = false, className }) {
  const [code, setCode] = useState("");
  const [, setWidth] = useState(200);

  const handleHover = (e, param) => {
    e.preventDefault();
    if (param === 1 && sizeable) {
      setWidth(500);
    } else {
      setWidth(500);
    }
  };
  QRcode.toDataURL(url).then((codeUrl) => setCode(codeUrl));
  if (code.length === 0) {
    return <p>QRCode is being built...</p>;
  } else {
    return (
      <div className={className}>
        <img
          src={code}
          alt="ad-qrcode"
          style={{ width: "60%", height: "75%" }}
          onMouseOver={(event) => handleHover(event, 1)}
          onMouseLeave={(event) => handleHover(event, 0)}
        />
      </div>
    );
  }
}

export default QRCodeP;
