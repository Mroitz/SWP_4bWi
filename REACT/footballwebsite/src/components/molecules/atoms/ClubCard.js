import React from 'react'
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/components/molecules/Clubs.css"

export default function ClubCard({ club, image }) {
    return (
        <div>
            <div class="clubcard"><img class="clubsimg" src={image} alt="Team Logo" /> {club}</div>
        </div>
    );
}