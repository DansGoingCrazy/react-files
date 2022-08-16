import './styles/App.css'
import data from './components/data'
import File from './components/File'
import Files from './components/Files'
import ListColumn from './components/ListColumn'
import ContentColumn from './components/ContentColumn'

const App = () => {
  return (
    <div className="FilesPage">
      <ListColumn />
      <ContentColumn />
    </div>
  )
}

export default App
