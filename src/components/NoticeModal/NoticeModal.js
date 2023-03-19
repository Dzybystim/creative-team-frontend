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
<div className={css.container}>
    

      
<div className={css.img}>
<p className={css.category}>{item.category}</p>
 </div>  
            <h3 className={css.title}>{item.title}</h3>
            

            <ul className={css.list}>
                <li className={css.item}><p className={css.main_text}>Name: </p><p className={css.text}> {item.name}</p></li>
                <li className={css.item}><p className={css.main_text}>Birthday: </p><p className={css.text}>{item.birthdate}</p> </li>
                <li className={css.item}><p className={css.main_text}>Breed: </p><p className={css.text}>{item.breed}</p> </li>
                <li className={css.item}><p className={css.main_text}>Location: </p><p className={css.text}>{item.location}</p> </li>
                <li className={css.item}><p className={css.main_text}>The sex: </p><p className={css.text}>{item.sex}</p> </li>
                <li className={css.item}><p className={css.main_text}>Email: </p><p className={css.text}></p> </li>
                <li className={css.item}><p className={css.main_text}>Phone: </p><p className={css.text}></p> </li>

               { item.price ? <li className={css.item}><p className={css.main_text}>Price:</p> <p className={css.text}>{item.price}$</p></li> : null}
            </ul>

            <p className={css.comments}>Comments: {item.comments}</p>

          <ul >
            <li className={css.btn_item}><button className={css.btn} type="button">Contact</button></li>
            <li className={css.btn_item}><button className={css.btn} type="button">Add to </button></li>
            <li className={css.btn_item}><button className={css.btn} type="button">Remove from </button></li>
            {/* <li>{ isFavorite ?  <button type="button">Add to </button> : 
                      <button type="button">Remove from </button>}</li> */}
          </ul>
            

         
                      
            
</div>
    )
};

