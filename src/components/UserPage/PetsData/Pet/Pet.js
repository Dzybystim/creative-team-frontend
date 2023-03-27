//import css from './Pet.module.css';

export default function Pet() {
  return (
 <div>Pet Component</div>
  )
  /*photo, name, birthday, breed, comments*/
  /*const navigate = useNavigate();
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    const RENDER_STORAGE_KEY = 'contact-for-render-state';
  
    let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
    let personal = true;
  
    if (currentContactsState) {
      personal = currentContactsState.find(
        contact => contact.name === name
      ).personal;
       //console.log('personal', personal)
    }
  
    const handleDelete = async () => {
      try {
        await deleteContact(id);
      } catch (error) {
        console.log(error);
      }
  
      deleteContactFromLocal();
    };
  
    function deleteContactFromLocal() {
      let currentContactsState = localStrg.load(RENDER_STORAGE_KEY);
      let correctContactPersonIndex;
      if (currentContactsState) {
        currentContactsState.find(contact => contact.name === name);
        correctContactPersonIndex = currentContactsState.findIndex(
          contact => contact.name === name
        );
        currentContactsState.splice(correctContactPersonIndex, 1);
        // console.log('currentContactsState:', currentContactsState);
        localStrg.save(RENDER_STORAGE_KEY, currentContactsState);
      }
    }
  */
  /* return (
      <> 
        <ul className={css.infopet}>
        <li className={css.photo}>
            <p className={css.text}>{photo}</p>
          </li>
          <li className={css.image}>
            <p className={css.text}>Name:</p>
            <p className={css.text}>{name}</p>
            <button
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
          >
            <RiDeleteBin5Line
              style={{
                color: `orange`,
                width: 24,
                height: 24,
              }}
            />
          </button>
          </li>
          
          <li className={css.infopet_data}>
            <p className={css.text}>Birthday:</p>
            <p className={css.text}>{birthday}</p>
          </li>
          <li className={css.infopet_data}>
            <p className={css.text}>Breed:</p>
            <p className={css.text}>{breed}</p>
          </li>
          <li className={css.infopet_data}>
            <p className={css.text}>Comments:</p>
            <p className={css.text}>{comments}</p>
          </li>
        </ul>
        </>
    );*/
}
