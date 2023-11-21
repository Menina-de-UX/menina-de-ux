// Components
import Head from 'next/head'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Title from '@/components/common/Title/Title'
import Card from '@/components/common/Card'

// Styles
import styledBootcamps from '@/styles/Bootcamps.module.scss'

// Utilities
import { properties } from '@/utilities/Cursos&bootcampObjects'
import { useState } from 'react'
import Filter from '@/utilities/Filter'
// Hooks
// Interfaces

export default function Bootcamps() {
  const [filtroSelecionado, setFiltroSelecionado] = useState<string>('')
  const [dataWithFilter, setDataWithFilter] = useState(
    properties.bootcampObjetc,
  )

  const handleClickFiltro = (filtro: string) => {
    const result = Filter(properties.bootcampObjetc, filtro)
    setDataWithFilter(result)
    setFiltroSelecionado(filtro)
  }

  return (
    <>
      <Head>
        <title>Bootcamps</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styledBootcamps.containerBootcamp}>
        <section>
          <div className={`container ${styledBootcamps.hero}`}>
            <div className={styledBootcamps.content}>
              <Title type="Xl">Cursos Grandes e Bootcamps</Title>
            </div>
            <div className={`${styledBootcamps.contentMobile}`}>
              <SubTitle type="Default">
                As melhores e maiores certificações para quem quer entrar na
                área e se destacar
              </SubTitle>
            </div>
          </div>
        </section>
        {/* Cursos Section */}
        <section className={` container ${styledBootcamps.containerCourses}`}>
          <div className={`${styledBootcamps.containerFilter}`}>
            <ul className={styledBootcamps.containerList}>
              {properties.filtros.map((filtro) => (
                <li
                  key={filtro.key}
                  className={`${styledBootcamps.filterCourse} ${
                    filtroSelecionado === filtro.key
                      ? `${styledBootcamps.selecionado}`
                      : ''
                  }`}
                  onClick={() => handleClickFiltro(filtro.key)}
                >
                  {filtro.label}
                </li>
              ))}
            </ul>
          </div>
          <div className={styledBootcamps.cards_wrapper}>
            <ul className={styledBootcamps.lista_cards}>
              {dataWithFilter.map((item) => (
                <li key={item.id} className={styledBootcamps.card}>
                  <Card
                    key={item.id}
                    type="Secondary"
                    src={item.image}
                    alt={` imagem do ${item.title} `}
                    title={item.title}
                    description={item.description}
                    href={item.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* End Cursos Section */}
      </main>
    </>
  )
}
