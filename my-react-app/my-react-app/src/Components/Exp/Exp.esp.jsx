
import styles from './Exp.module.css'

function Expesp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1>Experiencia Laboral</h1></div>
        <div>
         <div className={styles.titulo}>
            <h2>Axa</h2>
            <p className={styles.tipo}>Presencial</p>
            <p className={styles.fecha}>2023 - 2023</p>
         </div>
         <p className={styles.cargo}>Tecnico en Reparacion</p>
         <p className={styles.textod}>Era uno de los técnicos en reparación de computadoras de escritorio, notebooks y impresoras. me encargaba tanto de reparar sistemas operativos como la instalación de software y hardwareEra</p>
         </div>
         <div>
         <div className={styles.titulo}>
            <h2>Janos Eventos</h2>
            <p className={styles.tipo}>Presencial</p>
            <p className={styles.fecha}>2022 - 2023</p>
         </div>
         <p className={styles.cargo}>Encargado en Salon de Eventos</p>
         <p className={styles.textod}>Era el encargado del lugar durante la semana y en eventos era el encargado de las necesidades del personal como tambien el encargado de controlar el stock de bebidas, utilidades, ect.</p>
         </div>
      </div>
    </div>
  )
}

export default Expesp