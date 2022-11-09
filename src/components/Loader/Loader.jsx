import React, { useRef, useEffect } from "react";
import { Oval } from "react-loader-spinner";

import "./Loader.scss";

function Loader({ handleShow }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (handleShow) {
        loaderRef.current.style.display = "flex";
    } else {
        loaderRef.current.style.display = "none";
    }
  }, [handleShow]);

  return (
    <div ref={loaderRef} className="loader">
      <Oval
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        color="#ffd400"
        secondaryColor="transparent"
      />
    </div>
  );
}

export default Loader;
