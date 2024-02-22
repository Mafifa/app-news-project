export function Header() {
  return (
    <header className='p-4 rounded-b-2xl bg-[#2B2D42]'>
      <div className='flex justify-around max-w-5xl mx-auto '>
        <div>
          <img src='../../public/vite.svg' alt='image' />
        </div>
        <div>
          <ul className='flex'>
            <li className='text-white mx-2 font-bold'>
              <a href='/'>
                INICIO
              </a>
            </li>
            <li className='text-white mx-2 font-bold'>
              <a href='/'>
                TENDENCIAS 📈
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
