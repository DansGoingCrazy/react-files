import Application from "./Application"

const File = (props) => {
// console.log(props)
  return (
  <div className="file" id={props.file_number}>
    <div className="Col1">
      <p>{props.number} - {props.title}</p>
      {/* <p>Orders: </p> */}
      </div>
    <div className="Col2">

        {/* {props.APPLICATION.map((application) => (
        <Application
          key={application.APPLICATIONID}
          app_description={application.CASETYPEDESCRIPTION}
          />
      ))} */}

      <p>Filed: {props.filed}</p>
    </div>
  </div>
  )
}

export default File
