import { IconContext } from 'react-icons';
import { AiOutlineUser } from 'react-icons/ai';
import css from './UserFoto.module.css';
export default function UserFoto({ userFoto, user }) {
  let { photoURL } = user;

  if (userFoto !== null) {
    photoURL = userFoto;
  }

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <div className={css.conteiner_foto}>
          {photoURL ? (
            <img src={photoURL} alt="User Foto" className={css.foto_img}></img>
          ) : (
            <div className={css.foto_svg_container}>
              <AiOutlineUser className={css.foto_svg} />
            </div>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
}
