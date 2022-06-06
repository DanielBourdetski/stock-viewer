const baseURL = 'http://localhost:80?';

export const fetchStocks = async (type, query) => {
  try {
    const res = await fetch(`${baseURL}type=${type}&query=${query}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const actions = { byName: 'name', byTicker: 'ticker', marketData: 'market data' };
