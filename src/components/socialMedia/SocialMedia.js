import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.github} className="icon-button github" rel="noreferrer noopener" target="_blank">
        <i className="fab fa-github"/>
        <span/>
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" rel="noreferrer noopener" target="_blank">
        <i className="fab fa-linkedin-in"/>
        <span/>
      </a>
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" rel="noreferrer noopener" target="_blank">
        <i className="fab fa-google"/>
        <span/>
      </a>
      <a href={socialMediaLinks.medium} className="icon-button gitlab" rel="noreferrer noopener" target="_blank">
        <i className="fab fa-medium-m"/>
        <span/>
      </a>
      <a href={socialMediaLinks.facebook} className="icon-button facebook" rel="noreferrer noopener" target="_blank">
        <i className="fab fa-facebook-f"/>
        <span/>
      </a>
    </div>
  );
}
