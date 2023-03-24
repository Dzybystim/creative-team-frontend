import { IoLogOutOutline } from "react-icons/io5";
import css from './LogOut.module.css';

export default function UserPage() {


return(
<>
<div className={css.container_logOut}>
<button type="button" className={css.button_logOut}>
    <IoLogOutOutline className={css.svg_logOut}/>
    <span className={css.text_logOut}>Log Out</span></button>
</div>
</>
)
}