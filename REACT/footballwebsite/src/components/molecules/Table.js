import React, { useState, useEffect } from 'react'
import "../../index.css"
import TableHeader from './atoms/TableHeader.js'
import TableData from "./atoms/TableData.js"

export default function Table() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then(response => response.json())
            .then(data => setTableData(data))
            .then(data => console.log(data))

    }, []);

    return (
        <div className='wrapper'>
            <TableHeader />
            <div className='datawrapper'>
                {tableData.map((data) => (
                    <TableData
                        image={data.teamIconUrl}
                        clubs={data.teamName}
                        points={data.points}
                        won={data.won}
                        lost={data.lost}
                        draw={data.draw}
                    />
                ))}
            </div>

        </div>

    )
}

