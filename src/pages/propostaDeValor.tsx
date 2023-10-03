// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Image from 'next/image'

// Styles
import styled from '@/styles/Home.module.scss'
import styles from '@/styles/PropostaDeValor.module.scss'

// Utilities
// Hooks
// Interfaces

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styled.containerHome}>
        <section className={`container ${styles.proposta}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaText}>
              <div className={styles.textStyle}>
                <p>
                  <a href="/estude" target="_blank" className={styles.textA}>
                    Estudos
                  </a>{' '}
                  / Proposta de Valor
                </p>
              </div>
              <br />
              <Title type="Default">Proposta de Valor</Title>
              <br />
              <SubTitle type="Lg">
                O que é, como fazer e como ela pode mudar o seu negócio. Hoje,
                no Menina de UX repórter!
              </SubTitle>
            </div>
            <Image
              className={styles.img}
              src="./Inicio/mulher-estudando.webp.svg"
              width={428.39}
              height={428.39}
              alt="Imagem de uma mulher estudando"
              priority={true}
            />
          </div>
        </section>

        <section className={`container ${styles.bemVindos}`}>
          <div className={styles.propostaContainer}>
            <Image
              className={styles.img}
              src="./Inicio/mulher-estudando.webp.svg"
              width={428.39}
              height={428.39}
              alt="Imagem de uma mulher estudando"
            />
            <div className={styles.bemVindosText}>
              <Title type="Default">Seja bem-vindo(a)!</Title>
              <br />
              <SubTitle type="Lg">
                Esse é um mini curso sobre Proposta de Valor
              </SubTitle>
              <br />
              <SubTitle type="Lg">
                Logo abaixo você vai aprender sobre o que ele é, como fazer e
                qual a importância dele num projeto!
              </SubTitle>
              <br />
              <SubTitle type="Lg">Preparado(a)? Vamos lá!</SubTitle>
            </div>
          </div>
        </section>

        <section className={`container ${styles.valor}`}>
          <div className={styles.propostaContainer}>
            <div className={styles.propostaTextValor}>
              <Title type="Default">Proposta de Valor</Title> <br />
              <SubTitle type="Lg">
                O objetivo da proposta de valor é dar para o usuário uma ideia
                bem clara de como o negócio pode ser relevante.
              </SubTitle>
              <br />
              <SubTitle type="Lg">
                De acordo com David Aaker, no livro
                <a
                  href="https://www.amazon.com.br/Construindo-Marcas-Fortes-David-Aaker/dp/8560031952"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  {' '}
                  Construindo Marcas Fortes
                </a>
                :
              </SubTitle>
              <SubTitle type="Lg">
                “A proposta de valor é uma afirmação dos benefícios funcionais,
                emocionais e de auto-expressão oferecidos pela marca que
                proporcionam valor ao cliente”.
              </SubTitle>
              <br />
              <SubTitle type="Lg">
                E uma vez definida a sua proposta de valor, você deve
                transmiti-la para a pessoa usuária de forma clara, transparente
                e com linguagem adequada.
              </SubTitle>{' '}
              <br />
              <SubTitle type="Lg">Artigos úteis:</SubTitle>
              <SubTitle type="Lg">
                <a
                  href="https://uxdesign.blog.br/como-criar-uma-boa-proposta-de-valor-para-o-seu-produto-67b2188df4af"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  - Como criar uma boa proposta de valor para o seu produto
                  (Mergo)
                </a>
                <br />
                <a
                  href="https://fia.com.br/blog/card-sorting-o-que-e-e-como-utilizar-guia-completo/"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  - #PegaaDica: Canvas de proposta de valor bem explicadinho!
                  (Mergo)
                </a>{' '}
                <br />
                <a
                  href="https://brasil.uxdesign.cc/a-import%C3%A2ncia-em-definir-a-proposi%C3%A7%C3%A3o-de-valor-de-um-produto-e8c5c70a46d6"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  - A importância em definir a Proposição de Valor de um produto
                  (Fabricio Teixeira)
                </a>{' '}
                <br />
                <a
                  href="https://medium.com/@deployexperience/como-inovar-usando-o-canvas-de-proposta-de-valor-95e0e34280c0"
                  target="_blank"
                  className={styles.textA}
                  rel="noreferrer"
                >
                  - Como inovar usando o Canvas de Proposta de Valor (Deploy UX)
                </a>
              </SubTitle>
            </div>
            <Image
              className={styles.img}
              src="./Inicio/mulher-estudando.webp.svg"
              width={428.39}
              height={428.39}
              alt="Imagem de uma mulher estudando"
            />
          </div>
        </section>
      </main>
    </>
  )
}
