import React from "react";
import "./Experience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { experienceSection } from "../../portfolio";
import { VerticalTimeline }  from 'react-vertical-timeline-component';

export default function Experience() {
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{experienceSection.title}</h1>
        <p className="subTitle blog-subtitle">{experienceSection.subtitle}</p>
      </div>
      <VerticalTimeline>
        {experienceSection.blogs.map(blog => {
          return (
            <ExperienceCard
              blog={{
                url: blog.url,
                title: blog.title,
                skills: blog.skills,
                detail: blog.detail,
                date: blog.date,
                icon: blog.icon,
              }}
            />
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
