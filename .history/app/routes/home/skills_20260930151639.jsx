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
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
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
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>          
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Competent
        </Heading>   
        <List>
          <ListItem>
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Basics
        </Heading>   
        <List>
          <ListItem>
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
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
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Competent
        </Heading>   
        <List>
          <ListItem>
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Basics
        </Heading>   
        <List>
          <ListItem>
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
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
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Competent
        </Heading>   
        <List>
          <ListItem>
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={6} id={titleId}>
          Basics
        </Heading>   
        <List>
          <ListItem>
            UI design 
          </ListItem>
          <ListItem>
            Any motion graphics I
          </ListItem>
          <ListItem>
            Max or Maya.
          </ListItem>
        </List>
      </div>
    </div>
    <Text className={styles.description} data-visible={visible} size="xs" as="p">
      Comfort Zone = 10+ years and day-to-day use | Competent = 5+ years and sporadic use | Basics = Rarely used but have some experience and understanding

    </Text>

  </Fragment>



);

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
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
              <ProfileText visible={visible} titleId={titleId} />
            </div>
            <div>
              <div className={styles.tag} aria-hidden>
                <Divider
                  collapsed={!visible}
                  collapseDelay={1000}
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
