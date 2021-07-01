import RepoIcon from "./assets/RepoIcon";

const Header = () => {
  return (
    <div id={'header-container'} className={'d-flex justify-content-center align-items-center'}>
      
      <RepoIcon />
      
      <a href={'https://github.com/EzequielRomio'} target={'_blank'} rel={'noreferrer'}>
        EzequielRomio 
      </a> 
      
      <div className={'mx-2'}>
        /
      </div>
             
      <a href={'https://github.com/EzequielRomio/take_home_test'} style={{fontWeight: '600'}} target={'_blank'} rel={'noreferrer'}> 
        take_home_test 
      </a> 
    </div>
  )
}

export default Header;