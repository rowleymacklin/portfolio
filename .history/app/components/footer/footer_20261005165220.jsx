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
        <div class="container">
            <div class="footer-blog__main">
                <div class="footer-blog__newsletter">
                    <h3>Join Our Newsletter</h3>
                    <p>Get the latest articles, tutorials, and free resources delivered to your inbox weekly. No spam, just value.</p>
                    
                </div>
                <div class="footer-blog__links-container">
                    <div class="footer-blog__links">
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
                <nav class="footer-blog__social" aria-label="Social media">
                    <ul>
                        <li><a href="#" aria-label="Our Twitter Profile"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.93 4.93 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a></li>
                        <li><a href="#" aria-label="Our Pinterest Profile"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest</title><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.16 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.027-.655 2.56-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 .992.371 1.938.833 2.455.088.097.1.223.077.339-.025.112-.084.347-.118.463-.042.149-.181.196-.322.122-1.148-.482-1.875-1.96-1.875-3.419 0-2.733 2.378-6.044 6.886-6.044 3.556 0 6.248 2.503 6.248 5.756 0 3.542-2.208 6.317-5.227 6.317-1.018 0-1.986-.518-2.318-1.133 0 0-.512 2.035-.623 2.487-.226.992-.867 1.928-1.282 2.611.889.283 1.83.445 2.823.445 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0z"/></svg></a></li>
                        <li><a href="#" aria-label="Our LinkedIn Profile"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>

  
);

