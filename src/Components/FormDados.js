import styles from "./FormDados.module.css"
function FormDados(){
    return(
        <form className={styles}>
            <div>
                <label htmlFor="nome">Nome Completo:</label>
                <input type="text" id="nome" />
            </div>
            <div>
                <label htmlFor="mail">Email:</label>
                <input type="email" id="mail" />
            </div>
            <div>
                <button type="submit">Gerar Arquivo Texto</button>
            </div>
        </form>
    )
}
export default FormDados