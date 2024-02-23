export function Container({ children }) {
  return (
    <section className='flex items-center lg:max-w-screen-lg mx-auto'>
      <div className='w-full'>
        {children}
      </div>
    </section>
  )
}
