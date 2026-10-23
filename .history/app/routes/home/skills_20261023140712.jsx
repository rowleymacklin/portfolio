import profileImgLarge from '~/assets/image-info-rmacklin.png';
import profileImgPlaceholder from '~/assets/image-info-rmacklin.png';
import profileImg from '~/assets/image-info-rmacklin.png';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import textDecorationProfile from '~/assets/image-text-decoration-info.svg';
import styles from './skills.module.css';

const SkillsText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Skills" start={visible} delay={500} />
    </Heading>
    <div className={styles['skills-list-grid']} data-visible={visible}>
      <div className={styles['skills-list-grid__col']} data-visible={visible} size="m" as="p">
        <Heading className={styles.title} data-visible={visible} level={5} id={titleId}>
          Hard Skills
        </Heading>      
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Comfort Zone
        </Heading>   
        <List>
          <ListItem>
            CSS (SCSS/SASS)
          </ListItem>
          <ListItem>
            HTML
          </ListItem>
          <ListItem>
            Responsive Design
          </ListItem>   
          <ListItem>
            JSON Data
          </ListItem>
          <ListItem>
            Accessible Code/Guidelines
          </ListItem>
          <ListItem>
            Web Performance Optimization
          </ListItem>  
          <ListItem>
            Testing & Debugging
          </ListItem>
          <ListItem>
            UI/ UX Design Principles
          </ListItem>
          <ListItem>
            Design Patterns & Principles
          </ListItem>    
          <ListItem>
            Media Compression & Optimization
          </ListItem>                 
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Competent
        </Heading>   
        <List>
          <ListItem>
            JavaScript
          </ListItem>
          <ListItem>
            jQuery
          </ListItem>     
          <ListItem>
            Handlebars Templates
          </ListItem>        
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Basics
        </Heading>   
        <List>
          <ListItem>
            React
          </ListItem>
          <ListItem>
            NextJS
          </ListItem>   
        </List>
      </div>

      <div className={styles['skills-list-grid__col']} data-visible={visible} size="m" as="p">
        <Heading className={styles.title} data-visible={visible} level={5} id={titleId}>
          Tools
        </Heading>      
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Comfort Zone
        </Heading>   
        <List>
          <ListItem>
            Amplience CMS
          </ListItem>
          <ListItem>
            Visual Studio Code
          </ListItem>
          <ListItem>
            CMS Content Editing & Development
          </ListItem>
          <ListItem>
            Bootstrap CSS
          </ListItem>
          <ListItem>
            Git
          </ListItem>
          <ListItem>
            Azure Devops
          </ListItem>   
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Competent
        </Heading>   
        <List>
          <ListItem>
            Salesforce
          </ListItem>
          <ListItem>
            Figma
          </ListItem>
          <ListItem>
            Gulp
          </ListItem>
          <ListItem>
            GSAP
          </ListItem>   
          <ListItem>
            Tailwind CSS
          </ListItem>
          <ListItem>
            Foundation CSS
          </ListItem>    
          <ListItem>
            Generative AI Fundamentals
          </ListItem>   
          <ListItem>
            Sublime
          </ListItem>                          
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Basics
        </Heading>   
        <List>
          <ListItem>
            Piano Digital Business Platform
          </ListItem>
          <ListItem>
            Shopify
          </ListItem>
          <ListItem>
            BigCommerce
          </ListItem>  
          <ListItem>
            Grunt
          </ListItem>
          <ListItem>
            Zeplin
          </ListItem>    
          <ListItem>
            Confluence
          </ListItem>
          <ListItem>
            Jira
          </ListItem>  
          <ListItem>
            Hybris (Now SAP Hybris)
          </ListItem>  
          <ListItem>
            Photoshop
          </ListItem>
          <ListItem>
            Illustrator
          </ListItem>                            
        </List>
      </div>
      <div className={styles['skills-list-grid__col']} data-visible={visible} size="m" as="p">
        <Heading className={styles.title} data-visible={visible} level={5} id={titleId}>
          Soft Skills
        </Heading>      
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Comfort Zone
        </Heading>   
        <List>
          <ListItem>
            Tea making
          </ListItem>
          <ListItem>
            Attention to detail
          </ListItem>
          <ListItem>
            Communication
          </ListItem>
          <ListItem>
            Diplomacy
          </ListItem>
          <ListItem>
            Designs/ Code Audits
          </ListItem>
          <ListItem>
            User-Centric Empathy
          </ListItem>
          <ListItem>
            Adaptability
          </ListItem>
          <ListItem>
            Mentoring
          </ListItem>
          <ListItem>
            Creative thinking
          </ListItem>
          <ListItem>
            Accessibility Fundamentals
          </ListItem>
          <ListItem>
            Agile/Scrum
          </ListItem>
          <ListItem>
            Time Management
          </ListItem>
          <ListItem>
            Problem-solving
          </ListItem>
          <ListItem>
            Client meetings
          </ListItem>
          <ListItem>
            Client Relationship Management
          </ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Competent
        </Heading>   
        <List>
          <ListItem>
            Usability Fundamentals
          </ListItem>          
          <ListItem>
            German Speaking
          </ListItem>    
          <ListItem>
            Team Management
          </ListItem>          
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Basics
        </Heading>   
        <List>
          <ListItem>
            Typography Principles
          </ListItem>
          <ListItem>
            Colour Theory
          </ListItem> 
        </List>
      </div>
    </div>
    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      Comfort Zone = 10+ years and day-to-day use <br></br>Competent = 5+ years and sporadic use<br></br>Basics = Rarely used but have some experience and understanding
<br></br>
      Comfort Zone = 10+ years | Competent = 5+ years | Basics = Some use
    </Text>

  </Fragment>



);

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles['skills-list-grid__one-col-grid']} ref={nodeRef}>
            <div className={styles['skills-list-grid__one-col-grid-content']}>
              <SkillsText visible={visible} titleId={titleId} />
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
