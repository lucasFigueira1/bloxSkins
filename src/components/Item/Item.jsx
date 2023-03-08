import './index.css'
import { Link } from 'react-router-dom'

function Item ({ dataSkins }) {
  return (
    <div className='skin-card' key={dataSkins.id}>
      <span className='skin-card-category'>{dataSkins.category}</span>
      <span className='skin-card-name'>{dataSkins.skin_name}</span>
      <Link to={`/item/${dataSkins.id}`}>
        <img src={dataSkins.skin_img} alt='Skin Image' />
      </Link>
      <span>$ {dataSkins.price}</span>
      <Link to={`/item/${dataSkins.id}`}>
        <span className='skin-card-button'>View Details</span>
      </Link>
    </div>
  )
}
export default Item
