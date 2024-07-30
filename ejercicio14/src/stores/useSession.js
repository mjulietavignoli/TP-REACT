import { create } from 'zustand';

export const useSession = create((set) => { //se ponen los valores iniciales, el set modifica el estado
  return {
    user: null,
    isLoggedIn: false,
    login: (newUser) => {
      set({ user: newUser, isLoggedIn: true });
    },
    logout: () => {
      set({ user: null, isLoggedIn: false });
    },
  };
});