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
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
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
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageDrMartensImageOne}
                srcSet={`${imageDrMartensImageOne} 1080w, ${imageDrMartensImageOneLarge} 2160w`}
                placeholder={imageDrMartensImageOnePlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
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
