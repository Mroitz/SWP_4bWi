import React, { useEffect, useState } from "react";
import Card from "./Card.js";


export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(() => {
        fetch("https://6576b6ce424e2adad5b47c23.mockapi.io/persons").then(
            (res) =>
                res.json().then(data => {
                    console.log(data)
                    setPeople(data);
                    setFilteredPeople(data);
                })
        );
    }, [])

    const filterPeople = (filter) => {
        let filtered = people.filter(person => person.name.includes(filter));
        setFilteredPeople(filtered);
    }

    return (
        <div>

            <div className="p-5 fixed">
                <h1 className="container text-xl font-bold mb-3">PeopleContainer</h1>
                <input className="border-4" type="text" placeholder="search" onChange={(el) => {
                    console.log(el.target.value)
                    filterPeople(el.target.value)
                }} />
            </div>


            <div className="w-81 grid grid-cols-2 lg:grid-cols-4 gap-10 pt-32">
                {filteredPeople.map(person => {
                    return <Card name={person.name} title={person.jobtitle} imageUrl={person.avatar}></Card>
                })}
            </div>
        </div>
    )
}