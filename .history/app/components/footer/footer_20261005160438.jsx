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

  <footer class="site-footer">
  <footer className={classes(styles.footer, className)}></footer>
  <div class="footer-container">
    
    <div class="footer-col brand-col">
      <a href="#" class="footer-logo">
        <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span>ApexCorp</span>
      </a>
      <p class="brand-desc">Building the infrastructure of tomorrow with simple, clean, and dependency-free components.</p>
      <div class="social-links">
        <a href="#" aria-label="Twitter">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" aria-label="GitHub">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      </div>
    </div>

    <div class="footer-col">
      <h3 class="footer-title">Products</h3>
      <ul class="footer-links">
        <li><a href="#">Analytics Engine</a></li>
        <li><a href="#">Cloud Storage</a></li>
        <li><a href="#">Developer APIs</a></li>
        <li><a href="#">Security Suite</a></li>
        <li><a href="#">Add-ons & Plugins</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3 class="footer-title">Resources</h3>
      <ul class="footer-links">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Community Forum</a></li>
        <li><a href="#">Open Source</a></li>
        <li><a href="#">Status Monitor</a></li>
        <li><a href="#">Help Center</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3 class="footer-title">Company</h3>
      <ul class="footer-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press Kit</a></li>
        <li><a href="#">Sustainability</a></li>
        <li><a href="#">Contact Sales</a></li>
      </ul>
    </div>

    <div class="footer-col newsletter-col">
      <h3 class="footer-title">Products</h3>
      <ul class="footer-links">
        <li><a href="#">Analytics Engine</a></li>
        <li><a href="#">Cloud Storage</a></li>
        <li><a href="#">Developer APIs</a></li>
        <li><a href="#">Security Suite</a></li>
        <li><a href="#">Add-ons & Plugins</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <div class="footer-bottom-container">
      <p class="copyright">&copy; 2026 ApexCorp Inc. All rights reserved.</p>
      <ul class="bottom-links">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Cookie Settings</a></li>
      </ul>
    </div>
  </div>
</footer>


  
);

