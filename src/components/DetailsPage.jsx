import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Commit from "./Commit";
import CodeBoard from "./CodeBoard";
import Loading from "./Loading";

import {getCommitDetail} from "../actions/index.js";


const displayDetails = (commit) => {
  return (
    <> 
      <Commit 
        committer={commit.committer.login}
        message={commit.commit.message}
        dateFormatted={commit.dateFormatted}
        avatar={commit.committer.avatarUrl}
        committerAddress={commit.committer.htmlUrl}
        isDetail={true}
      />

      <h4>{commit.files.length} {commit.files.length === 1 ? 'file' : 'files'} had changed</h4> 
      <ul>
        {commit.files.map(file => <li key={file.filename}>{file.filename}</li>)}
      </ul>
      <h4>
        with &nbsp;
        {commit.stats.additions} additions and &nbsp;
        {commit.stats.deletions} deletions
      </h4>

      {commit.files.map(file => 
        <CodeBoard 
          key={file.filename}
          filename={file.filename} 
          patch={file.patch}
          status={file.status}
          additions={file.additions}
          deletions={file.deletions}
        />
      )}

      <a 
        target={'_blank'} 
        href={commit.htmlUrl} 
        rel={'noreferrer'}
      >
        Click here to Check this commit at github.com
      </a>

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
      {commit && Object.keys(commit).length > 0 ? displayDetails(commit) : <Loading />}
    </>
  )
}

export default DetailsPage;