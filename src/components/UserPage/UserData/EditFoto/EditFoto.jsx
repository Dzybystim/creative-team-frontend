import { HiOutlineCamera } from "react-icons/hi2";
import css from './EditFoto.module.css';


export default function EditFoto() {
   
    return(
        <>
        <div className={css.container_edit}>
        <HiOutlineCamera  className={css.svg_camera}/>
        <button type="button" className={css.button_edit}>
            <span>Edit photo</span></button>
        </div>
        </>
        )
}