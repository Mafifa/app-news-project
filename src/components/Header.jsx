export function Header() {
  return (
    <header className='p-1 border-b-2 border-solid border-[#2B2D42] w-auto bg-[#cfbdb0]'>
      <div className='flex items-center justify-around lg:max-w-5xl mx-auto'>
        <div className='size-16'>
          <a href='https://mafifa.github.io/' target='_blank' rel='nooperner noreferrer' className='flex items-center text-[#2B2D42] font-bold'>
            <img src='public/Main-Logo.svg' alt='image' />
            MAFIFA
          </a>
        </div>
        <div>
          <ul className='flex'>
            <li className='text-[#2B2D42] mx-2 font-bold'>
              <a href='/'>
                INICIO
              </a>
            </li>
            <li className='text-[#2B2D42] mx-2 font-bold'>
              <a href='/'>
                PORTAFOLIO
              </a>
            </li>
            <li className='text-[#2B2D42] mx-2 font-bold'>
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
