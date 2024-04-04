import React, { useState, useEffect } from 'react';
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/index.css";
import ClubCard from './atoms/ClubCard';
import "C:/Schule/4bwi/SWP/Visual Studio/REACT/footballwebsite/src/components/molecules/Clubs.css"

export default function Clubs() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then(response => response.json())
            .then(data => setClubs(data)

            )
    }, []);

    return (
        <div className="">
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
