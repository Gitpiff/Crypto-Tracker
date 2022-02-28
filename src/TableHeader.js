import React from 'react'
import "./index.css"

function TableHeader() {
    return (
       <div className='Header'>
           <div className='Header-Coin'>Coin</div>
           <div className='Header-Symbol'>Symbol</div>
           <div className='Header-Ticker'>Ticker Symbol</div>
           <div className='Header-Price'>Current Price</div>
           <div className='Header-Variation'>24 Hr Price Variation</div>
           <div className='Header-MCap'>Market Cap</div>
       </div>
    )
}

export default TableHeader
