import React from 'react';
import "./EditData.css";
import Axios from "axios";

const EditData = () => {
    const [tableName, setTableName] = React.useState('teams');
    const [failure, setFailure] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [primaryKeyToEdit, setPrimaryKeyToEdit] = React.useState('');
    const [newRow, setNewRow] = React.useState('');

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    const submitFormHandler = () => {
        var newRowValues = newRow.split(", ");

        if(tableName === "teams" && primaryKeyToEdit !== "") {
            Axios.post("http://localhost:3001/api/edit/teams", {
                table_name: tableName,
                team_name: primaryKeyToEdit,
                city: newRowValues[0],
                power_ranking: newRowValues[1],
                coach_name: newRowValues[2],
                sb_wins: newRowValues[3],
                playoff_appearances: newRowValues[4]
            }).then((response) => {
                console.log(response.data)
                if(response.data === '') {
                    setSuccess(true);
                    setFailure(false);
                }
                else {
                    setSuccess(false);
                    setFailure(true);
                }
            });
        }
        else if (tableName === "kickers" && primaryKeyToEdit !== "") {
            Axios.post("http://localhost:3001/api/edit/kickers", {
                table_name: tableName,
                kicker_id: primaryKeyToEdit,
                team_name: newRowValues[0],
                fg_made: newRowValues[1],
                fg_missed: newRowValues[2],
                points: newRowValues[3]
            }).then((response) => {
                console.log(response.data)
                if(response.data === '') {
                    setSuccess(true);
                    setFailure(false);
                }
                else {
                    setSuccess(false);
                    setFailure(true);
                }
            });
        }
        else if (tableName === "games" && primaryKeyToEdit !== "") {
            Axios.post("http://localhost:3001/api/edit/games", {
                table_name: tableName,
                game_id: primaryKeyToEdit,
                home_team: newRowValues[0],
                away_team: newRowValues[1],
                week: newRowValues[2],
                winner: newRowValues[3],
                loser: newRowValues[4]
            }).then((response) => {
                console.log(response.data)
                if(response.data === '') {
                    setSuccess(true);
                    setFailure(false);
                }
                else {
                    setSuccess(false);
                    setFailure(true);
                }
            });
        }
        else if (tableName === "head_coaches" && primaryKeyToEdit !== "") {
            Axios.post("http://localhost:3001/api/edit/head_coaches", {
                table_name: tableName,
                coach_id: primaryKeyToEdit,
                team_name: newRowValues[0],
                coach_name: newRowValues[1],
                coach_games: newRowValues[2],
                coach_wins: newRowValues[3],
                coach_losses: newRowValues[4],
                coach_ties: newRowValues[5],
                coach_sb_wins: newRowValues[6],
                coach_playoff_appearances: newRowValues[7]
            }).then((response) => {
                console.log(response.data)
                if(response.data === '') {
                    setSuccess(true);
                    setFailure(false);
                }
                else {
                    setSuccess(false);
                    setFailure(true);
                }
            });
        }
        else if (tableName === "offensive_players" && primaryKeyToEdit !== "") {
            Axios.post("http://localhost:3001/api/edit/offensive_players", {
                table_name: tableName,
                off_id: primaryKeyToEdit,
                team_name: newRowValues[0],
                player_name: newRowValues[1],
                position: newRowValues[2],
                touchdowns: newRowValues[3],
                receptions: newRowValues[4],
                recieving_yards: newRowValues[5],
                passing_yards: newRowValues[6],
                targets: newRowValues[7]
            }).then((response) => {
                console.log(response.data)
                if(response.data === '') {
                    setSuccess(true);
                    setFailure(false);
                }
                else {
                    setSuccess(false);
                    setFailure(true);
                }
            });
        }
        else if (tableName === "defensive_players" && primaryKeyToEdit !== "") {
            Axios.post("http://localhost:3001/api/edit/defensive_players", {
                table_name: tableName,
                def_id: primaryKeyToEdit,
                team_name: newRowValues[0],
                player_name: newRowValues[1],
                position: newRowValues[2],
                sacks: newRowValues[3],
                interceptions: newRowValues[4],
                blocks: newRowValues[5]
            }).then((response) => {
                console.log(response.data)
                if(response.data === '') {
                    setSuccess(true);
                    setFailure(false);
                }
                else {
                    setSuccess(false);
                    setFailure(true);
                }
            });
        }
        else {
            setSuccess(false);
            setFailure(true);
        }
        clearInputs();
    }

    const clearInputs = () => {
        setPrimaryKeyToEdit('')
        setNewRow('')
    }

    return (
        <div className='Page'>
            <h1 className='Header'>Edit Data</h1>
            <div className='row'>
                    <div className='col'>
                        <p className='InputText'>Edit table:</p>
                    </div>
                    <div className='col'>
                        <div className='InputWrapper'>
                            <select className='Dropdown' value={tableName} onChange={handleTableNameChoice}>
                                <option value="teams">Teams</option>
                                <option value="games">Games</option>
                                <option value="head_coaches">Head Coaches</option>
                                <option value="offensive_players">Offensive Players</option>
                                <option value="defensive_players">Defensive Players</option>
                                <option value="kickers">Kickers</option>
                            </select>
                        </div>
                    </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Primary key to edit:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={primaryKeyToEdit}
                                onChange={(event) => setPrimaryKeyToEdit(event.target.value)}
                                placeholder="Enter a valid primary key"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>New data under given primary key:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={newRow}
                                onChange={(event) => setNewRow(event.target.value)}
                                placeholder="Enter row as col_1, col_2, ..., col_n"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='ButtonRow'>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                        <button className='InsertButton' type='submit' onClick={submitFormHandler}>Edit row</button>
                    </div>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperClear'>
                        <button form='insertForm' className='ClearButton' onClick={clearInputs}>Clear inputs</button>
                    </div>
                </div>
            </div>
            {
                success &&
                <div>
                    <div className='row'>
                        <div className='col'>
                            <div className='NoticeWrapper'>
                                <p className='SuccessText'>If you entered a valid primary key, its records were edited successfully.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                failure &&
                <div>
                    <div className='row'>
                        <div className='col'>
                            <div className='NoticeWrapper'>
                                <p className='FailureText'>Failure. Unable to update row. Please be sure to verify your formatting was correct and that you are not attempting to edit a primary key which does not exist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default EditData;