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

/****************************
    INSERT API FUNCTIONS    *
****************************/

// INSERT row into the 'teams' table
app.post("/api/insert/teams", (req, res) => {
    const table_name = req.body.table_name;
    const team_name = req.body.team_name;
    const city = req.body.city;
    const power_ranking = req.body.power_ranking;
    const coach_name = req.body.coach_name;
    const sb_wins = req.body.sb_wins;
    const playoff_appearances = req.body.playoff_appearances;

    const sql = "INSERT INTO " + table_name + " (team_name, city, power_ranking, coach_name, sb_wins, playoff_appearances) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [team_name, city, power_ranking, coach_name, sb_wins, playoff_appearances], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// INSERT row into the 'kickers' table
app.post("/api/insert/kickers", (req, res) => {
    const table_name = req.body.table_name;
    const kicker_id = req.body.kicker_id;
    const team_name = req.body.team_name;
    const fg_made = req.body.fg_made;
    const fg_missed = req.body.fg_missed;
    const points = req.body.points;

    const sql = "INSERT INTO " + table_name + " (kicker_id, team_name, fg_made, fg_missed, points) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [kicker_id, team_name, fg_made, fg_missed, points], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// INSERT row into the 'games' table
app.post("/api/insert/games", (req, res) => {
    
})

// INSERT row into the 'head_coaches' table
app.post("/api/insert/head_coaches", (req, res) => {
    
})

// INSERT row into the 'offensive_players' table
app.post("/api/insert/offensive_players", (req, res) => {
    
})

// INSERT row into the 'defensive_players' table
app.post("/api/insert/defensive_players", (req, res) => {
    
})

/**************************
    EDIT API FUNCTIONS    *
**************************/

//EDIT row in the 'teams' table
app.post("/api/edit/teams", (req, res) => {
    const table_name = req.body.table_name;
    const pk = req.body.pk;
    const team_name = req.body.team_name;
    const city = req.body.city;
    const power_ranking = req.body.power_ranking;
    const coach_name = req.body.coach_name;
    const sb_wins = req.body.sb_wins;
    const playoff_appearances = req.body.playoff_appearances;

    // TODO: NEED PROPER SQL HERE TO EDIT ROW IN TEAMS TABLE

    // const sql = "INSERT INTO " + table_name + " (kicker_id, team_name, fg_made, fg_missed, points) VALUES (?, ?, ?, ?, ?)";
    // db.query(sql, [kicker_id, team_name, fg_made, fg_missed, points], (err, result) => {
    //     console.log(err)
    //     res.send(err);
    // })
})

// EDOT row in the 'kickers' table
app.post("/api/edit/kickers", (req, res) => {
    
})

// EDIT row in the 'games' table
app.post("/api/edit/games", (req, res) => {
    
})

// EDIT row in the 'head_coaches' table
app.post("/api/edit/head_coaches", (req, res) => {
    
})

// EDOT row in the 'offensive_players' table
app.post("/api/edit/offensive_players", (req, res) => {
    
})

// EDIT row in the 'defensive_players' table
app.post("/api/edit/defensive_players", (req, res) => {
    
})


app.listen(3001, () => {
    console.log("Running on port 3001");
})