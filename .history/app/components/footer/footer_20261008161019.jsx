import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { Image } from '~/components/image';
import { Heading } from '~/components/heading';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';
import { media } from '~/utils/style';

import profileImgLarge from '~/assets/book-cover.jpg';
import profileImgPlaceholder from '~/assets/book-cover.jpg';
import profileImg from '~/assets/book-cover.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';

import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionColumnsTextOnly,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionSubHeading,  
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';

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
      <footer className={classes(styles.footer, className)}>
        <div className={styles.footerContainer}>
            <div className={styles.footerMain}>
                <div className={styles.footerAbout}>
                    {/* <h3>Random</h3> */}
                    <Heading className={styles.footerTitle} level={3}>
                        Random
                    </Heading>  
                    <p>
                      My personal inspirations, like my taste in films and music is very eclectic. I have a real soft spot for classic comedy and especially Stan Laurel and Oliver Hardy, who I consider to be absolute geniuses in comedy. And as for art, I’m a huge fan of Leonardo Da Vinci’s work.
                    </p>
                    <p>
                      My taste in music varies so much I can’t actually pinpoint any style or genre. It ranges from Classical/ Opera, to Green Day and Led Zeppelin to Hip-Hop and Smooth Soul, Blues and Guilty Pleasures. I like the whole spectrum of music. The only genre I’ve never really got into is modern jazz.
                    </p>
                    <p>
                      Film favourites range from black & white classics (Laurel & Hardy, Citizen Kane, Casablanca) to Hollywood (Wellywood) blockbusters (Armageddon, Fight Club, Lord of the Rings), to foreign language (Cinema Paradiso, Oldboy, Amelie). If there was any genre of film I could say I’ve watched all of them, it would be Zombie, or Apocolyptic/ Post Apocolyptic (Dawn of the Dead 2004, The Road, The Train to Busan).
                    </p>
                    <p>
                      Film favourites range from black & white classics (Laurel & Hardy, Citizen Kane, Casablanca) to Hollywood (Wellywood) blockbusters (Armageddon, Fight Club, Lord of the Rings), to foreign language (Cinema Paradiso, Oldboy, Amelie). If there was any genre of film I could say I’ve watched all of them, it would be Zombie, or Apocolyptic/ Post Apocolyptic (Dawn of the Dead 2004, The Road, The Train to Busan).
                    </p>
                </div>
                <div className={styles.footerRandom}>
                    <Heading className={styles.footerTitle} level={3}>
                        Travel
                    </Heading>                     
                    <p>
                        Travel... was a pretty big part of my life. When I wasn’t busy working I’d pack up my backpack and discover a new country to travel around.
                    </p>
                    <p>
                        In the very distant past I've lived and traveled extensively in Africa. And in 2007 travelled throughout North America, Mexico, Central America, South America, South-east Asia and Oceania.
                    </p>
                    <p>
                        I did write a travel diary book called <Link className={styles.inlineLink}href="https://rowleymacklin.com/rollsroundtheworld/">Rolls Round the World</Link>, based on my backpacking trip around the World in 2007. It’s ranked an astonishingly modest #7,497,357 in books, and #36,427 in travel writing books on Amazon (perfectly understandable, as the reviews aren’t exactly shining).
                    </p>
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
                    </div>                    
                </div>                
            </div>
            <div className={styles.footerMainLikesDislikes}>
                <div className={styles.footerLikesDislikes}>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Likes
                        </Heading>  
                        <ul>
                            <li>Conceptual sites</li>
                            <li>A challenge</li>
                            <li>Being busy</li>
                            <li>Lists </li>
                            <li>Mango shakes</li>
                            <li>Thai Food</li>
                            <li>70’s guilty pleasures music</li>
                            <li>Tea (Milk & half a sugar)</li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Dislikes
                        </Heading>                          
                        <ul>
                            <li>The unfounded rumor I can’t dance</li>
                            <li>The totally unfounded rumor I can’t sing</li>
                            <li>Shellfish </li>
                            <li>Chocolate Liqueurs</li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Work Inspirations
                        </Heading>                             
                        <ul>
                            <li>CSS Tricks</li>
                            <li>Stack Overflow</li>
                            <li>DeviantArt </li>
                            <li>Smashing Magazine</li>
                            <li>Frontend Focus</li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Personal Inspirations
                        </Heading>                           
                        <ul>
                            <li>Laurel & Hardy</li>
                            <li>Leonardo Da Vinci</li>
                            <li>Spike Milligan</li>
                            <li>David Bowie</li>
                            <li>Lou Reed</li>
                        </ul>
                    </div>    
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Hobbies
                        </Heading>                          
                        <ul>
                            <li>Travel</li>
                            <li>Gym</li>
                            <li>Reading </li>
                            <li>Good & Bad films</li>
                            <li>Music and Music History</li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Top 5 Films
                        </Heading>                          
                        <ul>
                            <li>Lord of the Rings Trilogy</li>
                            <li>Fight Club</li>
                            <li>Sons of the Desert</li>
                            <li>Amélie </li>
                            <li>The Dark Knight Trilogy</li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Top 5 Songs
                        </Heading>   
                        <ul>
                            <li>Lynyrd Skynyrd: Free Bird</li>
                            <li>Zero 7: Destiny</li>
                            <li>Boney M: Sunny</li>
                            <li>The bravery: Time Won’t Let Me Go</li>
                            <li>Gat Decor: Passion (Original Mix)</li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <Heading className={styles.footerTitle} level={6}>
                            Top 5 Books
                        </Heading>  
                        <ul>
                            <li>Gabriel García Márquez: One Hundred Years of Solitude</li>
                            <li>J. R. R. Tolkien: The Lord of the Rings Trilogy</li>
                            <li>Hugh Cook: The Werewolf and the Wormlord</li>
                            <li>Alexandre Dumas: The Three Musketeers</li>
                            <li>John Keegan: Second World War</li>
                        </ul>
                    </div>                                      
                </div>
            </div>
            <div className={styles.footerBottom}>
                  {/* <p className={styles.footerCopyright}>&copy; 2025 Your Blog Name. All Rights Reserved.</p> */}
                  <Text size="s" align="center">
                    <span className={styles.footerCopyright}>
                      {`© ${new Date().getFullYear()} ${config.name}.`}
                    </span>
                    <Link secondary className={styles.link} href="/humans.txt" target="_self">
                      Crafted by yours truly
                    </Link>
                  </Text>
                <div className={styles.footerPortfolioArchive}>
                  <Text size="s" align="center">
                    <span className={styles.date}>
                    My portfolio iterations through the ages:
                    </span>
                    <Link secondary className={styles.link} href="/humans.txt" target="_self">
                    2004
                    </Link>
                    |
                    <Link secondary className={styles.link} href="/humans.txt" target="_self">
                    2013
                    </Link>   
                    |
                    <Link secondary className={styles.link} href="/humans.txt" target="_self">
                    2016
                    </Link>
                    |
                    <Link secondary className={styles.link} href="/humans.txt" target="_self">
                    2018
                    </Link>  
                    |
                    <Link secondary className={styles.link} href="/humans.txt" target="_self">
                    2022
                    </Link>                       
                  </Text>
                </div>
            </div>
        </div>
    </footer>

          </ProjectSection>
          </ThemeProvider>


  
);

