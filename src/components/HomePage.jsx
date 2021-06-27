import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Commits from "./Commits";

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
      <h1>Commits History</h1>
      <Commits commits={commits} />
    </div>
  )
}

export default HomePage;