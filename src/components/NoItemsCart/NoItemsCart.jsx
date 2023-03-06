import './index.css'

export function NoItemsCart () {
  return (
    <div className='cart-container container mx-auto flex justify-center'>
      <h2 className='text-2xl text-white my-auto'>There's no items yet.</h2>
    </div>
  )
}
