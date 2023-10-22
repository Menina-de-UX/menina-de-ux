// Hooks
import { useState, useEffect, useCallback, Children } from 'react'

// Interface
import { ICarousel } from '@/interface/components'

// Style
import style from './index.module.scss'

// Icons
import { BiSolidRectangle } from 'react-icons/bi'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function CarouselItem({ children }: ICarousel) {
  return <div className={style.carouselItem}>{children}</div>
}

function Carousel({ children }: ICarousel) {
  const [activeIndex, setActiveIndex] = useState(0)
  const childArray = Children.toArray(children)
  const updateIndex = useCallback(
    (newIndex: number) => {
      if (newIndex < 0) {
        newIndex = 0
      } else if (newIndex >= childArray.length) {
        newIndex = childArray.length - 1
        newIndex = 0
      }
      setActiveIndex(newIndex)
    },
    [childArray],
  )

  const autoSlide = useCallback(() => {
    updateIndex(activeIndex + 1)
  }, [activeIndex, updateIndex])

  useEffect(() => {
    const intervalId = setInterval(autoSlide, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [autoSlide, activeIndex])

  return (
    <div className={style.carousel}>
      <div
        className={style.inner}
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {childArray.map((item) => {
          return <>{item}</>
        })}
      </div>
      <div className={style.carouselButtons}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          className={style.buttonArrow}
        >
          <IoIosArrowBack size={25} />
        </button>
        <div className={style.indicators}>
          {childArray.map((_, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index)
                }}
                className={style.indicatorButtons}
                key={index}
              >
                <BiSolidRectangle
                  size={30}
                  className={
                    index === activeIndex
                      ? style.indicatorSymbolActive
                      : style.indicatorSymbol
                  }
                />
              </button>
            )
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
          className={style.buttonArrow}
        >
          <IoIosArrowForward size={25} />
        </button>
      </div>
    </div>
  )
}

export { Carousel, CarouselItem }
