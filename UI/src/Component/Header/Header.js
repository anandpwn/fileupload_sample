import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a class="navbar-brand" href="https://www.visteon.com/">
        <img
          src="https://www.visteon.com/wp-content/themes/visteon/images/logo.png"
          alt="Visteon"
          title="Visteon"
          class="lazyloading"
          data-was-processed="true"
          style={{ float: "left",height:"22px" }}
        />
      </a>
    </div>
  );
};

export default Header;
