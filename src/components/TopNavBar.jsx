import { FaUserAlt } from "react-icons/fa"

const TopNavBar = () => {
  return (
<div className = "TopNavBar">
<h1>File Inspector</h1>
<input type="text" placeholder="Search.."></input><div id="Icon-Top"><FaUserAlt size="2em"/></div>
</div>
  )
}

export default TopNavBar