import React from 'react'

// Interface
import { ICarousel, ICarouselItem } from '@/interface/components'

// Style
import style from './index.module.scss'

const CarouselItem = ({ item }: ICarouselItem) => {
  return (
    <div className={style.carrosselItem}>
      <div></div>
      <img src={item.icon} alt={item.alt} />
      <div className="carrossel-item-text">{item.description}</div>
    </div>
  )
}

function Carousel({ array, size = 'Default', columns = 'two' }: ICarousel) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  return (
    <div className={style.carousel}>
      <div
        className={style.inner}
        style={{ transform: `translate(-${activeIndex * 100})` }}
      >
        {array.map((item, index) => {
          return <CarouselItem item={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default Carousel
