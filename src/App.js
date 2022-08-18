import './styles/App.css'
import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'
import ListColumn from './components/ListColumn'
import ContentColumn from './components/ContentColumn'

const App = () => {
  return (
    <div className="FilesPage">
      <TopNavBar />
      <SideNavBar />
      <ListColumn />
      <ContentColumn />
    </div>
  )
}

export default App
