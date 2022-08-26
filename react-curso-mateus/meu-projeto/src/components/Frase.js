import styles from './Frase.module.css'

function Frase(){
    return(
        <>
<div className={styles.fraseContainer}>
    <h1>Testando CSS</h1>
    </div>

        <div className={styles.fraseComponente}>

<h4>Este é um componente de teste</h4>
   <p>Este é outro componente de teste</p>
        </div>
        </>
    )
}


export default Frase