import React from 'react';
import "./styles.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {convertNumber} from "../../../functions/convertNumbers"
import { Link } from 'react-router-dom';
function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">
      <td className="td-image">
        <img src={coin.image} alt={coin.name} className="coin-logo" />
        </td>
        <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <td className="chip-flex">
        {coin.price_change_percentage_24h > 0 ? (
          <>
            <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="up-arrow"><TrendingUpIcon /></div>
          </>
        ) : (
          <>
            <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="down-arrow"><TrendingDownIcon /></div>
          </>
        )}
      </td>
      <td className="info-container">
        <h3 className="coin-price" style={{
          color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)",
        }}>₹{coin.current_price.toLocaleString()}</h3>
      </td>
      <td>
        <p className="total-volume"> {coin.total_volume.toLocaleString()}</p>
      </td>
      <td className='desktop-td-mkt'>
        <p className="total-market-cap"> ₹{coin.market_cap.toLocaleString()}
        </p>
      </td>
      <td className="mobile-td-mkt">
        <p className="total-market-cap"> ₹{convertNumber(coin.market_cap)}
        </p>
      </td>
    </tr>
    </Link>
  );
}

export default List;
