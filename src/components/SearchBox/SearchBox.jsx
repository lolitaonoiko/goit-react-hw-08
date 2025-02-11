import style from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { filtersValue } from '../../redux/filters/selectors';

function SearchBox() {
  const dispatch = useDispatch();

  const filterValue = useSelector(filtersValue);
  return (
    <div className={style.box}>
      <p>Find contacts by name or number</p>

      <input
        className={style.inp}
        type="text"
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Name.."
      ></input>
    </div>
  );
}

export default SearchBox;
