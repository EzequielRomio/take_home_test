import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Loading from "./Loading";
import Commits from "./Commits";
import Sort from "./Sort";
import RequestError from "./RequestError";

import {getCommits} from "../actions/index.js";

const displayPaginationButtons = (handleClick, pageIndex, commits) => {
  return (
    <ul className={'pagination justify-content-evenly'}>
      {pageIndex >= 6 && 
        <li className={'page-item'}>
          <button className='btn btn-primary' onClick={(e) => handleClick(e, -6)}>Prev</button>
        </li>
      }
      {pageIndex <= commits.length - 6 &&
        <li className={'page-item'}>
          <button className={'btn btn-primary'} onClick={(e) => handleClick(e, 6)}>Next</button>
        </li>
      }
    </ul>
  )
}

const HomePage = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const commits = useSelector((state) => state.commits)
  const requestError = useSelector((state) => state.requestError)
  const dispatch = useDispatch();

  useEffect(() => {
    if (commits && commits.length === 0 && !requestError) {
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
    <>
      <Header />
      <div className={'container h-100'}>
        {requestError ? <RequestError error={'getCommits'}/> :
          !commits || !commits.length > 0 ? <Loading /> : 
            <div className={'row'}>
              
              <div className={'w-75 col-10 col-xs-8 col-sm-6 col-lg-4 mx-5 d-flex align-items-center justify-content-between'}>
                <h3 >Commits History</h3>
                <Sort />
              </div>

              <Commits commits={[...commits].splice(pageIndex, 6)} />

              {displayPaginationButtons(handleClick, pageIndex, commits)}

            </div>
        }
      </div> 
    </>
  )
}

export default HomePage;