// Not sure why this is red... but the app still works
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'longshirt5',
    database: 'cs348-project',
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());


/****************************
    INSERT BACKEND CALLS    *
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

    const sql = "INSERT INTO " + table_name + 
                " (team_name, city, power_ranking, coach_name, sb_wins, playoff_appearances) VALUES (?, ?, ?, ?, ?, ?)";
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

    const sql = "INSERT INTO " + table_name +
                " (kicker_id, team_name, fg_made, fg_missed, points) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [kicker_id, team_name, fg_made, fg_missed, points], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// INSERT row into the 'games' table
app.post("/api/insert/games", (req, res) => {
    const table_name = req.body.table_name;
    const game_id = req.body.game_id;
    const home_team = req.body.home_team;
    const away_team = req.body.away_team;
    const week = req.body.week;
    const winner = req.body.winner;
    const loser = req.body.loser;

    const sql = "INSERT INTO " + table_name +
                " (game_id, home_team, away_team, week, winner, loser) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [game_id, home_team, away_team, week, winner, loser], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// INSERT row into the 'head_coaches' table
app.post("/api/insert/head_coaches", (req, res) => {
    const table_name = req.body.table_name;
    const coach_id = req.body.coach_id;
    const team_name = req.body.team_name;
    const coach_name = req.body.coach_name;
    const coach_games = req.body.coach_games;
    const coach_wins = req.body.coach_wins;
    const coach_losses = req.body.coach_losses;
    const coach_ties = req.body.coach_ties;
    const coach_SB_wins = req.body.coach_SB_wins;
    const coach_playoff_appearances = req.body.coach_playoff_appearances;

    const sql = "INSERT INTO " + table_name +
                " (coach_id, team_name, coach_name, coach_games, coach_wins, coach_losses, coach_ties, coach_SB_wins, coach_playoff_appearances) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [coach_id, team_name, coach_name, coach_games, coach_wins, coach_losses, coach_ties, coach_SB_wins, coach_playoff_appearances], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// INSERT row into the 'offensive_players' table
app.post("/api/insert/offensive_players", (req, res) => {
    const table_name = req.body.table_name;
    const off_id = req.body.off_id;
    const team_name = req.body.team_name;
    const player_name = req.body.player_name;
    const position = req.body.position;
    const touchdowns = req.body.touchdowns;
    const receptions = req.body.receptions;
    const recieving_yards = req.body.recieving_yards;
    const passing_yards = req.body.passing_yards;
    const targets = req.body.targets;

    const sql = "INSERT INTO " + table_name +
                " (off_id, team_name, player_name, position, touchdowns, receptions, recieving_yards, passing_yards, targets) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [off_id, team_name, player_name, position, touchdowns, receptions, recieving_yards, passing_yards, targets], (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// INSERT row into the 'defensive_players' table
app.post("/api/insert/defensive_players", (req, res) => {
    const table_name = req.body.table_name;
    const def_id = req.body.def_id;
    const team_name = req.body.team_name;
    const player_name = req.body.player_name;
    const position = req.body.position;
    const sacks = req.body.sacks;
    const interceptions = req.body.interceptions;
    const blocks = req.body.blocks;

    const sql = "INSERT INTO " + table_name +
                " (def_id, team_name, player_name, position, sacks, interceptions, blocks) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [def_id, team_name, player_name, position, sacks, interceptions, blocks], (err, result) => {
        console.log(err)
        res.send(err);
    })
})


/**************************
    EDIT BACKEND CALLS    *
**************************/


//EDIT row in the 'teams' table underneath PK 'team_name'
app.post("/api/edit/teams", (req, res) => {
    const table_name = req.body.table_name;
    const team_name = req.body.team_name;
    const city = req.body.city;
    const power_ranking = req.body.power_ranking;
    const coach_name = req.body.coach_name;
    const sb_wins = req.body.sb_wins;
    const playoff_appearances = req.body.playoff_appearances;

    const sql = "UPDATE " + table_name + " SET" +
                    " city = '" + city +
                    "', power_ranking = '" + power_ranking +
                    "', coach_name = '" + coach_name +
                    "', sb_wins = '" + sb_wins +
                    "', playoff_appearances = '" + playoff_appearances +
                    "' WHERE team_name = '" + team_name + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// EDOT row in the 'kickers' table underneath PK 'kicker_id'
app.post("/api/edit/kickers", (req, res) => {
    const table_name = req.body.table_name;
    const kicker_id = req.body.kicker_id;
    const team_name = req.body.team_name;
    const fg_made = req.body.fg_made;
    const fg_missed = req.body.fg_missed;
    const points = req.body.points;

    const sql = "UPDATE " + table_name + " SET" +
                    " team_name = '" + team_name +
                    "', fg_made = '" + fg_made +
                    "', fg_missed = '" + fg_missed +
                    "', points = '" + points +
                    "' WHERE kicker_id = '" + kicker_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// EDIT row in the 'games' table underneath PK 'games_id'
app.post("/api/edit/games", (req, res) => {
    const table_name = req.body.table_name;
    const game_id = req.body.game_id;
    const home_team = req.body.home_team;
    const away_team = req.body.away_team;
    const week = req.body.week;
    const winner = req.body.winner;
    const loser = req.body.loser;

    const sql = "UPDATE " + table_name + " SET" +
                    " home_team = '" + home_team +
                    "', away_team = '" + away_team +
                    "', week = '" + week +
                    "', winner = '" + winner +
                    "', loser = '" + loser +
                    "' WHERE game_id = '" + game_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// EDIT row in the 'head_coaches' table underneath PK 'coach_id'
app.post("/api/edit/head_coaches", (req, res) => {
    const table_name = req.body.table_name;
    const coach_id = req.body.coach_id;
    const team_name = req.body.team_name;
    const coach_name = req.body.coach_name;
    const coach_games = req.body.coach_games;
    const coach_wins = req.body.coach_wins;
    const coach_losses = req.body.coach_losses;
    const coach_ties = req.body.coach_ties;
    const coach_sb_wins = req.body.coach_sb_wins;
    const coach_playoff_appearances = req.body.coach_playoff_appearances;

    const sql = "UPDATE " + table_name + " SET" +
                    " team_name = '" + team_name +
                    "', coach_name = '" + coach_name +
                    "', coach_games = '" + coach_games +
                    "', coach_wins = '" + coach_wins +
                    "', coach_losses = '" + coach_losses +
                    "', coach_ties = '" + coach_ties +
                    "', coach_sb_wins = '" + coach_sb_wins +
                    "', coach_playoff_appearances = '" + coach_playoff_appearances +
                    "' WHERE coach_id = '" + coach_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// EDOT row in the 'offensive_players' table underneath PK 'off_id'
app.post("/api/edit/offensive_players", (req, res) => {
    const table_name = req.body.table_name;
    const off_id = req.body.off_id;
    const team_name = req.body.team_name;
    const player_name = req.body.player_name;
    const position = req.body.position;
    const touchdowns = req.body.touchdowns;
    const receptions = req.body.receptions;
    const recieving_yards = req.body.recieving_yards;
    const passing_yards = req.body.passing_yards;
    const targets = req.body.targets;

    const sql = "UPDATE " + table_name + " SET" +
                    " team_name = '" + team_name +
                    "', player_name = '" + player_name +
                    "', position = '" + position +
                    "', touchdowns = '" + touchdowns +
                    "', receptions = '" + receptions +
                    "', recieving_yards = '" + recieving_yards +
                    "', passing_yards = '" + passing_yards +
                    "', targets = '" + targets +
                    "' WHERE off_id = '" + off_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// EDIT row in the 'defensive_players' table underneath PK 'def_id'
app.post("/api/edit/defensive_players", (req, res) => {
    const table_name = req.body.table_name;
    const def_id = req.body.def_id;
    const team_name = req.body.team_name;
    const player_name = req.body.player_name;
    const position = req.body.position;
    const sacks = req.body.sacks;
    const interceptions = req.body.interceptions;
    const blocks = req.body.blocks;

    const sql = "UPDATE " + table_name + " SET" +
                    " team_name = '" + team_name +
                    "', player_name = '" + player_name +
                    "', position = '" + position +
                    "', sacks = '" + sacks +
                    "', interceptions = '" + interceptions +
                    "', blocks = '" + blocks +
                    "' WHERE def_id = '" + def_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})


/****************************
    REMOVE BACKEND CALLS    *
****************************/


// REMOVE row in the 'teams' table underneath PK 'team_name'
app.post("/api/remove/teams", (req, res) => {
    const table_name = req.body.table_name;
    const team_name = req.body.team_name;

    const sql = "DELETE FROM " + table_name + " WHERE team_name = '" + team_name + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// REMOVE row in the 'kickers' table underneath PK 'kicker_id'
app.post("/api/remove/kickers", (req, res) => {
    const table_name = req.body.table_name;
    const kicker_id = req.body.kicker_id;

    const sql = "DELETE FROM " + table_name + " WHERE kicker_id = '" + kicker_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// REMOVE row in the 'games' table underneath PK 'games_id'
app.post("/api/remove/games", (req, res) => {
    const table_name = req.body.table_name;
    const game_id = req.body.game_id;

    const sql = "DELETE FROM " + table_name + " WHERE game_id = '" + game_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// REMOVE row in the 'head_coaches' table underneath PK 'coach_id'
app.post("/api/remove/head_coaches", (req, res) => {
    const table_name = req.body.table_name;
    const coach_id = req.body.coach_id;

    const sql = "DELETE FROM " + table_name + " WHERE coach_id = '" + coach_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// REMOVE row in the 'offensive_players' table underneath PK 'off_id'
app.post("/api/remove/offensive_players", (req, res) => {
    const table_name = req.body.table_name;
    const off_id = req.body.off_id;

    const sql = "DELETE FROM " + table_name + " WHERE off_id = '" + off_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

// REMOVE row in the 'defensive_players' table underneath PK 'def_id'
app.post("/api/remove/defensive_players", (req, res) => {
    const table_name = req.body.table_name;
    const def_id = req.body.def_id;

    const sql = "DELETE FROM " + table_name + " WHERE def_id = '" + def_id + "';";
    db.query(sql, (err, result) => {
        console.log(err)
        res.send(err);
    })
})

app.listen(3001, () => {
    console.log("Running on port 3001");
})


/****************************
    DATA RETRIVAL CALLS     *
****************************/


// REMOVE row in the 'teams' table underneath PK 'team_name'
app.post("/api/get/teams", (req, res) => {
    const sql = req.body.sql;

    console.log("sql was: " + sql);
    db.query(sql, (err, result) => {
        res.send(result);
    })
})


/****************************
    FUN FACT BACKEND CALLS  *
****************************/

// Which defensive player has the most sacks?
app.post("/api/funfacts/1", (req, res) => {
    const sql = "CALL sp_mostSacks;"
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})

// Which quarterback has the most passing yards?
app.post("/api/funfacts/2", (req, res) => {
    const sql = "CALL sp_mostPassYds;"
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})


// Which team has the most superbowl wins?
app.post("/api/funfacts/3", (req, res) => {
    const sql = "CALL sp_mostSbWins;"
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})

// Which coach has the most playoff appearances?
app.post("/api/funfacts/4", (req, res) => {
    const sql = "CALL sp_mostPlayoffApps;"
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})

// Which kicker has the most field goals made?
app.post("/api/funfacts/5", (req, res) => {
    const sql = "SELECT kicker_id FROM kickers ORDER BY fg_made DESC LIMIT 1;"
    console.log(sql)
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})

 // Which wide receiver has the most yards?
 app.post("/api/funfacts/6", (req, res) => {
    const sql = "SELECT player_name FROM offensive_players WHERE position = 'Wide Reciever' ORDER BY recieving_yards DESC LIMIT 1;"
    console.log(sql)
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})

// Who has caught the most touchdowns?
app.post("/api/funfacts/7", (req, res) => {
    const sql = "SELECT player_name FROM offensive_players ORDER BY touchdowns DESC LIMIT 1;"
    console.log(sql)
    db.query(sql, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result);
    })
})