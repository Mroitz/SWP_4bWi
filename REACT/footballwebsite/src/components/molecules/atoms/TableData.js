import React from 'react'
import "../../../index.css"
import "../Table.css"


export default function TableData({ image, clubs, points, won, lost, draw }) {
    return (
        <div class="data">
            <div class="clubs"> <img class="image" src={image} alt="Team Logo" /> {clubs}</div>
            <div class="points">{points}</div>
            <div class="wins">{won}</div>
            <div class="looses">{lost}</div>
            <div class="draws">{draw}</div>
        </div>
    );
}