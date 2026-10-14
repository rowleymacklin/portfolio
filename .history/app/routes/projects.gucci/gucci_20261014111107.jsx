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


import backgroundGucciLarge from '~/assets/work-gucci-preview-large.jpg';
import backgroundGucciPlaceholder from '~/assets/work-gucci-preview-placeholder.jpg';
import backgroundGucci from '~/assets/work-gucci-preview.jpg';

import imageGucciIntroImage from '~/assets/work-gucci-collage.jpg';
import imageGucciIntroImageLarge from '~/assets/work-gucci-collage-large.jpg';
import imageGucciIntroImagePlaceholder from '~/assets/work-gucci-collage-placeholder.jpg';


import imageGucciComponentsImageOne from '~/assets/work-gucci-components-1.jpg';
import imageGucciComponentsImageOneLarge from '~/assets/work-gucci-components-1-large.jpg';
import imageGucciComponentsImageOnePlaceholder from '~/assets/work-gucci-components-1-placeholder.jpg';

import imageGucciComponentsImageTwo from '~/assets/work-gucci-components-2.jpg';
import imageGucciComponentsImageTwoLarge from '~/assets/work-gucci-components-2-large.jpg';
import imageGucciComponentsImageTwoPlaceholder from '~/assets/work-gucci-components-2-placeholder.jpg';



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
import styles from './gucci.module.css';

const title = 'Gucci';
const date = 'Aug 2014 - Dec 2015';
const job = 'Frontend Practice Lead';
const description =
  'This was the most challenging, and therefore my favourite role by far. I was lead front end for over a year here and it was the most intense project I’d ever worked on. As Gucci is a luxury brand they were understandably very particular about the look and feel of the site. This made the work extra challenging but very rewarding in the end, which I loved.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Testing & Debugging · UI/ UX Design Principles · jQuery · JavaScript · Sublime · Bootstrap CSS · Git · CMS Content Editing & Development · Confluence · Hybris (Now SAP Hybris) · Gulp · Zeplin · Photoshop · Illustrator · Design Patterns & Principles · Tea making · Attention to detail · Communication · Diplomacy · Adaptability · Mentoring · Agile/Scrum · Time Management · Problem-solving · Client meetings · Client Relationship · Management · Designs/ Code Audits · Team Management',

  'Frontend Development',
  'Review the static code base (provided by a design agency), clean it up and merge it into Gucci’s new Hybris system',
  'Hybris CMS Integration',
  'Create new Hybris components',
  'Bug fixing the current live site',
  'Frontend Team Co-ordination and Workload Delegation'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Gucci = () => {
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
          src={backgroundGucci}
          srcSet={`${backgroundGucci} 1080w, ${backgroundGucciLarge} 2160w`}
          placeholder={backgroundGucciPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.gucci.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageGucciIntroImage}
              srcSet={`${imageGucciIntroImage} 1080w, ${imageGucciIntroImageLarge} 2160w`}
              placeholder={imageGucciIntroImagePlaceholder}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
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
                  Gucci were switching over to a new Hybris environment. My main role was to review the static code provided by the Gucci in-house developers. Then convert them to Hybris working code.
                </ProjectSectionText>
                <ProjectSectionText>
                  These are the components i focussed on: homepage hero, listing page hero, footer, global icons
                </ProjectSectionText>  
                <ProjectSectionText>
                  Regular meetings with various teams: design, backend Hybris developers, business analysts, client, third-party design agency. The main focus was clarifications, estimates, expectations and workloads
                </ProjectSectionText>                                                                                  
              </ProjectTextRow>
            </ProjectSectionContent>


            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Key Achievements</ProjectSectionHeading>
                <ProjectSectionText>
                  The whole site went live slightly earlier than expected
                </ProjectSectionText>
                <ProjectSectionText>
                  Optimized the provided code; mostly for efficiency and also for compatibility within Hybris
                </ProjectSectionText>  
                <ProjectSectionText>
                  Spending time at the Gucci HQ in Florence, Italy
                </ProjectSectionText>                                      
                    
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTextOnly>
        </ProjectSection>  
      </ThemeProvider> 


        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Create new Hybris components</ProjectSectionHeading>
                <ProjectSectionText>
                  As I was the lead on this project I wasn't very hands-on, but I did work on a few of the new components to help the team out: the homepage hero component, mega menu navigation (responsive), footer layout, header navigation icons, PDP layout and global bug fixing.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Gucci were understandably extremely particular on designs and how the site looked visually. Even once completed, a lot of the components had to be re-worked, based on new designs. This wasn't in any way unique to Gucci, but proved challenging after every sprint. Some of the bug fixes proved very tricky; especially one where the parallaxing product card stuttered on scroll. The fix was to make sure images were properly optimised for loading.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The mega menu was especially challenging, so I was particularly pleased it worked and looked great on mobile and desktop. All in all this was my favourite project to work on, not only because of Gucci being such a well known brand, but because it was the most challenging from start to production.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageGucciComponentsImageTwo}
                srcSet={`${imageGucciComponentsImageTwo} 1080w, ${imageGucciComponentsImageTwoLarge} 2160w`}
                placeholder={imageGucciComponentsImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageGucciComponentsImageOne}
                srcSet={`${imageGucciComponentsImageOne} 1080w, ${imageGucciComponentsImageOneLarge} 2160w`}
                placeholder={imageGucciComponentsImageOnePlaceholder}
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
