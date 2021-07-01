import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Commit from "./Commit";
import CodeBoard from "./CodeBoard";
import Loading from "./Loading";

import { getCommitDetail } from "../actions/index.js";


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
            className={'list-group-item bgHover'}
            key={file.filename}
          >
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              width="16" height="16"
              fill="currentColor"
              className={"bi bi-file-diff displayNone"}
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4zm-2.5 6.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
            </svg>

            <span className={'mx-3'}>
              {file.filename}
            </span>
          </a>
        )}
      </div>
      <h4 className={'mt-2 mb-5'}>
        with
        <span className={'additionColor'}> {commit.stats.additions} additions </span>
        and
        <span className={'deletionColor'}> {commit.stats.deletions} deletions </span>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github mx-2" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </span>

    </>
  )
}


const DetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const commit = useSelector((state) => state.commitDetail)

  useEffect(() => {
    if (Object.keys(commit).length === 0) {
      dispatch(getCommitDetail(match.params.sha))
    }
  })

  return (
    <div className={'container mb-5'}>
      <div className={'col-12 col-xs-10 col-sm-8 col-lg-6 mx-auto d-flex align-items-center justify-content-end'}>
        <h3 className={'mt-4 mb-4 mx-5'}>Commit Details</h3>
        <Link to={'/'} className={'btn btn-outline-primary text-decoration-none'}>Go back to Home</Link>
      </div>
      {commit && Object.keys(commit).length > 0 ? displayDetails(commit) : <Loading />}
    </div>
  )
}

export default DetailsPage;