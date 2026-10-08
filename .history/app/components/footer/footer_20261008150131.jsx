import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { Image } from '~/components/image';
import { Heading } from '~/components/heading';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';
import { media } from '~/utils/style';

import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

import profileImgLarge from '~/assets/book-cover.jpg';
import profileImgPlaceholder from '~/assets/book-cover.jpg';
import profileImg from '~/assets/book-cover.jpg';

import { ThemeProvider, useTheme } from '~/components/theme-provider';

export const Footer = ({ className }) => (
  // <footer className={classes(styles.footer, className)}>
  //   <Text size="s" align="center">
  //     <span className={styles.date}>
  //       My portfolio iterations through the ages:
  //     </span>
  //     <Link secondary className={styles.link} href="/humans.txt" target="_self">
  //       2004
  //     </Link>
  //     |
  //     <Link secondary className={styles.link} href="/humans.txt" target="_self">
  //       2013
  //     </Link>   
  //     |
  //     <Link secondary className={styles.link} href="/humans.txt" target="_self">
  //       2016
  //     </Link>
  //     |
  //     <Link secondary className={styles.link} href="/humans.txt" target="_self">
  //       2018
  //     </Link>  
  //     |
  //     <Link secondary className={styles.link} href="/humans.txt" target="_self">
  //       2022
  //     </Link>                       
  //   </Text>
  //   <Text size="s" align="center">
  //     <span className={styles.date}>
  //       {`© ${new Date().getFullYear()} ${config.name}.`}
  //     </span>
  //     <Link secondary className={styles.link} href="/humans.txt" target="_self">
  //       Crafted by yours truly
  //     </Link>
  //   </Text>
  // </footer>
  
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



  
);

