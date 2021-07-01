const filterFileImportantData = (file) => {
  return {
    filename: file.filename,
    patch: file.patch,
    additions: file.additions,
    deletions: file.deletions,
    status: file.status
  }
}

const getDateFormat = (datetime) => {
  // pattern 2021-06-21T19:48:11Z
  const [date, time] = datetime.split('T')
  const [year, month, day] = date.split('-')
  return `${month}-${day}-${year} ${time.replace('Z', '')}`
}

export const filterCommitsImportantData = (commits) => {
  return commits.map(commit => {
    return {
      sha: commit.sha,
      htmlUrl: commit.html_url,
      dateFormatted: getDateFormat(commit.commit.committer.date),
      date: commit.commit.committer.date.replace('Z', ''),
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
    dateFormatted: getDateFormat(commit.commit.committer.date),
    htmlUrl: commit.html_url,
    commentsUrl: commit.comments_url,
    committer: {
      login: commit.committer.login,
      avatarUrl: commit.committer.avatar_url,
      htmlUrl: commit.committer.html_url,
    },
    stats: commit.stats,
    files: (commit.files.length > 0 && commit.files.map(file => filterFileImportantData(file))) || []
  }
}


export const sortCommits = (commits, order) => {
  if (order === 'dateAsc') return commits.sort((a, b) => new Date(a.date) - new Date(b.date));   
  if (order === 'dateDesc') return commits.sort((a, b) => new Date(b.date) - new Date(a.date))
}