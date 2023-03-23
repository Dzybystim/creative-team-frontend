// import css from './UserData.module.css';
// import axios from 'axios';
// import { RiEdit2Fill } from 'react-icons/ri';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Notiflix from 'notiflix';
// import NoImage from './noImag.png';
import UserDataItem from './UserDataItem/UserDataItem'



export default function UserData({user}) {



  return(<>
  <UserDataItem user={user}/>
  
  </>
  )
}















// export default function UserData() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     getUserDataById(id)
//       .then(({ data }) => setUserData(data))
//       .catch(error =>
//         Notiflix.Notify.warning(
//           'Sorry, something went wrong.... Please try again.'
//         )
//       );
//   }, [id]);

//   const { urlAvatar, name, email, birthday, phone, city } = userData;

//   return (
//     <>
//       <div>
//         <div>
//           {urlAvatar ? (
//             <img src={`${BASE_URL}/${urlAvatar}`} alt={name} width={'300px'} />
//           ) : (
//             NoImage
//           )}
//         </div>
//         <div className={css.userinfo}>
//           <ul className={css.info}>
//             <li className={css.info_data}>
//               <p className={css.text}>Name:</p>
//               <p className={css.text}> {name}</p>
//               <button type="button" onClick={() => navigate(`/${id}`)}>
//                 <RiEdit2Fill
//                   style={{
//                     color: `orange`,
//                     width: 24,
//                     height: 24,
//                   }}
//                 />
//                 Edit
//               </button>
//             </li>

//             <li className={css.info_data}>
//               <p className={css.text}>Email:</p>
//               <p className={css.text}>{email}</p>
//               <button type="button" onClick={() => navigate(`/${id}`)}>
//                 <RiEdit2Fill
//                   style={{
//                     color: `orange`,
//                     width: 24,
//                     height: 24,
//                   }}
//                 />
//                 Edit
//               </button>
//             </li>
//             <li className={css.info_data}>
//               <p className={css.text}>Birthday:</p>
//               <p className={css.text}>{birthday}</p>
//               <button type="button" onClick={() => navigate(`/${id}`)}>
//                 <RiEdit2Fill
//                   style={{
//                     color: `orange`,
//                     width: 24,
//                     height: 24,
//                   }}
//                 />
//                 Edit
//               </button>
//             </li>
//             <li className={css.info_data}>
//               <p className={css.text}>Phone:</p>
//               <p className={css.text}>{phone}</p>
//               <button type="button" onClick={() => navigate(`/${id}`)}>
//                 <RiEdit2Fill
//                   style={{
//                     color: `orange`,
//                     width: 24,
//                     height: 24,
//                   }}
//                 />
//                 Edit
//               </button>
//             </li>
//             <li className={css.info_data}>
//               <p className={css.text}>City:</p>
//               <p className={css.text}>{city}</p>
//               <button type="button" onClick={() => navigate(`/${id}`)}>
//                 <RiEdit2Fill
//                   style={{
//                     color: `orange`,
//                     width: 24,
//                     height: 24,
//                   }}
//                 />
//                 Edit
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
