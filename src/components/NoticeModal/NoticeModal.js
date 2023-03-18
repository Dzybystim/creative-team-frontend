import css from "./NoticeModal.module.css";


export const NoticeModal = ({item}
    // { category,
    // title,
    // name,
    // birthdate,
    // breed,
    // sex,
    // location,
    // comments,
    // price }
    ) => {

    return (
<>
    
<p>{item.category}</p>
      
<div className={css.img}>

 </div>  
            <h3>{item.title}</h3>

            <ul>
                <li className={css.item}>Name: {item.name}</li>
                <li className={css.item}>Birthday: {item.birthdate}</li>
                <li className={css.item}>Breed: {item.breed}</li>
                <li className={css.item}>Location: {item.location}</li>
                <li className={css.item}>The sex: {item.sex}</li>
                <li className={css.item}>Email: </li>
                <li className={css.item}>Phone: </li>

               { item.price ? <li>Price: {item.price}$</li> : null}
            </ul>

            <p>Comments: {item.comments}</p>

            <button type="button">Contact</button>
        {/* { isFavorite ?  <button type="button">Add to </button> : 
                      <button type="button">Remove from </button>} */}
        <button type="button">Add to </button> 
                      <button type="button">Remove from </button>
            
</>
    )
};

