const Loading = () => {
  return (
    <>
      <h4 style={{textAlign: 'center', marginTop: '120px', marginBottom: '60px'}}>Loading...</h4>
      <div className={'d-flex justify-content-center'} >
        <div className={'spinner-border text-primary'} role={'status'} style={{width: '6rem', height: '6rem'}}>
        </div>
      </div>
    </>
  )
}

export default Loading;