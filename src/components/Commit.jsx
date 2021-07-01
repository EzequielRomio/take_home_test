import {Link} from "react-router-dom";

const showLink = (sha, message, dateFormatted) => {
  return (
    <Link to={`/details/${sha}`} title={'See Details'} className={'text-white-50'}>
      <h5 className={'card-title'}>{message}</h5>
      <p className={'card-text'}>
        <small className={'text-muted'}>Committed {dateFormatted}</small>
      </p>
    </Link>
  )
}

const Commit = ({committer, message, dateFormatted, avatar, committerAddress, isDetail, sha}) => {
  return (
    <div className={'card mb-3 bg-dark border-secondary'}>
      <div className={`row g-0${!isDetail && ' btn-dark rounded'}`}>
        <div className={'col-md-4 row g-1'}>
          <div className={'d-flex align-items-center justify-content-center'}>
            <a 
              target={'_blank'} 
              href={committerAddress} 
              rel={'noreferrer'} 
              className={'d-flex align-items-center justify-content-center text-white-50'}
              title={'Committer´s github'}
            >

              <img src={avatar} className={'userAvatar'} alt={'committer´s github profile'}></img>
              <h5 className={'mr-auto p-2'}>{committer}</h5>
            
            </a>
          </div>
        </div>
        <div className={'col-md-8'}>
          <div className={'card-body'}>
            {!isDetail ? showLink(sha, message, dateFormatted) : 
              <>
                <h5 className={'card-title'}>{message}</h5>
                <p className={'card-text'}>
                  <small className={'text-muted'}>Committed {dateFormatted}</small>
                </p>
              </>
            }
        </div>
      </div>
    </div>
  </div>
  ) 
}

export default Commit;