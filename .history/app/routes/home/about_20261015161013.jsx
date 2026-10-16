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
import textDecorationAbout from '~/assets/image-text-decoration-profile.svg';
import styles from './about.module.css';

const AboutText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={2} id={titleId}>
      <DecoderText text="About Me" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hello! I'm Rowley, a frontend developer and I like building accessible, pixel-perfect experiences for the web. I take pride in having a sharp eye for the little details that separate a good product from an exceptional one. I really enjoy working where design meets engineering, where great user experience meets clean, scalable code.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      One of the many things I love about the work I do is constantly learning. No two projects are the same and I take a pragmatic approach to each job I take on, focussing on delivering code that is as accessible and optimized as possible.
    </Text>    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my last role at DeBeers, I was Lead Frontend Developer where I worked on creating new, accessible components and implementing them within the Amplience CMS. I lead engineering efforts across our component library and CMS platform, partnering closely with designers, the frontend team, BA, Business and QA.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time you can usually find me hanging out with my wife and two children, going to the gym, reading, watching great and terrible films, researching music history or flying around Azeroth in search of rare quests and herbs.
    </Text> 
    <Heading className={styles.title} data-visible={visible} level={4} id={titleId}>
      <DecoderText text="About Me" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae cumque autem similique totam, dicta esse maiores quod, nesciunt nobis suscipit ullam odio a minima laborum magni laboriosam quidem? Eum!
    </Text>
    <Heading className={styles.title} data-visible={visible} level={4} id={titleId}>
      <DecoderText text="About Me" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae cumque autem similique totam, dicta esse maiores quod, nesciunt nobis suscipit ullam odio a minima laborum magni laboriosam quidem? Eum!
    </Text>
  </Fragment>
);

export const About = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.about}
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
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <AboutText visible={visible} titleId={titleId} />
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Monochrome Photo of Me Pondering a Bug Fix"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${textDecorationAbout}`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
