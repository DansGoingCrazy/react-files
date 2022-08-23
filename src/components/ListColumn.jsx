import data from './data'
import Files from './Files'

// gets unique files from data array based on the FILEID 
const map = new Map(data.map((f) => [f.FILEID, f]))
const uniqueFiles = [...map.values()]
// console.log(uniquesFiles)

const ListColumn = (props) => {
  return (
    <div className='ListColumn'>
      <h2>Files</h2>
      <Files  
        updateFileId={props.updateFileId} 
        uniqueFiles={uniqueFiles} />
    </div>
  )
}

export default ListColumn