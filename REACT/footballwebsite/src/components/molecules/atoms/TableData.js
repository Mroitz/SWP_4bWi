import React from 'react'
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/index.css"
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/components/molecules/Table.css"


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