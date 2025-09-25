// src/components/ProjectsSection.jsx
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/data'; // Import your dynamic data

const SectionWrapper = styled.section`
  padding: 80px 20px;
  background-color: #ffffffff; /* Dark background for the whole section */
  color: #E2E8F0;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #1f1e1eff;
  padding: 10px 60px;
  background-color:#ffffffff;
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);


  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectsSection = () => {
  return (
    <SectionWrapper>
      
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </SectionWrapper>
  );
};

export default ProjectsSection;