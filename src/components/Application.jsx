const Application = (props) => {
  // console.log(props)
  return (
    <li className='Application'>
      <h4>{props.description}</h4>
      <p>Applicant: {props.applicant}</p> 
      <p>Filing Date: {props.filed}</p> 
      <p>Orders Sought: {props.ordersSought}</p> 
      <p>Status: {props.orderStatus} - {props.orderStatusDate}</p> 
    </li>
  )
}

export default Application