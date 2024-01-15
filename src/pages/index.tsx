// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import Button from '@/components/common/Button'
import SubTitle from '@/components/common/Subtitle/SubTitle'

// Styles
import style from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Menina de UX</title>
        <meta
          name="description"
          content="Ajudando meninas como eu. Encontre os melhores cursos e processos seletivos na área de tecnologia e ainda aprenda sobre o mundo do UX Design!"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.home}>
        <section className={style.section}>
          <div className={style.text}>
            <Title type="Default">Ajudando meninas como eu</Title>
            <p>
              Encontre os melhores cursos e processos seletivos na área de
              tecnologia e ainda aprenda sobre o mundo do UX Design!
            </p>
            <div className={style.buttons}>
              <Button type="Blue">Descobrir cursos</Button>
              <Button type="OutlinePink">Processos seletivos</Button>
            </div>
          </div>
          <div className={style.image}>
            <img src="./Home/mulher-estudando.webp.png" alt="" />
          </div>
        </section>
        <section className={style.section}>
          <div className={style.image}>
            <img src="./Home/aprovado.webp.png" alt="" />
          </div>
          <div className={style.text}>
            <Title type="Sm">Comece a sua carreira</Title>
            <p>
              Aprenda mais sobre a área de tech e design, tenha acesso a
              conteúdos incríveis e entre no mercado de trabalho com chave de
              ouro!
            </p>
            <div className={style.buttons}>
              <Button type="Blue">Estude com a Menina de UX</Button>
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.text}>
            <Title type="Sm">Crie seu primeiro projeto em UX Design</Title>
            <p>
              Com um template no Figma e os posts de guia, você vai conseguir se
              guiar para construir o seu case do zero!
            </p>
            <p>
              Clique agora no botão abaixo e faça o download do template no
              Figma!
            </p>
            <div className={style.buttons}>
              <Button type="Blue">Crie seu primeiro projeto!</Button>
              <Button type="OutlinePink">Baixar template</Button>
            </div>
          </div>
          <div className={style.image}>
            <img src="./Home/mulher-designer.webp.png" alt="" />
          </div>
        </section>
        <section className={style.section}>
          <div className={style.titles}>
            <SubTitle type="Lg">Cursos Top</SubTitle>
            <Title type="Xs">Os melhores em várias áreas</Title>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <img src="./Home/cursoemvideo.webp.png" alt="" />
              <SubTitle type="Default">Curso em Vídeo</SubTitle>
            </div>
            <div className={style.card}>
              <img src="./Home/dio.webp.png" alt="" />
              <SubTitle type="Default">DIO</SubTitle>
            </div>
            <div className={style.card}>
              <img src="./Home/Logo.png" alt="" />
              <SubTitle type="Default">Estação Hack</SubTitle>
            </div>
            <div className={style.card}>
              <img src="./Home/Logo-1.png" alt="" />
              <SubTitle type="Default">Mundo SENAI</SubTitle>
            </div>
          </div>
          <div className={style.buttons} style={{ width: '100%' }}>
            <Button type="Blue">Conhecer mais cursos</Button>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.titles}>
            <SubTitle type="Lg">Últimos Processos Seletivos</SubTitle>
            <Title type="Xs">Para você ser o melhor no que faz</Title>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <img src="./Home/soul.png" alt="" />
              <SubTitle type="Default">Soul Bilíngue</SubTitle>
            </div>
            <div className={style.card}>
              <img src="./Home/martech.png" alt="" />
              <SubTitle type="Default">Martech Academy</SubTitle>
            </div>
            <div className={style.card}>
              <img src="./Home/eucapacito.png" alt="" />
              <SubTitle type="Default">
                Capacitação introdução à programação
              </SubTitle>
            </div>
            <div className={style.card}>
              <img src="./Home/santanderbolsas.png" alt="" />
              <SubTitle type="Default">Bolsas Santander</SubTitle>
            </div>
          </div>
          <div className={style.buttons} style={{ width: '100%' }}>
            <Button type="Blue">Conhecer mais cursos</Button>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.text}>
            <Title type="Xs">
              Quer ficar por dentro de todas as novidades?
            </Title>
            <p>
              Entre no canal do Telegram da Menina de UX e fique sabendo de
              todos os cursos e processos seletivos novos!
            </p>
            <Button type="Blue">Entrar no canal!</Button>
          </div>
          <div className={style.image}>
            <img src="./Home/mulher-recebendo-novidades.webp.png" alt="" />
          </div>
        </section>
        <section className={style.section}>
          <div className={style.text}>
            <Title type="Xs">Redes Sociais</Title>
            <p>
              Me acompanhe nas redes sociais! Se quiser conversar sobre
              projetos, eventos e afins tem meu e-mail ai!
            </p>
            <div className={style.buttons}>
              <Button type="Blue">Email</Button>
              <Button type="Blue">Instagram</Button>
              <Button type="Blue">LinkedIn</Button>
            </div>
          </div>
          <div className={style.image}>
            <img src="./Home/mulher-redes-sociais.webp.png" alt="" />
          </div>
        </section>
      </main>
    </>
  )
}
