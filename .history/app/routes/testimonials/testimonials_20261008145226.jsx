

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

import imageBackgroundRowley from '~/assets/about-rmacklin-new.svg';
import imageLogoDebeers from '~/assets/logo-debeers.png';
import imageLogoAutosport from '~/assets/logo-autosport.png';
import imageLogoMulberry from '~/assets/logo-mulberry.png';
import imageLogoTkmaxx from '~/assets/logo-tkmaxx.png';
import imageLogoGucci from '~/assets/logo-gucci.png';
import imageLogoGoodyear from '~/assets/logo-goodyear.png';
import imageLogoSainsburys from '~/assets/logo-sainsburys.png';
import imageLogoEvalue from '~/assets/logo-evalue.png';
import imageLogoBlackberry from '~/assets/logo-blackberry.png';
import imageLogoRated from '~/assets/logo-rated.png';
import imageLogoCisco from '~/assets/logo-cisco.png';



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
  ProjectSectionColumnsTestimonials,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './testimonials.module.css';

const title = 'Testimonials';
const description =
  "I've been very fortunate to work for some fantastic clients and amazing people. lorem  ipsum";
const roles = [
  'DeBeers',
  'Autosport',
  'Mulberry',
  'Aviva',
  'Oasis Clothing',
  'TKMaxx',
  'Gucci',
  'Goodyear',  
  "Sainsbury's",
  'Barbour',
  'Dr Martens',
  'eValue',  
  'Blackberry',
  'M&G',
  'Man Group',
  'Financial Express', 
  'Dorset Cereals',
  'Peugeot',  
  "Kellogg’s",
  'Rated People',
  'Cisco Systems',
  'Nikkei',  
  'NHK',    
];

export const meta = () => {
  return baseMeta({ title, description });
};

export const Testimonials = ({ visible, titleId }) => {
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
          src={imageBackgroundRowley}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          className={styles.sectionTestimonialsRoles}
        />
        
        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials data-padding={0} className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  July 2026
                </span>      
                <h2>
                  Ozge Ozcan
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Business Analyst
                </span>
                <p className={styles.testimonialsMainDescr}>
                  He is a calm, kind, and knowledgeable person. He is one of the best teammates I ever worked with. He is a good listener; he listens to everyone and answers their questions and helps his teammates any time they need. Even if he has work to do, he stops and spends time with his team. He is very capable of what he is doing and this makes teams' life easier especially for PM, BA, and QA roles. I'd like to work with him in the future.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  June 2026
                </span>      
                <h2>
                  Prashant Vadher
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Senior Testing Engineer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley consistently delivers high-quality Amplience solutions with great attention to detail and scalability. He consistently demonstrates strong technical leadership, from designing effective content models to ensuring seamless integrations with frontend frameworks. He has deep platform knowledge, collaboration with clients, design and frontend teams, commitment to best practices, performance optimization, continuous improvement, and problem-solving skills that have greatly benefited our project.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  February 2026
                </span>      
                <h2>
                  Artem Zhuravlov
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Senior Software Engineer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley is a vital part of the project as the lead Amplience Frontend developer. He brings a wealth of experience and an open-minded attitude, always eager to engage in discussions and support his teammates while following best practices in his work. I'd like to work with him on further projects.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>


        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  January 2026
                </span>      
                <h2>
                  Mahesh Gurjal
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Testing Engineer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  I must say Rowley is one of the best colleagues I have worked with. He is a gem of a person. Rowley is a very talented developer and with his expertise he has always delivered great results, and he has shown an exceptional ability to resolve complex issues efficiently. He understands the requirements very well and raises the required queries, which are very important in order not to impact the existing system. Our client is very much impressed with Rowley's contributions to the team and for the most the important work, they rely on Rowley. Apart from technical skills, with his humble nature and impressive soft skills, he has managed to become a favorite member of our team. It's always been a very pleasant experience while having conversations with Rowley. He is a very good listener as well. From a QA perspective, we are really happy to work with a colleague like Rowley, as he resolves our queries very well. I would really like to continue this partnership of working with Rowley as long as it can be!
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  January 2026
                </span>      
                <h2>
                  Iryna Blotska
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Software Engineer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley is the longest-serving member of our project, and his experience and dedication are clear in everything he does. Sometimes it feels like without Rowley, our project simply wouldn't run as smoothly. He consistently delivers high-quality work in his responsibilities related to creating content pages. His expertise with Amplience and his strong frontend skills demonstrate just how well he knows his job. Rowley is always polite, approachable, and a true team player. He communicates well with everyone and is always ready to help whenever support is needed. Every day Rowley does an outstanding job, and I genuinely appreciate his ongoing commitment and positive attitude.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  January 2026
                </span>      
                <h2>
                  Shailesh Hatte
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Senior Software Engineer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley consistently provides high-quality solutions and takes full ownership from planning to release. His Amplience and frontend skills are deep, content is clear, and his troubleshooting skills are reliable, which helps keep projects on track. He is sincere and dependable, always meets deadlines, and communicates proactively with clients to set expectations and identify risks early. He collaborates well with the team, shares important context to help others move forward, and resolves issues quickly. He demonstrates strong ownership by flagging risks early, proposing workable alternatives, and collaborating smoothly across QA, dev, and PM.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoDebeers}
                srcSet={`${imageLogoDebeers} 480w, ${imageLogoDebeers} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  January 2026
                </span>      
                <h2>
                  Aleksandar Golubic
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Software Engineer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley has been a fantastic colleague for over two years. His expertise in frontend development is impressive, and he's always ready to tackle tasks beyond his usual role when necessary. He pays great attention to detail and consistently seeks the best solutions. Rowley is very client-focused and stands out for his calm and friendly demeanor, making him approachable for both casual conversations and in-depth technical discussions. His extensive experience equips him to handle any unexpected situation, question, or misunderstanding with ease.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>      

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoAutosport}
                srcSet={`${imageLogoAutosport} 480w, ${imageLogoAutosport} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  November 2020
                </span>      
                <h2>
                  Pradip Patel
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Lead UX/UI
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley is a consummate professional, always ready to help where he can and very adaptive to various types of projects. As a FE developer, you want someone you can discuss the designs with and potentially develop them with, and that person was Rowley. At the other end of the spectrum he was at hand to roll his sleeves up and help implement our new e-commerce funnel that had many limitations; he was able to adapt and push and bend the environment where he could to build the best possible experience.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>     

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoMulberry}
                srcSet={`${imageLogoMulberry} 480w, ${imageLogoMulberry} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  March 2018
                </span>      
                <h2>
                  Nick Bowman
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Technical Solutions Architect
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley has worked at Mulberry on several occasions over the last couple of years and each time he slotted right into the team and helped us to deliver the UI on a variety of different sized projects. His meticulous attention to detail, coupled with his zen-like personality, made for a great colleague each time Rowley worked for us. He has a great ability to work under his own steam and was able to get on with projects with little to no supervision - his knowledge of the Hybris platform and all of our systems that we use to develop on it meant that we were able to give the UI work over and know that Rowley would get straight on with it and present back in a timely fashion a quality of work that matched the brand.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section>     

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoTkmaxx}
                srcSet={`${imageLogoTkmaxx} 480w, ${imageLogoTkmaxx} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  July 2016
                </span>      
                <h2>
                  Julian Hatton
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Tech Lead
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley was the front-end practice lead on the project. He gives clear direction to his front end team and leads by example. Rowley is approachable and will go out of his way to help. He is also very good in a client-facing role; he has excellent communication skills, and you can be confident he's not going to say the wrong thing! I would enjoy working with Rowley again!
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section> 

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoGucci}
                srcSet={`${imageLogoGucci} 480w, ${imageLogoGucci} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  December 2015 2016
                </span>      
                <h2>
                  David Rushton
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Director of Service Delivery
                </span>
                <p className={styles.testimonialsMainDescr}>
                  Rowley is a very capable and experienced senior FE Developer. He led our thinking and approach on how we develop UI on a range of very high-profile retail eCommerce projects. I wouldn't hesitate to recommend Rowley and look forward to working with him again in the future
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section> 

        <section className={styles.sectionTestimonials}>
          <ProjectSectionColumnsTestimonials className={styles.sectionColumnsTestimonials}>
            <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={imageLogoGucci}
                srcSet={`${imageLogoGucci} 480w, ${imageLogoGucci} 960w`}
                width={200}
                height={200}
                background={('#ffffff')}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Me smiling like a goofball at the Qwilr office in Sydney"
              />
            </div>            
            <ProjectSectionContent className={styles.testimonialsSection}>
              <ProjectTextRow>
                <span>
                  December 2015 2016
                </span>      
                <h2>
                  Pasquale Campitiello
                </h2>
                <span className={styles.testimonialsJobDescr}>
                  Senior E-Commerce Application Developer
                </span>
                <p className={styles.testimonialsMainDescr}>
                  I worked with Rowley on an SAP Hybris B2C project (Gucci.com). He has a very long experience as a Front End Developer and it's great to work with him. He surely has ingenious web skills with an eye for detail. Rowley is innovative, very keen to discover new solutions and fresh ideas that can improve a project as a whole. Simplification and great Front End performance are always his main goals. All these qualities make him a great person to work with and an asset for the company.
                </p>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumnsTestimonials>
        </section> 







        


        {/* <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <svg
                width="141"
                height="43"
                viewBox="0 0 141 43"
                fill="currentColor"
                style={{ marginBottom: '2em' }}
              >
                <path d="M87.92 30.05a.3.3 0 0 0-.34-.18l-.04.02c-.42.08-.74.06-.97-.1-.32-.2-.47-.69-.47-1.47V21.3c0-2.75-1.66-4.14-4.94-4.14-2.93 0-5.23 1.37-5.23 3.12 0 .9.55 1.55 1.37 1.64a1.7 1.7 0 0 0 1.42-.56c.72-.75.63-1.64-.25-2.6a3.52 3.52 0 0 1 2.48-.85c1.7 0 2.43 1 2.43 3.33v1.78c-.4.12-.77.24-1.45.4a18.9 18.9 0 0 0-4.7 1.52 3.19 3.19 0 0 0-1.78 2.99c0 1.46.98 3.17 3.73 3.17 1.54 0 2.92-.72 4.33-2.26.12 1.6.74 2.2 2.24 2.2.72 0 1.3-.16 1.98-.49a.4.4 0 0 0 .2-.49Zm-4.54-2.15c-.33.46-1.42 1.83-2.78 1.83-1.84 0-2.23-1.27-2.23-2.34 0-1.75 1.37-2.57 5.01-3.46v3.97Zm35.23 3.25c-3.9 0-6.83-3-6.83-7 0-3.9 3.06-7.09 6.83-7.09 3.81 0 6.8 3.06 6.8 6.98 0 4.4-3.53 7.11-6.8 7.11Zm-.15-13.34c-1.68 0-3.61.72-3.61 6.28 0 4.25 1.27 6.31 3.88 6.31 2.5 0 3.61-1.94 3.61-6.3 0-4.23-1.27-6.29-3.88-6.29Zm-60.06-.5c0 3.24-.8 5.02-4.94 5.02h-2.2v-9.78h2.29c4.28 0 4.85 2.4 4.85 4.76Zm-7.14 11.01v-5.09h1.99c2.96 0 5.22-.61 6.7-1.83a5.06 5.06 0 0 0 1.88-4.03c0-4.65-4.55-5.63-8.37-5.63h.01-7.74a.32.32 0 0 0-.32.31v.03-.01c0 .16.1.3.25.36.69.25 2.56-.1 2.56 1.88v14.01c0 1.02-.46 1.74-2.55 1.94a.31.31 0 0 0-.3.3v.06c0 .17.15.3.33.3h8.27c.18 0 .32-.13.32-.3v-.05a.3.3 0 0 0-.3-.3c-2.27-.19-2.73-.88-2.73-1.95v-5.08 5.08ZM68.1 17.06c-3.6 0-6.53 3.21-6.53 7.17 0 4 2.75 6.9 6.53 6.9 3.18 0 4.73-1.87 5.62-3.28a.31.31 0 0 0-.09-.42l-.04-.03a.32.32 0 0 0-.44.07c-1.17 1.44-2.19 2.28-3.96 2.28-2.23 0-4.62-1.52-4.62-5.79v-.71h9.15c.03 0 .05-.02.05-.05v-.07a5.72 5.72 0 0 0-1.4-4.42 5.67 5.67 0 0 0-4.27-1.65Zm-3.47 5.29c.3-2.92 1.45-4.52 3.26-4.52.91 0 1.58.25 2.06.76.65.7.93 1.96.82 3.76h-6.14Zm41.39.15c-2.5-.69-3.48-1.39-3.48-2.5 0-1.26 1.01-2.17 2.4-2.17 1.65 0 2.36.77 4.1 3.64l.01.03.03.03h.25c.18 0 .32-.14.32-.32v-4.1c0-.03-.02-.05-.02-.05h-.34c-.1 0-.19.04-.25.11l-.55.66a6.64 6.64 0 0 0-2.98-.77c-2.87 0-4.88 1.75-4.88 4.25 0 2.36 1.58 3.24 4.31 3.97 2.66.71 3.6 1.46 3.6 2.85 0 1.54-1.51 2.23-2.59 2.23-2 0-2.84-.73-4.76-4.13l-.02-.04-.02-.02h-.26a.32.32 0 0 0-.32.31v4.6c0 .03.02.06.05.06h.32c.09 0 .17-.04.23-.1l.87-.86c1.03.63 2.56.96 3.56.96 1.5 0 2.72-.47 3.55-1.36a4.54 4.54 0 0 0 1.15-3.14c0-2.14-1.16-3.26-4.28-4.14Zm-15.14 6.78c0 .7-.18.94-1.33 1.01a.32.32 0 0 0-.3.31c0 .18.15.31.32.31h5.66a.3.3 0 0 0 .31-.3c0-.17-.13-.3-.3-.31-1.3-.07-1.65-.28-1.65-1.02v-8.2c.94-1.52 1.6-2.32 2.74-2.56-.06.2-.1.42-.1.6 0 1 .7 1.7 1.72 1.7.99 0 1.68-.7 1.68-1.7 0-.93-.6-2.03-2.28-2.03-1.37 0-2.69.78-3.82 2.64v-2.1a.39.39 0 0 0-.4-.39l-3.56.1a.3.3 0 0 0-.3.3v.05c0 .16.1.3.26.31 1.19.17 1.35.73 1.35 1.3v9.98Zm39.15-12.05c.08 0 .16.04.22.1.06.05.1.13.1.22v2.33s1.17-2.74 4.94-2.74h.04c2.35 0 3.7 1.48 3.7 4.06v8.06c0 .71.18.95 1.32 1.02.17 0 .3.14.3.31 0 .17-.14.31-.32.31h-5.08a.32.32 0 0 1-.03-.63c.92-.08 1.07-.3 1.07-1v-7.29c0-2.4-.7-3.33-2.47-3.33-1.2 0-2.19 1.03-2.8 1.9 0 0-.31.38-.65 1.12l.03 7.6c0 .7.15.92 1.05 1a.32.32 0 0 1-.03.63h-5.06a.32.32 0 0 1-.31-.31c0-.17.13-.3.3-.31 1.14-.08 1.32-.3 1.32-1.02v-9.95c0-.58-.16-1.14-1.36-1.31a.31.31 0 0 1-.26-.31v-.05c0-.17.13-.3.3-.31l3.68-.1Z" />
                <path
                  fillRule="evenodd"
                  d="M35.47 30.82c6.24-11.43 4.15-22.73-4.81-27.77C20.76-2.5 7.84.52 2.28 12.46c-3.84 8.2-2.1 22.48 6.82 27.6 8.92 5.1 20.9.81 26.37-9.23Zm-3.02-12.15c.3-2.3-.24-5.1-2-6.95l-.02-.02c-3.38-3.76-8.06-4-11.02-3.92a16.61 16.61 0 0 0-7.55 2.14c-1.68.86-3.2 2.35-3.81 3.08-.4.47-1.06 1.44-.7 2.31.29.73 1.4.68 1.81.37.22-.16.45-.37.7-.6l.72-.64c2.53-2.07 4.78-3.37 10-3.37 5.23 0 8.06 3.22 8.06 6.09 0 2.87-1.38 4.82-3.97 6.09a10.54 10.54 0 0 1-4.4 1.18c.13-2.78.2-5.41.2-5.41 0-.33.02-.65.03-.96.07-1.55.12-2.72-1.01-2.94-1.36-.27-3.86 0-3.9 1.52-.06-.23.25 12.51.31 12.77l.02.29c.03.32.15.6.35.83a1.38 1.38 0 0 0 .98.41c.28 0 .68-.05 1.09-.16.5-.15 1.02-.39 1.31-.77.15-.2.27-.38.34-.72.04-.24.13-1.72.15-2.15 2.75-.02 5.54-.53 7.67-1.8 2.68-1.62 4.29-4.04 4.64-6.67ZM18.23 32.41a2.12 2.12 0 0 1 1.69 1.99c0 .52-.22.99-.63 1.32-.35.28-.8.43-1.3.43h-.01c-.23 0-.46-.03-.69-.1-.39-.1-.7-.29-.9-.52-.19-.22-.31-.5-.37-.83-.08-.5.05-1.04.36-1.48a1.9 1.9 0 0 1 1.53-.84c.1 0 .22 0 .32.03Z"
                />
              </svg>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Ultimately the project was successful after Smart Sparrow and the aero
                platform were{' '}
                <Link href="https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html">
                  acquired by Pearson in 2020
                </Link>{' '}
                to become a foundation for their next generation learning platform.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </>
  );
};
