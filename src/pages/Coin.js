import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header';
import CircularIndeterminate from '../components/Common/Loader';
import { coinObject } from "../functions/coinObject"
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import List from "../components/Dashboard/List"
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isChartLoading, setIsChartLoading] = useState(false);
    const [error, setError] = useState(false);
    const [coinData, setCoinData] = useState();
    const [chartData, setChartData] = useState({});
    const [days, setDays] = useState(30);

    const fetchCoinData = useCallback(async () => {
        setIsLoading(true);
        setError(false);
        try {
            const data = await getCoinData(id, setError);
            if (data) {
                coinObject(setCoinData, data);
            } else {
                setError(true);
            }
        } catch (err) {
            console.error("Error fetching coin data:", err);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    const fetchChartData = useCallback(async () => {
        setIsChartLoading(true);
        setError(false);
        try {
            const priceData = await getCoinPrices(id, days, 'prices', setError);
            if (priceData && priceData.length > 0) {
                setChartData({
                    labels: priceData.map((price) => convertDate(price[0])),
                    datasets: [{
                        data: priceData.map((price) => price[1]),
                        borderColor: "#3a80e9",
                        borderWidth: 1,
                        fill: true,
                        tension: 0.25,
                        backgroundColor: "rgba(58, 128, 233, 0.1)",
                        borderColor: "#3a80e9",
                        pointRadius: 0,
                    }]
                });
            } else {
                setError(true);
            }
        } catch (err) {
            console.error("Error fetching price data:", err);
            setError(true);
        } finally {
            setIsChartLoading(false);
        }
    }, [id, days]);

    useEffect(() => {
        fetchCoinData();
    }, [fetchCoinData]);

    useEffect(() => {
        fetchChartData();
    }, [fetchChartData]);

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    };

    if (error) {
        return <div>Error loading data. Please try again later.</div>;
    }
    
    return (
        <div>
            <Header/>
            {isLoading ? (
                <CircularIndeterminate/>
            ) : (
                coinData ? (
                    <>
                    <div className="grey-wrapper">
                        <List coin={coinData}/>
                    </div>
                    <div className="grey-wrapper">
                        <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                        {isChartLoading ? (
                            <CircularIndeterminate />
                        ) : (
                            <LineChart chartData={chartData} />
                        )}
                    </div>
                    <CoinInfo heading={coinData.name} desc={coinData.desc} />
                    </>
                ) : (
                    <p>No coin data available</p>
                )
            )}
        </div>
    );
}

export default CoinPage;