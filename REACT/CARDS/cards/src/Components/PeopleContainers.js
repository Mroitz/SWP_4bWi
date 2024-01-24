import React from "react";
import Card from "./Card.js";


export default function PeopleContainer() {
    return (
        <div>
            <h1 className="container">PeopleContainer</h1>
            <div>
                <Card name="hans" title="ceo" imageUrl="https://picsum.photos/200/300"></Card>
            </div>
        </div>
    )
}