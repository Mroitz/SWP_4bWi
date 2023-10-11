const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
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
        clubs += "<div>" + element.teamName + "</div>";
    });

    document.getElementById("clubs").innerHTML = clubs;

    let points = "";

    data.forEach(element => {
        points += "<div>" + element.points + "</div>";
    });

    document.getElementById("points").innerHTML = points;
}


loadData();

