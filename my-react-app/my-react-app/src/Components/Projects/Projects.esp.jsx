import styles from './Projects.module.css'

function Projectsesp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1 className={styles.h1}>Proyectos</h1></div>
        <div className={styles.proyecto}>
        <a href="https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/details/projects/" target="_blank" rel="noopener noreferrer" className={styles.titulo}>Interfoods</a>
            <p className={styles.des}>Un sitio web que construimos con mis colegas para vender comida de Argentina, Colombia, Ecuador y México. Este fue mi primer proyecto en equipo donde aprendimos muchas tecnologías nuevas. Fue una experiencia hermosa para mí.</p>
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
            <p className={styles.des}>Una wiki sobre videojuegos con datos obtenidos de una API y de mi propia base de datos, con la posibilidad de filtrar juegos y crear tu propio juego.</p>
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
            <p className={styles.des}>Una wiki sobre videojuegos con datos obtenidos de una API, que te permite agregar personajes favoritos, filtrar por valores como estado, fecha de lanzamiento, nombre, y más. Este fue mi primer proyecto serio donde aprendí muchas cosas</p>
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

export default Projectsesp
