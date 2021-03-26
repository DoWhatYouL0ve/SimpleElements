import React, {useState} from "react";

export type UncontrolledOnOffType = {
    onChange: (on:boolean) => void
    defaultOn?:boolean
}

export const UncontrolledOnOff = React.memo(UncontrolledOnOffMemo)

export function UncontrolledOnOffMemo(props:UncontrolledOnOffType) {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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

    const onClicked = () => {setOn(true); props.onChange(true)}
    const offClicked = () => {setOn(false); props.onChange(false)}

    return (
        <div>
            <h3>Uncontrolled</h3>
            <div style={onStyle}
                 onClick={onClicked}>On</div>
            <div style={offStyle}
                 onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}