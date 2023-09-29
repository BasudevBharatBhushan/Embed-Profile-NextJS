import React, { useEffect } from "react";

const PDFViewer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cloudpdf.io/viewer.min.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const config = {
        documentId: "ed4747e8-2ccd-4b35-966f-6f949a1f4ee0",
        darkMode: true,
        themeColor: "#5163ba",
        appBarColored: true,
        disableToolbar: false,
        disableElements: ["darkmode", "fullscreen"],
      };

      CloudPDF(config, document.getElementById("viewer")).then((instance) => {
        // Do something after the viewer is initialized if needed
      });

      // Clean up the CloudPDF instance when the component is unmounted
      return () => {
        // Destroy the viewer instance to prevent memory leaks
        instance.destroy();
      };
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return <div id="viewer" style={{ width: "1120px", height: "630px" }}></div>;
};

export default PDFViewer;
