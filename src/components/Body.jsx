import { useEffect, useState } from 'react'
import { useNews } from '../Hooks/Hook'
import '../assets/grid.css'
import '../assets/button.css'
import '../assets/dropdown.css'

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

  const newsRender = () => {
    return (
      <ul className='news'>
        {
          newsMapped.map(news => (
            <li className='new p-2 m-2 bg-[#8d99ae] rounded-xl' key={news.ID}>
              <div>
                <a target='_blank' rel='nooperner noreferrer' href={news.url}>
                  <div>
                    <h3 className='text-3xl font-bold text-wrap'>{news.title}</h3>
                    <p className='text-black font-bold italic'>{news.date}</p>
                  </div>
                </a>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }

  const noResult = () => {
    return (
      <div>
        <h2>No se encontraron resultados</h2>
      </div>
    )
  }

  const renderButton = (showText, topic) => {
    return (
      <button onClick={() => clickToTopic(topic)} type='button' className='bg-[#191b1b] mx-1 bn54'>
        <span className='bn54span'>{showText}</span>
      </button>
    )
  }

  const fetchDePrueba = () => {
    const URL = 'https://newsapi.org/v2/top-headlines?country=us&language=es&apiKey=f719cf731ef144f49fafc6ccefa4e26e'
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  }

  return (
    <div className='flex-col'>
      <button onClick={fetchDePrueba}>Fetch de prueba</button>
      <div className='p-2 m-2 -z-50 bg-[#8d99ae] rounded-2xl text-2xl flex items-center justify-between'>
        <div className='flex items-center'>
          {renderButton('Negocios', 'business')}
          {renderButton('Deporte', 'sports')}
          {renderButton('Ciencia', 'science')}
          {renderButton('Salud', 'health')}
          {renderButton('Entretenimiento', 'entertainment')}
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>Paises 🔽</button>
          <div className='dropdown-content'>
            <button onClick={() => clickToCountry('ve')} type='button' className='m-2 font-bold'>Venezuela</button>
            <button onClick={() => clickToCountry('us')} type='button' className='m-2 font-bold'>EE.UU</button>
            <button onClick={() => clickToCountry('us')} type='button' className='m-2 font-bold'>EE.UU</button>
            <button onClick={() => clickToCountry('us')} type='button' className='m-2 font-bold'>EE.UU</button>
          </div>
        </div>
      </div>

      <div className='p-2 bg-[#2B2D42] rounded-xl flex-col items-center justify-around'>
        <h1 className='font-bold m-4 text-white lg:text-2xl'>{`Breaking news in ${country === 've' ? 'Venezuela' : 'EE.UU'} - ${topic}`}</h1>
        {hasNews ? newsRender() : noResult}
      </div>
    </div>
  )
}
