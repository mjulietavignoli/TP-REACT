const Error404 = () => {
  return (
      <>
      <h1>Ups! No se encontró esta página</h1>
      <Link className='btn btn-danger mt-3' to='/'>
        Volver a inicio
      </Link>
      </>
  )
}
export default Error404