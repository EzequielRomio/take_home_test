import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Commits from "./Commits";
import Sort from "./Sort";

import {getCommits} from "../actions/index.js";

const HomePage = () => {
  const dispatch = useDispatch();
  const commits = useSelector((state) => state.commits)

  useEffect(() => {
    if (commits && commits.length === 0) {
      dispatch(getCommits())
    }
  })

  return (
    <div>
      <header>Commits History</header>
      <Sort />
      {commits && commits.length > 0 && <Commits commits={commits} />} 
    </div>
  )
}

export default HomePage;