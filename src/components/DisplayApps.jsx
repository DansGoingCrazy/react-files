const DisplayApps = (props) => {
  return <li onClick={()=> console.log(props.FILEID)}>{props.FILEID}</li>;
}

  
  // console.log(props)
  // return (
  //   <li className='Application' >
  //     <p>{props.description}</p>
  //   </li>
  // )


export default DisplayApps