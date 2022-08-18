import { FaFolderOpen } from "react-icons/fa"
import { MdHomeFilled } from "react-icons/md"
import { IoIosSettings } from "react-icons/io"
import { IconContext } from "react-icons"

const SideNavBar = () => {
  return (
<IconContext.Provider value={{size: "2em"}} >
<div className="SideNavBar">
  <div id="Icon">
  <MdHomeFilled />
  </div>
  <div id="Icon">
  <FaFolderOpen />
  </div>
  <div id="Icon">
  <IoIosSettings />
  </div>

</div>
</IconContext.Provider>

  )
}
export default SideNavBar