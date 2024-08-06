
import styles from './Exp.module.css'

function Expesp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1 className={styles.h1}>Experiencia Laboral</h1></div>
        <div>
         <div className={styles.titulo}>
            <h2 className={styles.h1}>Axa</h2>
            <p className={styles.tipo}>Presencial</p>
            <p className={styles.fecha}>2023(Marzo) - 2023(Agosto)</p>
         </div>
         <p className={styles.cargo}>Tecnico en Reparacion</p>
         <p className={styles.textod}>Era uno de los técnicos en reparación de computadoras de escritorio, notebooks y impresoras. me encargaba tanto de reparar sistemas operativos como la instalación de software y hardware</p>
         </div>
         <div>
         <div className={styles.titulo}>
            <h2>Janos Eventos</h2>
            <p className={styles.tipo}>Presencial</p>
            <p className={styles.fecha}>2022(Febrero) - 2022(Diciembre)</p>
         </div>
         <p className={styles.cargo}>Encargado en Salon de Eventos</p>
         <p className={styles.textod}>Era el encargado del lugar durante la semana y en eventos era el encargado de las necesidades del personal como tambien el encargado de controlar el stock de bebidas, utilidades, ect.</p>
         </div>
         <div>
         <div className={styles.titulo}>
            <h2>Estudio Contable Dra Medvedev</h2>
            <p className={styles.tipo}>Presencial</p>
            <p className={styles.fecha}>2017(enero) - 2021(Octubre)</p>
         </div>
         <p className={styles.cargo}>Data Entry, Atención al Cliente y IT</p>
         <p className={styles.textod}>Data entry en diferentes sistemas contables, atencion de clientes, cobranzas y seguimiento de cuentas corrientes, gestion de presenciales y online en afip - arbar - municipalidad y bancos.</p>
         </div>
      </div>
    </div>
  )
}

export default Expesp