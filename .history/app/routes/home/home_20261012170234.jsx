import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';

import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';

import workDebeersPlaceholder from '~/assets/work-debeers-home-large.jpg';
import workDebeersMedium from '~/assets/work-debeers-home-large.jpg';
import workDebeersLarge from '~/assets/work-debeers-home-large.jpg';

import workAutosportPlaceholder from '~/assets/work-autosport-large.jpg';
import workAutosportMedium from '~/assets/work-autosport-large.jpg';
import workAutosportLarge from '~/assets/work-autosport-large.jpg';

import workMulberryPlaceholder from '~/assets/work-mulberry-home-large.jpg';
import workMulberryMedium from '~/assets/work-mulberry-home-large.jpg';
import workMulberryLarge from '~/assets/work-mulberry-home-large.jpg';

import workAvivaPlaceholder from '~/assets/work-aviva-home-large.jpg';
import workAvivaMedium from '~/assets/work-aviva-home-large.jpg';
import workAvivaLarge from '~/assets/work-aviva-home-large.jpg';

import workOasisPlaceholder from '~/assets/work-oasis-home-large.jpg';
import workOasisMedium from '~/assets/work-oasis-home-large.jpg';
import workOasisLarge from '~/assets/work-oasis-home-large.jpg';

import workTkmaxxPlaceholder from '~/assets/work-tkmaxx-home-large.jpg';
import workTkmaxxMedium from '~/assets/work-tkmaxx-home-large.jpg';
import workTkmaxxLarge from '~/assets/work-tkmaxx-home-large.jpg';

import workGucciPlaceholder from '~/assets/work-gucci-home-large.jpg';
import workGucciMedium from '~/assets/work-gucci-home-large.jpg';
import workGucciLarge from '~/assets/work-gucci-home-large.jpg';

import workGoodyearPlaceholder from '~/assets/work-goodyear-home-large.jpg';
import workGoodyearMedium from '~/assets/work-goodyear-home-large.jpg';
import workGoodyearLarge from '~/assets/work-goodyear-home-large.jpg';

import workSainsburysPlaceholder from '~/assets/work-sainsburys-home-large.jpg';
import workSainsburysMedium from '~/assets/work-sainsburys-home-large.jpg';
import workSainsburysLarge from '~/assets/work-sainsburys-home-large.jpg';

import workBarbourPlaceholder from '~/assets/work-barbour-home-large.jpg';
import workBarbourMedium from '~/assets/work-barbour-home-large.jpg';
import workBarbourLarge from '~/assets/work-barbour-home-large.jpg';

import workdrmartensPlaceholder from '~/assets/work-drmartens-home-large.jpg';
import workdrmartensMedium from '~/assets/work-drmartens-home-large.jpg';
import workdrmartensLarge from '~/assets/work-drmartens-home-large.jpg';

import workVariousPlaceholder from '~/assets/work-various-home-large.jpg';
import workVariousMedium from '~/assets/work-various-home-large.jpg';
import workVariousLarge from '~/assets/work-various-home-large.jpg';


import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { Skills } from './skills';
import { ProjectSummary } from './project-summary';
import { Image } from '~/components/image';
import { Button } from '~/components/button';
import { useEffect, useRef, useState } from 'react';
import { media } from '~/utils/style';
import { useScrollToHash, useWindowSize } from '~/hooks';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const Debeers = useRef();   
  const Autosport = useRef(); 
  const Mulberry = useRef(); 
  const Tkmaxx = useRef();  
  const Gucci = useRef(); 
  const Goodyear = useRef(); 
  const Sainsburys = useRef();   
  const Barbour = useRef(); 
  const Drmartens = useRef();  
  const Various = useRef();
  const details = useRef();
  const skills = useRef();

  useEffect(() => {
    const sections = [intro, Debeers, Autosport, Mulberry, Tkmaxx, Gucci, Goodyear, Sainsburys, Barbour, Drmartens, Various];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="Debeers"
        sectionRef={Debeers}
        visible={visibleSections.includes(Debeers.current)}
        index={1}
        title="De Beers"
        projectDate="May 2021 - Jul 2026"
        projectJobTitle="Lead Frontend developer"   
        description="Primary tasks: Creating responsive, accessible, usable components for campaigns and adding them to the Amplience CMS environment. I also worked on a lot of code optimization locally and within Amplience, introducing Atomic Components to improve content team's workflow."
        descriptionTwo="Proudest of: Optimizing global media by introducing high media compression (image and video) for page performance as well as numerous other tasks. Most image and video file sizes reduced by 45%." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Media Compression & Optimization | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | Accessible Code/Guidelines | JSON Data | Handlebars Templates | jQuery | JavaScript | Amplience CMS | Bootstrap CSS | Git | CMS Content Editing & Development | Azure Devops | Salesforce | Generative AI Fundamentals | Gulp | Figma | GSAP | Design Patterns & Principles | Problem-solving | Client meetings"
        buttonText="View project"
        buttonLink="/projects/debeers"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workDebeersMedium} 800w, ${workDebeersLarge} 1920w`,
              placeholder: workDebeersPlaceholder,
            },
          ],
        }}
        
      /> 

      <ProjectSummary
        id="Autosport"
        sectionRef={Autosport}
        visible={visibleSections.includes(Autosport.current)}
        index={2}
        title="Autosport"
        projectDate="Mar 2019 - Feb 2021"
        projectJobTitle="Frontend developer"        
        description="Primary tasks: Setup and integrated new components to use the new digital experience platform; Piano content experience platform. Also worked on multiple microsites and existing component re-styling."
        descriptionTwo="Proudest of: Learning the Piano content experience platform at pace and implementing styling and layout changes within Piano for the content team" 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | jQuery | JavaScript | Git | CMS Content Editing & Development | Gulp | Zeplin | Photoshop | Piano DXP | AMP (Accelerated Mobile Pages) | Attention to Detail | Adaptability | Time Management | Problem Solving | Client Meetings"
        buttonText="View project"
        buttonLink="/projects/autosport"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workAutosportMedium} 800w, ${workAutosportLarge} 1920w`,
              placeholder: workAutosportPlaceholder,
            },
          ],
        }}
      />  
      <ProjectSummary
        id="Mulberry"
        sectionRef={Mulberry}
        visible={visibleSections.includes(Mulberry.current)}
        index={3}
        title="Mulberry"
        projectDate="Sept 2016 - Dec 2018"
        projectJobTitle="Frontend developer"      
        description="Primary tasks: Set up and integrate all existing and new components for Amplience usage. There was also a lot of work on Microsites for Fashion Week."
        descriptionTwo="Proudest of: Learning Amplience CMS at pace and creating a new codebase to add to Amplience. I had to hit the road running as I'd never used Amplience before." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Media Compression & Optimization | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | JSON Data | Handlebars Templates | jQuery | JavaScript | Amplience CMS | Bootstrap CSS | CMS Content Editing & Development | Figma | Problem-solving | Client meetings"
        buttonText="View project"
        buttonLink="/projects/mulberry"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workMulberryMedium} 800w, ${workMulberryLarge} 1920w`,
              placeholder: workMulberryPlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="Tkmaxx"
        sectionRef={Tkmaxx}
        visible={visibleSections.includes(Tkmaxx.current)}
        index={6}
        title="TKMaxx"
        projectDate="Jan 2016 - Jul 2016"
        projectJobTitle="Lead Frontend Developer"        
        description="Primary tasks: TKMaxx were refreshing their global site to a new Hybris environment. My main role was to setup the front end environment, lead the front end team and create some of the new components. As well as advise various in-house teams on integration and running Hybris."
        descriptionTwo="Proudest of: For discovery phase and sprint 1 I had to set up the front end environment using Gulp as the task runner and Git as version control within Hybris Accelerator. This was my first time to set everything up myself. A daunting, but enjoyable task." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | JSON Data | Handlebars Templates | jQuery | JavaScript | Hybris (Now SAP Hybris) | Bootstrap CSS | CMS Content Editing & Development | Figma | Problem-solving | Client meetings"
        buttonText="View project"
        buttonLink="/projects/tkmaxx"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workTkmaxxMedium} 800w, ${workTkmaxxLarge} 1920w`,
              placeholder: workTkmaxxPlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="Gucci"
        sectionRef={Gucci}
        visible={visibleSections.includes(Gucci.current)}
        index={7}
        title="Gucci"
        projectDate="Aug 2014 - Dec 2015"
        projectJobTitle="Lead Frontend Developer"        
        description="Primary tasks: Gucci were switching their global site over to a new Hybris environment. My main role was to review the static code provided by the Gucci in-house designers and developers. Then convert them to Hybris working code."
        descriptionTwo="Proudest of: Optimizing the provided code for efficiency and also for compatability within Hybris. And as a bonus the whole site went live slightly earlier than expected." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | JSP | TAG Files | jQuery | JavaScript | Hybris (Now SAP Hybris) | Bootstrap CSS | CMS Content Editing & Development | Figma | Problem-solving | Client meetings | Diplomacy | Adaptability | Mentoring | Agile | Code Audits"
        buttonText="View project"
        buttonLink="/projects/gucci"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workGucciMedium} 800w, ${workGucciLarge} 1920w`,
              placeholder: workGucciPlaceholder,
            },
          ],
        }}
      />       
      <ProjectSummary
        id="Goodyear"
        sectionRef={Goodyear}
        visible={visibleSections.includes(Goodyear.current)}
        index={8}
        title="Goodyear"
        projectDate="Feb 2014 - Aug 2014"
        projectJobTitle="Frontend Developer"        
        description="Primary tasks: Goodyear were switching their global site over to a new Hybris environment. My main role was to review the static code provided by off-shore designers and developers in Costa Rica. Then I integrated the code within Hybris."
        descriptionTwo="Proudest of: Optimizing the provided code for efficiency. Helping to train all departments in how to work with Hybris Accelerator. And of course, surviving the arctic conditions of mid-Winter Boston." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Web Performance Optimization | Testing & Debugging | jQuery | JavaScript | Hybris (Now SAP Hybris) | JSP | TAG Files | Bootstrap CSS | CMS Content Editing & Development | Problem-solving | Client meetings | Diplomacy | Adaptability | Mentoring | Agile | Code Audits"
        buttonText="View project"
        buttonLink="/projects/goodyear"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workGoodyearMedium} 800w, ${workGoodyearLarge} 1920w`,
              placeholder: workGoodyearPlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="Sainsburys"
        sectionRef={Sainsburys}
        visible={visibleSections.includes(Sainsburys.current)}
        index={9}
        title="Sainsbury's Tu"
        projectDate="Dec 2013 - Feb 2014"
        projectJobTitle="Frontend Developer"        
        description="Primary tasks: I came onboard this project mid-sprint. My main focus for the three sprints was form data. I worked on most of the Sainsbury's Tu forms."
        descriptionTwo="Proudest of: Producing very functional forms perfectly matching designs and vision." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Testing & Debugging | jQuery | JavaScript | Hybris (Now SAP Hybris) | JSP | TAG Files | Bootstrap CSS | CMS Content Editing & Development | Problem-solving | Client meetings |  Agile"
        buttonText="View project"
        buttonLink="/projects/sainsburys"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workSainsburysMedium} 800w, ${workSainsburysLarge} 1920w`,
              placeholder: workSainsburysPlaceholder,
            },
          ],
        }}
      />  
      <ProjectSummary
        id="Barbour"
        sectionRef={Barbour}
        visible={visibleSections.includes(Barbour.current)}
        index={10}
        title="Barbour"
        projectDate="Nov 2013 - Dec 2013"
        projectJobTitle="Frontend Developer"        
        description="Primary tasks: I was brought onto this project purely for go-live bug fixing within Hybris."
        descriptionTwo="Proudest of: Hitting the ground running understanding the project and codebase and fixing many varied bugs: functional, styling, accessbility and optimisation." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Testing & Debugging | jQuery | JavaScript | Hybris (Now SAP Hybris) | JSP | TAG Files | Bootstrap CSS | CMS Content Editing & Development | Problem-solving | Client meetings |  Agile"
        buttonText="View project"
        buttonLink="/projects/barbour"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workBarbourMedium} 800w, ${workBarbourLarge} 1920w`,
              placeholder: workBarbourPlaceholder,
            },
          ],
        }}
      />         
      <ProjectSummary
        id="Drmartens"
        sectionRef={Drmartens}
        visible={visibleSections.includes(Drmartens.current)}
        index={11}
        title="Dr Marten's"
        projectDate="May 2013 - Oct 2013"
        projectJobTitle="Designer | Lead Frontend Developer"        
        description="Primary tasks: Create new wireframes and designs based on notes and requirements from the client. These were then converted to code directly within Hybris."
        descriptionTwo="Proudest of: The designs came out really well and was appreciated by the client: focussing on the black and yellows colour theme and large, over-bold text to represent the strangth of Dr Martens footwear. Ultimately the whole project was released to production on time." 
        skills="CSS (SCSS/SASS) | HTML | Responsive Design | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | JSP | TAG Files | jQuery | JavaScript | Hybris (Now SAP Hybris) | Bootstrap CSS | CMS Content Editing & Development | Figma | Problem-solving | Client meetings | Diplomacy | Adaptability | Mentoring | Agile | Photoshop | Illustrator"
        buttonText="View project"
        buttonLink="/projects/drmartens"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workdrmartensMedium} 800w, ${workdrmartensLarge} 1920w`,
              placeholder: workdrmartensPlaceholder,
            },
          ],
        }}
      />      
      <ProjectSummary
        id="Various"
        sectionRef={Various}
        visible={visibleSections.includes(Various.current)}
        index={12}
        title="Various"
        projectDate="Jan 2000 - Apr 2013"
        projectJobTitle="Designer | Web Designer | Web Analyst | Frontend Developer"        
        description="Primary tasks: These ranged from logo designs to corporate web analysis."
        descriptionTwo="Proudest of: Working at Cisco Systems was probaly the most impactful role I've ever had, as I learned a whole set of new skillsets. This ranged from meetings etiquette to managing a team of remote developers, as well as real world frontend development within a very large corporation. The work here set me up until now. Also, in hindshight it was interesting creating vanilla CSS without the use of SCSS/ SASS or preprocessors, as this was before SASS they were introduced globally." 
        skills="CSS | HTML | Responsive Design | Web Performance Optimization | Testing & Debugging | UI/ UX Design Principles | Problem-solving | Client meetings | Client Relationship Management | Diplomacy | Adaptability | Mentoring | Agile | Photoshop | ImageReady | Illustrator | Typography Principles | Colour Theory"
        buttonText="View project"
        buttonLink="/projects/various"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${workVariousMedium} 800w, ${workVariousLarge} 1920w`,
              placeholder: workVariousPlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Skills
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
      />      
      <Footer />
    </div>
  );
};
