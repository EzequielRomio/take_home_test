import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "./Loading";
import Commits from "./Commits";
import Sort from "./Sort";

import {getCommits} from "../actions/index.js";

const HomePage = () => {
  const [pageIndex, setPageIndex] = useState(0)

  const dispatch = useDispatch();
  const commits = useSelector((state) => state.commits)

  useEffect(() => {
    if (commits && commits.length === 0) {
      dispatch(getCommits())
    }
  })

  const handleClick = (e, value) => {
    e.preventDefault();
    if (pageIndex + value < commits.length) {
      setPageIndex(pageIndex + value <= 0 ? 0 : pageIndex + value)
    }
    window.scrollTo(0, 0)
  }

  return (
    <div className={'container'} style={{height: '100%'}}>
      {!commits || !commits.length > 0 ? <Loading /> : 
        <div className={'row'}>
          <div className={'col-8 mx-5 d-flex align-items-center justify-content-between'}>
            <h3 >Commits History</h3>
            <Sort />
          </div>
          <Commits commits={[...commits].splice(pageIndex, 6)} />

          <ul className={'pagination justify-content-around'}>
            {pageIndex >= 6 && 
              <li className={'page-item'}>
                <button className='btn btn-primary' onClick={(e) => handleClick(e, -6)}>Previous</button>
              </li>
            }
            {pageIndex <= commits.length - 6 &&
              <li className={'page-item'}>
                <button className={'btn btn-primary'} onClick={(e) => handleClick(e, 6)}>Next</button>
              </li>
            }
          </ul>

        </div>
      }

    </div> 
  )
}

export default HomePage;