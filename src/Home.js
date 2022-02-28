import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './Nav';
import TableHeader from './TableHeader';
import Card from "./Card"

function Table() {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false")
          .then(res => {
            setCoins(res.data);
          })

          .catch(error => console.log(error))
      })

    return (
        <div>
            <Nav />
            <br />
            <br />
            <br />
            <TableHeader />
            {coins.map(coin => {
              return (

                <Card
                key = {coin.id}
                name = {coin.name }
                image = {coin.image}
                symbol = {coin.symbol}
                volume = {coin.market_cap}
                price = {coin.current_price}
                priceChange = {coin.price_change_percentage_24h}
                marketcap = {coin.market_cap}
                />

              )
            })}

        </div>
    )
}

export default Table

