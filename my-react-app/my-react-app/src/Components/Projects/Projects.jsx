import styles from './Projects.module.css'

function Projects() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1>Projects</h1></div>
        <div className={styles.proyecto}>
        <a href="https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/details/projects/" target="_blank" rel="noopener noreferrer" className={styles.titulo}>Interfoods</a>
            <p className={styles.des}>A website we built with my colleagues for selling food from Argentina, Colombia, Ecuador, and Mexico. This was my first team project where we learned many new technologies. It was a beautiful experience for me</p>
            <div className={styles.skills}>
              <p className={styles.skill}>JavaScript</p>
              <p className={styles.skill}>TypeScript</p>
              <p className={styles.skill}>Firebase</p>
              <p className={styles.skill}>React/Redux</p>
              <p className={styles.skill}>Sequelize</p>
              <p className={styles.skill}>Database</p>
              <p className={styles.skill}>Deploy</p>
              <p className={styles.skill}>Cloudinary</p>
              <p className={styles.skill}>Payment api</p>
              <p className={styles.skill}>Node.js</p>
              <p className={styles.skill}>Express</p>

            </div>
        </div>
        <div className={styles.proyecto}>
            <a href="https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/details/projects/" target="_blank" rel="noopener noreferrer" className={styles.titulo}>Videogames</a>
            <p className={styles.des}>A wiki about video games with data obtained from an API and from my own database, with the possibility of filtering games and creating your own game.</p>
            <div className={styles.skills}>
              <p className={styles.skill}>JavaScript</p>
              <p className={styles.skill}>React/Redux</p>
              <p className={styles.skill}>Sequelize</p>
              <p className={styles.skill}>Sql</p>
              <p className={styles.skill}>Database</p>
            </div>
        </div>
        <div className={styles.proyecto}>
            <a href="https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/details/projects/" target="_blank" rel="noopener noreferrer" className={styles.titulo}>Rick and Morty</a>
            <p className={styles.des}>A wiki about video games with data obtained from an API, which allows you to add favorite characters, filter by statuses such as status, date of release, name, and more. This was my first serious project where I learned many things</p>
            <div className={styles.skills}>
              <p className={styles.skill}>JavaScript</p>
              <p className={styles.skill}>React/Redux</p>
              <p className={styles.skill}>Sequelize</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
