import React, { useState, useEffect } from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import Typewriter from 'typewriter-effect';

export default function Greeting() {
  const [src, setSrc] = useState(require("../../assets/images/flat(1).webp"));
  let theme = window.localStorage.getItem('theme');

  useEffect(() => {
    if (theme === 'light') {
      setSrc(require("../../assets/images/yoga2.webp"));
    } else {
      setSrc(require('../../assets/images/flat(1).webp'));
    }
  }, [theme]);

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-image-div">
          <img alt="basant sitting on table" src={src} />
        </div>
        <div className="greeting-text-div">
          <h1 className="greeting-text">{greeting.title}</h1>
          <div className="type-effect">
            <Typewriter
              options={{
                loop: true,
                delay: 40,
                cursorClassName: 'cursor'
              }}
              onInit={(typewriter) => {
                typewriter.typeString(`<span class="greeting-text-p subTitle">${greeting.subTitle}</span>`)
                  .pauseFor(2500)
                  .changeDeleteSpeed(0.5)
                  .deleteChars(57)
                  .typeString(`<span class="greeting-text-p subTitle">${greeting.subTitle2}</span>`)
                  .pauseFor(2500)
                  .deleteChars(105)
                  .typeString(`<span class="greeting-text-p subTitle">${greeting.subTitle3}</span>`)
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
          <SocialMedia />
          <div className="button-greeting-div">
            <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
