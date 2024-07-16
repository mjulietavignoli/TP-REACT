import './card.css';

const LoadingNoticias = () => {
  return (
    <section className="row g-2 placeholder-glow">
      <div className='col-6 col-md-4 placeholder-size'>
        <div className="placeholder w-100 h-100 rounded-4"></div>
      </div>
      <div className='col-6 col-md-4'>
        <div className="placeholder w-100 h-100 rounded-4"></div>
      </div>
      <div className='col-6 col-md-4'>
        <div className="placeholder w-100 h-100 rounded-4"></div>
      </div>
    </section>
  )
}
export default LoadingNoticias