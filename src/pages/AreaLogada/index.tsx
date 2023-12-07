import { Link, Outlet } from 'react-router-dom'
import styles from './AreaLogada.module.scss'

const AreaLogada = () => {
    return (
        <>
            <h1 className={styles.titulo}>Minha conta</h1>
            <section className={styles.painel}>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/area-logada/pedidos">
                            Pedidos
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/area-logada/trocas">
                            Trocas
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/area-logada/cupons">
                            Cupons
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.link} to="/area-logada/dados">
                            Seus dados
                        </Link>
                    </li>
                </ul>
                <div className="conteudo">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default AreaLogada
