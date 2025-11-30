import { Link } from "react-router-dom"
import logo from '../assets/logo.png';
import styles from './Logo.module.css'

function Logo() {
    return (
        <Link to='/'>
            <img src={logo} alt="Logo" className={styles.logo}/>
        </Link>
    )
}

export default Logo
