const Loading = () => {
  return (
    <>
      <h4>Loading...</h4>
      <div className={'d-flex justify-content-center'} >
        <div className={'spinner-border text-primary'} role={'status'} style={{width: '6rem', height: '6rem'}}>
        </div>
      </div>
    </>
  )
}

export default Loading;