import React, { useEffect } from 'react'
import * as ReactBootStrap from "react-bootstrap"



function Card({id,name, image, symbol, price, priceChange, marketcap}) {

    useEffect(() => {
        <thead>
                <tr>
                  <th>Coin</th>
                  <th>Symbol</th>
                  <th>Ticker Symbol</th>
                  <th>Current Price</th>
                  <th>% 24 Hr Variation</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
    }, [])

    return (

         <ReactBootStrap.Table striped bordered hover style={{cursor: "pointer"}}>

              <tbody>


                    <tr key={id}>
                        <td width={"10%"}>{name}</td>
                        <td width={"20%"}> <img src={image} alt="crypto" width={"50px"}/></td>
                        <td width={"10%"}>{symbol.toUpperCase()}</td>
                        <td width={"15%"}>${price}</td>
                        <td width={"10%"}>${priceChange}</td>
                        <td width={"15%"}>${marketcap.toLocaleString(2)}</td>
                    </tr>


              </tbody>
            </ReactBootStrap.Table>



    )
}

export default Card

