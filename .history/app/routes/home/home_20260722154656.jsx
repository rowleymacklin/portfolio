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

import workDebeersPlaceholder from '~/assets/work-debeers-home-large.jpg';
import workDebeersMedium from '~/assets/work-debeers-home-large.jpg';
import workDebeersLarge from '~/assets/work-debeers-home-large.jpg';

import workAutosportPlaceholder from '~/assets/work-autosport-large.jpg';
import workAutosportMedium from '~/assets/work-autosport-large.jpg';
import workAutosportLarge from '~/assets/work-autosport-large.jpg';


import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Image } from '~/components/image';
import { useEffect, useRef, useState } from 'react';
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
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();  
  const projectFive = useRef();  
  const projectSix = useRef();  
  const projectSeven = useRef();     
  const projectEight = useRef();
  const projectNine = useRef();  
  const projectTen = useRef();  
  const projectEleven = useRef();  
  const projectTwelve = useRef();  

  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, projectEleven, projectTwelve, details];

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
      {/* <ProjectSummary
        id="project-12"
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectTwelve.current)}
        index={1}
        title="Debeers Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Debeers',
          textures: [
            {
              srcSet: `${workDebeersMedium} 1280w, ${workDebeersLarge} 2560w`,
              placeholder: workDebeersPlaceholder,
            },
          ],
        }}
      /> */}
          
      {/* <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={2}
        title="Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-22"
        alternate
        sectionRef={projectTwentyTwo}
        visible={visibleSections.includes(projectTwentyTwo.current)}
        index={3}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://gamestack.rowleymacklin.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      /> */}
      <ProjectSummary
        id="project-12"
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectTwelve.current)}
        index={1}
        title="De Beers"
        projectDate="May 2021 - Jul 2026"
        projectJobTitle="Lead Frontend developer"        
        description="Primary tasks: Creating responsive, accessible, usable components for campaigns and adding them to the Amplience CMS environment. I also worked on a lot of code optimization locally and within Amplience, introducing Atomic Components to improve content team's workflow, introducing high media compression (image and video) for page performance as well as numerous other tasks."
        buttonText="View project"
        buttonLink="/projects/slice"
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
        id="project-11"
        sectionRef={projectEleven}
        visible={visibleSections.includes(projectEleven.current)}
        index={2}
        title="Autosport"
        projectDate="Mar 2019 - Dec 2020"
        projectJobTitle="Frontend developer"        
        description="Initial primary task: Learn the new Piano content experience platform, and help integrate existing content and code into the system. Basically, I had to hit the road running as I'd never used Piano before. After three weeks of intense study and learning the hard way I was up and running.  Other major tasks: I created four powerlist microsites for F1 drivers, awards and power people in the industry."
        buttonText="View project"
        buttonLink="/projects/slice"
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
        id="project-10"
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={3}
        title="Mulberry"
        projectDate="Sept 2016 - Dec 2018"
        projectJobTitle="Frontend developer"        
        description="Initial primary task: Learn the Amplience CMS, and create a new codebase to add to Amplience. Again, I had to hit the road running as I'd never used Amplience before. After a few weeks of intense study and learning the hard way I was up and running. Other major tasks: I created microsites for the annual Korean fashion show: Eccentric Sensibility Korea Fashion Show"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={4}
        title="Aviva Investors"
        projectDate="September 2016"
        projectJobTitle="Frontend developer"        
        description="Microsite: Convert the desktop version of Chinese Economy to a responsive, mobile-first site | Daily global bug fixes and tweaks and regular content updates"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={5}
        title="Oasis Clothing"
        projectDate="August 2016"
        projectJobTitle="Frontend developer"        
        description="Create responsive components and localised content within demandware | Bug fixing the current live site"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={6}
        title="TKMaxx"
        projectDate="Jan 2016 - Jul 2016"
        projectJobTitle="Lead frontend developer"        
        description="Get new front end environment up and running within Hybris, using gulp and git | Co-ordinate front end team tasks and workload in Jira and daily scrums/ stand ups and write a front end best practices document | Create new Hybris components"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={7}
        title="Gucci"
        projectDate="Aug 2014 - Dec 2015"
        projectJobTitle="Lead frontend developer"        
        description="Create new Hybris components | Review the static code base (provided by a design agency), clean it up and merge it into Gucci’s new Hybris system | Co-ordinate front end team tasks and workload in Jira and daily scrums/ standups | Bug fixing the current live site"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />       
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={8}
        title="Goodyear"
        projectDate="Feb 2014 - Aug 2014"
        projectJobTitle="Frontend developer"        
        description="Create new Hybris components | Review the static code base (provided by a design agency based in Costa Rica), clean it up and merge it into Goodyear’s new Hybris system | Assist the on-site Boston team with Hybris integration | Bug fixing the current live site"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />        
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={9}
        title="Sainsbury's Tu"
        projectDate="Dec 2013 - Feb 2014"
        projectJobTitle="Frontend developer"        
        description="Create and style new Hybris forms and hero components | Bug fixing the current live site"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />  
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={10}
        title="Barbour"
        projectDate="Nov 2013 - Dec 2013"
        projectJobTitle="Frontend developer"        
        description="Pre-production bug fixing (Last 2 sprints)"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />         
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectOne.current)}
        index={11}
        title="Dr Marten's"
        projectDate="Jan 2013 - Nov 2013"
        projectJobTitle="Designer | Lead front end developer"        
        description="Create new designs based on wireframes | Create semantic code based on the designs within Hybris & bug fixing"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />      
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={12}
        title="Various"
        projectDate="Renaissance - Nov 2012"
        projectJobTitle="Web designer | Web analyst | Front end developer"        
        description="Various: web design, web analyst, frontend, print and logo work"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
