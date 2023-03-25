
import { Modal } from '../../utilities/Modal/Modal';
import { useState } from 'react';
import { NoticeModal } from 'components/NoticeModal/NoticeModal';
import css from './NoticeCategoryItem.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiTrash } from 'react-icons/hi';
import { getNoticesById} from "../../utilities/helpers";

export const NoticeCategoryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [notice, setNotice] = useState(null);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

  const openModal = (id) => {
      getNoticesById(id)
      .then(data => {
        setNotice(data);
        setShowModal(!showModal);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

    return (
<>
        <li className={css.item} >

        
        <div className={css.img}>
<p className={css.category}>{item.category}</p>
<button className={css.icon} type="button" 
//onClick={()=>toggleSelected(item._id)}
><AiOutlineHeart size={28}/></button>
        </div>  
            <h3 className={css.title}>{item.title}</h3>

            <ul className={css.info}>
              <li className={css.info_item}><p className={css.text}>Breed: </p><p className={css.text}> {item.breed}</p></li>  
              <li className={css.info_item}><p className={css.text}>Place: </p><p className={css.text}>{item.location}</p></li>  
              <li className={css.info_item}><p className={css.text}>Age: </p><p className={css.text}>{item.age}</p></li>  

               { item.price ? <li className={css.info_item}><p className={css.text}>Price:</p><p className={css.text}>{item.price}$</p></li> : null}
            </ul>
<div className={css.btn_cover}>
  <button className={css.btn} type="button" onClick={()=>openModal(item._id)}>LearnMore</button>
            <button className={css.btn} type="button">Delete <HiTrash size={20}/></button>
</div>
            

        </li>

        {showModal && (
        <Modal
          key={item.id}
          onClose={toggleModal}
        ><NoticeModal item={notice} 
    //    onClick={()=>toggleSelected(item._id)} selected={selected}
        /></Modal>
      )}      
</>
    )
        } 



