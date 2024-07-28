const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postLoginFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/users`);
  const users = await res.json();

  if (!res.ok || !Array.isArray(users)) {
    throw new Error('Ocurrió un error al intentar iniciar sesión');
  }

  const foundUser = users.find((user) => {
    return user.username === data.username;
  });

  if (!foundUser) {
    throw new Error('El usuario o la contraseña no son correctos');
  }

  const isPasswordTheSame = foundUser.password === data.password;

  if (!isPasswordTheSame) {
    throw new Error('El usuario o la contraseña no son correctos');
  }

  return { ...foundUser, password: undefined }; //devuelve todo lo que tiene el usuario menos la contraseña
};

export const postRegisterFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      password: data.password,
      isAdmin: false,
    }),
  });

  if (!res.ok) {
    throw new Error('Ocurrió un error guardando el usuario');
  }

  return {
    firstname: data.firstname,
    lastname: data.lastname,
    username: data.username,
    isAdmin: false,
  };
};