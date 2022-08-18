import data from './data'
import Files from './Files'

// gets unique files from data array based on the FILEID 
const map = new Map(data.map((f) => [f.FILEID, f]))
const uniqueFiles = [...map.values()]
// console.log(uniquesFiles)

const ListColumn = () => {
  return (
    <div className='ListColumn'>
      <h3>Files</h3>
      <Files uniqueFiles={uniqueFiles} />
    </div>
  )
}

export default ListColumn