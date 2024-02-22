import { useNews } from '../Hooks/Hook'

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
      <div className='p-4 m-2 bg-[#8d99ae] rounded-2xl text-2xl flex items-center justify-between'>
        <h1 className='font-bold'>Noticias</h1>
        <form method='get' className='mx-2 flex'>
          <input size='5' type='search' placeholder='Elon Musk, Maduro...' name='buscar' id='buscar' />
          <button className='p-2 m-2 flex rounded-xl bg-[#2B2D42] text-white font-bold items-center text-sm text-nowrap'>Buscar🔍</button>
        </form>
      </div>
      <div className='p-2 bg-[#2B2D42] rounded-xl flex-col items-center justify-around'>
        {newsRender()}
      </div>
    </div>
  )
}
