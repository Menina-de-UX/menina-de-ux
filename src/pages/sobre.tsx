// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import Tag from '@/components/common/Tag'

// Styles
import style from '@/styles/Sobre.module.scss'

// import ITEMS_SOBRE from '@/utilities/ArraySlideSobre'
import { Carousel, CarouselItem } from '@/components/Carousel'

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
              <img
                src="./Sobre/mulher-acenando.webp.png"
                alt="Menina acenando"
              />
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
              <img
                src="./Sobre/mulher-estudando.webp.png"
                alt="Menina lendo um livro."
              />
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
              <img
                src="./Sobre/mulher-lendo.webp.png"
                alt="Menina lendo um livro."
              />
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

            <Carousel pagination={false}>
              <CarouselItem>
                <div className={style.contentCarousel}>
                  <div className={style.text}>
                    <Title type="Xs">
                      Ensinar e trazer conteúdos incríveis
                    </Title>
                    <p>
                      A Menina de UX busca poder ajudar meninas que queiram
                      começar suas carreiras em design e/ou tecnologia.
                    </p>
                    <p>
                      <Tag type="Strong">Por quê?</Tag>
                      <br />
                      Porque ela acredita que qualquer menina pode ser o que
                      quiser e que podemos aprender qualquer coisa.
                    </p>
                    <p>
                      <Tag type="Strong">Como?</Tag>
                      <br />
                      Criando aulas, apostilas e conteúdos sobre UX e carreira
                      de forma totalmente gratuita e online!
                    </p>
                  </div>
                  <img
                    src="./Sobre/menina-com-professora.webp"
                    alt="Menina com uma professora."
                    className={style.img}
                  />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className={style.contentCarousel}>
                  <div className={style.text}>
                    <Title type="Xs">
                      Levar ensino gratuito e de qualidade para todos
                    </Title>
                    <p>
                      O site da Menina de UX é uma das maiores bibliotecas de
                      cursos gratuitos, além de estar sempre por dentro de
                      processos seletivos para cursos de tecnologia em grandes
                      empresas. <br /> <br />
                      Além disso, as pessoas podem ficar por dentro de
                      lançamentos de cursos em tempo real graças ao
                      <Tag type="Strong"> canal no Telegram</Tag>!
                    </p>
                  </div>
                  <img
                    src="./Sobre/menina-com-certificacao.webp"
                    alt="Menina com uma professora."
                    className={style.img}
                  />
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className={style.contentCarousel}>
                  <div className={style.text}>
                    <Title type="Xs">Trazer economia</Title>
                    <p>
                      Com a divulgação de cursos, processos seletivos e a
                      criação das aulas e apostilas, acaba não sendo necessário
                      (a não ser que você queira fazer) comprar um curso
                      caríssimo. <br /> <br />
                      As únicas coisas em que você vai precisar investir são o
                      seu tempo e o seu esforço!
                    </p>
                  </div>
                  <img
                    src="./Sobre/homem-com-cofrinho.webp"
                    alt="Homem com cofre."
                    className={style.img}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className={style.contentCarousel}>
                  <div className={style.text}>
                    <Title type="Xs">Capacitar jovens meninas</Title>
                    <p>
                      Ajudando meninas como eu, quero poder trazer mais meninas
                      para o mundo da tecnologia e transformar artistas de
                      telinhas em UI/UX Designers!
                    </p>
                  </div>
                  <img
                    src="./Sobre/menina-poderosa.webp"
                    alt="Girl power!"
                    className={style.img}
                  />
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </section>
      </main>
    </>
  )
}
