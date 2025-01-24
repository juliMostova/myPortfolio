import checkLight from './../../assets/checkmark-light.svg';
import checkDark from './../../assets/checkmark-dark.svg';
import styles from './SkillsStyle.module.css';
import SkillsList from './SkillsList';
import { useTheme } from "./../ThemeContext";

function Skills() {
const {theme} = useTheme();
const changeTheme = theme === 'dark' ? checkDark : checkLight ;

  return (
    <div className={styles.container}>
      <h1 className={styles.skills_head}>Skills</h1>

      <div className={styles.skillsListElem}>
        <SkillsList src={changeTheme} skill="HTML"/>
        <SkillsList src={changeTheme} skill="CSS"/>
        <SkillsList src={changeTheme} skill="JavaScript"/>
        <SkillsList src={changeTheme} skill="Git"/>
      </div>
<br></br>
      <div className={styles.skillsListElem}>
        <SkillsList src={changeTheme} skill="React"/>
        <SkillsList src={changeTheme} skill="Vite"/>
        <SkillsList src={changeTheme} skill="Redux"/>
        <SkillsList src={changeTheme} skill="Node"/>
      </div>
<br></br>
<div className={styles.skillsListElem}>
        <SkillsList src={changeTheme} skill="Material UI"/>
        <SkillsList src={changeTheme} skill="Tailwind CSS"/>
        {/* <SkillsList src={changeTheme} skill="Git"/> */}
        <SkillsList src={changeTheme} skill="Bootstrap"/>
      </div>
    </div>
  )
}

export default Skills;
