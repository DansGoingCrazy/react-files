import File from './File'

const Files = (props) => 
{
  console.log(props)
  return (
    <div className="files">
      {props.data.map((file) => (
        <File
          key={file.file_number}
          number={file.file_number}
          title={file.file_title}
        />
      ))}
    </div>

  ) 
}
export default Files