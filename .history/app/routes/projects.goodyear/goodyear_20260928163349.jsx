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



import backgroundGoodyearLarge from '~/assets/work-goodyear-preview-large.jpg';
import backgroundGoodyearPlaceholder from '~/assets/work-goodyear-preview-placeholder.jpg';
import backgroundGoodyear from '~/assets/work-goodyear-preview.jpg';

import imageGoodyearIntroImage from '~/assets/work-goodyear-collage.jpg';
import imageGoodyearIntroImageLarge from '~/assets/work-goodyear-collage-large.jpg';
import imageGoodyearIntroImagePlaceholder from '~/assets/work-goodyear-collage-placeholder.jpg';


import imageGoodyearComponentsImageOne from '~/assets/work-goodyear-components-1.jpg';
import imageGoodyearComponentsImageOneLarge from '~/assets/work-goodyear-components-1-large.jpg';
import imageGoodyearComponentsImageOnePlaceholder from '~/assets/work-goodyear-components-1-placeholder.jpg';

import imageGoodyearComponentsImageTwo from '~/assets/work-goodyear-components-2.jpg';
import imageGoodyearComponentsImageTwoLarge from '~/assets/work-goodyear-components-2-large.jpg';
import imageGoodyearComponentsImageTwoPlaceholder from '~/assets/work-goodyear-components-2-placeholder.jpg';








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
import styles from './goodyear.module.css';

const title = 'Goodyear';
const date = 'Feb 2014 - Aug 2014';
const job = 'Frontend Developer';
const description =
  'This was a brilliant contract role as I not only started from Discovery Phase 1 to Production, but as a little bonus it was based in Boston, USA (pronounced locally as Bwoaaastan). It was the first time I’d worked abroad and even though I arrived during the coldest winter they’d experienced in 1,000 years (apparently), I loved it.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Testing & Debugging · UI/ UX Design Principles · jQuery · JavaScript · Sublime · Bootstrap CSS · Git · CMS Content Editing & Development · Confluence · Hybris (Now SAP Hybris) · Gulp · Zeplin · Photoshop · Illustrator · Design Patterns & Principles · Tea making · Attention to detail · Communication · Diplomacy · Adaptability · Mentoring · Agile/Scrum · Time Management · Problem-solving · Client meetings · Client Relationship · Management · Designs/ Code Audits',

  'Frontend Development',
  'Review the static code base (provided by a design agency in Costa Rica), clean it up and merge it into Goodyear’s new Hybris system',
  'Assist the on-site Boston team with Hybris integration',
  'Create new Hybris components',
  'Bug fixing the current live site'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Goodyear = () => {
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
          src={backgroundGoodyear}
          srcSet={`${backgroundGoodyear} 1080w, ${backgroundGoodyearLarge} 2160w`}
          placeholder={backgroundGoodyearPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.goodyear.com/en-us"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}

              src={imageGoodyearIntroImage}
              srcSet={`${imageGoodyearIntroImage} 1080w, ${imageGoodyearIntroImageLarge} 2160w`}
              placeholder={imageGoodyearIntroImagePlaceholder}
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
                <ProjectSectionHeading>Create new Hybris components</ProjectSectionHeading>
                <ProjectSectionText>
                  I worked on various components on the new site: the new homepage Tire Selector/ Store Locater, the country select component and the product cards on the product listing page. I also worked on global bug fixes from sprint 1 to production, and assisted the on-site Boston team with Hybris it was the first time they'd worked with it.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  As the Boston team was quite new to Hybris, and especially GIT we did have quite a few branch conflicts from bad git pushes. But these were easily fixed. Traditionally, anyone whole breaks the repository had to gift the team a box of donuts. Needless to say we all put on a few pounds.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The Tyre selector component was especially challenging as there was a lot of JS functionaility involved, which has never been my strongest skillset. But it was a good opportunity to improve my JS skills.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageGoodyearComponentsImageTwo}
                srcSet={`${imageGoodyearComponentsImageTwo} 1080w, ${imageGoodyearComponentsImageTwoLarge} 2160w`}
                placeholder={imageGoodyearComponentsImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageGoodyearComponentsImageOne}
                srcSet={`${imageGoodyearComponentsImageOne} 1080w, ${imageGoodyearComponentsImageOneLarge} 2160w`}
                placeholder={imageGoodyearComponentsImageOnePlaceholder}
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
                  Goodyear were switching over to a new Hybris environment. My main role was to review the static code provided by the design and development team in Costa Rica. Then convert them to Hybris working code.
                </ProjectSectionText>
                <ProjectSectionText>
                  These are the components i focussed on: Tire Finder, Store Locator and PDP Details
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
                  Helping to train all departments in how to work with Hybris Accellorator
                </ProjectSectionText>
                <ProjectSectionText>
                  Surviving the arctic conditions in Boston, mid-Winter
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
