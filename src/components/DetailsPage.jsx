import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Header from "./Header";
import Commit from "./Commit";
import CodeBoard from "./CodeBoard";
import Loading from "./Loading";
import RequestError from "./RequestError";
import FileIcon from "./assets/FileIcon";
import GithubIcon from "./assets/GithubIcon";

import { getCommitDetail, resetError } from "../actions/index.js";


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
      <div className={'list-group mt-2'}>
        {commit.files.map(file =>
          <a
            href={`#${file.filename}`}
            className={'list-group-item bg-hover'}
            key={file.filename}
          >
            <FileIcon />
            <span className={'mx-3'}>
              {file.filename}
            </span>
          </a>
        )}
      </div>
      <h4 className={'mt-2 mb-5'}>
        with
        <span className={'addition-color'}> {commit.stats.additions} additions </span>
        and
        <span className={'deletion-color'}> {commit.stats.deletions} deletions </span>
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
      <span className={'d-flex mx-2'}>
        <a
          target={'_blank'}
          href={commit.htmlUrl}
          rel={'noreferrer'}
          
        >
          Click here to Check this commit at github.com
          <GithubIcon />
        </a>
      </span>

    </>
  )
}


const DetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const commit = useSelector((state) => state.commitDetail)
  const requestError = useSelector((state) => state.requestError)
  const history = useHistory();
  
  useEffect(() => {
    if (Object.keys(commit).length === 0 && !requestError) {
      dispatch(getCommitDetail(match.params.sha))
    }
  })

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(resetError());
    history.push('/')
  }

  return (
    <>
    <Header />
      <div className={'container mb-5'}>
        {requestError ? 
          <>
            <RequestError error={'getCommit'} />
            <button className={'btn btn-outline-primary text-decoration-none mx-5'} onClick={handleClick}>
              Go back to home  
            </button> 
          </>
          :
          <> 
            <div className={'col-12 col-xs-10 col-sm-8 col-lg-6 mx-auto d-flex align-items-center justify-content-end'}>
              <h3 className={'mt-4 mb-4 mx-5'}>Commit Details</h3> 
              <Link to={'/'} className={'btn btn-outline-primary text-decoration-none'}>Go back to Home</Link>
            </div>
            {commit && Object.keys(commit).length > 0 ? displayDetails(commit) : <Loading />}
          </>
        }
      </div>
    </>
  )
}

export default DetailsPage;