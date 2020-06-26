import React from "react";
import "./footerMain.scss";

import ViewSection from "../ViewSection";
import ZigZagImage from "../ZigZagImage";
import SocialIcons from "../SocialIcons";
import Link from "../Link";
import Text from "../Text";

const FooterMain = () => {
  return (
    <ViewSection>
      <div id="footer-main">
        <ZigZagImage variant="dark-lighter" />
        <SocialIcons variant="secondary" className="mt-3 mb-1" />
        <Link text="Download my resume" url="https://www.gosail.com.ar/" />
        <Text size="smaller" color="dark-lighter" className="mt-3">
          www.pascualmj.dev
          <br />
          Built with <Link text="ReactJS" url="https://es.reactjs.org/" />
        </Text>
      </div>
    </ViewSection>
  );
};

export default FooterMain;
