import React from "react";
import "./Page1.css";

export default function Page1() {
  return (
    <div className="hero-container">
      <div className="bg-img">
        <img alt="" className="back-img" />
      </div>
      <div className="content-box">
        <div className="content-para1">
          <h1 className="para1">Increase productivity, Increase Profit</h1>
        </div>
        <div className="content-para2">
          <p className="para2">
            Get the most affordable service at your hand to increase your gross
            profit.
          </p>
        </div>
        <div className="content-link">
          <a
            href="https://thrivebizconsultant.com/"
            className="content-link-item"
          >
            <div className="content-link-text">
              <span className="link-text">Request a Free Consultation</span>
              <i className="fas fa-arrow-right arrow-icon"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
