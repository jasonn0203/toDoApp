import React from "react";
import "../components/header.css";
import { IonIcon } from "react-ion-icon";

const Header = ({ title }) => {
  let date = new Date().toLocaleDateString("de-DE");
  return (
    <div className="header">
      <div className="top-header">
        <h2 className="header-title">{title}</h2>
        <div className="top-header--action">
          <div className="header-icon">
            <ion-icon name="funnel"></ion-icon>
            <span className="header-action">Sort</span>
          </div>
          <div className="header-icon yellow">
            <ion-icon name="bulb"></ion-icon>
            <span className="header-action">Suggestion</span>
          </div>
        </div>
      </div>
      <p className="header-date">{date}</p>
    </div>
  );
};

export default Header;
