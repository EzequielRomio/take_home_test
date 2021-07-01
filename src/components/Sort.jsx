import {useDispatch} from "react-redux";

import {sortCommits} from "../actions/index.js";

const Sort = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(sortCommits(e.target.value))
  }

  return (
    <div className={'mt-3 mb-3'} >
      <select 
        className={'form-select bg-dark text-white-50'} 
        onChange={handleChange} 
        style={{fontWeight: 'bold'}}
      >
        <option value={'dateDesc'} defaultValue>Sort</option>
        <option value={'dateAsc'}>Ascending</option>
        <option value={'dateDesc'}>Descending</option>
      </select>

    </div>
  )
}

export default Sort;