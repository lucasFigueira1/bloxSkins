import './index.css'
// import { Link } from 'react-router-dom'

function Item ({ weapon }) {
  return (
    <div className='skin-card' key={weapon.id}>
      <span className='skin-card-category'>{weapon.category}</span>
      <span className='skin-card-name'>{weapon.skin_name}</span>
      <a href='#'>
        <img src={weapon.skin_img} alt='Skin Image' />
      </a>
      <span>$ {weapon.price}</span>
      <a href='#'>
        <span className='skin-card-button'>View Details</span>
      </a>
    </div>
  )
}
export default Item
