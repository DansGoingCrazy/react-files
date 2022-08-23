const Application = (props) => {
  // console.log(props)
  return (
    <li className='Application'>
      <h4>{props.description}</h4>
      <p><b>Applicant:</b> {props.applicant}</p> 
      <p><b>Filing Date:</b> {props.filed}</p> 
      <p><b>Orders Sought:</b> {props.ordersSought}</p> 
      <p><b>Status:</b> {props.orderStatus} - {props.orderStatusDate}</p> 
    </li>
  )
}

export default Application