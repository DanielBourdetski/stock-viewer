import React from 'react'
import './Stock.css'

export default function Stock(props) {
    const {name, code, value, change} = props.data;

    return (
        <div className={'m-auto border rounded-3 mt-3 custom p-3 ' + props.className}>
            <div>
                <h1 className='display-4'>{name}</h1>
                <p className='fs-4'>{code}</p>
            </div>
            <p>{value} <span>({change})</span></p>
            <div>
                <button className='btn btn-success me-3'>Buy</button>
                <button className='btn btn-danger'>Sell</button>
            </div>
            
        </div>
    )
}
