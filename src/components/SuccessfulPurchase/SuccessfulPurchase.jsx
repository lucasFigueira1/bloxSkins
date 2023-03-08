import './index.css'

export const SuccessfulPurchase = ({ orderID }) => {
  return (
    <span className='SuccessfulPurchase-text'>
      Thank you for your purchase! your transaction ID is: {orderID}
    </span>
  )
}
