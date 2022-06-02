import React from 'react'
import Graph from './Graph';
import './Stock.css'

export default function Stock(props) {

    // stock = name, marketdata, open, close
    // marketData = open,
    const {stock, clean, marketData} = props;

    return (
        <div className={'border rounded-3 d-flex flex-column ' + props.className}>
            <button className='btn btn-none m-0 ms-auto'>*</button>
            <div>
                <h1 className='display-4'>{stock.name}</h1>
                <p className='fs-4'>{stock.ticker}</p>
            </div>
            {!clean && <p>open: {stock.open}</p>}
            {!clean && <p>close: {stock.close}</p>}
            {marketData && Graph}
            
        </div>
    )
}
