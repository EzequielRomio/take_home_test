const displayGetCommitsError = () => {
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4">Oops! Something was wrong</h1>
      <p className="lead">Github Api Rest is not responding</p>
      <hr className="my-4"></hr>
      <p>Try again later</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="https://github.com/EzequielRomio/take_home_test/commits/main" role="button">See commits at Github.com</a>
      </p>
    </div>
  )
} 

const displayGetCommitError = () => {
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Commit Not Found</h1>
        <hr className="my-4"></hr>
      </div>
    </div>
  )
}

const RequestError = ({error}) => {
  return (
    <>
      {error === 'getCommits' && displayGetCommitsError()}
      {error === 'getCommit' && displayGetCommitError()}
    </>
  )
}

export default RequestError;