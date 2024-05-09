import { Link } from "react-router-dom"
import styles from "./Home.module.css"

function Home() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link to={"/"}>Inicio</Link></li>
                <li className={styles.li}><Link to={"/formdados"}>Form</Link></li>
            </ul>
        </nav>
    )
}
export default Home