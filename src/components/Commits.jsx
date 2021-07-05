import Commit from "./Commit";

const displayCommits = (commits) => {
  return commits.map(commit => {
    return (
      <div key={commit.sha}>
        <Commit 
          author={commit.author.login}
          message={commit.commit.message}
          dateFormatted={commit.dateFormatted}
          avatar={commit.author.avatarUrl}
          committerAddress={commit.author.htmlUrl}
          isDetail={false}
          sha={commit.sha}
        />

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