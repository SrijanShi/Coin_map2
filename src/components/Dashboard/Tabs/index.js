import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./styles.css"
import Grid from '../Grid';
import List from "../List"

export default function TabsComponent({ coins }) {
    const [value, setValue] = useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const style = {
        color: "var(--white)",
        width: "50vw",
        fontSize: "1.2rem",
        fontWeight: "600",
        fontFamily: "Inter",
        textTransform: "Capitalize",
    };

    return (
        <div>
            <TabContext value={value}>
                <TabList
                    onChange={handleChange}
                    variant="fullWidth">
                    <Tab label="Grid" value="grid" sx={style} className="tab-list-grid" />
                    <Tab label="List" value="list" sx={style} className="tab-list-list" />
                </TabList>
                <TabPanel value="grid">
                    <div className="grid-flex">{coins.map((coin, i) => {
                        return (
                            <Grid coin = {coin} key={i}/>
                        );
                    })}</div>
                </TabPanel>
                <TabPanel value="list">
                    <table className="list-table">
                        {coins.map((item, i)=>{
                            return <List coin={item} key={i}/>;
                        })}
                    </table>
                </TabPanel>
            </TabContext>
        </div>
    );
}