import React from 'react'
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/index.css"
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/components/molecules/Table.css"


export default function TableHeader({ clubs, points, won, lost, draw }) {
    return (
        <div>
            <div className='Tabelle'>Tabelle</div>
            <div className='saison'>Saison 2023/24:</div>
            <div className="table">
                <div class="clubs">Clubs</div>
                <div class="points">P</div>
                <div class="wins">W</div>
                <div class="looses">L</div>
                <div class="draws">D</div>
            </div>
        </div>
    )
}

