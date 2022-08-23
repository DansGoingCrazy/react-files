import data from './data'
import Applications from './Applications'
import { FaFolderOpen } from "react-icons/fa"

// gets unique files from data array based on the FILEID 
const map = new Map(data.map((a) => [a.APPLICATIONID, a]))
const uniqueApps = [...map.values()]
// console.log(uniqueApps)

const ContentColumn = (props) => {
  return (
    <div className='Column'>
      <div className='Header'>
        <FaFolderOpen size='3em'/><h2>&nbsp; File Details</h2>
      </div>
      <h3>Applications</h3>
      <Applications 
        fileId={props.fileId} 
        uniqueApps={uniqueApps} />
    </div>
  )
}

export default ContentColumn