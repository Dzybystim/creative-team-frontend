import { FcHighPriority } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <IconContext.Provider value={{ size: '200px' }}>
      <div className={css.not_found_container}>
        <h1 className={css.not_found_header}>Not Found</h1>
        <h2 className={css.not_found_header_two}>Error 404</h2>
        <FcHighPriority />
      </div>
    </IconContext.Provider>
  );
}
