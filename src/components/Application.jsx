const Application = (props) => {
  // console.log(props)
  return (
    <li className='Application'>
      <p>{props.number} - {props.description}</p>
    </li>
  )
}

export default Application