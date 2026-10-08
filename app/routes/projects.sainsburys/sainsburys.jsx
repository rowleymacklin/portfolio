import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';


import backgroundSainsburysLarge from '~/assets/work-sainsburys-preview-large.jpg';
import backgroundSainsburysPlaceholder from '~/assets/work-sainsburys-preview-placeholder.jpg';
import backgroundSainsburys from '~/assets/work-sainsburys-preview.jpg';

import imageSainsburysIntroImage from '~/assets/work-sainsburys-forms-collage.jpg';
import imageSainsburysIntroImageLarge from '~/assets/work-sainsburys-forms-collage-large.jpg';
import imageSainsburysIntroImagePlaceholder from '~/assets/work-sainsburys-forms-collage-placeholder.jpg';


import imageSainsburysFormsImageOne from '~/assets/work-sainsburys-forms-1.jpg';
import imageSainsburysFormsImageOneLarge from '~/assets/work-sainsburys-forms-1-large.jpg';
import imageSainsburysFormsImageOnePlaceholder from '~/assets/work-sainsburys-forms-1-placeholder.jpg';

import imageSainsburysFormsImageTwo from '~/assets/work-sainsburys-forms-2.jpg';
import imageSainsburysFormsImageTwoLarge from '~/assets/work-sainsburys-forms-2-large.jpg';
import imageSainsburysFormsImageTwoPlaceholder from '~/assets/work-sainsburys-forms-2-placeholder.jpg';



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
import styles from './sainsburys.module.css';

const title = 'Sainsbury\'s Tu';
const date = 'Dec 2013 - Feb 2014';
const job = 'Frontend Developer';
const description =
  'I joined the project from sprint 4 to sprint 9, then was pulled off the project for Goodyear in Boston. Most of my Jira tasks were converting flat designs to semantic code: all the form elements and hero components. As well as some bug fixing.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Testing & Debugging · UI/ UX Design Principles · jQuery · JavaScript · Sublime · Bootstrap CSS · Git · CMS Content Editing & Development · Confluence · Hybris (Now SAP Hybris) · Gulp · Zeplin · Photoshop · Illustrator · Design Patterns & Principles · Tea making · Attention to detail · Communication · Diplomacy · Adaptability · Mentoring · Agile/Scrum · Time Management · Problem-solving · Client meetings · Client Relationship · Management · Designs/ Code Audits',

  'Frontend Development',
  'Create and style new Hybris forms & hero components',
  'Bug fixing the current live site'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Sainsburys = () => {
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
          src={backgroundSainsburys}
          srcSet={`${backgroundSainsburys} 1080w, ${backgroundSainsburysLarge} 2160w`}
          placeholder={backgroundSainsburysPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://tuclothing.sainsburys.co.uk/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageSainsburysIntroImage}
              srcSet={`${imageSainsburysIntroImage} 1080w, ${imageSainsburysIntroImageLarge} 2160w`}
              placeholder={imageSainsburysIntroImagePlaceholder}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Create and style new Hybris forms & hero components</ProjectSectionHeading>
                <ProjectSectionText>
                  My main tasks were the various form elements from login to the checkout process and the hero components. Apart from that I did some bug fixing.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  There was nothing especially challenging, as the flat designs and Jira brief were clear to follow. Only using SVN as the versioning proved a bit tricky with a lot of broken environments, and as the client wanted the site to be Adaptive the code was a bit heavy.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The forms and hero components worked flawlessly on both mobile and desktop, with very few changes.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageSainsburysFormsImageTwo}
                srcSet={`${imageSainsburysFormsImageTwo} 1080w, ${imageSainsburysFormsImageTwoLarge} 2160w`}
                placeholder={imageSainsburysFormsImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageSainsburysFormsImageOne}
                srcSet={`${imageSainsburysFormsImageOne} 1080w, ${imageSainsburysFormsImageOneLarge} 2160w`}
                placeholder={imageSainsburysFormsImageOnePlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>  


      <ThemeProvider theme="dark" data-invert>
        <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
          <ProjectSectionColumnsTextOnly>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Key Responsibilities</ProjectSectionHeading>
                <ProjectSectionText>
                  I came onboard this project mid-sprint. My main focus for the three sprints was form data. I worked on most of the Sainsbury's Tu forms.
                </ProjectSectionText>
                <ProjectSectionText>
                  Regular meetings with various teams: design, backend Hybris developers, business analysts, client, third-party design and developer agency. The main focus was clarifications, estimates, expectations and workloads
                </ProjectSectionText>                                                                                  
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Key Achievements</ProjectSectionHeading>
                <ProjectSectionText>
                  Producing very functional, semantic and accessible forms which perfectly matched designs and vision.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTextOnly>
        </ProjectSection>  
      </ThemeProvider> 


      </ProjectContainer>
      <Footer />
    </>
  );
};
