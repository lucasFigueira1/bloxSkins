import './index.css'
import { Link } from 'react-router-dom'

export const GoBackHome = () => {
  return (
    <div className='GoBackHome-btn-container'>
      <h2>Thanks for the buy!</h2>
      <Link to='/' className='GoBackHome-btn'>
        Go back Home
      </Link>
    </div>
  )
}
