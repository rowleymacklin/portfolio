import backgroundDrMartensLarge from '~/assets/work-drmartens-preview-large.jpg';
import backgroundDrMartensPlaceholder from '~/assets/work-drmartens-preview-placeholder.jpg';
import backgroundDrMartens from '~/assets/work-drmartens-preview.jpg';

import imageDrMartensIntroImage from '~/assets/work-drmartens-collage.jpg';
import imageDrMartensIntroImageLarge from '~/assets/work-drmartens-collage-large.jpg';
import imageDrMartensIntroImagePlaceholder from '~/assets/work-drmartens-collage-placeholder.jpg';

import imageDrMartensImageOne from '~/assets/work-drmartens-1.jpg';
import imageDrMartensImageOneLarge from '~/assets/work-drmartens-1-large.jpg';
import imageDrMartensImageOnePlaceholder from '~/assets/work-drmartens-1-placeholder.jpg';

import imageDrMartensImageTwo from '~/assets/work-drmartens-2.jpg';
import imageDrMartensImageTwoLarge from '~/assets/work-drmartens-2-large.jpg';
import imageDrMartensImageTwoPlaceholder from '~/assets/work-drmartens-2-placeholder.jpg';

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
import styles from './drmartens.module.css';

const title = 'Dr Martens';
const date = 'May 2013 - Oct 2013';
const job = 'Lead Frontend Developer';
const description =
  'I really enjoyed this role as I joined from the start of Discovery Phase 1 all the way to Production, and beyond. As well as writing the code, I created the base designs to work from for the client. Being my first delve into the Hybris world, I had to learn extremely quickly. Hybris documentation being notoriously scarce, I had to learn the hard way. This proved extremely challenging, but very rewarding.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Testing & Debugging · UI/ UX Design Principles · jQuery · JavaScript · Sublime · Bootstrap CSS · Git · CMS Content Editing & Development · Confluence · Hybris (Now SAP Hybris) · Gulp · Zeplin · Photoshop · Illustrator · Design Patterns & Principles · Tea making · Attention to detail · Communication · Diplomacy · Adaptability · Mentoring · Agile/Scrum · Time Management · Problem-solving · Client meetings · Client Relationship · Management · Designs/ Code Audits',
  'Frontend Development',
  'Wireframe Designs',
  'Actual Designs',  
  'Create semantic components based on the designs within Hybris'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Drmartens = () => {
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
          src={backgroundDrMartens}
          srcSet={`${backgroundDrMartens} 1080w, ${backgroundDrMartensLarge} 2160w`}
          placeholder={backgroundDrMartensPlaceholder}
        />

        <ProjectHeader
          title={title}
          description={description}
          url="https://www.drmartens.com/uk/"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageDrMartensIntroImage}
              srcSet={`${imageDrMartensIntroImage} 1080w, ${imageDrMartensIntroImageLarge} 2160w`}
              placeholder={imageDrMartensIntroImagePlaceholder}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Dr Martens Collage of Various Components and Design"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Create new wireframe designs, convert to actual designs and Create components within Hybris</ProjectSectionHeading>
                <ProjectSectionText>
                  Dr Martens were creating their new site within Hybris. It was my task to make flat designs (based on the provided wireframes). Then after client approval I'd convert this to clean, semantic code within Hybris. This was a kind of hybrid role: designer/ front end developer, as there were no designers on our team. As I was the sole front end developer on this project I was responsible for all bug fixing and content changes from discovery phase 1 to production. One of my regular tasks was to liaise with the Dr Martens management team, our project manager, QA team, BA team and backend Hybris developers.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Balancing designing vs front end development. The client was very supportive of the designs, but there were still numerous updates and bugs which meant plenty of code changes.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The whole project was one of my favourites as I was hands-on throughout the process, from creating the designs to go-live code.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageDrMartensImageTwo}
                srcSet={`${imageDrMartensImageTwo} 1080w, ${imageDrMartensImageTwoLarge} 2160w`}
                placeholder={imageDrMartensImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Dr Martens Example of New Homepage Showing New Product Listing Page"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageDrMartensImageOne}
                srcSet={`${imageDrMartensImageOne} 1080w, ${imageDrMartensImageOneLarge} 2160w`}
                placeholder={imageDrMartensImageOnePlaceholder}
                width={260}
                height={660}
                alt="Dr Martens Example of New Homepage Showing New Hero Product Carousel"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>          

      </ProjectContainer>
      <Footer />
    </>
  );
};
