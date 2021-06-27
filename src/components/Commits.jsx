import {Link} from "react-router-dom";

import Commit from "./Commit";

const displayCommits = (commits) => {
  return commits.map(commit => {
    return (
      <div key={commit.sha}>
        <Commit 
          committer={commit.committer.login}
          message={commit.commit.message}
          date={commit.commit.committer.date}
          avatar={commit.committer.avatarUrl}
          committerAddress={commit.committer.htmlUrl}
        />

        <Link to={`/details/${commit.sha}`}>
          <h5>Click here to see details</h5>
        </Link>
      </div>
    )
  })
}

const Commits = ({commits}) => {
  return (
    <>
      {commits && commits.length > 0 && Object.keys(commits[0]).length > 0 && displayCommits(commits)}
    </>
  )
}

export default Commits;