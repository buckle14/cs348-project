import React from 'react';
import "./InsertData.css";

const InsertData = () => {
    const [tableName, setTableName] = React.useState('Teams');
    const [rowToInsert, setRowToInsert] = React.useState('');
    const [failure, setFailure] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    const submitFormHandler = () => {
        var valuesToInsert = rowToInsert.split(", ");

        //TODO: perform table insert actions here

        //TODO: give notice of either success or failure
        setFailure(true);

        // When done with insert, set values back to defaults
        clearInputs();
    }

    const clearInputs = () => {
        setTableName('Teams')
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
                                <option value="Teams">Teams</option>
                                <option value="Games">Games</option>
                                <option value="Head Coaches">Head Coaches</option>
                                <option value="Offensive Players">Offensive Players</option>
                                <option value="Defensive Players">Defensive Players</option>
                                <option value="Kickers">Kickers</option>
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
                                <p className='SuccessText'>Row "{rowToInsert}" was successfully inserted into the {tableName} table.</p>
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
                                <p className='FailureText'>Unable to insert row. Please be sure to verify your formatting was correct and that you are not attempting to insert a duplicate primary key.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default InsertData;