// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'

// Styles
import style from '@/styles/Home.module.scss'
import Button from '@/components/common/Button'

// Utilities
// Hooks
// Interfaces

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
        <section id={style.intro}>
          <div className={style.text}>
            <Title type="Lg">Ajudando meninas como eu</Title>
            <p>
              Encontre os melhores cursos e processos seletivos na área de
              tecnologia e ainda aprenda sobre o mundo do UX Design!
            </p>
            <div className={style.buttons}>
              <Button type="Blue">Descobrir cursos</Button>
              <Button type="Pink">Processos seletivos</Button>
            </div>
            <img src="./Home/mulher-estudando.webp.png" alt="" />
          </div>
        </section>
      </main>
    </>
  )
}
