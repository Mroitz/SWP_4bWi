import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header({ prop }) {
    return (
        <div class="Logo">
            <div class="Bundesliga">Bundesliga</div>
            <div class="Options">
                hallo
                <Link to="/clubs">{prop}</Link>
                <Link to="/Table">{prop}</Link>
            </div>
        </div>
    )
}

