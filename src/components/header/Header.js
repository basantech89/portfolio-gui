import React from "react";
import styled from 'styled-components';
import "./Header.scss";

const StyledHeader = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.header};
`;
const Anchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

function Header() {
  return (
    <div>
      <StyledHeader className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Basant Soni</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"/>
        </label>
        <ul className="menu">
          <li>
            <Anchor href="#skills">Skills</Anchor>
          </li>
          <li>
            <Anchor href="#blogs">Experience</Anchor>
          </li>
          <li>
            <Anchor href="#achievements">Achievements</Anchor>
          </li>
          <li>
            <Anchor href="#contact">Contact Me</Anchor>
          </li>
        </ul>
      </StyledHeader>
    </div>
  );
}
export default Header;
