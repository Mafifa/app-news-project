import { useEffect, useState } from 'react'
import { useNews } from '../Hooks/Hook'
import '../assets/grid.css'

export function Body() {
  const [topic, updateTopic] = useState('business') // Custom hook to give the topic
  const [country, updateCountry] = useState('ve') // Custom hook to give the topic
  const { newsMapped, getNews } = useNews({ topic, country }) // Custom hook to get response from API (the Topic)

  const hasNews = newsMapped?.length > 0

  // To start the website, GET THE FIRST NEWS
  useEffect(() => {
    getNews()
    console.log(`First run : ${topic}`)
    console.log(`First run : ${country}`)
  }, [topic, country])

  const clickToTopic = (TOPIC) => {
    updateTopic(TOPIC)
    console.log('Click Render Topic')
  }

  const clickToCountry = (COUNTRY) => {
    updateCountry(COUNTRY)
    console.log('Click Render Country')
  }

  function newsRender() {
    return (
      <ul className='news'>
        {
          newsMapped.map(noticias => (
            <li className='new p-2 m-2 bg-[#8d99ae] rounded-xl' key={noticias.ID}>
              <div>
                <a target='_blank' rel='nooperner noreferrer' href={noticias.url}>
                  <div>
                    <h3 className='text-3xl font-bold text-wrap'>{noticias.title}</h3>
                    <p className='text-black font-bold italic'>{noticias.date}</p>
                  </div>
                </a>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }

  function noResult() {
    return (
      <div>
        <h2>No se encontraron resultados</h2>
      </div>
    )
  }

  return (
    <div className='flex-col'>
      <div className='p-2 m-2 bg-[#8d99ae] rounded-2xl text-2xl flex items-center justify-between'>
        <div className='flex items-center'>
          <button onClick={() => clickToTopic('business')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Negocios</button>
          <button onClick={() => clickToTopic('sports')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Deporte</button>
          <button onClick={() => clickToTopic('science')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Ciencia</button>
          <button onClick={() => clickToTopic('health')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Salud</button>
          <button onClick={() => clickToTopic('entertainment')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Entretenimiento</button>
        </div>
        <div>
          <button onClick={() => clickToCountry('ve')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Venezuela</button>
          <button onClick={() => clickToCountry('us')} type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>EE.UU</button>
        </div>
      </div>

      <div className='p-2 bg-[#2B2D42] rounded-xl flex-col items-center justify-around'>
        <h1 className='font-bold m-4 text-white lg:text-2xl'>{`Noticias de ultimo momento en ${country === 've' ? 'Venezuela' : 'EE.UU'} - ${topic}`}</h1>
        {hasNews ? newsRender() : noResult}
      </div>
    </div>
  )
}
