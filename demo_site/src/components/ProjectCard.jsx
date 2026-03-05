// src/components/ProjectCard.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components for the Project Card
const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: ${props => props.background || 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)'}; /* Dynamic background */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 600px; /* Fixed height for larger screens */
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 3;
  min-height: 300px;
  background-color: #ffffffff; /* Fallback/base color */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;

  @media (min-width: 768px) {
    min-height: auto;
  }
`;

const ProjectImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const ContentWrapper = styled.div`
  flex: 2;
  padding: 40px;
  color: #E2E8F0; /* Light text color for dark backgrounds */
  display: flex;
  flex-direction: column;
  justify-content: center;

  // Mobile-specific styles
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.1;
  color: #ffffff;

  // Mobile-specific styles
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #A0AEC0;
  margin-bottom: 20px;

  // Mobile-specific styles
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #CBD5E0;

  // Mobile-specific styles
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start; // Changed for better alignment
  margin-bottom: 30px;
`;

const Tag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: #E2E8F0;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  // Mobile-specific styles
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
`;

const ActionLink = styled(motion.a)`
  color: #63B3ED; /* A bright blue for links */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease, transform 0.3s ease;
  width: fit-content; // Ensures the link doesn't take full width

  &:hover {
    color: #90CDF4;
    transform: translateX(5px);
  }
`;

const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  liveLink,
  background, // Prop for dynamic background
}) => {
  return (
    <CardContainer background={background}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <ImageWrapper
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <ProjectImage src={imageUrl} alt={title} />
      </ImageWrapper>
      <ContentWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
        
      </ContentWrapper>
    </CardContainer>
  );
};

export default ProjectCard;