import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

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
  


      <footer className={classes(styles.footer, className)}>
        <div className={styles.footerContainer}>
            <div className={styles.footerMain}>
                <div className={styles.footerAbout}>
                    <h3>Random</h3>
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
                    <h3>Travel</h3>
                    <p>
                        Travel... was a pretty big part of my life. When I wasn’t busy working I’d pack up my backpack and discover a new country to travel around.
                    </p>
                    <p>
                        In the very distant past I've lived and traveled extensively in Africa. And more recently have travelled throughout North America, Mexico, Central America, South America, South-east Asia and Oceania.
                    </p>
                    <p>
                        I did write a travel diary book called<Link className={styles.link}href="/random">Rolls Round the World</Link>, based on my backpacking trip around the World in 2007. It’s ranked an astonishingly modest #7,497,357 in books, and #36,427 in travel writing books on Amazon (perfectly understandable, as the reviews aren’t exactly shining).
                    </p>
                </div>                
            </div>
            <div className={styles.footerMainLikesDislikes}>
                <div className={styles.footerLikesDislikes}>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS Tutorials</a></li>
                            <li><a href="#">User Experience</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Site Links</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Start Here</a></li>
                            <li><a href="#">Archives</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS Tutorials</a></li>
                            <li><a href="#">User Experience</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Site Links</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Start Here</a></li>
                            <li><a href="#">Archives</a></li>
                        </ul>
                    </div>    
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS Tutorials</a></li>
                            <li><a href="#">User Experience</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Site Links</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Start Here</a></li>
                            <li><a href="#">Archives</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS Tutorials</a></li>
                            <li><a href="#">User Experience</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLikesDislikesItem}>
                        <h3>Site Links</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Start Here</a></li>
                            <li><a href="#">Archives</a></li>
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

  
);

