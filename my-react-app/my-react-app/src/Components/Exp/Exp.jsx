
import styles from './Exp.module.css'

function Exp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1>Work Experience</h1></div>
        <div>
         <div className={styles.titulo}>
            <h2>Axa</h2>
            <p className={styles.tipo}>On-site</p>
            <p className={styles.fecha}>2023 - 2023</p>
         </div>
         <p className={styles.cargo}>Repair Technician</p>
         <p className={styles.textod}>I was one of the desktop, laptop, and printer repair technicians. I was responsible for repairing operating systems as well as installing software and hardware.</p>
         </div>
         <div>
         <div className={styles.titulo}>
            <h2>Janos Eventos</h2>
            <p className={styles.tipo}>On-site</p>
            <p className={styles.fecha}>2022 - 2023</p>
         </div>
         <p className={styles.cargo}>Event Venue Manager</p>
         <p className={styles.textod}>I was the weekly venue manager and responsible for tasks such as overseeing beverage stock and venue supplies in events.</p>
         </div>
      </div>
    </div>
  )
}

export default Exp
