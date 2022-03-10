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

        if(tableName === "teams") {
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
        else if (tableName === "kickers") {
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
                                <p className='SuccessText'>Success! The row was updated successfully.</p>
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
                                <p className='FailureText'>Unable to update row. Please be sure to verify your formatting was correct and that you are not attempting to edit a primary key which does not exist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default EditData;