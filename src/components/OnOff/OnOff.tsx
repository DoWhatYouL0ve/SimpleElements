import {useState} from "react";


export function OnOff() {
    const [on, setOn] = useState(true)

    const onStyle = {
        width: '30px',
        height: '30px',
        margin: '5px',
        padding: '3px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        padding: '3px',
        margin: '5px',
        border: '1px solid black',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}