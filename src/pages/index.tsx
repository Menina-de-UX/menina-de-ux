// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Button from '../components/common/Button'
import Image from 'next/image'
import Card from '@/components/common/Card'

// Styles
import styles from '@/styles/Index.module.scss'
import styled from '@/styles/Home.module.scss'

// Utilities
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import {
  inicialCardObject1,
  inicialCardObject2,
} from '@/utilities/inicalCardObject'

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
        <section className={styles.inicioAjudando}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Default">
                  Ajudando meninas <br />
                  como eu
                </Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Lg">
                  Encontre os melhores cursos e processos seletivos na área de
                  tecnologia e ainda aprenda sobre o mundo do UX Design!
                </SubTitle>
              </div>
              <div className={styles.buttons}>
                <Button url="/cursos" type="Blue">
                  Descobrir cursos
                </Button>
                <Button type="Pink">Processos Seletivos</Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/mulher-estudando.webp.svg"
                width={428.39}
                height={428.39}
                alt="Imagem de uma mulher estudando"
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className={styles.inicioCarreira}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textRight}>
              <div className={styles.title}>
                <Title type="Sm">Comece a sua carreira</Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Aprenda mais sobre a área de tech e design, tenha acesso a
                  conteúdos incríveis e entre no mercado de trabalho com chave
                  de ouro!
                </SubTitle>
              </div>
              <div className={styles.buttons}>
                <Button type="Blue">Estude com a Menina de UX!</Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/aprovado.webp.svg"
                width={447}
                height={461}
                alt="Imagem de um homem sinalizando que está aprovado"
              />
            </div>
          </div>
        </section>
        <section className={styles.inicioProjeto}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Sm">
                  Crie seu primeiro projeto <br />
                  em UX Design
                </Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Com um template no Figma e os posts de guia, você vai
                  conseguir se guiar para construir o seu case do zero!
                </SubTitle>
                <br />
                <SubTitle type="Default">
                  Clique agora no botão abaixo e faça o download do template no
                  Figma!
                </SubTitle>
              </div>
              <div className={styles.buttons}>
                <Button type="Blue">Crie seu primeiro projeto!</Button>
                <Button type="Pink">Baixar template</Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/primeiro_projeto.svg"
                width={447}
                height={461}
                alt="Imagem de uma mulher no computador"
              />
            </div>
          </div>
        </section>
        <section className={`${styles.inicioCurso} ${styles.justifyCenter}`}>
          <div className="container">
            <div className={styles.title}>
              <Title type="Xs">CURSOS TOPS</Title>
            </div>
            <div className={styles.title}>
              <Title type="Lg">Os melhores em várias áreas</Title>
            </div>
            <div className={styles.cardList}>
              {inicialCardObject1.map((card) => (
                <Card
                  key={card.id}
                  type={card.type as 'Primary' | 'Secondary'}
                  src={card.src}
                  alt={card.alt}
                  title={card.title}
                />
              ))}
            </div>
            <div className={`${styles.buttons} ${styles.justifyCenter}`}>
              <Button>Descobrir mais cursos</Button>
            </div>
          </div>
          <div className="container">
            <div className={styles.title}>
              <Title type="Xs">ÚLTIMOS PROCESSOS SELETIVOS</Title>
            </div>
            <div className={styles.title}>
              <Title type="Lg">Para você ser o melhor no que faz</Title>
            </div>
            <div className={styles.cardList}>
              {inicialCardObject2.map((card) => (
                <Card
                  key={card.id}
                  type={card.type as 'Primary' | 'Secondary'}
                  src={card.src}
                  alt={card.alt}
                  title={card.title}
                  subtitle={card.subtitle}
                  href={card.href}
                />
              ))}
            </div>
            <div className={`${styles.buttons} ${styles.justifyCenter}`}>
              <Button>Veja mais</Button>
            </div>
          </div>
        </section>
        <section className={styles.inicioNovidades}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Sm">
                  Quer ficar por dentro de todas as novidades?
                </Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Entre no canal do Telegram da Menina de UX e fique sabendo de
                  todos os cursos e processos seletivos novos!
                </SubTitle>
              </div>
              <div className={styles.buttons}>
                <Button type="Blue">Entrar no canal</Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/mulher-recebendo-novidades.webp.svg"
                width={447}
                height={461}
                alt="Imagem de uma mulher com o celular nas mãos"
              />
            </div>
          </div>
        </section>
        <section className={styles.inicioRedeSociais}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Sm">Redes Sociais</Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Me acompanhe nas redes sociais!
                </SubTitle>
                <SubTitle type="Default">
                  Se quiser conversar sobre projetos, eventos e afins, tem meu
                  e-mail também!
                </SubTitle>
              </div>
              <div className={styles.buttons}>
                <Button
                  icon={MdAlternateEmail}
                  url={'mailto:becabelin@gmail.com'}
                >
                  E-mail
                </Button>
                <Button
                  icon={FaInstagram}
                  url="https://www.instagram.com/meninadeux"
                >
                  Instagram
                </Button>
                <Button
                  icon={FaLinkedin}
                  url="https://www.linkedin.com/company/meninadeux/"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/mulher-redes-sociais.webp.svg"
                width={447}
                height={461}
                alt="Imagem de uma mulher com auto-falante atrás de uma tela de post"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
