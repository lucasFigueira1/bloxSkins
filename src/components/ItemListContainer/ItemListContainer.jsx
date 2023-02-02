import react from 'react'
import './index.css'

export function ItemListContainer({greeting}) {
    return (
        <div className='greeting-container'>
            <h2 className='greeting-text'>{greeting}</h2>
        </div>
    )
}