import React from "react";

export default function Card({ name, title, imageUrl }) {
    return (
        <div className="wrapper">
            <div>
                <h2>{name}</h2>
                <h2>{title}</h2>
            </div>
            <div>
                <img src={imageUrl} alt="" className="image"></img>
            </div>
        </div>
    )
}