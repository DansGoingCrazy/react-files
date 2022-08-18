import Application from './Application'

const Applications = (props) => 
{
  // console.log(props)
  return (
    <div className="Applications">
      {props.uniqueApps.map((app) => (
        <Application
          key={app.APPLICATIONID}
          id={app.APPLICATIONID}
          description={app.CASETYPEDESCRIPTION}
          filed={app.LODGEMENTDATE}
          applicant={app.APPLICANTNAMESDESCRIPTION}
        />
      ))}
    </div>
  ) 
}
export default Applications