import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>


<footer class="site-footer">
  <div class="footer-container">
    
    <!-- Column 1: Brand & About -->
    <div class="footer-column brand-info">
      <h3 class="footer-logo">Brand<span>Name</span></h3>
      <p>Building modern web experiences with clean code and robust design patterns.</p>
      <div class="social-links">
        <a href="#" aria-label="Twitter">𝕏</a>
        <a href="#" aria-label="LinkedIn">in</a>
        <a href="#" aria-label="GitHub">git</a>
      </div>
    </div>

    <!-- Column 2: Deep Navigation Links -->
    <div class="footer-column">
      <h4>Products</h4>
      <nav aria-label="Footer Products Links">
        <ul>
          <li><a href="#">Web Analytics</a></li>
          <li><a href="#">Content Management</a></li>
          <li><a href="#">E-Commerce Tools</a></li>
          <li><a href="#">Security Systems</a></li>
        </ul>
      </nav>
    </div>

    <!-- Column 3: Company Resources -->
    <div class="footer-column">
      <h4>Resources</h4>
      <nav aria-label="Footer Resources Links">
        <ul>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Developer API</a></li>
          <li><a href="#">Community Forum</a></li>
          <li><a href="#">System Status</a></li>
        </ul>
      </nav>
    </div>

    <!-- Column 4: Newsletter & Contact -->
    <div class="footer-column newsletter-col">
      <h4>Stay Updated</h4>
      <p>Subscribe to our monthly newsletter for engineering insights.</p>
      <form class="newsletter-form" action="#" method="POST">
        <input type="email" placeholder="Your email address" required aria-label="Email Address">
        <button type="submit">Join</button>
      </form>
    </div>

  </div>

  <!-- Bottom Bar: Legal & Copyright -->
  <div class="footer-bottom">
    <div class="footer-bottom-container">
      <p>&copy; 2026 BrandName Inc. All rights reserved.</p>
      <div class="legal-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Settings</a>
      </div>
    </div>
  </div>
</footer>



    
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
    
  </footer>

  
);
