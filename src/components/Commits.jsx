import {Link} from "react-router-dom";

import Commit from "./Commit";

const Commits = ({commits}) => {
  return (
    <>
      {commits.map(commit => {
        return (
          <Link to={`/details/${commit.sha}`}>
            <Commit 
              committer={commit.committer.login}
              message={commit.commit.message}
              date={commit.commit.committer.date}
              avatar={commit.committer.avatar_url}
              committerAddress={commit.committer.html_url}
            />
          </Link>
        )
      })}
    </>
  )
}

export default Commits;