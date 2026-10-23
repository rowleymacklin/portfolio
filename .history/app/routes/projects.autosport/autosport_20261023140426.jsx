import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';

import backgroundAutosportLarge from '~/assets/work-autosport-preview-large.jpg';
import backgroundAutosportPlaceholder from '~/assets/work-autosport-preview-large.jpg';
import backgroundAutosport from '~/assets/work-autosport-preview-large.jpg';

import imageAutosportIntroImage from '~/assets/work-autosport-piano-collage.jpg';
import imageAutosportIntroImageLarge from '~/assets/work-autosport-piano-collage-large.jpg';
import imageAutosportIntroImagePlaceholder from '~/assets/work-autosport-piano-collage-placeholder.jpg';

import imageAutosportPianoImageOne from '~/assets/work-autosport-piano-1-light.jpg';
import imageAutosportPianoImageOneLarge from '~/assets/work-autosport-piano-1-light-large.jpg';
import imageAutosportPianoImageOnePlaceholder from '~/assets/work-autosport-piano-1-light-placeholder.jpg';

import imageAutosportPianoImageTwo from '~/assets/work-autosport-piano-2-light.jpg';
import imageAutosportPianoImageTwoLarge from '~/assets/work-autosport-piano-2-light-large.jpg';
import imageAutosportPianoImageTwoPlaceholder from '~/assets/work-autosport-amp-1-light-placeholder.jpg';

import imageAutosportAmpImageOne from '~/assets/work-autosport-amp-1-light.jpg';
import imageAutosportAmpImageOneLarge from '~/assets/work-autosport-amp-1-light-large.jpg';
import imageAutosportAmpImageOnePlaceholder from '~/assets/work-autosport-amp-1-light-placeholder.jpg';

import imageAutosportAmpImageTwo from '~/assets/work-autosport-amp-2-light.jpg';
import imageAutosportAmpImageTwoLarge from '~/assets/work-autosport-amp-2-light-large.jpg';
import imageAutosportAmpImageTwoPlaceholder from '~/assets/work-autosport-amp-2-light-placeholder.jpg';

import imageAutosportNavImageOne from '~/assets/work-autosport-nav-1-light.jpg';
import imageAutosportNavImageOneLarge from '~/assets/work-autosport-nav-1-light-large.jpg';
import imageAutosportNavImageOnePlaceholder from '~/assets/work-autosport-nav-1-light-placeholder.jpg';

import imageAutosportNavImageTwo from '~/assets/work-autosport-nav-2-light.jpg';
import imageAutosportNavImageTwoLarge from '~/assets/work-autosport-nav-2-light-large.jpg';
import imageAutosportNavImageTwoPlaceholder from '~/assets/work-autosport-nav-2-light-placeholder.jpg';

import imageAutosportPowerlistImageOne from '~/assets/work-autosport-powerlist-1-light.jpg';
import imageAutosportPowerlistImageOneLarge from '~/assets/work-autosport-powerlist-1-light-large.jpg';
import imageAutosportPowerlistImageOnePlaceholder from '~/assets/work-autosport-powerlist-1-light-placeholder.jpg';

import imageAutosportPowerlistImageTwo from '~/assets/work-autosport-powerlist-2-light.jpg';
import imageAutosportPowerlistImageTwoLarge from '~/assets/work-autosport-powerlist-2-light-large.jpg';
import imageAutosportPowerlistImageTwoPlaceholder from '~/assets/work-autosport-powerlist-2-light-placeholder.jpg';

import imageAutosportTop50CollageImage from '~/assets/work-autosport-top50-collage.jpg';
import imageAutosportTop50CollageImageLarge from '~/assets/work-autosport-top50-collage-large.jpg';
import imageAutosportTop50CollageImagePlaceholder from '~/assets/work-autosport-top50-collage-placeholder.jpg';

import imageAutosportTop50ImageOne from '~/assets/work-autosport-top50-1-light.jpg';
import imageAutosportTop50ImageOneLarge from '~/assets/work-autosport-top50-1-light-large.jpg';
import imageAutosportTop50ImageOnePlaceholder from '~/assets/work-autosport-top50-1-light-placeholder.jpg';

import imageAutosportTop50ImageTwo from '~/assets/work-autosport-top50-2-light.jpg';
import imageAutosportTop50ImageTwoLarge from '~/assets/work-autosport-top50-2-light-large.jpg';
import imageAutosportTop50ImageTwoPlaceholder from '~/assets/work-autosport-top50-2-light-placeholder.jpg';

import imageAutosportAwardsImageOne from '~/assets/work-autosport-awards-1-light.jpg';
import imageAutosportAwardsImageOneLarge from '~/assets/work-autosport-awards-1-light-large.jpg';
import imageAutosportAwardsImageOnePlaceholder from '~/assets/work-autosport-awards-1-light-placeholder.jpg';

import imageAutosportAwardsImageTwo from '~/assets/work-autosport-awards-2-light.jpg';
import imageAutosportAwardsImageTwoLarge from '~/assets/work-autosport-awards-2-light-large.jpg';
import imageAutosportAwardsImageTwoPlaceholder from '~/assets/work-autosport-awards-2-light-placeholder.jpg';

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
import styles from './autosport.module.css';

const title = 'Autosport';
const date = 'Mar 2019 - Feb 2021';
const job = 'Frontend developer';
const description =
  'I was initially contracted for three months at Autosport to help integrate and style the new Piano Digital Business Platform. Admittedly, it was a challenging first few weeks getting to grips with Piano but that made it all the more enjoyable and I hit the ground running. Let’s just say, the Piano documentation reads like War & Peace 2 (very long). As I loved working here and Autosport had piles of outstanding work, the contract was extended multiple times. Sadly, due to the Covid-19 crisis affecting most racing events and budgets, my contract wasn’t extended.';
const roles = [
  'CSS (SCSS/SASS) · HTML · Responsive Design · CSS (SCSS/SASS) · Web Performance Optimization · Testing & Debugging · UI/ UX Design Principles · jQuery · JavaScript · Sublime · CMS Content Editing & Development · Zeplin · Photoshop · Illustrator · Piano Digital Business Platform · AMP (Accelerated Mobile Pages) · Attention to detail · Adaptability · Creative thinking · Time Management · Problem-solving · Client meetings',

  'Frontend Development',
  'Global Bug Fixing',
  'Piano Digital Business Platform Integration',
  'AMP',
  'Seasonal Microsites'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Autosport = () => {
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
          src={backgroundSpr}
          srcSet={`${backgroundAutosport} 1080w, ${backgroundAutosportLarge} 2160w`}
          placeholder={backgroundAutosportPlaceholder}
        />

        <ProjectHeader
          title={title}
          date={date}
          job={job}  
          description={description}
          url="https://www.autosport.com/"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageAutosportIntroImage}
              srcSet={`${imageAutosportIntroImage} 1080w, ${imageAutosportIntroImageLarge} 2160w`}
              placeholder={imageAutosportIntroImagePlaceholder}
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Autosport Projects Collage - Various Works Including Annual Microsites"
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
                    Setup and integrated new components to use the new digital experience platform, Piano Digital Business Platform
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Converted main components to run in AMP (Accelerated Mobile Pages)
                  </ProjectSectionText>  
                  <ProjectSectionText>
                    Restyled existing components and global navigation
                  </ProjectSectionText>     
                  <ProjectSectionText>
                    Created three new microsites: Autosport Powerlist of 50 Most Influential People in Motorsport, Autosport Top 50 Drivers of 2019, Autosport Awards 2019
                  </ProjectSectionText>                                                                      
                </ProjectTextRow>
              </ProjectSectionContent>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Key Achievements</ProjectSectionHeading>
                  <ProjectSectionText>
                    Learning the Piano Digital Business Platform and implementing styling and layout changes within Piano for the content team
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Also learning AMP (Accellerated Mobile Pages) for optimising mobile content
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
                <ProjectSectionHeading>Setup and integrate new components to use Piano Digital Business Platform</ProjectSectionHeading>
                <ProjectSectionText>
                  As Autosport wanted to set up a new Subscription platform, using Piano, it was my task for 3-4 months to style the new components and templates within the Piano environment.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Styling and tweaking the OOTB templates was quite a challenge for me as the backend logic Piano used was Angular, and I’d never worked with it before. But I picked up on the logic and navigating the Piano environment fairly quickly. Also, some components were shared, so slight changes for one would break others. I learned this the hard way, but soon fixed it. Testing and double testing each change regularly was a must.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Learning new skills. Getting it all working and live for the launch date. Working within a new code system. The outcome was some very well designed, logical and easily editable templates.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageAutosportPianoImageTwo}
                srcSet={`${imageAutosportPianoImageTwo} 1080w, ${imageAutosportPianoImageTwoLarge} 2160w`}
                placeholder={imageAutosportPianoImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Example of Re-worked Subscription Option"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageAutosportPianoImageOne}
                srcSet={`${imageAutosportPianoImageOne} 1080w, ${imageAutosportPianoImageOneLarge} 2160w`}
                placeholder={imageAutosportPianoImageOnePlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Example of Re-worked Subscription Payment Option"
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
            <ProjectSectionColumns>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Convert main components to AMP (Accelerated Mobile Pages)</ProjectSectionHeading>
                  <ProjectSectionText>
                    Autosport wanted to convert the main news items and articles to AMP (Accelerated Mobile Pages) so they would rank higher in Google searches and results. All the components had to match the live ones in styling.
                  </ProjectSectionText>
                  <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                  <ProjectSectionText>
                    It was all fairly straightforward but the Google guidelines are quite strict and the first few rounds threw quite a few broweser errors. These were easily fixed with a few tweaks and code re-writes. Using includes, variables and the main code in one file was quite odd at first, but actually made a lot of sense.
                  </ProjectSectionText>
                  <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                  <ProjectSectionText>
                    Learning a new tool and getting it all up and running within the deadline. I was also very pleased the AMP pages matched the original pages in styling. No visible difference.
                  </ProjectSectionText>       
                </ProjectTextRow>
              </ProjectSectionContent>
              <div className={styles.sidebarImages}>
                <Image
                  className={styles.sidebarImage}
                  src={imageAutosportAmpImageTwo}
                  srcSet={`${imageAutosportAmpImageTwo} 1080w, ${imageAutosportAmpImageTwoLarge} 2160w`}
                  placeholder={imageAutosportAmpImageTwoPlaceholder}
                  width={260}
                  height={660}
                  alt="Autosport Project Example of Re-worked News Article Landing Page"
                  sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                />              
                <Image
                  className={styles.sidebarImage}
                  src={imageAutosportAmpImageOne}
                  srcSet={`${imageAutosportAmpImageOne} 1080w, ${imageAutosportAmpImageOneLarge} 2160w`}
                  placeholder={imageAutosportAmpImageOnePlaceholder}
                  width={260}
                  height={660}
                  alt="Autosport Project Example of Re-worked News Article Page"
                  sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
                />
              </div>
            </ProjectSectionColumns>
          </ProjectSection>    
        </ThemeProvider>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Re-style existing components and global navigation</ProjectSectionHeading>
                <ProjectSectionText>
                  Using the provided Zeplin files, I coded the new global top nav bar for both desktop and mobile. The main reasons for the redesign was to move content higher above the fold, make it more user-friendly and to encourage more subscriptions.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The main challenge was making the nav responsive for all viewports. I injected Foundation’s new XY grid framework (base only), so I could make use of its awesome flex capabilities. Especially the vertical and horizontal flexing. Also, fitting as many nav items as possible for a minimum mobile viewport width of 320px was challenging.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  I was proudest of the responsiveness of the whole navigation bar. It turned out perfect for all viewports. There was also a big increase in subscriptions and site usage after the new navigation went live. Always good if navigation is clearer and more logical to use.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageAutosportNavImageTwo}
                srcSet={`${imageAutosportNavImageTwo} 1080w, ${imageAutosportNavImageTwoLarge} 2160w`}
                placeholder={imageAutosportNavImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Example of Re-worked F1 Results Page"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageAutosportNavImageOne}
                srcSet={`${imageAutosportNavImageOne} 1080w, ${imageAutosportNavImageOneLarge} 2160w`}
                placeholder={imageAutosportNavImageOnePlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Example of Re-worked Global Navigation"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection> 

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Microsite: Code and style the annual Autosport Powerlist of 50 Most Influential People in Motorsport</ProjectSectionHeading>
                <ProjectSectionText>
                  I was tasked with creating the pages based on flat Photoshop designs. Autosport already used Zurb Foundation 5 on the live site and the layout wasn't overly complex, so I just kept using this version.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Probably the most challenging part of this project was the logic to show/ hide content based on the user being subscribed/ registered or anonymous. Only certain sections could be visible for different users. I had some help from the in-house PHP developer, as my PHP knowledge was pretty basic.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  I really liked the navigation of the pages and the nominees headers. It all worked out to be very logical to use and read with the usage of very large header fonts and high contrast background and text. I was also quite pleased I’d developed some new skills working with PHP and Twig.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageAutosportPowerlistImageTwo}
                srcSet={`${imageAutosportPowerlistImageTwo} 1080w, ${imageAutosportPowerlistImageTwoLarge} 2160w`}
                placeholder={imageAutosportPowerlistImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Landing Page: Power List 50 Most Influential People in Motorsport Top 10"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageAutosportPowerlistImageOne}
                srcSet={`${imageAutosportPowerlistImageOne} 1080w, ${imageAutosportPowerlistImageOneLarge} 2160w`}
                placeholder={imageAutosportPowerlistImageOnePlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Landing Page: Power List 50 Most Influential People in Motorsport"
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
            <ProjectSectionContent>
              <Image
                raised
                key={theme}
                src={imageAutosportTop50CollageImage}
                srcSet={`${imageAutosportTop50CollageImage} 1080w, ${imageAutosportTop50CollageImageLarge} 2160w`}
                placeholder={imageAutosportTop50CollageImagePlaceholder}
                width={1280}
                height={800}
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                alt="Autosport Project Collage Top 50 Drivers of 2019"
              />
            </ProjectSectionContent>
          </ProjectSection>
        </ThemeProvider>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Microsite: Code and style the annual Autosport Top 50 Drivers of 2019</ProjectSectionHeading>
                <ProjectSectionText>
                  Again, for this project, I was given the flat Photoshop and Zeplin files, which I converted to code within the Foundation framework. As the homepage used a full page horizontal and vertical grid, I injected Foundation’s XY Grid into the existing framework. I did this for the Flexbox options like vertical and horizontal alignment and automatic sizing.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Again, I found the PHP logic quite challenging and getting the homepage grid just right. Space for copy was very limited, so the grid items had to be just right. Also, as some of the motorsport seasons hadn’t finished until the day before go-live, there was a frantic 36 hours of the editors providing new content and changing existing content.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The navigation worked out really well for me, including the layout and way of showing the top 50 in a slide-in list format. The homepage grid also came out pretty solid responsively. And the layout of the grid items was just right.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageAutosportTop50ImageTwo}
                srcSet={`${imageAutosportTop50ImageTwo} 1080w, ${imageAutosportTop50ImageTwoLarge} 2160w`}
                placeholder={imageAutosportTop50ImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Top 50 Drivers of 2019 Top Results Page"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageAutosportTop50ImageOne}
                srcSet={`${imageAutosportTop50ImageOne} 1080w, ${imageAutosportTop50ImageOneLarge} 2160w`}
                placeholder={imageAutosportTop50ImageOnePlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Top 50 Drivers of 2019 Landing Page"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>    

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Microsite: Code and style the annual Autosport Awards 2019</ProjectSectionHeading>
                <ProjectSectionText>
                  Another annual event, to celebrate motorsport riders and drivers. Using the provided Zeplin files, I styled this one page site. I used Foundation 5 standard grid layout for this one, as the grid wasn’t too complex and relied more on rows of content.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The biggest challenge really was hi-lighting the selected nominee’s card and mono-chroming the non-active cards as the user clicked their selection. Also, it was tricky positioning the card background images, as the provided image sizes and subject focus all differed.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The card layout and card select functionality worked out really well in the end. Nice effect selecting the chosen card, and mono chroming the non-selected items.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageAutosportAwardsImageOne}
                srcSet={`${imageAutosportAwardsImageOne} 1080w, ${imageAutosportAwardsImageOneLarge} 2160w`}
                placeholder={imageAutosportAwardsImageOnePlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Annual Autosport Awards 2019 Landing Page"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageAutosportAwardsImageTwo}
                srcSet={`${imageAutosportAwardsImageTwo} 1080w, ${imageAutosportAwardsImageTwoLarge} 2160w`}
                placeholder={imageAutosportAwardsImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Autosport Project Annual Autosport Awards 2019 Selection Page"
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
