import { useState } from 'react'
import { AbCampoTexto } from 'ds-alurabooks'
import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import LivrosDestaque from '@/components/LivrosDestaque'
import TagsCategorias from '@/components/TagsCategorias'
import NewsLetter from '@/components/Newsletter'
import styles from './Home.module.scss'

const Home = () => {
    const [busca, setBusca] = useState<string>('')

    const lancamentos = [
        {
            autor: 'Tárcio Zemel',
            descricao: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
            imagem: '/imagens/livros/css.jpg',
            nome: 'CSS Eficiente',
            preco: 29.9,
        },
        {
            autor: 'Sass',
            descricao: 'Aprendendo pré-processadores CSS',
            imagem: '/imagens/livros/sass.jpg',
            nome: 'Natan Souza',
            preco: 29.9,
        },
        {
            autor: 'Diego Eis',
            descricao: 'O caminho das pedras para ser um dev Front-End',
            imagem: '/imagens/livros/frontend.jpg',
            nome: 'Guia Front-End',
            preco: 29.9,
        },
    ]

    const maisVendidos = [
        {
            autor: 'Thiago da Silva Adriano',
            descricao: 'Melhore suas aplicações JavaScript',
            imagem: '/imagens/livros/typescript.jpg',
            nome: 'Guia prático de TypeScript',
            preco: 29.9,
        },
        {
            autor: 'Akira Hanashiro',
            descricao: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
            imagem: '/imagens/livros/graphql.jpg',
            nome: 'GraphQL',
            preco: 29.9,
        },
        {
            autor: 'Vinícius Carvalho',
            descricao: 'PostgreSQL',
            imagem: '/imagens/livros/postgre.jpg',
            nome: 'PostgreSQL',
            preco: 29.9,
        },
    ]

    return (
        <section className={styles.home}>
            <Banner
                subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!"
                titulo="Já sabe por onde começar?"
            >
                <form className={styles.buscar}>
                    <AbCampoTexto
                        placeholder="Qual será sua próxima leitura?"
                        value={busca}
                        onChange={setBusca}
                        darkmode={true}
                        placeholderAlign="center"
                    />
                </form>
            </Banner>
            <Titulo texto="ÚLTIMOS LANÇAMENTOS" />
            <LivrosDestaque livros={lancamentos} />
            <Titulo texto="MAIS VENDIDOS" />
            <LivrosDestaque livros={maisVendidos} />
            <TagsCategorias />
            <NewsLetter />
        </section>
    )
}

export default Home
