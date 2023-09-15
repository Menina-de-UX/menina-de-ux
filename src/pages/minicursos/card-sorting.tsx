// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'

// Styles
import styled from '@/styles/Home.module.scss'
import styledCardSorting from '@/styles/card-sorting.module.scss'

// Utilities
import Image from 'next/image'
import heroImage from '@/../public/estude/mulher-estudando.png'
import welcomeImage from '@/../public/miniCurso/mulher-acenando.png'
import Tag from '@/components/common/Tag'
import Link from 'next/link'
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
        <section className={`container ${styledCardSorting.sectionContainer}`}>
          <div className={styledCardSorting.texts}>
            <Title type="Default">Card Sorting</Title>
            <SubTitle type="Lg">
              Conheça mais sobre essa ferramenta bastante utilizada durante
              <br /> para trabalhar a arquitetura de informação de um site ou
              aplicativo!
            </SubTitle>
          </div>
          <Image src={heroImage} alt="mulher estudando" />
        </section>
        <section className={`${styledCardSorting.sectionWhite}`}>
          <div className={`container ${styledCardSorting.sectionContainer}`}>
            <Image src={welcomeImage} alt="mulher acenando" />
            <div>
              <Title type="Sm">Seja bem-vindo(a)!</Title>
              <div className={styledCardSorting.containerSubtitle}>
                <SubTitle type="Lg">
                  Esse é um mini curso (mini mesmo) sobre Card Sorting
                </SubTitle>
                <SubTitle type="Lg">
                  Você vai entender o que ele é, o que faz e qual a sua
                  importância na hora de <br /> construir um projeto
                </SubTitle>
                <SubTitle type="Lg">
                  Pronto para comprar post-its? Vamos lá!
                </SubTitle>
              </div>
            </div>
          </div>
        </section>
        <section className={`container ${styledCardSorting.sectionContainer}`}>
          <div>
            <Title type="Sm">Card Sorting</Title>
            <div className={styledCardSorting.texts}>
              <SubTitle type="Lg">
                Card Sorting (ordenação de cartões) é uma ferramenta de design
                utilizada para estruturar a arquitetura de informação, onde, por
                meio de cartões ou post-its com conteúdos, os usuários fazem
                agrupamentos, organizando os itens de acordo com seu mapa
                mental.
              </SubTitle>
              <SubTitle type="Lg">
                A intenção é que, ao fazer isso, ele colabore com o
                desenvolvimento de soluções que sejam mais amigáveis para seu
                entendimento. Essa estruturação é essencial ao desenvolver um
                site, por exemplo. O conteúdo fica organizado de forma mais
                intuitiva para o usuário, proporcionando uma experiência melhor
                de navegação.
              </SubTitle>
              <SubTitle type="Lg">
                Duas grandes vantagens desta ferramenta são o baixo custo e
                rapidez na aplicação. Além do fato dela ajudar a validar
                taxonomia (termos e nomenclaturas) do seu projeto, para entender
                se estão, realmente, centradas na pessoa usuária.
              </SubTitle>
              <div>
                <SubTitle type="Default">
                  <Tag type="Strong">Artigos úteis:</Tag>
                </SubTitle>
                <ul className={styledCardSorting.listArticles}>
                  <li className={styledCardSorting.article}>
                    <SubTitle type="Default">
                      <Link href="#">
                        Card Sorting: como descobrir o modelo mental de
                        organização de conteúdo (Wagner Guimarães)
                      </Link>
                    </SubTitle>
                  </li>
                  <li className={styledCardSorting.article}>
                    <SubTitle type="Default">
                      <Link href="#">
                        Card Sorting: O que é e Como utilizar (Guia Completo)
                        (FIA)
                      </Link>
                    </SubTitle>
                  </li>
                  <li className={styledCardSorting.article}>
                    <SubTitle type="Default">
                      <Link href="#">
                        Card Sorting: o que é e como usar (Mergo)
                      </Link>
                    </SubTitle>
                  </li>
                  <li className={styledCardSorting.article}>
                    <SubTitle type="Default">
                      <Link href="#">
                        Entendendo o que é o Card Sorting (Dani Ferreira Brasil)
                      </Link>
                    </SubTitle>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Image src={welcomeImage} alt="mulher acenando" />
        </section>
        <section className={`${styledCardSorting.sectionWhite}`}>
          <div className={`container ${styledCardSorting.sectionContainer}`}>
            <div>
              <Title type="Sm">Tipos de Card Sorting</Title>
              <ul className={styledCardSorting.texts}>
                <li className={styledCardSorting.typeCard}>
                  <Title type="Xs">Card Sorting aberto</Title>
                  <SubTitle type="Lg">
                    Indicado para quando se deseja descobrir como as pessoas
                    agrupam o conteúdo e quais rótulos que elas dão para cada
                    categoria. Para aplicar esse método é preciso solicitar às
                    pessoas participantes que organizem os cartões com os
                    conteúdos ou funcionalidade em grupos que mais façam sentido
                    para elas. Em seguida, peça que deem nomes para esses
                    grupos.
                  </SubTitle>
                </li>
                <li className={styledCardSorting.typeCard}>
                  <Title type="Xs">Card Sorting fechado</Title>
                  <SubTitle type="Lg">
                    Funciona melhor quando já se tem um conjunto de grupos ou
                    categorias estabelecidos e você deseja entender como as
                    pessoas agrupam os itens de cada conteúdo dentro das
                    categorias existentes. Para realizá-lo, peça às pessoas
                    usuárias que coloquem os cartões que lhes forem entregues
                    dentro dos grupos primários já definidos.
                  </SubTitle>
                </li>
                <li className={styledCardSorting.typeCard}>
                  <Title type="Xs">Card Sorting híbrido</Title>
                  <SubTitle type="Lg">
                    Por fim, essa forma permite ver se as categorias que foram
                    propostas estão fazendo sentido para o seu público. Caso não
                    esteja, é possível criar nomes de novos grupos, refazendo o
                    agrupamento da maneira que achar melhor ou mais coerente.
                  </SubTitle>
                </li>
              </ul>
            </div>
            <Image src={welcomeImage} alt="mulher acenando" />
          </div>
        </section>
        <section className={`container ${styledCardSorting.sectionContainer}`}>
          <div className={styledCardSorting.texts}>
            <Title type="Sm">Card Sorting e Design Thinking</Title>
            <SubTitle type="Lg">
              A abordagem usada no design thinking prevê um olhar centrado no
              cliente desde o começo. Para isso, desde a fase de imersão até a
              implementação, são usadas diversas ferramentas de design que
              colaboram com esse objetivo.
            </SubTitle>
            <SubTitle type="Lg">
              O Card Sorting pode ser uma das ferramentas se o produto a ser
              desenvolvido envolver sistemas, plataformas ou apps.
            </SubTitle>
            <SubTitle type="Lg">
              Como uma ferramenta rápida e barata de design, o Card Sorting
              permitirá alcançar um MVP (Mínimo Produto Viável) mais próximo das
              necessidades e anseios dos usuários. Contudo, o refinamento mesmo
              só será feito na etapa de validação do protótipo. Isso garante com
              que o Card Sorting possa ser utilizado em dois momentos nesse
              processo.
            </SubTitle>
            <SubTitle type="Lg">
              Ou seja, é possível começar com o Card Sorting aberto e, depois,
              partir para a versão fechada, conforme avance no desenvolvimento
              do produto.
            </SubTitle>
          </div>
          <div>
            <Image src={welcomeImage} alt="mulher acenando" />
          </div>
        </section>
        <section className={`${styledCardSorting.sectionWhite}`}>
          <div className={`container ${styledCardSorting.sectionContainer}`}>
            <div className={styledCardSorting.texts}>
              <Title type="Sm">Vantagens e Desvantagens</Title>
              <SubTitle type="Lg">
                Conforme já citado, duas grandes vantagens dessa ferramenta são
                o baixo custo e rapidez na aplicação.
              </SubTitle>
              <SubTitle type="Lg">
                Ao fazer um site ou sistema que considere o mapa mental do
                usuário, é esperado também um ganho de produtividade. A
                tendência aponta para tudo ser encontrado de forma mais rápida e
                assertiva, permitindo que o usuário avance em sua jornada.
              </SubTitle>
              <SubTitle type="Lg">
                É uma ferramenta bem simples de aplicar, que ajuda a validar
                termos e nomenclaturas (taxonomia) e que está centrada no
                usuário.
              </SubTitle>
              <SubTitle type="Lg">
                Por outro lado, a principal desvantagem da ferramenta é que
                depende muito da forma como é aplicada. Assim, os resultados
                podem ter uma grande variação. Além disso, a ferramenta depende
                também da habilidade de quem aplica para que sejam extraídos dos
                usuários análises mais profundas. Caso contrário, o resultado
                obtido poderá ser considerado superficial.
              </SubTitle>
              <SubTitle type="Lg">
                Outro ponto é que a análise de resultados pode ser complexa e
                tomar muito tempo, pois requer a comparação entre os mapas
                mentais para identificar padrões. E, mais uma vez, isso
                dependerá da experiência do analista em fazer essas
                interpretações e tradução para padrões.
              </SubTitle>
            </div>
            <Image src={welcomeImage} alt="mulher acenando" />
          </div>
        </section>
        <section className={`container ${styledCardSorting.sectionContainer}`}>
          <div className={styledCardSorting.texts}>
            <Title type="Sm">Como utilizar o Card Sorting?</Title>
            <SubTitle type="Lg">
              Você já sabe o que é, como é sua estrutura, quando usá-lo e quais
              os benefícios do Card Sorting para o seu projeto. Chegou a hora de
              saber como colocá-lo, finalmente, em prática!
            </SubTitle>
            <SubTitle type="Lg">
              O Card Sorting pode ser feito em um espaço físico ou remotamente
              através de vídeo chamada. Se acontecer remotamente, você poderá
              configurar um arquivo e utilizar o Optimal Workshop, o Miro ou o
              Figma como ferramentas para a técnica. Se for presencialmente, o
              ideal é reservar um espaço com mesa, cadeira, post-its, papel,
              canetas, cards, notebook ou outros materiais que você ache
              necessário constar.
            </SubTitle>
            <SubTitle type="Lg">
              Além disso, pode ser aplicado individualmente ou em grupos. Caso
              opte por seguir no individual, selecione, pelo menos, 15 pessoas.
              Se preferir seguir com grupos, pode trabalhar em testes com 3 a 5
              pessoas simultaneamente.
            </SubTitle>
            <SubTitle type="Lg">
              Para utilizar o Card Sorting é importante definir os seguintes
              aspectos:
            </SubTitle>
            <div>
              <ul className={styledCardSorting.listToUse}>
                <li className={styledCardSorting.typeCard}>
                  <Title type="Xs">Conteúdo</Title>
                  <SubTitle type="Lg">
                    Deve refletir o que você pretende avaliar. O ideal é listar
                    os tópicos dos conteúdos que são mais acessados ou
                    necessários para os usuários. Exemplo: contato, segunda via
                    de boleto, manual de instruções, etc.
                  </SubTitle>
                </li>
                <li className={styledCardSorting.typeCard}>
                  <Title type="Xs">Card Sorting fechado</Title>
                  <SubTitle type="Lg">
                    Dê preferência ao usuário final. Se não for possível, use
                    pessoas que que reflitam seu perfil de cliente. Essa amostra
                    deve girar em torno de 10 pessoas.
                  </SubTitle>
                </li>
                <li className={styledCardSorting.typeCard}>
                  <Title type="Xs">Cartões</Title>
                  <SubTitle type="Lg">
                    Devem refletir o conteúdo, em frases curtas e rápidas de
                    serem lidas e compreendidas. É possível aliar imagens,
                    usando a escrita em uma face e a figura no verso para
                    facilitar a compreensão.
                  </SubTitle>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image src={welcomeImage} alt="mulher acenando" />
          </div>
        </section>
      </main>
    </>
  )
}
