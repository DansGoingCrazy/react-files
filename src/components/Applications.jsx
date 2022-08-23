import Application from './Application'

const Applications = (props) => 
{
  // console.log(props)
  return (
    <ul className="Applications">
      {props.uniqueApps.map((app) => {
        if (props.fileId === app.FILEID){
          return (
          <Application
          key={app.APPLICATIONID}
          id={app.APPLICATIONID}
          number={app.FULLCASEFILENO}
          description={app.CASETYPEDESCRIPTION}
          filed={app.LODGEMENTDATE}
          fileStatus={app.STATUSID}
          applicant={app.APPLICANTNAMESDESCRIPTION}
          ordersSought={app.DESCRIPTION}
          orderStatus={app.STATUS}
          orderStatusDate={app.STATUSDATE}

        />)}else{
          return (
            <></>
          )
        }
        }
        
      )}
    </ul>
  ) 
}
export default Applications