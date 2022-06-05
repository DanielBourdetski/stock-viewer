import React, { useState } from 'react'

import Stock from './Stock'
import SearchInputs from './SearchInputs'
import { fetchStocks } from '../services/api'

export default function Stocks() {
	// stocks = data: [{ticker, name},...]
  const [stocks, setStocks] = useState(null);
	// stockMarketData = data: {ticker, results} --> results: [{c,t,...},...]
	const [stockMarketData, setStockMarketData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const renderMainContent = () => {
		if (error) {
			return <p>{error}</p>;
		}

		if (stockMarketData) {
			return <Stock data={stockMarketData} />;
		}

		console.log('stocks: ', stocks);

		if (stocks) return <Stock data={stocks} list/>;

		if (loading) return <p>Loading...</p>

		return <p>Search for stocks! ^</p>
	}

  const onSearchHandler = async search => {
		setStockMarketData(null);
		setStocks(null);
		setError(null);
		setLoading(true);

		const fetchedStocks = await fetchStocks(search.searchBy, search.term);
		console.log(fetchedStocks);

		if (!fetchedStocks.type) {} // handle no stocks found

		if (fetchedStocks.type === 'marketData') setStockMarketData(fetchedStocks.data);

		if (fetchedStocks.type === 'stock list') setStocks(fetchedStocks.data);
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
