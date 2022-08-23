import File from './File'

const Files = (props) => 
{
  // console.log(props)
  return (
    <ul className="files">
      {props.uniqueFiles.map((file) => (
        <File
          key={file.FILEID}
          id={file.FILEID}
          number={file.FULLCASEFILENO}
          title={file.TITLE}
          filed={file.CREATEDDATE}
          application={file.APPLICATION} 
          updateFileId={props.updateFileId} 
        />
      ))}
    </ul>
  ) 
}
export default Files