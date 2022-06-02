import React, {useEffect, useState} from 'react'

import Stock from './Stock'
import SearchInputs from './SearchInputs'


import { getStocks, actions, getMonthsWorthStockMatketData, getStockCurrentData } from '../services/getSymbols'

// const DUMMY = [
//   {
//       name: 'Apple',
//       code: 'AAPL',
//       value: 150,
//       change: 10
//   },
//   {
//       name: 'Microsoft',
//       code: 'MSFT',
//       value: 350,
//       change: -3
//   },
//   {
//       name: 'Apple',
//       code: 'AAPL',
//       value: 150,
//       change: 10
//   },
// ]

export default function Stocks() {
  const [stocks, setStocks] = useState(null);
	const [stock, setStock] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const renderMainContent = () => {
		if (error) return <p>{error}</p>;

		if (stock) return <Stock className='col-3' stock={stock} />;

		if (stocks) return stocks.map(stock => <Stock key={stock.ticker} clean className='col-md-4 col-lg=3' stock={stock} />);

		if (loading) return <p>Loading...</p>

		return <p>Search for stocks! ^</p>
	}

  const onSearchHandler = search => {
		setStock(null);
		setStocks(null);
		setError(null);
		setLoading(true);

		const fetchStocks = async () => {
			try {
				const fetchedStocks = await getStocks(search.searchBy, search.term);
				if (fetchedStocks.length === 0) return setError('No Matching Stocks Found');
	
				if (fetchedStocks.length === 1) return setStock(fetchedStocks[0])
	
				setStocks(fetchedStocks);
	
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		}

		fetchStocks();
  }

  return (
      <>
          <SearchInputs className='w-50 mx-auto my-3' onSearchHandler={onSearchHandler} />
          <div className='container row gap-5 w-75 justify-content-center mx-auto mt-3'>
						{renderMainContent()}
          </div>
      </>
  )
}
