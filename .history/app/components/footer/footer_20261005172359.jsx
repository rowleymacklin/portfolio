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
                    <h3>About</h3>
                    <p>
                      Hello, I'm Rowley, a front end developer, hailing from sunny, tropical Watford. I love the work I do and the constantly evolving industry I work in, that always keeps me on my toes and challenges me. I'm pretty experienced with at least 20 years of front end work.
                    </p>
                    <p>
                      If I’m totally honest with my job title I’d say I lean more towards ‘visual’ front end developer. Although I love working with the more programmatic languages like JS and jQuery and always want to improve myself, my passion really is how pages and components look and feel for the end user.
                    </p>
                    <p>
                      I’m full of energy, experience, hard work, enthusiasm, ideas, great interpersonal skills and a relaxed temperament.
                    </p>
                    <p>
                      In my last role I was contracted to Autosport as a front end developer where I was very busy creating and styling new components for them in Piano, a digital business platform. Piano was new to me, but I very soon got the hang of it. I also learned a few more completely new skills: Angular and Google AMP. I continued to work with PHP, as Autosport and Mulberry both used some PHP on projects.
                    </p>
                    <p>
                      In my spare time I like to go to the gym, watch new and old films and I read a lot. My reading taste usually goes through phases. Last month I went through a Colombian magic realism phase, reading three of Gabriel García Márquez's outstanding books. This month I'm reading an interesting post-apocalyptic series of books by Alex Scarrow, called the Last Light and Afterlight.
                    </p>
                </div>
                <div className={styles.footerRandom}>
                    <h3>Random</h3>
                    <p>Get the latest articles, tutorials, and free resources delivered to your inbox weekly. No spam, just value.</p>
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

