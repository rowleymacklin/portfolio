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


import backgroundVariousLarge from '~/assets/work-various-preview-large.jpg';
import backgroundVariousPlaceholder from '~/assets/work-various-preview-placeholder.jpg';
import backgroundVarious from '~/assets/work-various-preview.jpg';

import imageVariousIntroImage from '~/assets/work-various-collage.jpg';
import imageVariousIntroImageLarge from '~/assets/work-various-collage-large.jpg';
import imageVariousIntroImagePlaceholder from '~/assets/work-various-collage-placeholder.jpg';

import imageVariousDesignImageOne from '~/assets/work-various-web-1.jpg';
import imageVariousDesignImageOneLarge from '~/assets/work-various-web-1-large.jpg';
import imageVariousDesignImageOnePlaceholder from '~/assets/work-various-web-1-placeholder.jpg';

import imageVariousDesignImageTwo from '~/assets/work-various-web-2.jpg';
import imageVariousDesignImageTwoLarge from '~/assets/work-various-web-2-large.jpg';
import imageVariousDesignImageTwoPlaceholder from '~/assets/work-various-web-2-placeholder.jpg';

import imageVariousPrintImageOne from '~/assets/work-various-print-logos-1.jpg';
import imageVariousPrintImageOneLarge from '~/assets/work-various-print-logos-1-large.jpg';
import imageVariousPrintImageOnePlaceholder from '~/assets/work-various-print-logos-1-placeholder.jpg';

import imageVariousPrintImageTwo from '~/assets/work-various-print-logos-2.jpg';
import imageVariousPrintImageTwoLarge from '~/assets/work-various-print-logos-2-large.jpg';
import imageVariousPrintImageTwoPlaceholder from '~/assets/work-various-print-logos-2-placeholder.jpg';




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
import styles from './various.module.css';

const title = 'Various Pre-2013';
const date = 'Jan 2001 - Apr 2013';
const job = 'Designer | Web Analyst | Frontend Developer';
const description =
  'Between 2001 and 2012 my roles varied quite a lot. I started out as a web designer back in the early middle ages, as well as doing some design work. Mostly these were new logo’s for clients and leaflets. My big change came when I started out at Cisco Systems, getting into coding more, and user interaction. I ended up working as a Web Analyst there, over-seeing a team of off-shore developers who updated the Cisco website. I eventually left Cisco to go on a World backpacking trip for a year in 2007. Not because of the work, but as it was a life’s dream of mine and I had to do this while I could still shoulder a backpack. On my return I settled down for what was my work passion, front end development. The roles varied, from permenant to contracting.';
const roles = [
  '2012 • eValue/Aviva - front end developer | Blackberry - front end developer | M&G/ Man Group - design & front end work | Financial Express - leaflet design',
  '2011 • Dorset Cereals - front end developer | Peugeot 508 - front end developer | Kellogg’s Coco Pops 2011 - front end developer | Luna Di Miele - logo design',
  '2010 • Rated People - front end developer',
  '2009 • Africasolo - front end developer',  
  '2008 • Rolls Round the World - front end developer & travel',   
  '2005 • Cisco Systems - designer/ web analyst',     
  '2004 • Diginuts - front end developer | Laura Carstensen - front end developer | PW Finlayson - leaflet design & logo design | Football Mitoo - logo design | Edible Systems - logo design | L Jalley & Co - logo design',    
  '2002 • Nikkei NEEDS - front end developer',
  '2001 • NHK Japan - front end developer | Portobello Festival - front end developer'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Various = () => {
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
          src={backgroundVarious}
          srcSet={`${backgroundVarious} 1080w, ${backgroundVariousLarge} 2160w`}
          placeholder={backgroundVariousPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              src={imageVariousIntroImage}
              srcSet={`${imageVariousIntroImage} 1080w, ${imageVariousIntroImageLarge} 2160w`}
              placeholder={imageVariousIntroImagePlaceholder}
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
                  2012 - eValue/Aviva - front end developer
                </ProjectSectionText>
                <ProjectSectionText>
                  2012 - Blackberry - front end developer
                </ProjectSectionText>  
                <ProjectSectionText>
                  2012 - M&G/ Man Group - design & front end work
                </ProjectSectionText>     
                <ProjectSectionText>
                  2012 - Financial Express - leaflet design
                </ProjectSectionText>      
                <ProjectSectionText>
                  2011 - Dorset Cereals - front end developer
                </ProjectSectionText>   
                <ProjectSectionText>
                  2011 - Peugeot 508 - front end developer
                </ProjectSectionText>      
                <ProjectSectionText>
                  2011 - Kellogg’s Coco Pops - front end developer
                </ProjectSectionText>     
                <ProjectSectionText>
                  2011 - Luna Di Miele - logo design
                </ProjectSectionText>      
                <ProjectSectionText>
                  2010 - Rated People - front end developer
                </ProjectSectionText>    
                <ProjectSectionText>
                  2009 - Africasolo - front end developer
                </ProjectSectionText>      
                <ProjectSectionText>
                  2008 - Rolls Round the World - front end developer & travel
                </ProjectSectionText>    
                <ProjectSectionText>
                  2005 - Cisco Systems - designer/ web analyst
                </ProjectSectionText>   
                <ProjectSectionText>
                  2004 - Diginuts - front end developer
                </ProjectSectionText>   
                <ProjectSectionText>
                  2004 - Laura Carstensen - front end developer
                </ProjectSectionText>   
                <ProjectSectionText>
                  2003 - PW Finlayson - leaflet design & logo design
                </ProjectSectionText>   
                <ProjectSectionText>
                  2003 - Football Mitoo - logo design
                </ProjectSectionText>    
                <ProjectSectionText>
                  2002 - Edible Systems - logo design
                </ProjectSectionText>  
                <ProjectSectionText>
                  2002 - L Jalley & Co - logo design
                </ProjectSectionText>  
                <ProjectSectionText>
                  2001 - Nikkei NEEDS - front end developer
                </ProjectSectionText>                  
                <ProjectSectionText>
                  2001 - NHK Japan - front end developer
                </ProjectSectionText>   
                <ProjectSectionText>
                  2000 - Portobello Festival - Designer and Frontend Developer
                </ProjectSectionText>                                                                 
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Key Achievements</ProjectSectionHeading>
                <ProjectSectionText>
                  My first ever foray into design and web design, creating the 2000 Portobello Festival site.
                </ProjectSectionText>
                <ProjectSectionText>
                  I enjoyed the simplicity of designing logos for clients. Simple in concept but probably more challenging than any other design as you have bring across a message with a few letters and maybe a graphic.
                </ProjectSectionText>   
                <ProjectSectionText>
                  Producing graphics and websites for clients, which the clients' were very happy with and I was very proud of them as a junior designer
                </ProjectSectionText>  
                <ProjectSectionText>
                  Working at Cisco Systems was probaly the most impactful role I've ever had, as I learned a whole set of new skillsets. This ranged from meetings etiquette to managing a team of remote developers, as well as real world frontend development within a very large corporation. The work here set me up until now. Also, in hindshight it was interesting creating vanilla CSS without the use of SCSS/ SASS or preprocessors, as this was before they were introduced globally.
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
                <ProjectSectionHeading>Various Web Design | Web Analyst | Frontend Developer</ProjectSectionHeading>
                <ProjectSectionText>
                  The web work was very varied, as were the company's I worked for. Ranging from small, medium to large businesses. Thinking back,it horrifies me now as my first role at Supply Serve I relied on outputting html, css and javascript via Adobe's ImageReady. Sites and functions soon broke, so I very soon got into hand coding. I even got to be a dab hand at Macromedia's Flash & Actionscripting. The role at Cisco Systems was my big break. It was the basis of all work to come: great team, teamwork, lots of coding, big corporation, tight deadlines, regular client meetings, pixel perfect sites and varied web work.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The most challenging role I had was as a Web Analyst. I had to adjust my mindset from being hands-on, to managing a team and the client. The time difference between the off-shore team and myself was also a bit tricky, but easy to adjust to.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  Learning new skills after relying on Abobe's ImageReady too much. I learned the hard way and it had to be quick, so it was the best way to learn in the end.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageVariousDesignImageTwo}
                srcSet={`${imageVariousDesignImageTwo} 1080w, ${imageVariousDesignImageTwoLarge} 2160w`}
                placeholder={imageVariousDesignImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageVariousDesignImageOne}
                srcSet={`${imageVariousDesignImageOne} 1080w, ${imageVariousDesignImageOneLarge} 2160w`}
                placeholder={imageVariousDesignImageOnePlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>   


        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Various Print and Logo Work</ProjectSectionHeading>
                <ProjectSectionText>
                  Most of my print and logo work was done while I was working for Supply Serve, and then Financial Express. I even managed to design and implement some van artwork. Quite a challenge as I had to adjust to using Pantone colours. Needless to say I had quite a few calls from the printers about colour discrepencies. The overall print work varied: van designs, logos, leaflets and sometimes business cards.
                </ProjectSectionText>
                <ProjectSectionSubHeading>The Challenge</ProjectSectionSubHeading>
                <ProjectSectionText>
                  The biggest challenge for me, apart from using Pantone colours for van designs was trying to create unique logo's for clients. I'm my own worst critic, so it was quite a challenge.
                </ProjectSectionText>
                <ProjectSectionSubHeading>Proudest Of</ProjectSectionSubHeading>
                <ProjectSectionText>
                  My favourite of all the print work is the Edible Systems logo. Somehow, I'd inadvertently created a logo that showed both the 'E' and the 'S' for Edible Systems as a plug. The client loved it. Although if I could re-work it, I'd change only the colours.
                </ProjectSectionText>       
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                src={imageVariousPrintImageTwo}
                srcSet={`${imageVariousPrintImageTwo} 1080w, ${imageVariousPrintImageTwoLarge} 2160w`}
                placeholder={imageVariousPrintImageTwoPlaceholder}
                width={260}
                height={660}
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageVariousPrintImageOne}
                srcSet={`${imageVariousPrintImageOne} 1080w, ${imageVariousPrintImageOneLarge} 2160w`}
                placeholder={imageVariousPrintImageOnePlaceholder}
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
