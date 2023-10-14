// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import Tag from '@/components/common/Tag'

// Styles
import style from '@/styles/Sobre.module.scss'

// Assets
import MulherLendo from '../assets/mulher-lendo.webp.png'
import MulherEstudando from '../assets/mulher-estudando.webp.png'
import MulherAcenando from '../assets/mulher-acenando.webp.png'
import ITEMS_SOBRE from '@/utilities/ArraySlideSobre'
import Carousel from '@/components/Carrossel'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Menina de UX</title>
        <meta name="description" content="Tudo sobre o projeto Menina de UX." />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id={style.about}>
          <div className={style.containerTitle}>
            <Title type="Xl">Sobre a Menina de UX</Title>
            <p>Saiba mais sobre como essa iniciativa surgiu!</p>
          </div>

          <div className={style.aboutMore}>
            <div className={style.image}>
              <img src={MulherAcenando.src} alt="Menina acenando" />
            </div>

            <div className={style.descAboutMore}>
              <Title type="Sm">Primeiramente, seja bem vindo(a)!</Title>
              <p>
                Fico muito feliz pois sei que, se você chegou até essa página, é
                porque quer saber mais sobre o projeto{' '}
                <Tag type="Strong">Menina de UX</Tag>. Significa muito para mim!
              </p>

              <p>Vou te contar um pouquinho da minha história!</p>
            </div>
          </div>

          <div className={style.aboutMoreWrap}>
            <div className={style.image}>
              <img src={MulherEstudando.src} alt="Menina lendo um livro." />
            </div>

            <div className={style.descAboutMore}>
              <Title type="Sm">Tudo começou em 2021...</Title>
              <p>
                Quando entrei na área de UI/UX Design, fiquei apaixonada e
                queria muito poder{' '}
                <Tag type="Strong">mostrar os meus trabalhos por aí</Tag>, além
                de que eu seguia <Tag type="Strong">profissionais da área</Tag>{' '}
                no LinkedIn e adorava as dicas que eles davam
              </p>

              <p>
                Então decidi criar um perfil no instagram para poder exibir meus
                projetos e também ensinar coisas para as pessoas
              </p>

              <p>
                Depois de dias pensando num nome legal, cheguei em{' '}
                <Tag type="Strong">Menina de UX</Tag> e adorei!
              </p>
            </div>
          </div>

          <div className={style.aboutMore}>
            <div className={style.image}>
              <img src={MulherLendo.src} alt="Menina lendo um livro." />
            </div>

            <div className={style.descAboutMore}>
              <Title type="Sm">Só que eu queria mais que isso</Title>
              <p>
                Com o tempo, fui percebendo que eu sempre gostei de educação e
                queria ser uma influência nessa área, poder ajudar outras
                pessoas com o que eu sabia (e ainda ia aprender).
              </p>

              <p>
                Foquei para que a Menina de UX desse dicas e ensinasse coisas
                legais sobre design e carreira
              </p>

              <p>E hoje estou aqui, contando essa história para você!</p>
            </div>
          </div>

          <div className={style.goals}>
            <div className={style.titleGoals}>
              <Title type="Xl">Objetivos da Menina de UX</Title>
            </div>

            <Carousel array={ITEMS_SOBRE} columns="two" size="Default" />
          </div>
        </section>
      </main>
    </>
  )
}
