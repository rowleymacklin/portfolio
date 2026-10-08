import profileImgLarge from '~/assets/image-info-rmacklin.png';
import profileImgPlaceholder from '~/assets/image-info-rmacklin.png';
import profileImg from '~/assets/image-info-rmacklin.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import textDecorationProjects from './textDecorationProjects.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Rowley, a frontend developer, currently located in sunny, tropical Watford. I love the work I do and the constantly evolving industry I work in, that always keeps me on my toes and challenges me. I'm pretty experienced with at least 20 years of front end work.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      If I’m totally honest with my job title I’d say I lean more towards ‘visual’ front end developer. Although I love working with the more programmatic languages like JS and jQuery and always want to improve myself, my passion really is how pages and components look and feel for the end user.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m full of energy, experience, hard work, enthusiasm, ideas, great interpersonal skills and a relaxed temperament.
    </Text>    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to go to the gym, watch new and old films and I read a lot. My reading taste usually goes through phases. Last month I went through a Colombian magic realism phase, reading three of Gabriel García Márquez's outstanding books. This month I'm reading an interesting post-apocalyptic series of books by Alex Scarrow, called the Last Light and Afterlight.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      If you're interested in travel or some random facts about me, check out my <Link href="/random">random</Link> page. 
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
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
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
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
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${textDecorationProjects}#textDecorationProjects`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
