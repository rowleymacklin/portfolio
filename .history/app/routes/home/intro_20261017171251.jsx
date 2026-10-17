import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { cssProps } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
    ', and '
  );
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className={styles.text}>
              <h1 className={styles.name} data-visible={visible} id={titleId}>
                <DecoderText text={config.name} delay={500} />
              </h1>
              <Heading level={0} as="h3" className={styles.title}>
                <VisuallyHidden className={styles.label}>
                  {`${config.role} + ${introLabel}`}
                </VisuallyHidden>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationS })}
                  >
                    {config.role}
                  </span>
                  <span className={styles.line} data-status={status} />
                </span>
                <div className={styles.rowTwo}>
                  {disciplines.map(item => (
                    <Transition
                      unmount
                      in={item === currentDiscipline}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={item}
                    >
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className={styles.rowTwoWord}
                          data-plus={true}
                          data-status={status}
                          style={cssProps({ delay: tokens.base.durationM })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>
                <span aria-hidden className={styles.rowThree}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXL })}
                  >
                    <div>
                      <span>
                        Available:
                      </span>
                      <span>
                        01/11/2026
                      </span>                      
                    </div>
                  </span>
                </span>
                <span aria-hidden className={styles.rowFour}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXL })}
                  >
                    <div>
                      <span>
                        Location:
                      </span>
                      <span>
                        Watford, Hertfordshire
                      </span>                      
                    </div>
                  </span>
                </span>   
                <span aria-hidden className={styles.rowFive}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXL })}
                  >
                    <div>
                      <span>
                        Hello, I'm Rowley and I build pixel-perfect, interactive, and accessible user interfaces. 
                        I specialize in the sweet spot between design and code, turning wire-frames and designs into 
                        beautifully smooth, accessible web experiences. I also have a huge amount of experience working with various CMSs.

                        Hello! I'm Rowley, a frontend developer and I like building accessible, pixel-perfect experiences for the web. I take pride in having a sharp eye for the little details that separate a good product from an exceptional one. I really enjoy working where design meets engineering, where great user experience meets clean, scalable code.

                        One of the many things I love about the work I do is constantly learning. No two projects are the same and I take a pragmatic approach to each job I take on, focussing on delivering code that is as accessible and optimized as possible.
                      </span>
                    </div>
                  </span>
                </span>                                
              </Heading>
            </header>
            <RouterLink
              to="/#Debeers"
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </RouterLink>
            <RouterLink
              to="/#Debeers"
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}
