import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./preloaderMain.scss";

const PreloaderMain = ({ isLoading, delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const preloaderEl = useRef(null);

  useEffect(() => {
    checkIsLoading(isLoading, delay);
  }, [isLoading, delay]);

  const checkIsLoading = (isLoading, delay) => {
    if (isLoading) return;
    setTimeout(() => {
      preloaderEl.current.classList.add("hidden");
      setTimeout(() => {
        setIsVisible(false);
      }, 400);
    }, delay);
  };

  return (
    isVisible && (
      <div ref={preloaderEl} className="preloader-main">
        <p>Loading...</p>
      </div>
    )
  );
};

PreloaderMain.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  delay: PropTypes.number,
};

export default PreloaderMain;
