const Application = (props) => {
  // console.log(props)
  return (
    <li className='Application'>
      <h4>{props.description}</h4>
      <p>Applicant: {props.applicant}</p> 
      <p>Filing Date: {props.filed}</p> 
    </li>
  )
}

export default Application