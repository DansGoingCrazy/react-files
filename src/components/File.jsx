
const File = (props) => {
// console.log(props)
  return (
  <div className="file" id={props.file_number}>
    <div className="Col1">
      <p>{props.number} - {props.title}</p>
      <p>Orders: </p>
      </div>
    <div className="Col2">
      <p>Application</p>
      <p>Filed: </p>
    </div>
  </div>
  )
}

export default File
