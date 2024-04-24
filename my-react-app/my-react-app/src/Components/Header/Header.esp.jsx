
import styles from './Header.module.css'

function Headeresp() {

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div><h1 className={styles.h1}>Gaston Vergagni</h1></div>
        <div className={styles.textod}><p>Soy un desarrollador full-stack centrado en abordar nuevos desafíos y mejorar día a día</p></div>
        <div className={styles.loc}>
          <img src='https://cdn-icons-png.flaticon.com/128/900/900782.png' alt='Location Icon' className={styles.mundo}/>
          <a href='https://www.google.com/maps/place/San+Miguel,+Buenos+Aires+Province/@-34.5735182,-58.7507312,12.5z/data=!4m6!3m5!1s0x95bcbd7f8ed7ed6f:0xa141f13ddb761d51!8m2!3d-34.543055!4d-58.7118577!16s%2Fm%2F025v7n_?entry=ttu' target='_blank' className={styles.linkmundo}>San Miguel, Buenos Aires, Argentina</a>
        </div>
        <div className={styles.link}>
          <a href='https://www.linkedin.com/in/gaston-vergagni-a87b3b29b/' target='_blank' rel='noopener noreferrer'>
            <img src='https://cdn-icons-png.flaticon.com/128/3128/3128219.png' alt='LinkedIn Icon' className={styles.linkredes} />
          </a>
          <a href='https://github.com/Gastonvg' target='_blank' rel='noopener noreferrer'>
            <img src='https://cdn-icons-png.flaticon.com/128/25/25231.png' alt='Location Icon' className={styles.linkredes}/>
          </a>
          <a href='mailto:gaston.vergagni97@gmail.com' target='_blank' rel='noopener noreferrer'>
             <img src='https://cdn-icons-png.flaticon.com/128/646/646135.png' alt='Location Icon' className={styles.linkredes}/>
          </a>
          <a href='https://wa.me/+54911666137257' target='_blank' rel='noopener noreferrer'>
             <img src='https://cdn-icons-png.flaticon.com/128/597/597177.png' alt='Location Icon' className={styles.linkredes}/>
          </a>
        </div>
      </div>
      <div>
      <img src="https://avatars.githubusercontent.com/u/116928445?v=4" alt="Profile" className={styles.image}/>
      </div>
    </div>
  )
}

export default Headeresp
