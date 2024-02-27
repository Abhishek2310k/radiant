import React from "react";
// import Tick from "../images/tick.svg";
// import Info from "../images/info.svg";
import './Header.scss';
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_container">
        <h1 className="nav_heading">Best Website builders in the US</h1>
        <hr className="hr" />
        <div className="nav_details">
          <div className="nav_detail">
            {/* <img src={Tick} alt="" /> */}
            <p>Last Updated - February 22, 2020</p>
            {/* <img src={Info} alt="" /> */}
            <p>Advertising Disclosure</p>
          </div>
          <div>
            <select name="" id="" style={{background:"none",border:"none"}}>
              <option value=""> Top Relevent</option>
            </select>
          </div>
        </div>
        <hr className="hr" />
        <div className="buttons">
          <div className="button_nav"><span>Tools</span></div>
          <div className="button_nav"><span>Aws Builder</span></div>
          <div className="button_nav"><span>Start Build</span></div>
          <div className="button_nav"><span>Build Supplies</span></div>
          <div className="button_nav"><span>Tooling</span></div>
          <div className="button_nav"><span>Blue Hosting</span></div>
        </div>
        <div className="breadcrumbs">
          <p>Home</p>
          <p>{" > "}</p>
          <p>Hosting for all</p>
          <p>{" > "}</p>
          <p>Hosting</p>
          <p>{" > "}</p>
          <p>Hosting6</p>
          <p>{" > "}</p>
          <p>Hosting5</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;