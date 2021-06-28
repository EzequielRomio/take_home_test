const Commit = ({committer, message, dateFormatted, avatar, committerAddress}) => {
  return (
    <div>
      <h4>{message}</h4>

      <div>
        <a target={'_blank'} href={committerAddress} rel={'noreferrer'}>
          <img src={avatar} className={'userAvatar'} alt={'committer´s github profile'}></img>
          <h6>{committer}</h6>
        </a>
      </div>

      <h6>{dateFormatted}</h6>
    </div>
  ) 
}

export default Commit;