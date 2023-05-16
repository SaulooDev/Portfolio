import styles from'../Paineis/Painel.esquerdo.module.css'



function Painel_esquerdo() {
  return (
    <div>
      <div className={styles.painel}>
      <p className={styles.title}>Olá, eu sou o Saulo!</p>   
      <p className={styles.simbolo}>&lt;/&gt;</p>

      <p className={styles.hastag1}> #Programador</p>
      <p className={styles.htg2}> #Desing</p>
      <p className={styles.htg3}> #Junior</p>
      
      <div className={styles.linha1}></div>
      <div className={styles.linha2}></div>
      <div className={styles.linha3}></div>
      
      <div>
      <a href='https://github.com/SaulooDev/SaulooDev'><img className={styles.git} src='img/github.svg 'alt="Github"  /> </a>
      </div>
      <div>
      <a href='https://www.linkedin.com/in/saulo-castro-705b65241/'><img className={styles.linkedin} src='img/linkedin.svg' alt="Linkedin" /></a>
      </div>
      <div>
      <a href='https://www.instagram.com/saulo__castro/'><img className={styles.insta} src='img/instagram.svg' alt="Instagram" /></a>
      </div>
      <div>
      < a href='mailto:saulo.castrodev@gmail.com '><img className={styles.gmail} src='img/gmail.svg' alt="Gmail" /></a>
      </div>


</div>
    </div>
  );
}

export default Painel_esquerdo;
