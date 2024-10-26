import React from "react";
import "./Reg.css";
export default function Reg() {
  return (
    <div className="Reg_main">
      <img src="./public/img/illustration.svg" />
      <div className="Reg_form_block">
        <h2>Get a Free SEO Analysis!</h2>
        <form className="Reg_form">
          <input className="Reg_form_input" type="text" placeholder="Name" />
          <input className="Reg_form_input" type="text" placeholder="Email" />
          <input
            className="Reg_form_input row-2"
            type="text"
            placeholder="Phone"
          />

          <div className="Reg_form_checkbox">
            <div className="checkbox_block">
              <input type="checkbox" />
              <p>I agree to receive communications from Createx SEO Agency</p>
            </div>

            <button>Get a free analysis</button>
          </div>
        </form>
      </div>
    </div>
  );
}
