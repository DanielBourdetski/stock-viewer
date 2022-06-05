import React from 'react'
import Graph from './Graph';
import './Stock.css'

function StockList({stocks}) {
    console.log('stocks in stocklist: ', stocks);
    return stocks.map(stock => {
        return (
            <div className={'border rounded-3 d-flex flex-column col-5 col-md-4'}>
                <div className='d-flex flex-column p-3'>
                    <h1 className='display-5'>{stock.name}</h1>
                    <p className='fs-4 text-muted'>{stock.ticker}</p>
                </div>
            </div>
        )
    })
}

function StockMarketData({ticker, results}) {
    return (
        <div className="container w-75 mx-auto p-2">
            <Graph className='w-50 h-75 mx-auto' data={results} />
        </div>
    )
}

export default function Stock(props) {
    // market data: {ticker, results}; results: [{c,t,...},...]
    // stocks: [{ticker, name},...]
    console.log('props: ', props);
    const {data, list} = props;
    console.log('data in stock: ', data);

    return list ? <StockList stocks={data} /> : <StockMarketData ticker={data.ticker} results={data.results} />
}
