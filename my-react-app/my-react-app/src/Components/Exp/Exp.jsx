
import styles from './Exp.module.css'

function Exp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1 className={styles.h1}>Work Experience</h1></div>
        <div>
         <div className={styles.titulo}>
            <h2 className={styles.h1}>Accounting Firm Dra. Medvedev</h2>
            <p className={styles.tipo}>On-site</p>
            <p className={styles.fecha}>2024 (July) - 2025 (January)</p>
         </div>
         <p className={styles.cargo}>IT & Web Developer</p>
         <p className={styles.textod}> In the IT department, I managed networks, provided technical support, administered the database, handled data entry, and performed computer maintenance.  
         In the web development area, I was responsible for managing the company's website and social media accounts.</p>
         </div>
        <div>
         <div className={styles.titulo}>
            <h2 className={styles.h1}>Axa</h2>
            <p className={styles.tipo}>On-site</p>
            <p className={styles.fecha}>2023(March) - 2023(August)</p>
         </div>
         <p className={styles.cargo}>Repair Technician</p>
         <p className={styles.textod}>I was one of the desktop, laptop, and printer repair technicians. I was responsible for repairing operating systems as well as installing software and hardware.</p>
         </div>
         <div>
         <div className={styles.titulo}>
            <h2>Janos Eventos</h2>
            <p className={styles.tipo}>On-site</p>
            <p className={styles.fecha}>2022(November) - 2022(December)</p>
         </div>
         <p className={styles.cargo}>Event Venue Manager</p>
         <p className={styles.textod}>I was the weekly venue manager and responsible for tasks such as overseeing beverage stock and venue supplies in events.</p>
         </div>
         <div>
         <div className={styles.titulo}>
            <h2>Accounting Firm Dra. Medvedev</h2>
            <p className={styles.tipo}>On-site</p>
            <p className={styles.fecha}>2017 (January) - 2021 (October)</p>
         </div>
         <p className={styles.cargo}>Data Entry, Customer Service, and IT</p>
         <p className={styles.textod}>Data entry in different accounting systems, customer service, collections, and accounts receivable follow-up. Handling of in-person and online procedures with AFIP, ARBA, municipality, and banks.</p>
         </div>
      </div>
    </div>
  )
}

export default Exp
