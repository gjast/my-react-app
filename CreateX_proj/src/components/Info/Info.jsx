import React from "react";
import "./Info.css";
export default function Info() {
  return (
    <div className="info_block">
      <div className="info_block_text">
        <h3>
          Createx SEO Agency is a full-service digital marketing agency. We help
          businesses make more money through a wealth of performance data and
          market research. We create science-based SEO strategies to empower our
          clients.
        </h3>
        <img src="./public/img/awards.png" />
      </div>

      <div className="clients_block">
        <img className="img_clients" src="./public/img/Clients.png" />
      </div>
    </div>
  );
}
