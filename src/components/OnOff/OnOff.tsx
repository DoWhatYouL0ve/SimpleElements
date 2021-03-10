type OnOFFType = {
    on: boolean
    onChange: () => void
}

export function OnOff(props:OnOFFType) {

    const onStyle = {
        width: '30px',
        height: '30px',
        margin: '5px',
        padding: '3px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        padding: '3px',
        margin: '5px',
        border: '1px solid black',
        backgroundColor: !props.on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange()}>On</div>
            <div style={offStyle} onClick={() => props.onChange()}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}