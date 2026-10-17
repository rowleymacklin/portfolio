import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

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
import { List, ListItem } from '~/components/list';
import { Text } from '~/components/text';
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
  'I worked as the Lead Frontent Developer on a huge variety of really enjoyable tasks. I was with DeBeers for nearly 6 years and enjoyed every single project. We had some great achievements here, including: Optimizing the rendered media by 50%, introducing new visual documentation for new developers and for all teams to have visibility of the whole eco-system, re-writing the whole codebase for easier readability and of course exciting new campaigns every month.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · Media Compression & Optimization · Web Performance Optimization · Testing & Debugging · UI/ UX Design Principles · Accessible Code/Guidelines · JSON Data · Handlebars Templates · jQuery · JavaScript · Amplience CMS · Bootstrap CSS · Git · CMS Content Editing & Development · Azure Devops · Salesforce · Generative AI Fundamentals · Gulp · Figma · GSAP · Design Patterns & Principles',
  'Code Re-write and Set Up New Local Environment',
  'Create Visual Documentation',
  'Frontend Development',
  'Media Optimization',
  'Design Audits',
  'Amplience Integration',
  'GSAP Integration'
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
                    <ProjectSectionText size="l" as="p">
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
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Codebase Re-write</ProjectSectionHeading>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText  className={styles.projectSectionTextSmaller} size="m" as="p">
                  When I initially joined DeBeers the CSS and JS codebase was rather bloated, disjointed and tricky to reference throughout. This was simply a legacy of different developers working on these files. Both were simple static files which were directly pasted into Amplience Content Hub. Version control was only active within Content Hub itself, nothing locally. The goal was to set up a local runtime environment that would transpile everything. As a bonus challenge I had to include Handlebars Templates, Point of Interest files and JSON Schemas. So components should render locally as they would remotely.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Solution</ProjectSectionSubHeading>
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="m" as="p"> 
                  As with all tasks and projects I spent some time gathering information. I always feel good planning and research is nearly as important as doing the actual work. It seems to save time in the long run.
                </ProjectSectionText>  
                <ProjectSectionText  className={styles.projectSectionTextSmaller} size="m" as="p"> 
                  As this was at least three to four sprints worth of work, and there was the very likely risk of other work overlapping, I decided to go Agile and split the project into manageable chunks. The below were the requirements:
                </ProjectSectionText>     
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="m" as="p"> 
                  Phase 1
                </ProjectSectionText>                              
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="s" as="p">     
                  <List>
                    <ListItem>
                      Set up local environment must work on Windows and macOS (I chose Gulp, Webpack, Babel and Browsersync, as these had much more support than others)
                    </ListItem>                       
                    <ListItem>
                      Must have version control, using GIT via Bitbucket within Azure Devops DeBeers server
                    </ListItem>                                           
                    <ListItem>
                      SCSS to CSS transpiler
                    </ListItem>              
                  </List>
                </ProjectSectionText >
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="m" as="p"> 
                  Phase 2
                </ProjectSectionText> 
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="s" as="p"> 
                  <List>
                    <ListItem>
                      Output CSS and JS must be minified
                    </ListItem>
                    <ListItem>
                      Must have support for Handlebars file rendering
                    </ListItem>   
                    <ListItem>
                      Must have support for JSON file rendering feeding the data to the Handlebars files
                    </ListItem>           
                  </List>
                </ProjectSectionText>                 
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="m" as="p"> 
                  Phase 3
                </ProjectSectionText> 
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="s" as="p"> 
                  <List>
                    <ListItem>
                      Migrate flat CSS and JS code into local environment
                    </ListItem>
                    <ListItem>
                      Split CSS code into partials based on each component used
                    </ListItem>   
                    <ListItem>
                      Split JS code into manageable chunks
                    </ListItem> 
                    <ListItem>
                      Rename all properties into BEM naming convention
                    </ListItem>                                
                  </List>
                </ProjectSectionText>       
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="m" as="p"> 
                  Phase 4
                </ProjectSectionText> 
                <ProjectSectionText className={styles.projectSectionTextSmaller} size="s" as="p"> 
                  <List>
                    <ListItem>
                      For the CSS introduce variables and mixins to streamline and globalize the code
                    </ListItem>
                    <ListItem>
                      Introduce new media conditions to optimize image loading (Including options for high resolution screens vs low resolution)
                    </ListItem>   
                    <ListItem>
                      Go through the whole new codebase and pick out any re-occurring global values; convert these 
                    </ListItem>                              
                  </List>
                </ProjectSectionText>       
                <ProjectSectionText> 
                  This was a particularly enjoyable project for me. Painstaking detail throughout and testing in case any slight change broke anything. The biggest challenge was when sprints overlapped so I'd have to branch off with current code and add any changes and merge again after.
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
          <ProjectTextRow>
            <ProjectSectionHeading>Media Optimization</ProjectSectionHeading>
            <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
            <ProjectSectionText>
              After re-writing the whole codebase, my next major task was to optimize all media on the site. We were loading far too many images and videos over the limit of 1MB. Some videos even rendered at 5MB. Clearly this was slowing down the page load speed and affecting the users experience. And being a luxury goods client the relaince was heavy on good quality images and videos to show off the products.
            </ProjectSectionText>
            <ProjectSectionSubHeading>The Solution</ProjectSectionSubHeading>

            <ProjectSectionText>
              My first focus was on images, as there were obviously a lot more product images than videos. After some research I discovered a new feature in Amplience called 'Smart Images' (new at the time). It's' an addon that introduced a new, highly compressed image format (AVIF) which reduced rendered image file sizes by 20% to 25%. But most importantly, it also supported controlling image quality and fallback image formats on-the-fly. By adding this parameter to the Rendering Templates the file size loaded was reduced by another 30%: '?fmt=auto&fmt.avif.qlt=60&fmt.webp.qlt=60&fmt.jp2.qlt=34&fmt.jpeg.qlt=56&$db-nd3-2-1-600-poi$''
            </ProjectSectionText>  
            
            <ProjectSectionText>
              For images I introduced and implemented the new(ish) Amplience Smart Images feature, to fully optimize global image quality vs size. Adding to this I then created a new set of media breakpoints and conditions, using a new library of Transformation Templates and Rendering Templates, which were highly optimized. Also introduced a new image format AVIF. It would load in this order: AVIF/ WebP/ JPEG. Images saw an average decrease in file size between 40% to 60%, without losing quality. As an example, a hero banner that loaded at 980KB was reduced to 340KB. Hugely speeding up page load times.
            </ProjectSectionText>   
            <ProjectSectionText>
              For videos, I created a new fallback method, loading in a new order: VP9/ webM/ MP4. Most videos page load file size was reduced by 50% or more. This was especially useful for mobile/ tablet devices.
            </ProjectSectionText>       
          </ProjectTextRow>
        </ProjectSection>

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
