


export const NoticeModal = ({ category,
    title,
    name,
    birthdate,
    breed,
    sex,
    location,
    comments,
    price }) => {

    return (
<>
    
<p>{category}</p>
      
        <div>

        </div>  
            <h3>{title}</h3>

            <ul>
                <li>Name: {name}</li>
                <li>Birthday: {birthdate}</li>
                <li>Breed: {breed}</li>
                <li>Location: {location}</li>
                <li>The sex: {sex}</li>
                <li>Email: {location}</li>
                <li>Phone: {age}</li>

               { price ? <li>Price: {price}$</li> : null}
            </ul>

            <p>Comments: {comments}</p>

            <button type="button">Contact</button>
        {/* { isFavorite ?  <button type="button">Add to </button> : 
                      <button type="button">Remove from </button>} */}
        <button type="button">Add to </button> 
                      <button type="button">Remove from </button>
            
</>
    )
};