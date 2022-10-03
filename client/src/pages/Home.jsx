import React, { useState } from "react";
import "../css/home.css";
import bgVideo from "../media/bg3.mp4";
import { BsArrowRightShort } from "react-icons/bs";
import About from "./About";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div className="main">
      <div className="wraper">
        <video autoPlay loop muted src={bgVideo} />
        <div className="content">
          <h1>
            Hello, I'm <span className="span1">Bary Kassa.</span>{" "}
          </h1>
          <h1>
            Im a full-stack <span className="span2">web developer.</span>{" "}
          </h1>
          <button
            onClick={() => {
              history.push('/About')
            }}
          >
            View my work <BsArrowRightShort />
          </button>
        </div>
      </div>
    </div>
  );
}
