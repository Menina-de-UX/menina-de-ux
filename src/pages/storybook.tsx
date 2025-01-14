// Components
import Title from '@/components/common/Title/Title'
import Head from 'next/head'
import Card from '@/components/common/Card'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Button from '@/components/common/Button'
import Tag from '@/components/common/Tag'
import CardInfo from '@/components/common/CardInfo'

// Styles
import styled from '@/styles/Home.module.scss'
import News from '@/components/sections/News'
import SocialMedia from '@/components/sections/SocialMedia'

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
        <section className="container">
          <h1>Component Title</h1>
          <ul>
            <li>
              <Title type="Default">Ajudando meninas como eu</Title>
            </li>
            <li>
              <Title type="Xl">Cursinhos Tops e Gratuitos</Title>
            </li>
            <li>
              <Title type="Lg">OS MELHORES EM VÁRIAS ÁREAS</Title>
            </li>
            <li>
              <Title type="Sm">
                Quer ficar por dentro de todas as novidades?
              </Title>
            </li>
            <li>
              <Title type="Xs">Crie seu Case</Title>
            </li>
          </ul>
        </section>
        <section className="container">
          <h1>Component SubTitle</h1>
          <ul>
            <li>
              <SubTitle type="Default">Default</SubTitle>
            </li>
            <li>
              <SubTitle type="Lg">lg</SubTitle>
            </li>
          </ul>
        </section>
        <section className="container">
          <h1>Component Tag</h1>
          <ul>
            <li>
              <SubTitle type="Default">
                Default
                <Tag type="Strong"> Strong</Tag>
              </SubTitle>
            </li>
            <li>
              <Tag type="Default">Default</Tag>
            </li>
          </ul>
        </section>
        <section>
          <div className="container">
            <h1>Component Card</h1>
            <ul>
              <li>
                <Card
                  type="Primary"
                  src="./CardCourse/image1.svg"
                  alt="alt img"
                  title="Capacitação Gratuita em Introdução à Programação"
                  subtitle="inscrições até 24/05/2023"
                  href="#"
                />
              </li>

              <li>
                <Card
                  type="Primary"
                  src="./CardCourse/image1.svg"
                  alt="alt img"
                  title="Capacitação Gratuita em Introdução à Programação"
                  href="#"
                />
              </li>
              <li>
                <Card
                  type="Primary"
                  src="./CardCourse/image1.svg"
                  alt="alt img"
                  title="Capacitação Gratuita em Introdução à Programação"
                />
              </li>
              <li>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="alt img"
                  title="Capacitação Gratuita em Introdução à Programação"
                  subtitle="inscrições até 24/05/2023"
                  description="O CIEE Saber Virtual é uma plataforma de cursos que permite a realização totalmente a distância. Nesse portal, é possível realizar 5 trilhas de conhecimento, que foram feitas com a intenção de preparar estudantes para o mundo do trabalho, sendo que, aqueles que concluírem os cursos, terão direito a um certificado."
                  href="#"
                />
              </li>
              <li>
                <Card
                  type="Secondary"
                  src="./CardCourse/image1.svg"
                  alt="alt img"
                  title="Capacitação Gratuita em Introdução à Programação"
                  description="O CIEE Saber Virtual é uma plataforma de cursos que permite a realização totalmente a distância. Nesse portal, é possível realizar 5 trilhas de conhecimento, que foram feitas com a intenção de preparar estudantes para o mundo do trabalho, sendo que, aqueles que concluírem os cursos, terão direito a um certificado."
                  href="#"
                />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <h1>Component Button</h1>

            <Button>Blue/Deault</Button>
            <Button type="Pink">Pink</Button>
            <Button type="Disabled">Disabled</Button>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Component CardInfo</h2>
            <ul>
              <li>
                <CardInfo
                  type="Active"
                  alt="/"
                  src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                  containerTitle="Currículo de Milhões"
                  containerDescription="Aprenda a criar o currículo campeão para enviar nos processos seletivos
              e descubra coisas super importantes que você não sabia antes!"
                />
              </li>
              <li>
                <CardInfo
                  type="Disabled"
                  alt="/"
                  src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
                  containerTitle="O Poder do LinkedIn"
                  containerDescription="Tudo sobre a maior rede profissional de todas e as melhores dicas para deixar o seu perfil atrativo para recrutadores!"
                />
              </li>
            </ul>
          </div>
        </section>
        <News />
        <SocialMedia />
      </main>
    </>
  )
}
