import React from 'react';
import "./RemoveData.css";
import Axios from "axios";

const RemoveData = () => {
    const [tableName, setTableName] = React.useState('teams');
    const [failure, setFailure] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [primaryKeyToRemove, setprimaryKeyToRemove] = React.useState('');

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    const submitFormHandler = () => {
        if(tableName === "teams" && primaryKeyToRemove !== "") {
            Axios.post("http://localhost:3001/api/remove/teams", {
                table_name: tableName,
                team_name: primaryKeyToRemove,
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
        else {
            setSuccess(false);
            setFailure(true);
        }
        clearInputs();
    }

    const clearInputs = () => {
        setTableName('teams')
        setprimaryKeyToRemove('')
    }

    return (
        <div className='Page'>
            <h1 className='Header'>Remove Data</h1>
            <div className='row'>
                    <div className='col'>
                        <p className='InputText'>Remove from table:</p>
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
                    <p className='InputText'>Primary key to remove:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={primaryKeyToRemove}
                                onChange={(event) => setprimaryKeyToRemove(event.target.value)}
                                placeholder="Enter a valid primary key"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='ButtonRow'>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                        <button className='InsertButton' type='submit' onClick={submitFormHandler}>Remove row</button>
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
                                <p className='SuccessText'>Success! The primary key was removed successfully.</p>
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
                                <p className='FailureText'>Failure. Unable to remove primary key. Please be sure to verify your formatting was correct and that you are not attempting to remove a primary key which does not exist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default RemoveData;