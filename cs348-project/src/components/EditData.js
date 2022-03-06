import React from 'react';
import "./EditData.css";

const EditData = () => {
    const [tableName, setTableName] = React.useState('Teams');
    const [failure, setFailure] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [primaryKeyToEdit, setPrimaryKeyToEdit] = React.useState('');
    const [newRow, setNewRow] = React.useState('');

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    const submitFormHandler = () => {
        var newRowValues = newRow.split(", ");

        //TODO: perform drop of old table row

        //Insert new row under "primaryKeyToEdit" and "newRowValues"

        //TODO: give notice of either success or failure
        setFailure(true);

        // When done with insert, set values back to defaults
        clearInputs();
    }

    const clearInputs = () => {
        setTableName('Teams')
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
                                <p className='SuccessText'>Primary key "{primaryKeyToEdit}"'s row was updated successfully.</p>
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