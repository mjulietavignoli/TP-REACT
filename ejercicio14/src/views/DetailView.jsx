import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import { getBlogFn } from '../api/blogs';

const DetailView = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`blog-${id}`],
    queryFn: () => getBlogFn(id), //lo envuelvo en un callback para mandar un parametro, entonces me devuelve la función con ese valor
  });

  if (isLoading) {
    return <p className='mt-3 text-center'>Cargando entrada...</p>;
  }

  if (isError) {
    return (
      <div className='alert alert-danger'>
        Ocurrió un error leyendo la entrada de blog
      </div>
    );
  }

  return (
    <>
      <Link className='btn btn-secondary mb-3' to={-1}>
        Volver
      </Link>
      <section className='card p-3'>
        <section className='row g-4'>
          <article className='col-12 col-md-6'>
            <img
              alt={blog.title}
              className='w-100 rounded'
              src={blog.imageUrl}
            />
          </article>
          <article className='col-12 col-md-6'>
            <h1>{blog.title}</h1>
          </article>
        </section>
        <p className='mt-4'>{blog.content}</p>
      </section>
    </>
  );
};
export default DetailView;