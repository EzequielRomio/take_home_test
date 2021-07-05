const parseFirstLine = (line) => {
  //str to parse => @@ -37,4 +37,8 @@ 
  const initialNumbers = line.split('@@')[1];
  const numbers = initialNumbers.split(' ')
  const [leftNumber, rightNumber] = [Math.abs(parseInt(numbers[1].split(',')[0])), parseInt(numbers[2].split(',')[0])]

  // these numbers indicate where the diff lines start
  return [leftNumber, rightNumber]
}


const getLineFormat = (line, type, numberLeft, numberRight) => {
  if (type === '-') return `${numberLeft < 10 ? '0' + numberLeft : numberLeft}    - ${line.slice(1, line.length)}`;
  if (type === '+') return `   ${numberRight < 10 ? '0' + numberRight : numberRight} + ${line.slice(1, line.length)}`;
  return `${numberLeft < 10 ? '0' + numberLeft : numberLeft} ${numberRight < 10 ? '0' + numberRight : numberRight}  ${line}`
}


const displayDiff = (patch) => {
  const lines = patch.split('\n')
  let [leftNumber, rightNumber] = parseFirstLine(lines[0])

  return lines.map((line, ix) => {
    const auxLeft = leftNumber;
    const auxRight = rightNumber;
    if (ix === lines.length - 1 && line.includes('\\ No newline at end of file')) {
      return <p key={ix} className={'code italic mt-1 mx-5'}>No newline at end of file</p>
    }

    if (line.startsWith('@@')) {
      return <p key={ix} className={'code text-white-50 m-0 mx-3 my-2'}>{` -  -  ${line}`}</p>
    }

    if (line.startsWith('-')) {      
      leftNumber++;
      return <p key={ix} className={'code deletion-color deletion-bg m-0 mx-3'}>{getLineFormat(line, '-', auxLeft, null)}</p>
    } 

    if (line.startsWith('+')) {
      rightNumber++;
      return <p key={ix} className={'code addition-color addition-bg m-0 mx-3'}>{getLineFormat(line, '+', null, auxRight)}</p>
    }

    leftNumber++;
    rightNumber++;
    return <p key={ix} className={'code white-70 m-0 mx-3'}>{getLineFormat(line, null, auxLeft, auxRight)}</p>
  })
  
}


const CodeBoard = ({filename, patch, status, additions, deletions}) => {
  return (
    <div id={filename} className={'card mb-3 border-secondary code-bg'}>
      <div className={'card-body border-bottom border-secondary mb-3'}>
        <h5 className={'card-title'}>File: {filename}</h5>
        <h6>Status: {status}</h6>
        <h6 className={'addition-color'}>{additions} additions</h6>
        <h6 className={'deletion-color'}>{deletions} deletions</h6>
      </div>

      <div className={'over-flow'}>
        {displayDiff(patch)}
      </div>
      
    </div>
  )
}

export default CodeBoard;