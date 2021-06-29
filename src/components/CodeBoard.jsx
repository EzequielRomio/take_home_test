const parseFirstLine = (line) => {
  const parsedLine = line.split('@@')[2];
  return `   ${parsedLine}`;
}

const setClassname = (line) => {
  if (line.startsWith('+')) return 'code additionColor additionBg m-0 mx-3';
  if (line.startsWith('-')) return 'code deletionColor deletionBg m-0 mx-3';
  return 'code white70 m-0 mx-3'
}

const mapLinesIx = (txt) => {
  const lines = txt.split('\n')
  //str to parse => @@ -37,4 +37,8 @@ 
  //result will be -37; 37 
  const aux = lines[0].split(' ')
  const [left, right] = [parseInt(aux[1].split(',')[0]), parseInt(aux[2].split(',')[0])]
  
  let countLeft = Math.abs(left)
  let countRight = right
  return lines.map(line => {
    const auxLeft = countLeft;
    const auxRight = countRight;
    if (!line.startsWith('-') && !line.startsWith('+')) {
      countLeft++;
      countRight++;
      const letfStr = `${auxLeft >= 10 ? auxLeft : auxLeft === 0 ? '  ' : '0' + auxLeft}`
      const rightStr =  `${auxRight >= 10 ? auxRight : auxRight === 0 ? '  ' : '0' + auxRight}`
      return `${letfStr} ${rightStr}`
    }
    if (line.startsWith('-')) {
      countLeft++;
      return `${auxLeft < 10 ? '0' + auxLeft : auxLeft}   `
    } 
    countRight++;
    return `   ${auxRight < 10 ? '0' + auxRight : auxRight}`
  })

}

const setLineFormat = (line) => {
  if (line.startsWith('-')) return ` - ${line.slice(1, line.length)}`;
  if (line.startsWith('+')) return ` + ${line.slice(1, line.length)}`;
  return `   ${line}`;
}

const CodeBoard = ({filename, patch, status, additions, deletions}) => {
  const linesIndex = mapLinesIx(patch)

  return (
    <div id={filename} className={'card mb-3 border-secondary codeBg'}>
      <div className={'card-body border-bottom border-secondary mb-3'}>
        <h5 className={'card-title'}>File: {filename}</h5>
        <h6>Status: {status}</h6>
        <h6 className={'additionColor'}>{additions} additions</h6>
        <h6 className={'deletionColor'}>{deletions} deletions</h6>
      </div>

      <div>
        {patch.split('\n').map((line, ix) => {
          return (
            <p key={ix} className={setClassname(line)} >
              {linesIndex[ix]}
              {!line.startsWith('@@') ? setLineFormat(line) : parseFirstLine(line)}
            </p>
          )
        })}
      </div>
      
    </div>
  )
}

export default CodeBoard;