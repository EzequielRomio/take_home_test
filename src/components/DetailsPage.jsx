import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Commit from "./Commit";
import CodeBoard from "./CodeBoard";

import {getCommitDetail} from "../actions/index.js";

const displayDetails = (commit) => {
  return (
    <> 
      <Commit 
        committer={commit.committer.login}
        message={commit.commit.message}
        date={commit.commit.committer.date}
        avatar={commit.committer.avatarUrl}
        committerAddress={commit.committer.htmlUrl}
      />

      <h4>
        {commit.files.length} {commit.files.length === 1 ? 'file has' : 'files have'} changed with 
        {commit.stats.addittions} addittions and 
        {commit.stats.deletions} deletions
      </h4>
      {commit.files.map(file => <h5>{file.filename}</h5>)}

      <CodeBoard file={commit.files}/>

      <a target={'_blank'} href={commit.htmlUrl}>Click here to Check this commit at github.com</a>

    </>
  )
}


const DetailsPage = ({match}) => {
  const dispatch = useDispatch();
  const commit = useSelector((state) => state.commitDetail)

  useEffect(() => {
    if (Object.keys(commit).length === 0) {
      dispatch(getCommitDetail(match.params.sha))
    }
  })

  return (
    <>
      <header>Commit Details</header>
      {commit && Object.keys(commit).length > 0 && displayDetails(commit)}
    </>
  )
}

export default DetailsPage;