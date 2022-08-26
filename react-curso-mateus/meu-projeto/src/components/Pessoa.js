import App from "../App"
import HelloWord from "./HelloWord"
import SayMyName from "./SayMyName"
import styles from './Frase.module.css'

function Pessoa({nome, idade, profissão, foto}){
    return(
        <>
        <div className={styles.fraseComponente}>
   

    <h2>Nome:{nome}</h2>
    
    
        </div>
        <div >
        <img src={foto} alt={nome}/>

        <div className={styles.idades  }>
        <p>Idade: {idade}</p>
    <p>Profissao: {profissão}</p>

       </div>
        </div>
        </>
    )
    
}

export default Pessoa
 