import { useEffect, useState } from 'react'
import { useNews } from '../Hooks/Hook'
import '../assets/grid.css'
import '../assets/button.css'
import '../assets/dropdown.css'
import { Loading } from './Loading'
import { Slider } from './Slider'

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

  // Button for topic
  const clickToTopic = (TOPIC) => {
    updateTopic(TOPIC)
    console.log('Click Render Topic')
  }

  // Button for country
  const clickToCountry = (COUNTRY) => {
    updateCountry(COUNTRY)
    console.log('Click Render Country')
  }

  // Render the news
  const newsRender = () => {
    // Solo quermeos las cuatros primeras
    const fourNewsMapped = newsMapped.slice(0, 4)
    return (
      <aside className='w-64 mt-2 bg-white shadow-md rounded-lg overflow-hidden'>
        <h4 className='text-2xl font-bold text-gray-900 p-5 border-b'>Latest News</h4>
        <ul>
          {fourNewsMapped.map((news, index) => (
            <li key={index} className='p-4 hover:bg-gray-50'>
              <a href={news.url}>
                <p className='text-black font-semibold'>{news.title}</p>
                <p className='text-sm text-gray-600'>{news.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    )
  }

  // Render if we dont have result
  const noResult = () => {
    const pruebas = [{
      title: 'The Morning After: Apples car project may be dead',
      URL: 'https://www.google.com',
      ID: 1,
      DATE: '12/12/12'
    },
    {
      title: 'Esto es solo una prueba para visulizar la informacion',
      URL: 'https://www.google.com',
      ID: 1,
      DATE: '12/12/12'
    },
    {
      title: 'Esto es solo una prueba para visulizar la informacion',
      URL: 'https://www.google.com',
      ID: 1,
      DATE: '12/12/12'
    }]

    return (
      <aside className='w-64 mt-2 bg-white shadow-md rounded-lg overflow-hidden'>
        <h4 className='text-2xl font-bold text-gray-900 p-5 border-b'>Latest News</h4>
        <ul>
          {pruebas.map((news, index) => (
            <li key={index} className='p-4 hover:bg-gray-50'>
              <div>
                <p className='text-gray-900 font-semibold'>{news.title}</p>
                <p className='text-sm text-gray-600'>{news.DATE}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    )
  }

  // Render the button that we use to select the topic and the country
  const renderButton = (showText, topic) => {
    return (
      <button onClick={() => clickToTopic(topic)} type='button' className='bg-[#191b1b] mx-1 bn54'>
        <span className='bn54span'>{showText}</span>
      </button>
    )
  }

  // Is just a button to fetch a test
  const fetchDePrueba = () => {
    const URL = 'https://newsapi.org/v2/everything?q=apple&from=2024-02-28&to=2024-02-28&sortBy=popularity&apiKey=f719cf731ef144f49fafc6ccefa4e26e'
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
  }

  const renderButtons = () => {
    return (
      <div className='p-2 bg-[#efe8e2] border-b-2 border-solid border-[#000] text-2xl flex items-center justify-between'>
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
    )
  }

  return (

    <main className='flex-col'>
      <Slider />
      {/* <button className='p-2 bg-slate-800 rounded-full text-white' onClick={fetchDePrueba}>Fetch de prueba</button> */}
      <div className='mt-6 bg-[#efe8e2] rounded-xl justify-between'>
        {renderButtons()}
        <section className='flex justify-between'>
          <div>
            <h2 className='font-bold m-4 lg:text-2xl'>{`Breaking news in ${country === 've' ? 'Venezuela' : 'EE.UU'} - ${topic}`}</h2>
            <div className='flex'>
              <img className='max-w-[682px] m-2' src='public/Model-Guidejpg.jpg' alt='princiap new' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rem ut excepturi, corrupti hic obcaecati quis provident aliquam iste ex, velit sed ipsa assumenda neque minus modi consequuntur vero necessitatibus!</p>
            </div>
          </div>
          <div className='m-2'>{hasNews ? newsRender() : noResult()}</div>
        </section>
      </div>
    </main>
  )
}
