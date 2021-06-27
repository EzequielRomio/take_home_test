const Commit = ({committer, message, date, avatar, committerAddress}) => {
  return (
    <div>
      <div>
        <a target={'_blank'} href={committerAddress} rel={'noreferrer'}>
          <img src={avatar} className={'userAvatar'} alt={'committer´s github profile'}></img>
          <h5>{committer}</h5>
        </a>
      </div>

      <h5>{message}</h5>
      <h5>{date}</h5>
      
    </div>
  ) 
}

export default Commit;