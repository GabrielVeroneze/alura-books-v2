import { useEffect, useState } from 'react'
import { AbBotao } from 'ds-alurabooks'
import { IPedido } from '@/interfaces/IPedido'
import http from '@/http'
import styles from './Pedidos.module.scss'

const Pedidos = () => {
    const formatador = Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    const [pedidos, setPedidos] = useState<IPedido[]>([])

    useEffect(() => {
        http.get<IPedido[]>('pedidos')
            .then(resposta => setPedidos(resposta.data))
            .catch(erro => console.log(erro))
    }, [])

    return (
        <section className={styles.pedidos}>
            <h1 className={styles.titulo}>Meus pedidos</h1>
            {pedidos.map(pedido => (
                <div className={styles.pedido} key={pedido.id}>
                    <ul>
                        <li>
                            Pedido: <strong>{pedido.id}</strong>
                        </li>
                        <li>
                            Data do pedido:{' '}
                            <strong>
                                {new Date(pedido.data).toLocaleDateString()}
                            </strong>
                        </li>
                        <li>
                            Valor total:{' '}
                            <strong>
                                {formatador.format(pedido.total)}
                            </strong>
                        </li>
                        <li>
                            Entrega realizada em:{' '}
                            <strong>
                                {new Date(pedido.entrega).toLocaleDateString()}
                            </strong>
                        </li>
                    </ul>
                    <AbBotao texto="Detalhes" />
                </div>
            ))}
        </section>
    )
}

export default Pedidos
