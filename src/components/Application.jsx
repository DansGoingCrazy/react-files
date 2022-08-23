const Application = (props) => {
  // console.log(props)
  return (
    <li className='Application'>
      <p>{props.description}</p>
      <p>Applicant: {props.applicant}</p> 
      <p>Filing Date: {props.filed}</p> 
    </li>
  )
}

export default Application