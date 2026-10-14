

import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

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

import backgroundDebeersLarge from '~/assets/work-debeers-preview-large.jpg';
import backgroundDebeersPlaceholder from '~/assets/work-debeers-preview-large.jpg';
import backgroundDebeers from '~/assets/work-debeers-preview-large.jpg';

import imageDebeersIntroImage from '~/assets/work-debeers-intro-image.jpg';
import imageDebeersIntroImageLarge from '~/assets/work-debeers-intro-image-large.jpg';
import imageDebeersIntroImagePlaceholder from '~/assets/work-debeers-intro-image-placeholder.jpg';

import imageDebeersCampaignsImageOne from '~/assets/work-debeers-campaigns-portrait-001.jpg';
import imageDebeersCampaignsImageOneLarge from '~/assets/work-debeers-campaigns-portrait-001-large.jpg';
import imageDebeersCampaignsImageOnePlaceholder from '~/assets/work-debeers-campaigns-portrait-001-placeholder.jpg';

import imageDebeersCampaignsImageTwo from '~/assets/work-debeers-campaigns-portrait-002.jpg';
import imageDebeersCampaignsImageTwoLarge from '~/assets/work-debeers-campaigns-portrait-002-large.jpg';
import imageDebeersCampaignsImageTwoPlaceholder from '~/assets/work-debeers-campaigns-portrait-002-placeholder.jpg';

import imageDebeersCampaignsLandscape from '~/assets/work-debeers-campaigns-landscape.jpg';
import imageDebeersCampaignsLandscapeLarge from '~/assets/work-debeers-campaigns-landscape-large.jpg';
import imageDebeersCampaignsLandscapePlaceholder from '~/assets/work-debeers-campaigns-landscape-placeholder.jpg';

import videoDebeersCampaignsGsap from '~/assets/work-debeers-campaigns-gsap-video.mp4';
import videoDebeersCampaignsGsapLarge from '~/assets/work-debeers-campaigns-gsap-video-large.mp4';
import videoDebeersCampaignsGsapPlaceholder from '~/assets/work-debeers-campaigns-gsap-placeholder.jpg';




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
  ProjectSectionColumnsTextOnly,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionSubHeading,  
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './debeers.module.css';

const title = 'De Beers';
const date = 'Jan 2021 - Jul 2026';
const job = 'Lead Frontend developer';
const description =
  'I worked as the Lead Frontent Developer/ Software Engineer on a huge variety of really enjoyable tasks. I was with DeBeers for nearly 6 years and enjoyed every single project. We had some great achievements here, including: Optimizing the rendered media by 50%, introducing new visual documentation for new developers and for all teams to have visibility of the whole eco-system, re-writing the whole codebase for easier readability and of course exciting new campaigns every month.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Media Compression & Optimization · Web Performance Optimization · Testing & Debugging · UI/ UX Design Principles · Accessible Code/Guidelines · JSON Data · Handlebars Templates · jQuery · JavaScript · Amplience CMS · Bootstrap CSS · Git · CMS Content Editing & Development · Azure Devops · Salesforce · Generative AI Fundamentals · Gulp · Figma · GSAP · Design Patterns & Principles',
  'Frontend Development',
  'Media Optimization',
  'Amplience Integration',
  'GSAP Integration',
  'Design Audits',
  'Creation of Visual Documentation'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Debeers = () => {
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
          date={date}
          job={job}          
          description={description}
          url="https://www.debeers.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageDebeersIntroImage}
              srcSet={`${imageDebeersIntroImage} 1080w, ${imageDebeersIntroImageLarge} 2160w`}
              placeholder={imageDebeersIntroImagePlaceholder}
              width={1280}
              height={800}
              alt="DeBeers Lotus Bracelet"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>


          <ThemeProvider theme="light" data-invert>
            <ProjectSection>
              <ProjectSectionColumnsTextOnly>
                <ProjectSectionContent>
                  <ProjectTextRow>
                    <ProjectSectionHeading>Key Responsibilities</ProjectSectionHeading>
                    <ProjectSectionText>
                      Global re-write of existing Rendering Templates, Transformation Templates, Handlebars Templates and JSON Schema Data (to optimize the codebase).
                    </ProjectSectionText>
                    <ProjectSectionText>
                      Initially overhauled and optimized the main dependencies (CSS/ JS), then created a new local environment to run and transpile new and old components locally (Gulp 4, Webpack 4, Handlebars, Babel and Browsersync).
                    </ProjectSectionText>  
                    <ProjectSectionText>
                      Also re-wrote the SCSS codebase using the BEM naming convention and optimized the local SCSS repository to use variables, partials and mixins. This improved code recognition and prevented code duplication.
                    </ProjectSectionText>     
                    <ProjectSectionText>
                      Gradually implemented atomic components to be re-usable across the site for optimization and ease-of-use for the content team.
                    </ProjectSectionText>      
                    <ProjectSectionText>
                      GSAP integration + implementation to animate specific campaign pages.
                    </ProjectSectionText>   
                    <ProjectSectionText>
                      One of the main, regular tasks was to create campaign components based on provided designs, then integrate those new components into the Amplience environment.
                    </ProjectSectionText>      
                    <ProjectSectionText>
                      Accessibility audits and reviewing Accessible360 reports. Implementing changes throughout
                    </ProjectSectionText>     
                    <ProjectSectionText>
                      Regular deep-level audits and reports of designs provided to ensure branding consistency. As there wasn’t a branding/ style guide in place, I was responsible for aligning with the design team to clarify details of campaign designs
                    </ProjectSectionText>      
                    <ProjectSectionText>
                      Regular meetings with various teams: in-house design team, third-party design agency, Amplience developers, Commerce developers (Salesforce), QA, business analysts, client and business. The main areas of focus were: clarifications, estimates, expectations, re-designs and workloads
                    </ProjectSectionText>    
                    <ProjectSectionText>
                      Overseeing the new Amplience team: onboarding, task delegation, peer programming, problem solving and meetings
                    </ProjectSectionText>                                                                         
                  </ProjectTextRow>
                </ProjectSectionContent>

                <ProjectSectionContent>
                  <ProjectTextRow>
                    <ProjectSectionHeading>Key Achievements</ProjectSectionHeading>
                    <ProjectSectionText>
                      I implemented a standardized file naming convention for easier file navigation and to help with onboarding new developers.
                    </ProjectSectionText>
                    <ProjectSectionText>
                      I introduced and implemented Amplience’s new Smart Images feature, to fully optimize global image quality vs size. Adding to this I then created a new set of media breakpoints and conditions, using a new library of Transformation Templates and Rendering Templates, which were highly optimized. Also introduced a new image format AVIF. It would load in this order: AVIF/ WebP/ JPEG. Images saw an average decrease in file size between 40% to 60%, without losing quality. As an example, a hero banner that loaded at 980KB was reduced to 340KB. Hugely speeding up page load times.
                    </ProjectSectionText>   
                    <ProjectSectionText>
                      For videos, I created a new fallback method, loading in a new order: VP9/ webM/ MP4. Most videos page load file size was reduced by 50% or more. This was especially useful for mobile/ tablet devices.
                    </ProjectSectionText>  
                    <ProjectSectionText>
                      Re-writing the whole frontend codebase using BEM, a new file naming convention, optimized variables/ mixins and partials and removed any redundant code. It required painstaking attention to detail as any errors would break existing components.
                    </ProjectSectionText>                  
                    <ProjectSectionText>
                      Created new visual documentation and comprehensive Amplience step-by-step user guide for the content and development teams to easily reference components and their requirements for content build or future component builds.
                    </ProjectSectionText>                     
                        
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSectionColumnsTextOnly>
            </ProjectSection>  
          </ThemeProvider>              

          <ProjectSection>
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>GSAP Integration</ProjectSectionHeading>
                  <ProjectSectionText>
                    As specific animation and page scroll anomations were requested by business I integrated GSAP into the Amplience system. The main challenge was limiting it to specific pages, not to overload the page load speed for all pages. This was done carefully with page specific dependencies.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={`${videoDebeersCampaignsGsap} 1280w, ${videoDebeersCampaignsGsapLarge} 2560w`}
                width={1280}
                height={800}
                placeholder={videoDebeersCampaignsGsapPlaceholder}
                alt="DeBeers GSAP Intergration Animation Example"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>        

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>
              Campaigns
            </ProjectSectionHeading>
            <ProjectSectionText>
              Apart from seasonal campaigns, there were regular monthly product campaigns that needed to be active on production before fixed dates. This was sometimes challenging as sprints overlapped. But, I love to be busy so it was always great working on these.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>       


          <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Complete Codebase Re-write</ProjectSectionHeading>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  When I initially joined DeBeers the codebase was very bloated and tricky to reference throughout. One of my main tasks was to re-write the whole thing
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Solution</ProjectSectionSubHeading>
                <ProjectSectionText>
                  I introduced: BEM, a new file naming convention, optimized variables/ mixins and partials and removed any redundant code. It required painstaking attention to detail as any errors would break existing components. On release the CSS and JS file size was reduced by 55%, speeding up the global site load.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageDebeersCampaignsImageOne}
                srcSet={`${imageDebeersCampaignsImageOne} 1080w, ${imageDebeersCampaignsImageOneLarge} 2160w`}
                placeholder={imageDebeersCampaignsImageOnePlaceholder}
                width={260}
                height={660}
                alt="DeBeers Example of SCSS Code Re-write"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                src={imageDebeersCampaignsImageTwo}
                srcSet={`${imageDebeersCampaignsImageTwo} 1080w, ${imageDebeersCampaignsImageTwoLarge} 2160w`}
                placeholder={imageDebeersCampaignsImageTwoPlaceholder}
                width={260}
                height={660}
                alt="DeBeers Example of Handlebars Code"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>   


        <ProjectSection>
          <ProjectSectionContent>
            <Image
              key={theme}
              src={imageDebeersCampaignsLandscape}
              srcSet={`${imageDebeersCampaignsLandscape} 1080w, ${imageDebeersCampaignsLandscapeLarge} 2160w`}
              placeholder={imageDebeersCampaignsLandscapePlaceholder}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="DeBeers Example of Accessible Carousel Work Showing Jewellery Products"
            />
          </ProjectSectionContent>
        </ProjectSection>



          <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Media Optimization</ProjectSectionHeading>
            <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
            <ProjectSectionText>
              Being a luxury goods brand, De Beers relied heavily on perfect quality media (images and Videos) to show off the various quality jewellery. Of course the page speed performance always suffered as at the time De Beers hadn't implemented the Amplience Smart Image feature.
            </ProjectSectionText>
            <ProjectSectionSubHeading>The Solution</ProjectSectionSubHeading>
            <ProjectSectionText>
              For images I introduced and implemented the new(ish) Amplience Smart Images feature, to fully optimize global image quality vs size. Adding to this I then created a new set of media breakpoints and conditions, using a new library of Transformation Templates and Rendering Templates, which were highly optimized. Also introduced a new image format AVIF. It would load in this order: AVIF/ WebP/ JPEG. Images saw an average decrease in file size between 40% to 60%, without losing quality. As an example, a hero banner that loaded at 980KB was reduced to 340KB. Hugely speeding up page load times.
            </ProjectSectionText>   
            <ProjectSectionText>
              For videos, I created a new fallback method, loading in a new order: VP9/ webM/ MP4. Most videos page load file size was reduced by 50% or more. This was especially useful for mobile/ tablet devices.
            </ProjectSectionText>       
          </ProjectTextRow>
          </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Design Audits</ProjectSectionHeading>
              <ProjectSectionText>
                During the regular design handovers for the development team my task was to help the design team for the final designs by pointing out any global inconsistencies in styling (spacing, font weights, font sizes, image aspect ratios, colour contrast issues and if any specific animations would affect accessibility and usability), accessibility, implementation and most importantly give rough time-frames for development. This would help keep projects realistic and make sure we're all on track for release dates.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
