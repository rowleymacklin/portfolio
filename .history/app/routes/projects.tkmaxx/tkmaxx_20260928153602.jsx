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


import backgroundTkmaxxLarge from '~/assets/work-tkmaxx-preview-large.jpg';
import backgroundTkmaxxPlaceholder from '~/assets/work-tkmaxx-preview-placeholder.jpg';
import backgroundTkmaxx from '~/assets/work-tkmaxx-preview.jpg';

import imageTkmaxxIntroImage from '~/assets/work-tkmaxx-collage.jpg';
import imageTkmaxxIntroImageLarge from '~/assets/work-tkmaxx-collage-large.jpg';
import imageTkmaxxIntroImagePlaceholder from '~/assets/work-tkmaxx-collage-placeholder.jpg';

import imageTkmaxxHybrisImageOne from '~/assets/work-tkmaxx-components-1.jpg';
import imageTkmaxxHybrisImageOneLarge from '~/assets/work-tkmaxx-components-1-large.jpg';
import imageTkmaxxHybrisImageOnePlaceholder from '~/assets/work-tkmaxx-components-1-placeholder.jpg';

import imageTkmaxxHybrisImageTwo from '~/assets/work-tkmaxx-components-2.jpg';
import imageTkmaxxHybrisImageTwoLarge from '~/assets/work-tkmaxx-components-2-large.jpg';
import imageTkmaxxHybrisImageTwoPlaceholder from '~/assets/work-tkmaxx-components-2-placeholder.jpg';




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
import styles from './tkmaxx.module.css';

const title = 'TKMaxx';
const date = 'Jan 2016 - Jul 2016';
const job = 'Frontend Practice Lead';
const description =
  'TKMaxx were refreshing their global site to a new Hybris environment. My main role was to setup the front end environment, lead the front end team and create some of the new components. As well as advise various in-house teams on integration and running Hybris. It’s always nice to start a project from Discovery phase 1, to get a full picture of requirements and to see the project grow right from the start.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Testing & Debugging · UI/ UX Design Principles · jQuery · JavaScript · Sublime · Bootstrap CSS · Git · CMS Content Editing & Development · Confluence · Hybris (Now SAP Hybris) · Gulp · Zeplin · Photoshop · Illustrator · Design Patterns & Principles · Tea making · Attention to detail · Communication · Diplomacy · Adaptability · Mentoring · Agile/Scrum · Time Management · Problem-solving · Client meetings · Client Relationship Management · Designs/ Code Audits · Team Management',

  'Frontend Development',
  'Get new front end environment up and running within Hybris, using gulp and git',
  'Hybris CMS Integration',
  'Create new Hybris components',
  'Frontend Team Co-ordination and Workload Delegation'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Tkmaxx = () => {
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
          src={backgroundTkmaxx}
          srcSet={`${backgroundTkmaxx} 1080w, ${backgroundTkmaxxLarge} 2160w`}
          placeholder={backgroundTkmaxxPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.tkmaxx.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageTkmaxxIntroImageLarge}
              srcSet={`${imageTkmaxxIntroImageLarge} 1080w, ${imageTkmaxxIntroImageLargeLarge} 2160w`}
              placeholder={imageTkmaxxIntroImageLargePlaceholder}
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
                <ProjectSectionHeading>Get new frontend environment up and running within Hybris, using gulp and git</ProjectSectionHeading>
                <ProjectSectionText>
                  TKMaxx were switching to the Hybris system. For discovery and sprint 1, I had to set up the front end environment using Gulp as the task runner and Git as version control within Hybris Accelerator. This was my first time to set everything up myself. A daunting, But enjoyable task.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  It was quite challenging to get Gulp and Git to work perfectly for both macOS and Windows users. Also, quite a challenge getting server settings working for both.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Learning new skills and I have to admit the server setup for running Gulp and Git within Hybris tested my patience a bit. But very pleased it all ended up running smoothly for all the front end team, as well as the backend team when they needed it.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Co-ordinate front end team tasks & write a front end best practices document</ProjectSectionHeading>
                <ProjectSectionText>
                  Every morning before our daily scrums my regular task was to check Jira and the backend team, then delegate tasks to the front end team. I then led the daily scrums. I also wrote a general front end best practices document so the code and the look would be consistent throughout. It was a team effort, so any new suggestions and edits were added regularily.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Making sure the tasks that were delegated to the front end team matched their skillsets and answering a lot of technical questions. The important thing was not to overload any of the team. The best practices document was a team effort, and a cross-department one, so there were a lot of meetings and discussions and changes made.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Sprints were completed in time for all Jira tasks. The team wasn't overloaded with work. The front end best practices was used by all departments for a visual guide to every component and piece of content.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>   



        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Styling global components & Localised fonts for China/ Korea</ProjectSectionHeading>
                <ProjectSectionText>
                  Another task for Mulberry was a total revamp of the look and feel of the global site, to make it more consistent to branding guidelines. These were the components I worked on: Wishlist, Global Header Search, Secondary Header, Video, Product Listing Page. I also added localised fonts for their new China and Korea sites, which turned out to be surprisingly challenging.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The most challenging aspect of these tasks was numerous changes to the designs, crashing local git environments. The China/ Korean localised fonts proved to be a bit trickier than expected as both localizations had to use specific Asian fonts, as well as the Mulberry font (both using different character encoding). A kind of hybrid of Latin and Asian fonts. My solution was to target specific Unicode ranges within the CSS. Time-consuming but a decent solution to the problem.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The fonts localisation for China & Korea being the most challenging, was also the most rewarding. A simple, but time-consuming solution and the problem was solved.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageTkmaxxHybrisImageTwo}
                srcSet={`${imageTkmaxxHybrisImageTwo} 1080w, ${imageTkmaxxHybrisImageTwoLarge} 2160w`}
                placeholder={imageTkmaxxHybrisImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageTkmaxxHybrisImageOne}
                srcSet={`${imageTkmaxxHybrisImageOne} 1080w, ${imageTkmaxxHybrisImageOneLarge} 2160w`}
                placeholder={imageTkmaxxHybrisImageOnePlaceholder}
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
                  TKMaxx were refreshing their global site to a new Hybris environment. My main role was to setup the front end environment, lead the front end team and create some of the new components. As well as advise various in-house teams on integration and running Hybris.
                </ProjectSectionText>
                <ProjectSectionText>
                  Converted static components to work in Hybris: homepage hero, listing page hero, footer, global icons
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
                  It’s always nice to start a project from Discovery phase 1, to get a full picture of requirements and to see the project grow right from the start.
                </ProjectSectionText>
                <ProjectSectionText>
                  Wrote an extensive Front End Best Practice document for the team
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
