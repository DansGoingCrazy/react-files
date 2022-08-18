import { FaFolderOpen } from "react-icons/fa"
import { IconContext } from "react-icons"

const SideNavBar = () => {
  return (
<IconContext.Provider value={{size: "3em"}}>
<div className="SideNavBar">
  <h1>side nav bar</h1>
  <FaFolderOpen />
</div>
</IconContext.Provider>
  )
}
export default SideNavBar