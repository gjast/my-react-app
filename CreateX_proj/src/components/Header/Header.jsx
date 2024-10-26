import "./Header.css";

import React from "react";

export default function Header() {
  return (
    <div className="lending">
      {/* <img className="lending_img" src="./public/img/background.png"/> */}
      <header>
        <div className="header_logo_menu">
          <img src="./public/img/logo.svg" />
          <nav className="header_menu">
            <ul>
              <li>
                <a className="teg_menu" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="teg_menu" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="teg_menu" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="teg_menu" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="teg_menu" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_button">
          <button className="button_talk">Talk to a human</button>
        </div>
      </header>

      <div className="main_title">
        <div className="main_title_info">
          <h1>
            Best <span className="decoration_main_title">SEO & Marketing</span>{" "}
            Solutions for You
          </h1>
          <button className="button_analysis">Get a free analysis</button>
        </div>
        <img className="main_title_img" src="./public/img/pipl.svg" />
      </div>

      <div className="features">
        <div className="features_info">
          <img src="./public/img/icon-box-diograma.svg" />
        </div>
        <div className="features_info">
          <img src="./public/img/icon-box-micro.svg" />
        </div>
        <div className="features_info">
          <img src="./public/img/icon-box-web.svg" />
        </div>
      </div>
    </div>
  );
}
