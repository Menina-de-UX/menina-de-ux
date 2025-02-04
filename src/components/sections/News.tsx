// Components
import Button from '../common/Button'
import Title from '../common/Title/Title'
import SubTitle from '../common/Subtitle/SubTitle'

// Utilities
import Image from 'next/image'
import NewsImage from '@/../public/Sections/mulher-recebendo-novidades.svg'

// Styles
import styled from './Sections.module.scss'

export default function News() {
  return (
    <section className={`container ${styled.sectionContainer}`}>
      <div className={styled.sectionContent}>
        <Title type="Default">Quer ficar por dentro de todas as novidades?</Title>
        <SubTitle type="Lg">
          Entre no canal do Telegram da Menina de UX e fique sabendo de todos os
          cursos e processos seletivos novos!
        </SubTitle>
        <div className={styled.buttons}>
          <Button url={'https://t.me/meninadeux'}> Entrar no canal </Button>
        </div>
      </div>
      <Image
        src={NewsImage}
        alt="Mulher no celular conferindo os novos cursos."
      />
    </section>
  )
}
