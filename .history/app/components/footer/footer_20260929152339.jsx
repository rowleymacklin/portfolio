import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
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
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Crafted by yours truly
      </Link>
    </Text>



<div class="footer-row">
        
        <div class="footer-col">
          <h4 class="title">info</h4>
          <ul class="links">
            <li><a href="#">about us</a></li>
            <li><a href="#">compressions</a></li>
            <li><a href="#">customers</a></li>
            <li><a href="#">service</a></li>
            <li><a href="#">collection</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4 class="title">explore</h4>
          <ul class="links">
            <li><a href="#">free designs</a></li>
            <li><a href="#">latest designs</a></li>
            <li><a href="#">themes</a></li>
            <li><a href="#">popular designs</a></li>
            <li><a href="#">art skills</a></li>
            <li><a href="#">new uploads</a></li>
          </ul>
        </div>
      
        <div class="footer-col">
          <h4 class="title">legal</h4>
          <ul class="links">
            <li><a href="#">customer agreement</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">gdpr</a></li>
            <li><a href="#">security</a></li>
            <li><a href="#">testimonials</a></li>
            <li><a href="#">media kit</a></li>
          </ul>
        </div>
    
        <div class="footer-col">
          <h4 class="title">newsletter</h4>
          <p class="description">
            subscribe to our newsletter for a weekly dose of news, updates
            helpful tips and exclusive offers.
          </p>
          <form>
            <input type="email" placeholder="your email" required />
            <button type="submit">subscribe</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>


  </footer>

  
);
