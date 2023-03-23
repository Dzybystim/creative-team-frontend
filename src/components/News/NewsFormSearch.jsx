// import css from './News.module.css';
// import { Input } from 'components/Input';
// import css from 'components/Input/Input.module.css'
// import { useDispatch } from 'react-redux';

// import { useState } from "react";
// import { useTranslation } from 'react-i18next';


// const FormSearchNews = () => {
//    const [valueIn, setValueIn] = useState('');
  
//    const { t } = useTranslation();
//    const dispatch = useDispatch();
  
    
// const onClickNews = (e) => {
//   e.preventDefault();
//   setValueIn('')
  
// }

//   return (
//     <div className={css.container}>
//       <h2 className={css.title}>{t('news')}</h2>
//       <div className={css.position}>
//         <form onSubmit={onClickNews}>
//           <Input
//           customStyle={css.InputNews}
//           placeholder={'Search'}
//         //   value
//           label={ 
//             <button className={css.buttonSearch} type="submit"
//             >
//               <svg>
//                 <use />
//               </svg>
//             </button>
//         }/>
//            </form>
//       </div>
        
//     </div>
//   );
// };

// export default FormSearchNews;