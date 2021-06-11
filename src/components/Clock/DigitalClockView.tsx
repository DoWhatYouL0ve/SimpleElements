import React from "react";
import {ClockViewPropsType} from "./Clock";

const getTimeString = (number: number) => number < 10 ? "0" + number : number


export const DigitalClockView = (props: ClockViewPropsType) => {
    return <>
        <div>
            <span>{getTimeString(props.date.getHours())}</span>
            :
            <span>{getTimeString(props.date.getMinutes())}</span>
            :
            <span>{getTimeString(props.date.getSeconds())}</span>
        </div>
    </>
}