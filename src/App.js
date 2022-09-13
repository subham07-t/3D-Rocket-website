import React from "react";
import Spline from "@splinetool/react-spline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="/imgs/channel-11.jpeg" alt="" />
          </div>
          <ul className="option">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="container-body">
          <div className="right">
            <div className="right-top">
              <h1>Dattebayo!Keep Going</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                nesciunt quaerat voluptatibus magni aliquid at.
              </p>
            </div>
            <div className="right-bot">
              <LinkedInIcon fontSize="large" />
              <GitHubIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </div>
          </div>

          <Spline
            className="left"
            scene="https://prod.spline.design/XJECSOXYRvwLFJqs/scene.splinecode"
          />
        </div>
      </div>
    </>
  );
}
