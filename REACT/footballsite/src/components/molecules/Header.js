import React from 'react'
import "./Header.css"
import Options from './atoms/Options'

export default function Header() {
    return (
        <div class="Logo">
            <div class="Bundesliga">Bundesliga</div>
            <Options />
        </div>
    )
}
