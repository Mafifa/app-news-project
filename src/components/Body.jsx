import { useNews } from '../Hooks/Hook'

export function Body() {
  const { News } = useNews()

  function newsRender() {
    return (
      <ul>
        {
          News.map((noticias) => (
            <li className='p-2 m-2 bg-blue-300 rounded-xl' key={noticias.ID}>
              <div>
                <a href={noticias.url}>
                  <div>
                    <h3>{noticias.title}</h3>
                    <p>Autor: {noticias.autor}</p>
                    <p>{noticias.date}</p>
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
    <div className='flex'>
      <div>
        <h1>Noticias</h1>
        <div>
          {newsRender()}
        </div>
      </div>
    </div>
  )
}
