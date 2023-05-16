import Painel_esquerdo from "./components/Paineis/Painel_esquerdo"
import Painel_direto from "./components/Paineis/Painel_direito"
import Skills from "./components/Habilidades/Habilidades";
import './styles/App.css'
import Projetos from "./components/Projetos/Projetos";


function App() {


  return (
    
      <div id="portfolio">
      <section className="section1"> 
      <Painel_esquerdo/>
      <Painel_direto/>
      </section>

      <section className="section2"> 
      <Skills/>
      </section>
     
      
      
      </div>
      
     
  )
}

export default App;
