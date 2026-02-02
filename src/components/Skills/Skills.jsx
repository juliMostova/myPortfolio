import checkLight from "./../../assets/checkmark-light.svg";
import checkDark from "./../../assets/checkmark-dark.svg";
import styles from "./SkillsStyle.module.css";
// import SkillsList from './SkillsList';
import { useTheme } from "./../ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const changeTheme = theme === "dark" ? checkDark : checkLight;

  const skillsGroups = [
    {
      title: "Frontend Development",
      items: [
        { name: "React (Hooks, Context, Router)", level: "впевнено" },
        { name: "Redux Toolkit", level: "впевнено" },
        { name: "JavaScript (ES6+)", level: "впевнено" },
      ],
    },
    {
      title: "Tools & Environment",
      items: [
        { name: "Vite", level: "впевнено" },
        { name: "Git / GitHub", level: "впевнено" },
        { name: "API (REST, fetch)", level: "впевнено" },
        { name: "localStorage", level: "впевнено" },
      ],
    },
    {
      title: "UI/UX & Styling",
      items: [
        { name: "Responsive дизайн (flex, grid)", level: "впевнено" },
        { name: "Bootstrap", level: "впевнено" },
        { name: "Material UI", level: "впевнено" },
        { name: "Tailwind CSS", level: "в процесі" },
      ],
    },
    {
      title: "В процесі вивчення",
      items: [
        { name: "TypeScript", level: "" },
        { name: "RTK Query", level: "" },
      ],
    },
  ];

  return (
    <section>
      <h1 className={styles.head}>Skills</h1>
      {skillsGroups.map((group, inx) => (
        <div key={inx} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.title}</h2>
          <ul className={styles.list}>
            {group.items.map((skill, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.skillName}>{skill.name}</span>
                {skill.level && (
                  <span className={styles.level}>({skill.level})</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
