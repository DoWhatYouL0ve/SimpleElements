import React, {useState} from "react";

//Uncontrolled means that we don't change data on SERVER, don't use such on PRODUCTION

type  StarType = {
    selected: boolean
    setValue: () => void
}
type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type UncontrolledRatingType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UncontrolledRating = React.memo(UncontrolledRatingMemo)

export function UncontrolledRatingMemo(props:UncontrolledRatingType) {

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <h3>Uncontrolled Rating</h3>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}

const Star = React.memo(StarMemo)

function StarMemo(props:StarType) {
    return <span onClick={ () => props.setValue()}>{props.selected ? <b>Star </b> : 'Star '}</span>
}