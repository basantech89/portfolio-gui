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
{/*        <Parallax pages={5} ref={ref => this.parallax = ref}>
          <ParallaxLayer speed={1} offset={0}>
            <Greeting />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={1}>
            <Skills />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={2} factor={2.5}>
            <Experience />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={3.2}>
            <Achievement />
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={4}>
          <Contact />
          </ParallaxLayer>
        </Parallax>*/}
      </div>
    );
  }
}
