import { BounceLoader } from 'react-spinners'
import './index.css'

export const Loader = () => {
  return (
    <div className='loader-container'>
      <BounceLoader color='#f72585' />
    </div>
  )
}
