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


    // Which defensive player has the most sacks?
    const button1 = () => {
        clearAll();
        setButton1Pressed(true);
    }

    // Which quarterback has the most passing yards?
    const button2 = () => {
        clearAll();
        setButton2Pressed(true);
    }

    // Which team has the most superbowl wins?
    const button3 = () => {
        clearAll();
        setButton3Pressed(true);
    }

    // Which coach has the most playoff appearances?
    const button4 = () => {
        clearAll();
        setButton4Pressed(true);
    }

    // Which kicker has the most field goals made?
    const button5 = () => {
        clearAll();
        setButton5Pressed(true);
    }

    // Which wide receiver has the most yards?
    const button6 = () => {
        clearAll();
        setButton6Pressed(true);
    }

    // Who has caught the most touchdowns?
    const button7 = () => {
        clearAll();
        setButton7Pressed(true);
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
                                <p className='NoticeText'>Placeholder</p>
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
                            <p className='NoticeText'>Placeholder</p>
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
                            <p className='NoticeText'>Placeholder</p>
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
                            <p className='NoticeText'>Placeholder</p>
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
                            <p className='NoticeText'>Placeholder</p>
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
                            <p className='NoticeText'>Placeholder</p>
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
                            <p className='NoticeText'>Placeholder</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default FunFacts;