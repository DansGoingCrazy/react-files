import './styles/App.css'
import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'
import ListColumn from './components/ListColumn'
import ContentColumn from './components/ContentColumn'
import { useState } from 'react'

const App = () => {
  const [fileId, setFileId] = useState('')

  const updateFileId = (num) => {
    setFileId(num)
  }
  return (
    <div className="FilesPage">
      <TopNavBar />
      <SideNavBar />
      <ListColumn updateFileId={updateFileId} />
      <ContentColumn fileId={fileId} />
    </div>
  )
}

export default App
