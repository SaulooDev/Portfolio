import styles from'../Paineis/Painel.direito.module.css'






function Painel_direto() {

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
    return (
      <div>
       <div className={styles.paineld}>
       <div className={styles.eu}><img className={styles.foto} src='/img/Eu.jpeg' alt="Eu :)" /></div>

        <div className={styles.web}> <p>Web Develop</p></div>
        
        <p className={styles.name}>Saulo Castro</p>
        <p className={styles.desc}>
        Estou cursando Desevolvimento de Sistemas na ETEC. 
        enho experiência fazendo alguns projetos em minha escola como um site de noticias(simples), 
        CRUD de uma locadora de carros, entre outros. Em Desing, tenho habilidades no Figma e GIMP.

        </p>

        <button className={styles.habilidades} onClick={() => scrollToSection('#section1')} >HABILIDADES</button>
        

       </div>
      </div>
    );
  }
  
  export default Painel_direto;