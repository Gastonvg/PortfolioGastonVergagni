import React, { useState } from 'react';
import Style from './App.module.css'
import About from './Components/About/About'
import Education from './Components/Edu/Education'
import Exp from './Components/Exp/Exp'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'


import Aboutesp from './Components/About/Abouts.esp'
import Educationesp from './Components/Edu/Education.esp'
import Expesp from './Components/Exp/Exp.esp'
import Headeresp from './Components/Header/Header.esp'
import Projectsesp from './Components/Projects/Projects.esp'
import Skillsesp from './Components/Skills/Skills.esp'



function App() {
  const [language, setLanguage] = useState('eng'); 
  const toggleLanguage = () => {
    setLanguage(language === 'eng' ? 'esp' : 'eng');
  };


  return (
    <div className={Style.fondo}>
      <div className={Style.container}>
        <div className={Style.boton}>
           <p className={Style.textoboton}>English</p>
           <div className={Style.botonuevo}>
              <input type="checkbox" class={Style.themecheckbox} onClick={toggleLanguage}/>
           </div>
           <p className={Style.textoboton}>Español</p> 
        </div>
        {language === 'eng' ? <Header /> : <Headeresp />}
        {language === 'eng' ? <About /> : <Aboutesp />}
        {language === 'eng' ? <Exp /> : <Expesp />}
        {language === 'eng' ? <Education /> : <Educationesp />}
        {language === 'eng' ? <Skills /> : <Skillsesp />}
        {language === 'eng' ? <Projects /> : <Projectsesp />}
      </div>
    </div>
  )
}

export default App
