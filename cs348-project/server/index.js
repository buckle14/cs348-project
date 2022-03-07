const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cs348-project',
    database: 'cs348-project',
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

// Req = require, res = response
// req = get info from frontend
// res = send response from backend
app.post("/api/insert", (req, res) => {
    const team_name = req.body.team_name;
    const city = req.body.city;
    const power_ranking = req.body.power_ranking;
    const coach_name = req.body.coach_name;
    const sb_wins = req.body.sb_wins;
    const playoff_appearances = req.body.playoff_appearances;
    const table_name = req.body.table_name;

    const sqlInsert = "INSERT INTO " + table_name + " (team_name, city, power_ranking, coach_name, sb_wins, playoff_appearances) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [team_name, city, power_ranking, coach_name, sb_wins, playoff_appearances], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
})