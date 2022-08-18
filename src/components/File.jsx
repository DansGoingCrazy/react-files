const File = (props) => {
// console.log(props)
  return (
  <a className="file" href="###" id={props.file_number}>
    <div className="Col1">
      <p>{props.number} - {props.title}</p>
      {/* <p>Orders: </p> */}
      </div>
    <div className="Col2">
      <p>Filed: {props.filed}</p>
    </div>
  </a>
  )
}

export default File
