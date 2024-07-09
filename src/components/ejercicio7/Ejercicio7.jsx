
import Card from "./Card.jsx";

const Ejercicio7 = () => {
    const empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://marketplace.canva.com/EAFmXSny51I/1/0/1600w/canva-avatar-foto-de-perfil-mujer-dibujo-ilustrado-moderno-rojo-1Fscw8oj1-Q.jpg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_788543494.jpg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://fotografias.lasexta.com/clipping/cmsimages02/2019/05/27/9F22C9FE-C616-4F37-B666-15C33C25D65A/default.jpg?crop=1300,731,x0,y9&width=1900&height=1069&optimize=low" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://w7.pngwing.com/pngs/344/744/png-transparent-avatars-accounts-man-male-people-person-wavy-hair-shirt-moustache-mustache-sunglasses-glasses-male-avatars-free-d-illustration.png" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://www.que.es/wp-content/uploads/2021/03/El-avatar-online.jpg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://blog.duolingo.com/content/images/2023/08/avatar-thumb--1--2.png" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://i.pinimg.com/736x/0b/2e/46/0b2e46093bbf546684960b2f83abff2e.jpg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://i.pinimg.com/originals/6c/bf/7e/6cbf7e9d5e5c9675db72ef3e68dc88ba.png" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://preview.redd.it/how-to-improve-avatars-v0-x4fmz0vdx3gb1.jpg?width=1080&format=pjpg&auto=webp&s=bfe4133903407c4d9d68e866199f055ee0f1c5f6" },
      ]
  return (
      <>
      <h1 className="text-center">Lista de empleados</h1>
      <ul>
          {empleados.map((empleado) => (
            <li key={empleado.id} className="d-flex justify-content-between align-items-center pb-4">
             <Card empleado={empleado} />
            </li>
          ))}
        </ul>
      </>
  )
}

export default Ejercicio7;