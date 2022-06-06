import React from 'react'
import Graph from './Graph';
import classes from './Stock.module.css'

function StockList({stocks, onStockSelect}) {
    console.log('stocks in stocklist: ', stocks);
    return stocks.map(stock => {
        return (
            <div key={stock.ticker} onClick={() => onStockSelect(stock.ticker)} className={`border rounded-3 d-flex flex-column col-5 col-md-4 ${classes.card}`}>
                <div className='d-flex flex-column p-3'>
                    <h1 className='display-5'>{stock.name}</h1>
                    <p className='fs-4 text-muted'>{stock.ticker}</p>
                </div>
            </div>
        )
    })
}

function StockMarketData({ticker, results, name}) {
    const monthHigh = Math.max(...results.map(result => result.h));
    const monthLow = Math.min(...results.map(result => result.l));

    const monthlyChange = (results[results.length - 1].c - results[0].c).toFixed(2);
    const monthlyChangePercent = ((monthlyChange * 100) / results[0].c).toFixed(2);

    const dailyChange = (results[results.length - 1].c - results[results.length - 2].c).toFixed(2);
    const dailyChangePercent = ((dailyChange * 100) / results[0].c).toFixed(2);


    const dailyChangeStyle = dailyChange >= 0 ? classes['positive-change'] : classes['negative-change'];
    const monthlyChangeStyle = monthlyChange >= 0 ? classes['positive-change'] : classes['negative-change'];

    return (
        <>
            <h2 className="display-5 mt-3 mb-0">{name}</h2>
            <div className="container w-75 mx-auto p-2 mt-0 d-flex">
                <Graph className='w-75 h-100 mx-auto' ticker={ticker} data={results} />
                <div className='d-flex flex-column justify-content-evenly p-3 border rounded'>
                    <span className={dailyChangeStyle}>Daily change: <br /> {dailyChange} ({dailyChangePercent}%)</span>
                    <br />
                    <span className={monthlyChangeStyle}>Monthly change: <br /> {monthlyChange} ({monthlyChangePercent}%)</span>
                    <hr />
                    <span>High: {monthHigh}</span>
                    <span>Low: {monthLow}</span>
                </div>
            </div>
        </>
    )
}

export default function Stock(props) {
    // market: {data: {}, name: ''};  --> data: {ticker, results, ...};
    // stocks: [{ticker, name},...]

    console.log(props);
    const {data, list} = props;

    return list ? <StockList stocks={data} onStockSelect={props.onStockSelect}/> : <StockMarketData name={data.name} ticker={data.data.ticker} results={data.data.results} />
}
