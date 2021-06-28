
const CodeBoard = ({filename, patch, status, additions, deletions}) => {
  return (
    <div>
      <h4>File: {filename}</h4>
      <h6>Status: {status}</h6>
      <h6 style={{color: 'lightgreen'}}>{additions} additions</h6>
      <h6 style={{color: 'tomato'}}>{deletions} deletions</h6>
      
      <div style={{backgroundColor: 'whitesmoke'}}>
        {patch.split('\n').map((line, ix) => {
          return (
            <p key={ix}
              className={'identation'} 
              style={
                line.startsWith('+') ? {backgroundColor: 'lightgreen'} : 
                line.startsWith('-') ? {backgroundColor: 'tomato'} :
                {backgroundColor: 'none'}
              }
            >{!line.startsWith('@@') && line}</p>
          )
        })}
      </div>
      
    </div>
  )
}

export default CodeBoard;