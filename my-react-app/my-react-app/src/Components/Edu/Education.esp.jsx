import styles from './Education.module.css'

function Educationesp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1>Educacion</h1></div>
        <div className={styles.completo}>
         <div className={styles.titulo}>
            <h2>Universidad General Sarmiento</h2>
            <p className={styles.fecha}>2018 - 2021</p>
         </div>
         <p className={styles.textod}>Un año estudiando Ingenieria en Sistemas y un ano estudiando ingenieria Electromecanica.</p>
         <p></p>
         </div>
         <div div className={styles.completo}>
         <div className={styles.titulo}>
            <h2>Henry Bootcamp</h2>
            <p className={styles.fecha}>2023 - 2024</p>
         </div>
         <p className={styles.textod}>6 meses aprendiendo todo lo relacionado al desarrollo full stack&nbsp;(react, redux, css, html, sequilize, express, node.js, ect).</p>
         <p></p>
         </div>


      </div>
    </div>
  )
}

export default Educationesp
