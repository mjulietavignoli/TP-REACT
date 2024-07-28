import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import Input from '../ui/Input/Input';
import { postLoginFn } from '../../api/auth';
import { useSession } from '../../stores/useSession';

const LoginForm = () => {
  const { login } = useSession();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`Bienvenido, ${userData.firstname}`);

      reset();

      login(userData);

      setTimeout(() => {
        navigate('/');
      }, 1500);
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });


  const handleSubmit = (data) => {
    toast.loading('Cargando...');
    postLogin(data);
  };


  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}> 
      <Input 
        className='mb-3'
        error={errors.username}
        label='Nombre de usuario'
        name='username'
        options={{
          required: {
            value: true,
            message: 'Este campo es requerido',
          },
          minLength: 3,
          maxLength: 20,
        }}
        register={register}
      />
      <Input
        error={errors.password}
        label='Contraseña'
        name='password'
        options={{
          required: {
            value: true,
            message: 'Este campo es requerido',
          },
          minLength: 3,
          maxLength: 20,
        }}
        register={register}
        type='password'
      />
      <div className='text-end mt-3'>
        <button className='btn btn-danger' type='submit'>
          Ingresar
        </button>
      </div>
      <p className='text-center text-md-start mt-2 mt-lg-0'>
        ¿Primera vez? <Link to='/register'>Create un usuario acá</Link>
      </p>
    </form>
  );
};
export default LoginForm;