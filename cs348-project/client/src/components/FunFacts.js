import React from 'react';
import "./FunFacts.css";
import Axios from "axios";

const FunFacts = () => {
    const [button1Pressed, setButton1Pressed] = React.useState(false);
    const [button2Pressed, setButton2Pressed] = React.useState(false);
    const [button3Pressed, setButton3Pressed] = React.useState(false);
    const [button4Pressed, setButton4Pressed] = React.useState(false);
    const [button5Pressed, setButton5Pressed] = React.useState(false);
    const [button6Pressed, setButton6Pressed] = React.useState(false);
    const [button7Pressed, setButton7Pressed] = React.useState(false);
    const [button1Text, setButton1text] = React.useState("");
    const [button2Text, setButton2text] = React.useState("");
    const [button3Text, setButton3text] = React.useState("");
    const [button4Text, setButton4text] = React.useState("");
    const [button5Text, setButton5text] = React.useState("");
    const [button6Text, setButton6text] = React.useState("");
    const [button7Text, setButton7text] = React.useState("");
    
    // Which defensive player has the most sacks?
    const button1 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/1", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0][0].player_name)
                setButton1text(response.data[0][0].player_name);
                setButton1Pressed(true);
            });
    }

    // Which quarterback has the most passing yards?
    const button2 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/2", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0][0].player_name)
                setButton2text(response.data[0][0].player_name);
                setButton2Pressed(true);
            });
    }

    // Which team has the most superbowl wins?
    const button3 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/3", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0][0].team_name)
                setButton3text(response.data[0][0].team_name);
                setButton3Pressed(true);
            });
    }

    // Which coach has the most playoff appearances?
    const button4 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/4", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0][0].coach_name)
                setButton4text(response.data[0][0].coach_name);
                setButton4Pressed(true);
            });
    }

    // Which kicker has the most field goals made?
    const button5 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/5", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0].kicker_id)
                setButton5text(response.data[0].kicker_id);
                setButton5Pressed(true);
            });
    }

    // Which wide receiver has the most yards?
    const button6 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/6", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0].player_name)
                setButton6text(response.data[0].player_name);
                setButton6Pressed(true);
            });
    }

    // Who has caught the most touchdowns?
    const button7 = () => {
        clearAll();
        Axios.post("http://localhost:3001/api/funfacts/7", {
            }).then((response) => {
                console.log(response.data)
                console.log(response.data[0].player_name)
                setButton6text(response.data[0].player_name);
                setButton6Pressed(true);
            });
    }

    // Clear all rendered button responses
    const clearAll = () => {
        setButton1Pressed(false);
        setButton2Pressed(false);
        setButton3Pressed(false);
        setButton4Pressed(false);
        setButton5Pressed(false);
        setButton6Pressed(false);
        setButton7Pressed(false);
    }

    return (
        <div className='Page'>
            <h1 className='Header'>Fun Facts</h1>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Which defensive player has the most sacks?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button1}>Go</button>
                    </div>
                </div>
                {
                    button1Pressed &&
                    <div className='ResponseCol'>
                            <div className='NoticeWrapper'>
                                <p className='NoticeText'>{button1Text}</p>
                        </div>
                    </div>
                }
            </div>
            
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Which quarterback has the most passing yards?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button2}>Go</button>
                    </div>
                </div>
                {
                    button2Pressed &&
                    <div className='ResponseCol'>
                        <div className='NoticeWrapper'>
                            <p className='NoticeText'>{button2Text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Which team has the most superbowl wins?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button3}>Go</button>
                    </div>
                </div>
                {
                    button3Pressed &&
                    <div className='ResponseCol'>
                        <div className='NoticeWrapper'>
                            <p className='NoticeText'>{button3Text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Which coach has the most playoff appearances?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button4}>Go</button>
                    </div>
                </div>
                {
                    button4Pressed &&
                    <div className='ResponseCol'>
                        <div className='NoticeWrapper'>
                            <p className='NoticeText'>{button4Text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Which kicker has the most field goals made?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button5}>Go</button>
                    </div>
                </div>
                {
                    button5Pressed &&
                    <div className='ResponseCol'>
                        <div className='NoticeWrapper'>
                            <p className='NoticeText'>{button5Text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Which wide receiver has the most yards?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button6}>Go</button>
                    </div>
                </div>
                {
                    button6Pressed &&
                    <div className='ResponseCol'>
                        <div className='NoticeWrapper'>
                            <p className='NoticeText'>{button6Text}</p>
                        </div>
                    </div>
                }
            </div>
            <div className='row'>
                <div className='col'>
                    <p className='InputText'>Who has caught the most touchdowns?</p>
                </div>
                <div className='col'>
                    <div className='ButtonWrapperInsert'>
                            <button className='InsertButton' type='submit' onClick={button7}>Go</button>
                    </div>
                </div>
                {
                    button7Pressed &&
                    <div className='ResponseCol'>
                        <div className='NoticeWrapper'>
                            <p className='NoticeText'>{button7Text}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default FunFacts;