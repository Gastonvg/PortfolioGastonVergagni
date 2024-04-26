import styles from './Skills.module.css'

function Skills() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1 className={styles.h1}>Skills</h1></div>
        <div className={styles.skills}>
            <p className={styles.skill}>JavaScript</p>
            <p className={styles.skill}>TypeScript</p>
            <p className={styles.skill}>React/Redux</p>
            <p className={styles.skill}>Sequelize</p>
            <p className={styles.skill}>Phyton</p>
            <p className={styles.skill}>SQL</p>
            <p className={styles.skill}>PostgreSQL</p>
            <p className={styles.skill}>Node.js</p>
            <p className={styles.skill}>Tailwind</p>
            <p className={styles.skill}>CSS</p>
            <p className={styles.skill}>Database</p>
            <p className={styles.skill}>HTML</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
