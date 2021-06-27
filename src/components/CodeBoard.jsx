
const CodeBoard = ({filename, patch, status, additions, deletions}) => {
  return (
    <div>
      <h4>{filename}</h4>
      <h6>{status}</h6>
      <h6 style={{color: 'lightgreen'}}>{additions} additions</h6>
      <h6 style={{color: 'tomato'}}>{deletions} deletions</h6>
      {patch.split('\n').map((line, ix) => {
        
        return (
          <p key={ix}
            className={'identation'} 
            style={
              line.startsWith('+') ? {backgroundColor: 'lightgreen'} : 
              line.startsWith('-') ? {backgroundColor: 'tomato'} :
              {backgroundColor: 'whitesmoke'}
            }
          >{!line.startsWith('@@') && line}</p>
        )
      })}
    </div>
  )
}

export default CodeBoard;