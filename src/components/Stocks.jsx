import React from 'react'
import Stock from './Stock'

export default function Stocks() {
    const DUMMY = {
        name: 'Apple',
        code: 'AAPL',
        value: 150,
        change: 10
    }
    return (
        <div className='constainer flex row justify-content-center'>
            <Stock className='col-3' data={DUMMY} />
            <Stock className='col-3' data={DUMMY} />
        </div>
    )
}
