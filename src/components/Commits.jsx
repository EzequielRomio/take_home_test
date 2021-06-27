import {Link} from "react-router-dom";

import Commit from "./Commit";


const displayCommits = (commits) => {
  return commits.map(commit => {
    return (
      <Link to={`/details/${commit.sha}`}>
        <Commit 
          committer={commit.committer.login}
          message={commit.commit.message}
          date={commit.commit.committer.date}
          avatar={commit.committer.avatarUrl}
          committerAddress={commit.committer.htmlUrl}
        />
      </Link>
    )
  })
}

const Commits = ({commits}) => {
  return (
    <>

      {/* these validations are: 
        1 - commits is not undefined;
        2 - commits is an Array and has elements;
        3 - commits elements have content to work with them;
      */}

      {commits && commits.length > 0 && Object.keys(commits[0]).length > 0 && displayCommits(commits)}
    </>
  )
}

export default Commits;