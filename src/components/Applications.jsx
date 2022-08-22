import Application from './Application'

const Applications = (props) => 
{
  // console.log(props)
  return (
    <ul className="Applications">
      {props.uniqueApps.map((app) => (
        <Application
          key={app.APPLICATIONID}
          id={app.APPLICATIONID}
          description={app.CASETYPEDESCRIPTION}
          filed={app.LODGEMENTDATE}
          applicant={app.APPLICANTNAMESDESCRIPTION}
        />
      ))}
    </ul>
  ) 
}
export default Applications