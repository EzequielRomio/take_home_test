import {useDispatch} from "react-redux";

import {sortCommits} from "../actions/index.js";

const Sort = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(sortCommits(e.target.value))
  }

  return (
    <div>

      <label>Sort by: </label>

      <select onChange={handleChange}>
        <option value={'dateDesc'}> - </option>
        <option value={'dateAsc'}>Date ascending</option>
        <option value={'dateDesc'}>Date descending</option>
      </select>

    </div>
  )
}

export default Sort;