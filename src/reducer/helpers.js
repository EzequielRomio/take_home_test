const filterFileImportantData = (file) => {
  return {
    sha: file.sha,
    filename: file.filename,
    patch: file.patch,
  }
}

export const filterCommitsImportantData = (commits) => {
  const result = [];

  for (const commit of commits) {
    const filteredFields = {
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
    };

    result.push(filteredFields)
  }
  return result
}

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