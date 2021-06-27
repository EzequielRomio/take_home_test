const filterFileImportantData = (file) => {
  return {
    filename: file.filename,
    patch: file.patch,
    additions: file.additions,
    deletions: file.deletions,
    status: file.status
  }
}

export const filterCommitsImportantData = (commits) => {
  return commits.map(commit => {
    return {
      sha: commit.sha,
      htmlUrl: commit.html_url,
      commentsUrl: commit.comments_url,
      committer: {
        login: commit.committer.login,
        avatarUrl: commit.committer.avatar_url,
        htmlUrl: commit.committer.html_url,
      },
      commit: {
        committer: commit.commit.committer,
        message: commit.commit.message,
        commentCount: commit.commit.comment_count
      }
    }
  });
};

export const filterCommitImportantData = (commit) => {
  return {
    sha: commit.sha,
    commit: {
      committer: commit.commit.committer,
      message: commit.commit.message,
      commentCount: commit.commit.comment_count,
    },
    htmlUrl: commit.html_url,
    commentsUrl: commit.comments_url,
    committer: {
      login: commit.committer.login,
      avatarUrl: commit.committer.avatar_url,
      htmlUrl: commit.committer.html_url,
    },
    parents: commit.parents,
    stats: commit.stats,
    files: (commit.files.length > 0 && commit.files.map(file => filterFileImportantData(file))) || []
  }
}