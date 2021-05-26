import React, {useEffect, useState} from "react";


export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect( () => {
        // updating interval every second, but clock reflected only once after the first upload of the page
        const intervalID = setInterval( () => {
            setDate(new Date())
        }, 1000)

        // to delete setInterval after the page will be closed
        return () => {
            clearInterval(intervalID)
        }
    },[])

    const getTimeString = (number: number) => number < 10 ? "0" + number : number

    return (
        <div>
            <span>{getTimeString(date.getHours())}</span>
            :
            <span>{getTimeString(date.getMinutes())}</span>
            :
            <span>{getTimeString(date.getSeconds())}</span>
        </div>
    )
}