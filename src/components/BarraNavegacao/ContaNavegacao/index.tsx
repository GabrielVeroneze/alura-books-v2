import styles from './ContaNavegacao.module.scss'

interface ContaNavegacaoProps {
    texto: string
    imagem: string
    imagemAlt: string
    abrirModal: () => void
}

const ContaNavegacao = ({ texto, imagem, imagemAlt, abrirModal }: ContaNavegacaoProps) => {
    return (
        <button className={styles.botao} onClick={() => abrirModal()}>
            <img src={imagem} alt={imagemAlt} />
            {texto}
        </button>
    )
}

export default ContaNavegacao
