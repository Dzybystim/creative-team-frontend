import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.spinner}>
          <Dna
              visible={true}
              height="150"
              width="150"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
            /> 
        </div>
        )
}