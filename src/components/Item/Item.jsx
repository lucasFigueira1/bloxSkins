import './index.css'
import { Link } from 'react-router-dom'

function Item ({ weapon }) {
  return (
    <div className='skin-card' key={weapon.id}>
      <span className='skin-card-category'>{weapon.category}</span>
      <span className='skin-card-name'>{weapon.skin_name}</span>
      <Link to={`/item/${weapon.id}`}>
        <img src={weapon.skin_img} alt='Skin Image' />
      </Link>
      <span>$ {weapon.price}</span>
      <Link to={`/item/${weapon.id}`}>
        <span className='skin-card-button'>View Details</span>
      </Link>
    </div>
  )
}
export default Item
