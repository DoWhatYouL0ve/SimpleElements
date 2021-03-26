import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type  StarType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

export const Rating = React.memo(RatingMemo)

export function RatingMemo(props:RatingType) {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

function Star(props:StarType) {
    return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>Star </b> : 'Star ' }</span>
}