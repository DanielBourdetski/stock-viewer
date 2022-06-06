import React, { useState } from 'react'

import Stock from './Stock'
import SearchInputs from './SearchInputs'
import { fetchStocks, actions } from '../services/api'

export default function Stocks() {
  const [stocks, setStocks] = useState(null);
	const [stockMarketData, setStockMarketData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const resetAndLoad = () => {
		setStockMarketData(null);
		setStocks(null);
		setError(null);
		setLoading(true);
	}

	const onSearchHandler = async search => {
		resetAndLoad();

		const fetchedStocks = await fetchStocks(search.searchBy, search.term);

		if (!fetchedStocks.type) {} // handle no stocks found

		if (fetchedStocks.type === 'marketData') setStockMarketData({data: fetchedStocks.data, name: fetchedStocks.name});

		if (fetchedStocks.type === 'stock list') setStocks(fetchedStocks.data);
  }

	const onStockSelectHandler = async ticker => {
		resetAndLoad();
		const stockData = await fetchStocks(actions.marketData, ticker)
		setStockMarketData(stockData);
	}

	const renderMainContent = () => {
		if (error) {
			return <p>{error}</p>;
		}

		if (stockMarketData) {
			return <Stock data={stockMarketData} />;
		}

		console.log('stocks: ', stocks);

		if (stocks) return <Stock data={stocks} onStockSelect={onStockSelectHandler} list/>;

		if (loading) return <p>Loading...</p>

		return <p>Search for stocks! ^</p>
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
