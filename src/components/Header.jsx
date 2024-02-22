export function Header() {
  return (
    <div className=' m-2 flex justify-around p-4 rounded-xl bg-slate-700 items-center'>
      <div>
        <img src='../../public/vite.svg' alt='image' />
      </div>
      <ul className='flex'>
        <li className='text-white mx-2 font-bold'>
          <a href='/'>
            INICIO
          </a>
        </li>
        <li className='text-white mx-2 font-bold'>
          <a href='/'>
            TENDENCIAS
          </a>
        </li>
        <li className='text-white mx-2 font-bold'>
          CATEGORIAS (Esto debe de ser dropdown)
        </li>
      </ul>
      <div>
        <form action='get'>
          <label htmlFor='buscar' className='font-bold text-white mx-2'>Buscar Noticia</label>
          <input type='search' id='buscar' className='text-black' />
          <button className='p-2 bg-gray-800 text-white m-2 items-center justify-center rounded-xl'>Buscar🔎</button>
        </form>
      </div>
    </div>
  )
}
