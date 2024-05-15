const express = require("express")


const app = express();
const port = 3000;

const data = [{ name: "hans", age: 7 }, { name: "paul", age: 127 }, { name: "franz", age: 117 }, { name: "erik", age: 27 },]

app.get("/people", (req, res) => {
    res.send(data);
});


app.listen(port, () => {
    console.log("Hello world app listening on port" + port)
})