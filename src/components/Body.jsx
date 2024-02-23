import { useNews } from '../Hooks/Hook'
import '../assets/grid.css'

export function Body() {
  const { News } = useNews() // Custom hook get response from API

  function newsRender() {
    return (
      <ul>
        {
          News.map((noticias) => (
            <li className='p-2 m-2 bg-[#8d99ae] rounded-xl' key={noticias.ID}>
              <div>
                <a href={noticias.url}>
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
  return (
    <div className='flex-col'>
      <div className='p-2 m-2 bg-[#8d99ae] rounded-2xl text-2xl flex items-center justify-between'>
        <div className='flex items-center'>
          <button type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Negocios</button>
          <button type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Deporte</button>
          <button type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Ciencia</button>
          <button type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Salud</button>
          <button type='button' className='text-lg p-1 mx-2 lg:p-2 bg-[#393d3f] text-white font-bold rounded-lg'>Entretenimiento</button>

        </div>
        <form method='get' className='mx-2 flex'>
          <input size='16' className='rounded-xl ' type='search' placeholder='Elon Musk, Maduro...' name='buscar' id='buscar' />
          <button type='submit' className='p-2 m-2 flex rounded-xl bg-[#2B2D42] text-white font-bold items-center text-sm lg:text-2xl text-nowrap'>Buscar🔍</button>
        </form>
      </div>

      <div className='p-2 bg-[#2B2D42] rounded-xl flex-col items-center justify-around'>
        <h1 className='font-bold m-4 text-white lg:text-2xl'>Noticias de ultimo momento: </h1>
        {newsRender()}
      </div>
    </div>
  )
}
