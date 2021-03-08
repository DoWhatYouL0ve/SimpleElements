import React, {useState} from "react";

//Uncontrolled means that we don't change data on SERVER, don't use such on PRODUCTION

type  StarType = {
    selected: boolean
    setValue: () => void
}

export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <h3>Uncontrolled Rating</h3>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}

function Star(props:StarType) {
    return <span onClick={ () => props.setValue()}>{props.selected ? <b>Star </b> : 'Star '}</span>
}