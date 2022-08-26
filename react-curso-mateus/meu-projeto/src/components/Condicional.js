import {useState} from 'react'
import styles from './Frase.module.css'






function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("email")
    }

    function limparEmail(e){
        
        setUserEmail('')
        console.log("email")
    }


  return (
   
    <div className={styles.fundo}>
     
   <h2>Cadastre seu e-mail</h2>
  <form>
    <input type="email" placeholder="Digite Seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
    <button onClick={enviarEmail}>Enviar e-mail</button>
  </form>
  {userEmail && ( 
    <div>
      <p> O e-mail do usuário é {userEmail}</p> 
      <button  onClick={limparEmail}>Limpar</button>
    </div>
  )}
    </div>
  );
}


export default Condicional;