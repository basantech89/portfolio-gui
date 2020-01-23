import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Achievement from "./achievement/Achievement";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Experience />
        <Achievement />
        <Contact />
      </div>
    );
  }
}
