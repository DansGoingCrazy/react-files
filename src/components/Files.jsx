import Application from './Application'
import File from './File'

const Files = (props) => 
{
  // console.log(props)
  return (
    <div className="files">
      {props.uniqueFiles.map((file) => (
        <File
          key={file.FILEID}
          id={file.id}
          number={file.FULLCASEFILENO}
          title={file.TITLE}
          filed={file.CREATEDDATE}
          application={file.APPLICATION}
        />
      ))}

    </div>

  ) 
}
export default Files