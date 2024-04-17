import React, { useState, useEffect } from 'react';
import "../../index.css";
import ClubCard from './atoms/ClubCard';
import "./Clubs.css"

export default function Clubs() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then(response => response.json())
            .then(data => setClubs(data)

            )
    }, []);

    return (
        <div className='clubsite'>
            <div className='header'>Clubs</div>
            <div className='clubswrapper'>
                {clubs.map((club) => (

                    <ClubCard
                        club={club.teamName}
                        image={club.teamIconUrl}
                    />
                ))}
            </div>
        </div>
    );
}
