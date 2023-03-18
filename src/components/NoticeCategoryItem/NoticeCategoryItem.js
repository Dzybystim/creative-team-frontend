import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { NoticeModal } from "components/NoticeModal/NoticeModal";

export const NoticeCategoryItem = ({ item }) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    return (
<>
        <li>
<p>{item.category}</p>
        <button type="button">icon</button>
        <div>

        </div>  
            <h3>{item.title}</h3>

            <div>
                <p>Breed: {item.breed}</p>
                <p>Place: {item.location}</p>
                <p>Age: {item.age}</p>

               { item.price ? <p>Price: {item.price}$</p> : null}
            </div>

            <button type="button" onClick={toggleModal}>LearnMore</button>
            <button type="button">Delete</button>

        </li>

        {showModal && (
        <Modal
          key={item.id}
          onClose={toggleModal}
        ><NoticeModal item={item}/></Modal>
      )}      
</>
    )
};




