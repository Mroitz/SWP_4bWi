import React from 'react'
import "../../../index.css"
import "../Table.css"


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

