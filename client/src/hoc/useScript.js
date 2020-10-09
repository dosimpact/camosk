import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    console.log("useScript url loaded", url);
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
