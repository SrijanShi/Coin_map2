import React from 'react'
import "./styles.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from 'react-router-dom';
function Grid({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`}>
        <div className="grid-container">
            <div className="info-flex">
                <img src={coin.image} className="coin-logo" />
                <div className="name-col">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>

            </div>
            {coin.price_change_percentage_24h > 0 ? (
                <div className="chip-flex">
                    <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="up-arrow"><TrendingUpIcon /></div>
                </div>
            ) : (
                <div className="chip-flex">
                    <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="down-arrow"><TrendingDownIcon /></div>
                </div>
            )}
            <div className="info-container">
                <h3 className="coin-price" style={{
                    color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)",
                }}>₹{coin.current_price.toLocaleString()}</h3>
            </div>
            <div>
                <p className="total-volume">Total Volume: {coin.total_volume.toLocaleString()}</p>
                <p className="total-market-cap">
                    Market Cap: ₹{coin.market_cap.toLocaleString()}
                </p>
            </div>

        </div>
        </Link>
    )
}

export default Grid