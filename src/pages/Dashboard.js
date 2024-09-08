import React, { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import axios from 'axios';
import TabsComponent from '../components/Dashboard/Tabs';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';

function DashboardPage() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then((response) => {
                setCoins(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Header />
            <Search search={search} onSearchChange={onSearchChange} />
            <TabsComponent coins={filteredCoins} />
            <PaginationComponent page={page} handlePageChange={handlePageChange} />
        </div>
    );
}

export default DashboardPage;
