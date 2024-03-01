import { useState } from 'react'

export function Slider() {
  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // Función para manejar el cambio de página
  const nextPage = () => {
    setStartIndex(prevIndex => prevIndex + itemsPerPage)
  }

  // Función para manejar la página anterior
  const prevPage = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - itemsPerPage))
  }

  return (
    <div>
      <h2>Elementos:</h2>
      <ul className='flex'>
        {/* Utiliza slice para renderizar solo una parte del arreglo */}
        {items.slice(startIndex, startIndex + itemsPerPage).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Botones para cambiar de página */}
      <button onClick={prevPage} disabled={startIndex === 0}>Página Anterior</button>
      <button onClick={nextPage} disabled={startIndex + itemsPerPage >= items.length}>Siguiente Página</button>
    </div>
  )
}
