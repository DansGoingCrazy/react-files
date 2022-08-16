import data from './data'
import Files from './Files'

const ListColumn = () => {
  return (
    <div className='ListColumn'>
      <Files data={data} />
    </div>
  )
}

export default ListColumn