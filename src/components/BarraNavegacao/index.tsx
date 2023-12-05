import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import styles from './BarraNavegação.module.scss'

const BarraNavegacao = () => {
    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to="/">
                    <img src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>
            <div className={styles.navegacao}>
                <h4 className={styles.titulo}>Categorias</h4>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Frontend
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Programação
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Business
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default BarraNavegacao
