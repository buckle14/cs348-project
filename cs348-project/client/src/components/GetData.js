import React from 'react';
import "./GetData.css";
import Axios from "axios";

const GetData = () => {
    const [tableName, setTableName] = React.useState('teams');
    const [teamName, setTeamName] = React.useState('');
    const [city, setCity] = React.useState('');
    const [powerRankingMin, setPowerRankingMin] = React.useState('');
    const [powerRankingMax, setPowerRankingMax] = React.useState('');
    const [coachName, setCoachName] = React.useState('');
    const [sbWinsMin, setSbWinsMin] = React.useState('');
    const [sbWinsMax, setSbWinsMax] = React.useState('');
    const [playoffAppearancesMin, setPlayoffAppearancesMin] = React.useState('');
    const [playoffAppearancesMax, setPlayoffAppearancesMax] = React.useState('');
    const [failure, setFailure] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleTableNameChoice = (event) => {
        setTableName(event.target.value);
    }

    const submitFormHandler = () => {
        var sql = "SELECT * FROM teams";

        if(teamName || city || powerRankingMin || powerRankingMax || coachName || sbWinsMin || sbWinsMax ||
            playoffAppearancesMin || playoffAppearancesMax) {
            sql += " WHERE ";
            if(teamName) {
                sql += " team_name = '" + teamName + "'";
                if(city || powerRankingMin || powerRankingMax || coachName || sbWinsMin || sbWinsMax ||
                    playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(city) {
                sql += " city = '" + city + "'";
                if(powerRankingMin || powerRankingMax || coachName || sbWinsMin || sbWinsMax ||
                    playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(powerRankingMin) {
                sql += " power_ranking >= " + powerRankingMin;
                if(powerRankingMax || coachName || sbWinsMin || sbWinsMax ||
                    playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(powerRankingMax) {
                sql += " power_ranking <= " + powerRankingMax;
                if(coachName || sbWinsMin || sbWinsMax ||
                    playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(coachName) {
                sql += " coach_name = '" + coachName + "'";
                if(sbWinsMin || sbWinsMax || playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(sbWinsMin) {
                sql += " SB_wins >= " + sbWinsMin;
                if(sbWinsMax || playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(sbWinsMax) {
                sql += " SB_wins <= " + sbWinsMax;
                if(playoffAppearancesMin || playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(playoffAppearancesMin) {
                sql += " playoff_appearances >= " + playoffAppearancesMin;
                if(playoffAppearancesMax) {
                    sql += " AND";
                }
            }
            if(playoffAppearancesMax) {
                sql += " playoff_appearances <= " + playoffAppearancesMax;
            }
        }
        sql += ";";
        console.log(sql);
        
        clearInputs();
    }

    const clearInputs = () => {
        setTeamName('');
        setCity('');
        setPowerRankingMin('');
        setPowerRankingMax('');
        setCoachName('');
        setSbWinsMin('');
        setSbWinsMax('');
        setPlayoffAppearancesMin('');
        setPlayoffAppearancesMax('');
    }

    return (
        <div className='Page'>
            <h1 className='Header'>Retrieve Data</h1>
            <div className='row'>
                    <div className='col'>
                        <p className='InputText'>Retrieve from:</p>
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
                    <p className='InputText'>Team name:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={teamName}
                                onChange={(event) => setTeamName(event.target.value)}
                                placeholder="Enter a team name"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>City:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                                placeholder="Enter a city"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Power Ranking Min:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={powerRankingMin}
                                onChange={(event) => setPowerRankingMin(event.target.value)}
                                placeholder="Enter a minimum power ranking"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Power Ranking Max:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={powerRankingMax}
                                onChange={(event) => setPowerRankingMax(event.target.value)}
                                placeholder="Enter a maximum power ranking"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Coach Name:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={coachName}
                                onChange={(event) => setCoachName(event.target.value)}
                                placeholder="Enter a coach name"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Super Bowl Wins Min:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={sbWinsMin}
                                onChange={(event) => setSbWinsMin(event.target.value)}
                                placeholder="Enter a minimum amount of super bowl wins"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Super Bowl Wins Max:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={sbWinsMax}
                                onChange={(event) => setSbWinsMax(event.target.value)}
                                placeholder="Enter a maximum amount of super bowl wins"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Playoff Appearances Min:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={playoffAppearancesMin}
                                onChange={(event) => setPlayoffAppearancesMin(event.target.value)}
                                placeholder="Enter a minimum amount of playoff appearances"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Playoff Appearances Max:</p>
                </div>
                <div className='col'>
                    <div className='InputWrapper'>
                        <form>
                            <input
                                className='Input'
                                value={playoffAppearancesMax}
                                onChange={(event) => setPlayoffAppearancesMax(event.target.value)}
                                placeholder="Enter a maximum amount of playoff appearances"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='ButtonRow'>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                        <button className='InsertButton' type='submit' onClick={submitFormHandler}>Retrieve data</button>
                    </div>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperClear'>
                        <button form='insertForm' className='ClearButton' onClick={clearInputs}>Clear inputs</button>
                    </div>
                </div>
            </div>
            {/* {
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
            } */}
            {
                failure &&
                <div>
                    <div className='row'>
                        <div className='col'>
                            <div className='NoticeWrapper'>
                                <p className='FailureText'>No data returned.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <p className='bottomPadding'></p>
        </div>
    );
};

export default GetData;