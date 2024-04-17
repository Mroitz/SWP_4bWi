import React from 'react'
import "../Clubs.css"

export default function ClubCard({ club, image }) {
    return (
        <div>
            <div class="clubcard"><img class="clubsimg" src={image} alt="Team Logo" /> {club}</div>
        </div>
    );
}