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

import photoFooterBackground from '~/assets/photo-tayrona-beach.jpg';

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

    <ThemeProvider theme="dark" data-invert>
        <ProjectSection
            backgroundOverlayOpacity={0.99}
            className={styles.footerSectionContainer}
            backgroundElement={
                <Image
                    srcSet={`${photoFooterBackground} 1280w, ${photoFooterBackground} 2560w`}
                    width={1280}
                    height={900}
                    placeholder={photoFooterBackground}
                    alt="Photo of Tyrona National Park - Shot By Rowley Macklin"
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
                                My personal inspirations, like my taste in films, and music is very eclectic. I have a real soft spot for classic comedy and especially Stan Laurel and Oliver Hardy, who I consider to be absolute geniuses in comedy. And as for art, I’m a huge fan of Leonardo Da Vinci’s work.
                            </p>
                            <p>
                                My taste in music varies so much I can’t actually pinpoint any style or genre. It ranges from Classical/ Opera, to Green Day and Led Zeppelin to Hip-Hop and Smooth Soul, Blues and Guilty Pleasures. I like the whole spectrum of music. The only genre I’ve never really got into is modern jazz.
                            </p>
                            <p>
                                Film favourites range from black & white classics (Laurel & Hardy, Citizen Kane, Casablanca) to Hollywood (Wellywood) blockbusters (Armageddon, Fight Club, Lord of the Rings), to foreign language (Cinema Paradiso, Oldboy, Amelie). If there was any genre of film I could say I’ve watched all of them, it would be Zombie, or Apocolyptic/ Post Apocolyptic (Dawn of the Dead 2004, The Road, The Train to Busan).
                            </p>
                            <p>
                                Without a doubt, the best job I’ve ever had was setting up and running an Ostrich farm in Kenya, on the outskirts of Nairobi from 1991 to 1992. And by far the worst job was my first ever experience of work in my teens as a soft drink monitor at the Britvic factory. I had to do 3 hour shifts watching a tank of orange juice empty. The highlight of the shift was to press a big green button to refill the tank. The challenge and stress level reached critical when I had to press a big red button to stop the refill at the max point.
                            </p>
                        </div>
                        <div className={styles.footerRandom}>
                            <Heading className={styles.footerTitle} level={3}>
                                Travel
                            </Heading>                     
                            <p>
                                Travel... was a pretty big part of my life in the past. When I wasn’t busy working I’d pack up my backpack and discover a new country to travel around.
                            </p>
                            <p>
                                In the late 1990s I've lived and traveled extensively in Africa. And in 2007 travelled throughout North America, Mexico, Central America, South America, South-east Asia and Oceania.
                            </p>
                            <p>
                                I did write a travel diary book called <Link className={styles.inlineLink}href="https://rowleymacklin.com/rollsroundtheworld/">Roll's Round the World</Link>, based on my backpacking trip around the World in 2007. It’s ranked an astonishingly modest #7,497,357 in books, and #36,427 in travel writing books on Amazon.
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
                                    alt="Roll's Round the World Book Cover - Rowley Standing Reading Map"
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
                                    <li>World of Warcraft (When time allows)</li>
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
                                    <li>Joe Abercrombie: The First Law trilogy</li>
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
                            Re-design by Rowley Macklin
                            </Link>
                        </Text>
                        <div className={styles.footerPortfolioArchive}>
                        <Text size="s" align="center">
                            <span className={styles.date}>
                                My portfolio iterations through the ages:
                            </span>
                            <Link secondary className={styles.link} href="https://rowleymacklin.com/diginuts-2004/">
                                2004
                            </Link>
                            |
                            <Link secondary className={styles.link} href="https://rowleymacklin.com/diginuts-2013/">
                                2013
                            </Link>   
                            |
                            <Link secondary className={styles.link} href="https://rowleymacklin.com/diginuts-2016/">
                                2016
                            </Link>
                            |
                            <Link secondary className={styles.link} href="https://rowleymacklin.com/fullershade-2018">
                                2018
                            </Link>  
                            |
                            {/* <Link secondary className={styles.link} href="/humans.txt" target="_self">
                                2022
                            </Link>                        */}
                        </Text>
                        </div>
                    </div>
                </div>
            </footer>

          </ProjectSection>
          </ThemeProvider>


  
);

