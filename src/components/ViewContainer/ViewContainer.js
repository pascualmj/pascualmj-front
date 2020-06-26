import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./viewContainer.scss";

import FooterMain from "../FooterMain";

const ViewContainer = ({ id = "", onViewScroll, children }) => {
  useEffect(() => {
    if (onViewScroll && id) {
      document.getElementById(id).addEventListener("scroll", onViewScroll);
    }

    return () => {
      if (onViewScroll && id) {
        document.getElementById(id).removeEventListener("scroll", onViewScroll);
      }
    };
  }, [id, onViewScroll]);

  return (
    <main className="view-container" {...(!!id.length && { id })}>
      {children}
      <FooterMain />
    </main>
  );
};

ViewContainer.propTypes = {
  id: PropTypes.string,
  onViewScroll: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ViewContainer;
