import portfolio_EN from "./../../assets/portfolio_EN.pdf";
import portfolio_UK from "./../../assets/portfolio_UK.pdf";
import styles from "./HeadSectionStyle.module.css";
import photo1 from "./../../assets/juli.jpg";
import gitHub_light from "./../../assets/github-dark.svg";
import gitHub_dark from "./../../assets/github-light.svg";
import linkedin_light from "./../../assets/linkedin-dark.svg";
import linkedin_dark from "./../../assets/linkedin-light.svg";
import sun from "./../../assets/sun.svg";
import moon from "./../../assets/moon.svg";
import { useTheme } from "./../ThemeContext";

function HeadInfo() {
  const { theme, toggleTheme } = useTheme();

  const linkedin = theme === "light" ? linkedin_dark : linkedin_light;
  const github = theme === "light" ? gitHub_dark : gitHub_light;
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.name}>
            Juli
            <br className={styles.brMobile} />
            Mostova
          </h1>
          <h2 className={styles.position}>Frontend Developer</h2>

          <p className={styles.description}>
            3 роки безперервного самостійного вивчення React, Redux Toolkit,
            Vite та API. Розробила 4 pet-проєкти з API-запитами, локальним
            сховищем і RTK. Шукаю позицію Junior/Middle React Developer, де
            зможу рости і приносити користь команді.
          </p>

          <div className={styles.social}>
            <a
              href="https://github.com/juliMostova"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <img src={github} alt="GitHub" className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/юлія-мостова-a6aa7b228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <img src={linkedin} alt="LinkedIn" className={styles.icon} />
            </a>
          </div>

          <div className={styles.buttons}>
            <a href={portfolio_EN} download>
              <button type="button" className={styles.btn}>
                Resume EN
              </button>
            </a>
            <a href={portfolio_UK} download>
              <button type="button" className={styles.btn}>
                Resume UK
              </button>
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <img src={themeIcon} alt="Theme toggle" />
          </button>
          <img src={photo1} alt="Юлія Мостова" className={styles.photo} />
        </div>
      </div>
    </header>
  );
}

export default HeadInfo;
