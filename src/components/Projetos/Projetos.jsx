import styles from'../Projetos/Projetos.module.css'






function Projetos() {
    
    return (
      <div>
        
      <div className={styles.projeto_nav}>
        <p className={styles.projeto_title} id='projeto_title'>
            Projetos
        </p>
        </div>

<div className={styles.proj1_body}>
        <ul className={styles.proj1_desc}>
            <li>Nome: Castro News</li>
            <li>Sobre: A ideia é ideia um site de notícias básico onde o foco é o slide. 
                
            </li>
            <li>Linguagens:
            <img className={styles.img_proj1} src='' alt="CastroNews" />  
            </li>

            <li>Link do repositório no GitHub: </li>
        </ul>

        
        </div>
        
      </div>
    );
  }
  
  export default Projetos;