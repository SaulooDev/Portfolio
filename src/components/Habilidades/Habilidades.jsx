import styles from'../Habilidades/Habilidades.module.css'



function Skills() {
    return (
      <div>
        

       <div className={styles.contorno}>

        <p className={styles.skill_title} id="skill_title">HABILIDADES</p>

<section className={styles.section1} id='section1'>
        <div className={styles.bloco1} >

            <p className={styles.linguagens}>Programação/Banco de Dados</p>
            <img className={styles.logo_html} src="img/html-icon.svg" alt="html" />
            <p className={styles.html_title}>HTML</p>

            <img className={styles.logo_css} src="img/icon-css.svg" alt="css" />
            <p className={styles.css_title}>CSS</p>

            <img className={styles.logo_js} src="img/logo-javascript.svg" alt="js" />
            <p className={styles.js_title}>Javascript</p>

            <img className={styles.logo_php} src="img/logo-php.svg" alt="php" />
            <p className={styles.php_title}>PHP</p>

            <img className={styles.logo_react} src="img/logo-react.svg" alt="React" />
            <p className={styles.react_title}>React</p>

            <img className={styles.logo_mysql} src="img/logo-mysql.svg" alt="mysql" />
            <p className={styles.mysql_title}>MySql</p>



        </div>
        </section>
        <div className={styles.bloco2}>
          <p className={styles.desing}>Desing</p>

          <img className={styles.logo_gimp} src="img/logo-gimp.svg" alt="gimp" />
          <p className={styles.gimp_title}>GIMP</p>

          <img className={styles.logo_figma} src="img/logo-figma.svg" alt="figma" />
          <p className={styles.figma_title}>Figma</p>

        </div>

        <div className={styles.bloco3}>
          <p className={styles.idioma}>Idiomas</p>

          <img className={styles.icon_usa} src="img/icon-usa.png" alt="EUA" />
          <p className={styles.usa_title}>Inglês (Básico) </p>

          <img className={styles.icon_spain} src="img/icon-spain.png" alt="Espanha" />
          <p className={styles.spain_title}>Espanhol (Básico) </p>



          </div>

        <div className={styles.bloco4}>
          <p className={styles.formacao}>Formação/Cursos</p>

          <ul className={styles.list}>
        <li> <strong> Desenvolvimento de Sistemas integrado ao ensino médio </strong>- ETEC
            (2021-2023)</li>

        <li> <strong> Inglês básico</strong> - Inovar Educacional (2019-2020)</li>

        <li> <strong> Conhecimento em Figma</strong> - Rocketseat</li>

      </ul>
          
          <p className={styles.t1}></p>
        </div>
       </div>
      </div>
    );
  }
  
  export default Skills;