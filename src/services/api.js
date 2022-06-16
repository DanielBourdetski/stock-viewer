const baseURL = 'http://localhost:80?';

export const fetchStocks = async (type, query) => {
  try {
    const res = await fetch(`${baseURL}type=${type}&query=${query}`);

    if (res.status === 422) throw new Error('Input not valid');

    const data = await res.json();

    return data;
  } catch (err) {
    return { error: true, errorMessage: err.message };
  }
};

export const actions = { byName: 'name', byTicker: 'ticker', marketData: 'market data' };
