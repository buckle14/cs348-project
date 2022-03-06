import React, {useState} from 'react';
import "./InsertData.css";

const InsertData = () => {
    const [tableName, setTableName] = React.useState('Teams');

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    return (
        <div className='InsertData'>
            <h1 className='IDHeader'>Insert Data</h1>
            <div className='IDContentRow'>
                <div className="InsertInto">
                    <div className='IDTextWrapper'>
                        <p className='IDText'>Insert into:</p>
                    </div>
                    <div className='IDDropdownWrapper'>
                        <select className='IDDropdown' value={tableName} onChange={handleTableNameChoice}>
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
            <div className='IDContentRow'>
                {/* <div className='IDTextWrapper'>
                    <p className='IDText'>Row to insert:</p>
                </div> */}
            </div>
        </div>
    );
};

export default InsertData;