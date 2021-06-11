import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockType";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        // updating interval every second, but clock reflected only once after the first upload of the page
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // to delete setInterval after the page will be closed
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let view

    switch (props.mode) {
        case 'analog':
           view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>{view}</div>

}





