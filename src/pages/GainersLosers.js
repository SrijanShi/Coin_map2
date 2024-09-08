import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../components/Dashboard/List'; // Import the List component
import "./styles.css";
import Header from '../components/Common/Header';
import CircularIndeterminate from '../components/Common/Loader';
function GainersLosers() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets', {
                params: {
                    vs_currency: 'inr',
                    per_page: 100,
                    page: 1,
                },
            })
            .then((response) => {
                const sortedCoins = response.data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
                setCoins(sortedCoins);
            })
            .catch((error) => {
                console.error('Error fetching coin data:', error);
            });
    }, []);

    const gainers = coins.slice(0, 5);
    const losers = coins.slice(-5).reverse();

    return (
        <div className="container">
            <Header/>
            {coins.length > 0 ? (
                <>
                    <h1 className="top-5 gainers-heading">Top 5 Gainers</h1>
                    <div>
                        {gainers.map((coin) => (
                            <List className="list-gainer-loser" key={coin.id} coin={coin}/> // Use the List component
                        ))}
                    </div>
                    
                    <h1 className="top-5 losers-heading">Top 5 Losers</h1>
                    <div>
                        {losers.map((coin) => (
                            <List className="list-gainer-loser" key={coin.id} coin={coin}/> // Use the List component
                        ))}
                    </div>
                </>
            ) : (
                <CircularIndeterminate/>
            )}
        </div>
    );
}

export default GainersLosers;
