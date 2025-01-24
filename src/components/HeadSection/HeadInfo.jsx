import styles from "./HeadSectionStyle.module.css";
import photo1 from "./../../assets/juli.jpg";
import gitHub_light from "./../../assets/github-dark.svg";
import gitHub_dark from "./../../assets/github-light.svg";
import linkedin_light from "./../../assets/linkedin-dark.svg";
import linkedin_dark from "./../../assets/linkedin-light.svg";
import sun from "./../../assets/sun.svg";
import moon from "./../../assets/moon.svg";
import { useTheme } from "./../ThemeContext";
import portfolio_EN from "./../../assets/portfolio EN.pdf";
import portfolio_UK from "./../../assets/portfolio UK.pdf";

function HeadInfo() {
  const { theme, toggleTheme } = useTheme();

  const linkedin = theme === "light" ? linkedin_dark : linkedin_light;
  const github = theme === "light" ? gitHub_dark : gitHub_light;
  const themeIcon = theme === "light" ? sun : moon;

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h1>
          Juli
          <br></br>
          Mostova
        </h1>
        <h2>Frontend Developer</h2>
        <span className={styles.image_box}>
          <a href="https://github.com/juliMostova" target="_blank">
            <img src={github} alt="githubDark" />
          </a>
          <a
            href="https://www.linkedin.com/in/%D1%8E%D0%BB%D1%96%D1%8F-%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D0%B0-a6aa7b228/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin_pictures" />
          </a>
        </span>
        <p className={styles.description}>
          With enthusiasm and a fresh look at the world of Frontend development
        </p>

        <div className={styles.container_buttons}>
          <a href={portfolio_EN} download>
            <button className="hover">Resume EN</button>
          </a>
          <a href={portfolio_UK} download>
            <button className="hover">Resume UK</button>
          </a>
        </div>
      </div>
      <div className={styles.icon_content}>
        <img
          src={themeIcon}
          className={styles.sun}
          onClick={toggleTheme}
          alt="moon/sun"
        />
        <img src={photo1} alt="photo_Juli" className={styles.img} />
      </div>
    </section>
  );
}

export default HeadInfo;
