const Application = (props) => {
  // console.log(props)
  return (
    <li className='Application'>
      <h3>{props.description}</h3>
      <p>Applicant: {props.applicant}</p> 
      <p>Filing Date: {props.filed}</p> 
    </li>
  )
}

export default Application