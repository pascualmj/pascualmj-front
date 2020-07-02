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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 154">
          <g
            fill="none"
            stroke="#454545"
            stroke-width="5"
            stroke-miterlimit="10"
          >
            <path d="M50.1 137.12H4.44v12.08h57.83V91.91H50.1zM89.9 137.12V91.91H77.73v57.29h57.83v-12.08z" />
            <path d="M34.97 76.91h68.79v45.21h12.18V64.84H22.79v57.28h12.18zM103.73 13.33L95.11 4.8 69.37 30.29 43.62 4.8 35 13.33l34.37 34.03z" />
          </g>
        </svg>
      </div>
    )
  );
};

PreloaderMain.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  delay: PropTypes.number,
};

export default PreloaderMain;
