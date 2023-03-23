import { HiPencil } from "react-icons/hi";
import css from './UserDataItem.module.css';

export default function UserDataItem({user}) {

const {birthdate, cityRegion, email, mobilePhone, name} = user



return (<>


<table className={css.container_text}>
<tbody>
<tr >
      <td><p className={css.text_user}>Name</p></td>
      <td><p className={css.text_user}>{name}</p></td>
      <td><button type="button" className={css.button_pencil}>
        <HiPencil className={css.pencil}/></button></td>
    </tr>
    <tr>
      <td><p className={css.text_user}>Email</p></td>
      <td><p className={css.text_user}>{email}</p></td>
      <td><button type="button" className={css.button_pencil}>
        <HiPencil className={css.pencil}/></button></td>
    </tr>
    <tr>
      <td><p className={css.text_user}>Birthday</p></td>
      <td><p className={css.text_user}>{birthdate ? birthdate : "00.00.0000"}</p></td>
      <td><button type="button" className={css.button_pencil}>
        <HiPencil className={css.pencil}/></button></td>
    </tr>
    <tr>
      <td><p className={css.text_user}>Phone</p></td>
      <td><p className={css.text_user}>{mobilePhone ? mobilePhone : "+38000000000"}</p></td>
      <td><button type="button" className={css.button_pencil}>
        <HiPencil className={css.pencil}/></button></td>
    </tr>
    <tr>
      <td><p className={css.text_user}>City</p></td>
      <td><p className={css.text_user}>{cityRegion}</p></td>
      <td><button type="button" className={css.button_pencil}>
        <HiPencil className={css.pencil}/></button></td>
    </tr>
</tbody>
</table>

</>
)
}