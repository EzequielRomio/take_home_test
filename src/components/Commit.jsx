const Commit = ({committer, message, date, avatar, committerAddress}) => {
  return (
    <div>
      <div>
        <a target={'_blank'} href={committerAddress}>
          <img src={avatar} className={'userAvatar'}></img>
          <h5>{committer}</h5>
        </a>
      </div>

      <h5>{message}</h5>
      <h5>{date}</h5>
      
    </div>
  ) 
}

export default Commit;