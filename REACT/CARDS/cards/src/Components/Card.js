import React from "react";

export default function Card({ name, title, imageUrl }) {
    return (
        <div className="wrapper border grid grid-cols-2 border">
            <div className="p-4">
                <h2 className="font-bold text-xl">{name}</h2>
                <h2>{title}</h2>
            </div>
            <div className="w-full">
                <img src={imageUrl} alt="" className="image w-full"></img>
            </div>
        </div>
    )
}