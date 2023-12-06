const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console - console.log(data);
            fillTable(data);
        })
    })
}


const fillTable = (data) => {
    document.getElementById("clubs").innerHTML = data;
    let clubs = "";
    
    data.forEach(element => {
        clubs += "<div class='clubs'><img class='clubsimg' src='" + element.teamIconUrl + "' alt='" + "'>" + element.teamName + "</div>";
    });

 
    document.getElementById("clubs").innerHTML = clubs;

    let points = "";

    data.forEach(element => {
        points += "<div>" + element.points + "</div>";
    });

    document.getElementById("points").innerHTML = points;

    let won = "";

    data.forEach(element => {
        won += "<div>" + element.won + "</div>";
    });

    document.getElementById("won").innerHTML = won;

    let lost = "";

    data.forEach(element => {
        lost += "<div>" + element.lost + "</div>";
    });

    document.getElementById("lost").innerHTML = lost;

    let draw = "";

    data.forEach(element => {
        draw += "<div>" + element.draw + "</div>";
    });

    document.getElementById("draw").innerHTML = draw;
}


loadData();

