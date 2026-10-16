import backgroundBarbourLarge from '~/assets/work-barbour-preview-large.jpg';
import backgroundBarbourPlaceholder from '~/assets/work-barbour-preview-placeholder.jpg';
import backgroundBarbour from '~/assets/work-barbour-preview.jpg';

import imageBarbourIntroImage from '~/assets/work-barbour-collage.jpg';
import imageBarbourIntroImageLarge from '~/assets/work-barbour-collage-large.jpg';
import imageBarbourIntroImagePlaceholder from '~/assets/work-barbour-collage-placeholder.jpg';


import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,  
  ProjectSectionSubHeading,  
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionColumnsTextOnly,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './barbour.module.css';

const title = 'Barbour';
const date = 'Dec 2013 - Feb 2014';
const job = 'Frontend Developer';
const description =
  'I came into the Barbour project just before phase 2 production release, the last two sprints. Most of my daily tasks were bug fixing and problem solving and just generally supporting the front end team before production. I really enjoyed this role as it was ‘all hands on deck’ for bug fixing, with a limited time constraint.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Testing & Debugging · jQuery · JavaScript · Sublime · Bootstrap CSS · Git · CMS Content Editing & Development · Confluence · Hybris (Now SAP Hybris) · Gulp · Zeplin · Design Patterns & Principles · Tea making · Attention to detail · Communication · Diplomacy · Adaptability · Mentoring · Agile/Scrum · Time Management · Problem-solving · Client meetings',
  'Frontend Development',
  'Pre-production bug fixing (Last 2 sprints)'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Barbour = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundBarbour}
          srcSet={`${backgroundBarbour} 1080w, ${backgroundBarbourLarge} 2160w`}
          placeholder={backgroundBarbourPlaceholder}
        />

        <ProjectHeader
          title={title}
          description={description}
          url="https://www.barbour.com/"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageBarbourIntroImage}
              srcSet={`${imageBarbourIntroImage} 1080w, ${imageBarbourIntroImageLarge} 2160w`}
              placeholder={imageBarbourIntroImagePlaceholder}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Barbour Project Example of Online Form With Bugs Fixed"
            />
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </>
  );
};
