import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

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

const title = 'Various Pre-2016';
const date = 'Jan 2001 - Apr 2016';
const job = 'Designer | Web Analyst | Frontend Developer';
const description =
  'Between 2001 and 2016 my roles varied quite a lot. I started out as a web designer back in the early middle ages, as well as doing some design work. Mostly these were new logo’s for clients and leaflets. My big change came when I started out at Cisco Systems, getting into coding more, and user interaction. I ended up working as a Web Analyst there, over-seeing a team of off-shore developers who updated the Cisco website. I eventually left Cisco to go on a World backpacking trip for a year in 2007. Not because of the work, but as it was a life’s dream of mine and I had to do this while I could still shoulder a backpack. On my return I settled down for what was my work passion, front end development. The roles varied, from permenant to contracting.';
const roles = [
  '2016: Oasis Fashion - Frontend Developer | Aviva - Frontend Developer',  
  '2012: Financial Express - Designer and Frontend Developer | M&G/ Man Group - Designer and Frontend Developer | Blackberry - Frontend Developer | eValue/Aviva - Frontend Developer',
  '2011: Luna Di Miele - Designer and Frontend Developer | Kellogg’s Coco Pops - Frontend Developer | Peugeot 508 - Frontend Developer | Dorset Cereals - Frontend Developer',
  '2010: Rated People - Frontend Developer',
  '2009: Africasolo - Frontend Developer',
  '2008: Rolls Round the World - Frontend Developer and Travel',
  '2005: Cisco Systems - Designer, Frontend Developer, Web Analyst',
  '2004: Laura Carstensen - Frontend Developer | Diginuts - Frontend Developer',
  '2003: Football Mitoo - Logo Designer | PW Finlayson - Designer',
  '2002: Supply Serve - Designer and Web Designer | L Jalley & Co - Logo Designer | Edible Systems - Logo Designer',
  '2001: Nikkei NEEDS - Web Designer | NHK Japan - Web Designer',
  '2000: Portobello Festival - Designer and Web Designer'
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
              alt="Collage of Various Design, Web Design and Frontend Work"
              sizes="100vw"
            />
          }
        >
            <ProjectSectionColumnsTextOnly>
              <ProjectSectionContent>
                <ProjectTextRow>
                  <ProjectSectionHeading>Key Responsibilities</ProjectSectionHeading>
                  <ProjectSectionText>
                    2012: eValue/Aviva - Frontend Developer
                  </ProjectSectionText>
                  <ProjectSectionText>
                    2012: Blackberry - Frontend Developer
                  </ProjectSectionText>  
                  <ProjectSectionText>
                    2012: M&G/ Man Group - Designer and Frontend Developer
                  </ProjectSectionText>     
                  <ProjectSectionText>
                    2012: Financial Express - Designer and Frontend Developer
                  </ProjectSectionText>      
                  <ProjectSectionText>
                    2011: Dorset Cereals - Frontend Developer
                  </ProjectSectionText>   
                  <ProjectSectionText>
                    2011: Peugeot 508 - Frontend Developer
                  </ProjectSectionText>      
                  <ProjectSectionText>
                    2011: Kellogg’s Coco Pops - Frontend Developer
                  </ProjectSectionText>     
                  <ProjectSectionText>
                    2011: Luna Di Miele - Designer and Frontend Developer
                  </ProjectSectionText>      
                  <ProjectSectionText>
                    2010: Rated People - Frontend Developer
                  </ProjectSectionText>    
                  <ProjectSectionText>
                    2009: Africasolo - Frontend Developer
                  </ProjectSectionText>      
                  <ProjectSectionText>
                    2008: Rolls Round the World - Frontend Developer and Travel
                  </ProjectSectionText>    
                  <ProjectSectionText>
                    2005: Cisco Systems - Designer, Frontend Developer, Web Analyst
                  </ProjectSectionText>   
                  <ProjectSectionText>
                    2004: Diginuts - Frontend Developer
                  </ProjectSectionText>   
                  <ProjectSectionText>
                    2004: Laura Carstensen - Frontend Developer
                  </ProjectSectionText>   
                  <ProjectSectionText>
                    2003: PW Finlayson - Designer
                  </ProjectSectionText>   
                  <ProjectSectionText>
                    2003: Football Mitoo - Logo Designer
                  </ProjectSectionText>    
                  <ProjectSectionText>
                    2002: Edible Systems - Logo Designer
                  </ProjectSectionText>  
                  <ProjectSectionText>
                    2002: L Jalley & Co - Logo Designer
                  </ProjectSectionText>  
                  <ProjectSectionText>
                    2002: Supply Serve - Designer and Web Designer
                  </ProjectSectionText>                  
                  <ProjectSectionText>
                    2001: Nikkei NEEDS - Web Designer
                  </ProjectSectionText>                  
                  <ProjectSectionText>
                    2001: NHK Japan - Web Designer
                  </ProjectSectionText>   
                  <ProjectSectionText>
                    2000: Portobello Festival - Designer and Web Designer
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
                alt="Blackberry Example of new Homepage Showing Special Offer"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageVariousDesignImageOne}
                srcSet={`${imageVariousDesignImageOne} 1080w, ${imageVariousDesignImageOneLarge} 2160w`}
                placeholder={imageVariousDesignImageOnePlaceholder}
                width={260}
                height={660}
                alt="Cisco Example of new Homepage Showing Hero Component"
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
                alt="Collection of New Leaflet Designs For Financial Express and P.W. Finlayson"
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />              
              <Image
                className={styles.sidebarImage}
                src={imageVariousPrintImageOne}
                srcSet={`${imageVariousPrintImageOne} 1080w, ${imageVariousPrintImageOneLarge} 2160w`}
                placeholder={imageVariousPrintImageOnePlaceholder}
                width={260}
                height={660}
                alt="Collection of New Logo Designs"
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
