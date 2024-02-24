export function Header () {
  return (
    <header className='p-1 rounded-b-2xl w-auto bg-[#2B2D42]'>
      <div className='flex items-center justify-around lg:max-w-5xl mx-auto'>
        <div className='size-16'>
          <a href='https://mafifa.github.io/' target='_blank' rel='nooperner noreferrer' className='flex items-center text-white font-bold'>
            <img src='public/Main-Logo.svg' alt='image' />
            MAFIFA
          </a>
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
