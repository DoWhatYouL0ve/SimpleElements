import React from "react";

type RatingType = {
    value: 0|1|2|3|4|5
}

type  StarType = {
    selected: boolean
}

export function Rating(props:RatingType) {

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

function Star(props:StarType) {
    if (props.selected === true) {
        return (<span><b>Star </b></span>)
    }else {
        return (
            <span>Star </span>
        )
    }

}