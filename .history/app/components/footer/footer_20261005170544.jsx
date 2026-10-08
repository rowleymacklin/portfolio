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
                    <p>Get the latest articles, tutorials, and free resources delivered to your inbox weekly. No spam, just value.</p>
                </div>
                <div className={styles.footerRandom}>
                    <h3>Random</h3>
                    <p>Get the latest articles, tutorials, and free resources delivered to your inbox weekly. No spam, just value.</p>
                </div>                
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
                    <div class="footer-blog__links">
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
            <div class="footer-blog__bottom">
                <p class="footer-blog__copyright">&copy; 2025 Your Blog Name. All Rights Reserved.</p>
                <div class="footer-blog__newsletter">
                    <h3>Join Our Newsletter</h3>
                    <p>Get the latest articles, tutorials, and free resources delivered to your inbox weekly. No spam, just value.</p>
                    
                </div>
            </div>
        </div>
    </footer>

  
);

