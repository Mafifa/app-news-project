import { useState } from 'react'
import arrowLeft from '../assets/ico/arrowLeft.svg'
import arrowRight from '../assets/ico/arrowRight.svg'
import mock from '../Hooks/mock.json'

export function Slider() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 1
  // Función para manejar el cambio de página
  const nextPage = () => {
    setStartIndex(prevIndex => prevIndex + itemsPerPage)
  }

  // Función para manejar la página anterior
  const prevPage = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - itemsPerPage))
  }

  const heroNews = mock?.articles
  const heroMapped = heroNews.map((news, index) => ({
    ID: index,
    title: news.title,
    description: news.description,
    URL: news.url,
    image: news.urlToImage
  }))
  const heroWithImage = heroMapped.filter(hero => typeof hero.image === 'string')

  return (
    <div>
      <div className='flex'>
        <button onClick={prevPage} disabled={startIndex === 0}> <img className='size-36' src={arrowLeft} alt='Flecha izquierda' /> </button>
        <ul className='flex'>
          {/* Utiliza slice para renderizar solo una parte del arreglo */}
          {heroWithImage.slice(startIndex, startIndex + itemsPerPage).map(item => (
            <li key={item.ID}>
              <div className='flex'>
                <div className='lg:max-w-[512PX] flex flex-col p-2 rounded-3xl bg-[#dad2cc] text-wrap'>
                  <h2 className='text-5xl m-4'>
                    {item.title}
                  </h2>
                  <p className='p-2 m-5 mb-12 text-xl'>
                    {item.description}
                  </p>
                  <a className='flex items-center justify-center ml-auto m-2 py-2 px-6 text-white bg-orange-600 rounded-full' target='_blank' rel='nooperner noreferrer' href={item.URL}> Leer mas ↗</a>
                </div>
                <div className='bg-[#9c9a98] rounded-3xl flex justify-center items-center'>
                  <img className='size-max' src={item.image} alt='image about the hero topic' />
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* Botones para cambiar de página */}
        <button onClick={nextPage} disabled={startIndex + itemsPerPage >= items.length}> <img className='size-36' src={arrowRight} alt='Flecha Derecha' /> </button>
      </div>

    </div>
  )
}
