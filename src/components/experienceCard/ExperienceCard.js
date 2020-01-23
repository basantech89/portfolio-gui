import React, { useState, useEffect } from "react";
import "./ExperienceCard.css";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from "styled-components";

const H2 = styled.h1`
  font-size: 1.3em;
  color: ${({ theme }) => theme.title};
`;


export default function ExperienceCard({ blog }) {
  const defaultColors = { background: '#121225', color: '#fff' };
  const [colors, setColors] = useState(defaultColors);
  let theme = window.localStorage.getItem('theme');

  useEffect(() => {
    if (theme === 'light') {
      setColors({ background: '#fff', color: '#4a4e52' });
    } else {
      setColors(defaultColors);
    }
  }, [theme]);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={colors}
      contentArrowStyle={{ borderRight: '7px solid #4a4e52' }}
      date={blog.date}
      iconStyle={{ borderRadius: '50%' }}
      icon={<img src={blog.icon} alt="icon" />}
    >
      <a href={blog.url} className="blog-card-link" rel="noopener noreferrer" target="_blank">
        <H2 className="vertical-timeline-element-title">{blog.title}</H2>
      </a>
      <br/>
      <h4 className="vertical-timeline-element-subtitle">{blog.skills}</h4>
      <p>
        {blog.detail}
      </p>
    </VerticalTimelineElement>
  );
}
