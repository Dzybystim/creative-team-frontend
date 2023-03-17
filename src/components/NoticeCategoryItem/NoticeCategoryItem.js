

export const NoticeCategoryItem = ({ item }) => {


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

            <button type="button">LearnMore</button>
            <button type="button">Delete</button>

        </li>

            
</>
    )
};