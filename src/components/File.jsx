const File = (props) => {
// console.log(props)
  return (
  <li className="file" id={props.id} onClick={() => console.log(props.id)}>
    <div className="Col1">
      <p>{props.number} - {props.title}</p>
      {/* <p>Orders: </p> */}
      </div>
    <div className="Col2">
      <p>Filed: {props.filed}</p>
    </div>
  </li>
  )
}



export default File
