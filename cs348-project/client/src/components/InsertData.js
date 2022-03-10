import React from 'react';
import "./InsertData.css";
import Axios from "axios";

const InsertData = () => {
    const [tableName, setTableName] = React.useState('teams');
    const [rowToInsert, setRowToInsert] = React.useState('');
    const [failure, setFailure] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    const submitFormHandler = () => {
        console.log("TABLE NAME WAS: " + tableName)
        var values = rowToInsert.split(", ");

        if(tableName === "teams") {
            Axios.post("http://localhost:3001/api/insert/teams", {
                table_name: tableName,
                team_name: values[0],
                city: values[1],
                power_ranking: values[2],
                coach_name: values[3],
                sb_wins: values[4],
                playoff_appearances: values[5]
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
        else if (tableName === "kickers") {
            Axios.post("http://localhost:3001/api/insert/kickers", {
                table_name: tableName,
                kicker_id: values[0],
                team_name: values[1],
                fg_made: values[2],
                fg_missed: values[3],
                points: values[4]
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
        else if (tableName === "games") {
        }
        else if (tableName === "head_coaches") {
        }
        else if (tableName === "offensive_players") {
        }
        else if (tableName === "defensive_players") {
        }
        clearInputs();
    }

    const clearInputs = () => {
        setTableName('teams')
        setRowToInsert('')
    }

    return (
        <div className='Page'>
            <h1 className='Header'>Insert Data</h1>
            <div className='row'>
                    <div className='col'>
                        <p className='InputText'>Insert into:</p>
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
                    <p className='InputText'>Row to insert:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={rowToInsert}
                                onChange={(event) => setRowToInsert(event.target.value)}
                                placeholder="Enter row as col_0, col_1, ..., col_n"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='ButtonRow'>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                        <button className='InsertButton' type='submit' onClick={submitFormHandler}>Insert row</button>
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
                                <p className='SuccessText'>Success! Your row was successfully inserted into the table.</p>
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
                                <p className='FailureText'>Failure. Unable to insert row. Please be sure to verify your formatting was correct and that you are not attempting to insert a duplicate primary key.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default InsertData;