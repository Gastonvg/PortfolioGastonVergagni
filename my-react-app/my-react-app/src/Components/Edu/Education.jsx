import styles from './Education.module.css'

function Education() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1 className={styles.h1}>Education</h1></div>
        <div className={styles.completo}>
         <div className={styles.titulo}>
            <h2>University of General Sarmiento</h2>
            <p className={styles.fecha}>2018 - 2021</p>
         </div>
         <p className={styles.textod}>One year of studying Systems Engineering and one year of studying Electromechanical Engineering.</p>
         <p></p>
         </div>
         <div div className={styles.completo}>
         <div className={styles.titulo}>
            <h2>Henry Bootcamp</h2>
            <p className={styles.fecha}>2023 - 2024</p>
         </div>
         <p className={styles.textod}>6 months of intensive learning in Fullstack Development&nbsp;(react, redux, css, html, sequilize, express, node.js, ect).</p>
         <p></p>
         </div>


      </div>
    </div>
  )
}

export default Education
