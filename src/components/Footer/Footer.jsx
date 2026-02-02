import styles from './FooterStyle.module.css';

function Footer() {
  return (
  <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Juli Mostova. All rights reserved.
        </p>

        <p className={styles.made}>
          Made with React & ❤️ in Odesa, Ukraine
        </p>

        <div className={styles.links}>
          <a href="https://github.com/juliMostova" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/юлія-мостова-a6aa7b228" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
