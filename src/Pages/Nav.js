import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link to={"/"}>Inicio</Link></li>
                <li className={styles.li}><Link to={"/formdados"}>Form</Link></li>
            </ul>
        </nav>
    )
}
export default Nav