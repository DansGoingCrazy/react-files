import data from './data'
import DisplayApps from './DisplayApps'
import Applications from './Applications'

// gets unique files from data array based on the FILEID 
const map = new Map(data.map((a) => [a.APPLICATIONID, a]))
const uniqueApps = [...map.values()]
// console.log(uniqueApps)

const ContentColumn = (props) => {
  return (
    <div className='ContentColumn'>
      <h3>Applications</h3>
      <Applications 
        fileId={props.fileId} 
        uniqueApps={uniqueApps} />
    </div>
  )
}

export default ContentColumn