import backgroundDebeersLarge from '~/assets/work-debeers-preview-large.jpg';
import backgroundDebeersPlaceholder from '~/assets/work-debeers-preview-large.jpg';
import backgroundDebeers from '~/assets/work-debeers-preview-large.jpg';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './info.module.css';

const title = 'Info';
const description =
  'I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Motion Design',
];

export const meta = () => {
  return baseMeta({ title, description });
};

export const Info = () => {
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
          src={backgroundDebeers}
          srcSet={`${backgroundDebeers} 1080w, ${backgroundDebeersLarge} 2160w`}
          placeholder={backgroundDebeersPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.smartsparrow.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${backgroundDebeers} 1280w, ${backgroundDebeers} 2560w`
                  : `${backgroundDebeers} 1280w, ${backgroundDebeers} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? backgroundDebeers
                  : backgroundDebeers
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              In 2017, Smart Sparrow began a project to build an entirely new platform to
              from the ground up to serve as the most powerful tool for educators to
              create online learning experiences. The old platform was built in Flash, and
              there were a number of user experience problems to solve in the process of
              moving the platform to Javascript. The primary goals for the project were
              reducing barriers to collaboration, and making the platform both easier for
              new users, but with plenty of room to scale for advanced users.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${backgroundDebeers} 1024w, ${backgroundDebeers} 2048w`
                  : `${backgroundDebeers} 1024w, ${backgroundDebeers} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? backgroundDebeers
                  : backgroundDebeers
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The aero design system</ProjectSectionHeading>
              <ProjectSectionText>
                To streamline the design process across designers and engineers for such a
                large project, it was important to lay the foundations with a strong,
                flexible design system that could evolve during the product’s development
                cycle. This would inform both the aesthetics and user experience across
                the product itself as well as the website and marketing material.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${backgroundDebeers} 1280w, ${backgroundDebeers} 2560w`
                  : `${backgroundDebeers} 1280w, ${backgroundDebeers} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? backgroundDebeers
                  : backgroundDebeers
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Design system docs</ProjectSectionHeading>
              <ProjectSectionText>
                A design system is useless if no one knows how to use it, so we put
                together a comprehensive documentation website to cover principles, ux,
                accessibility, and component guidelines for designers and engineers
                working with the system.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};