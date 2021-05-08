import React, {useEffect, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";



export default {
    title: 'My components/useEffect demo',
} as Meta;


export const SimpleExample = () => {
    console.log('useEffect')

    // in this case generateData will count only once and remain in memory useState()
    const [counter, setCounter] = useState(1)

    // привязываем к конкретному элементу, и только при его изменении будет запускаться useEffect
    useEffect(() => {
        console.log('useEffect says: counter changed')
        document.title=counter.toString()
    }, [counter])

    // runs every time the page is re-rendered
    /*useEffect(() => {
        console.log('useEffect every render')
    })*/

    // runs only once at the very beginning
    /*useEffect(() => {
        console.log('useEffect only once')
    }, [])*/

    return <>
        <button onClick={() =>setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const SetTimeOutExample = () => {

    console.log('useEffect + SetTimeoutExample')

    // in this case generateData will count only once and remain in memory useState()
    const [counter, setCounter] = useState(1)

    // привязываем к конкретному элементу, и только при его изменении будет запускаться useEffect
    // все побочные эффекты нужно помещать в useEffect
    useEffect(() => {
        setTimeout(()=> {
            console.log('useEffect says: counter changed')
            document.title=counter.toString()
        })
    }, [counter])

    return <>
        <button onClick={() =>setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const SetIntervalExample = () => {

    console.log('useEffect + SetIntervalExample')

    // in this case generateData will count only once and remain in memory useState()
    let [counter, setCounter] = useState(1)

    // привязываем к конкретному элементу, и только при его изменении будет запускаться useEffect
    // все побочные эффекты нужно помещать в useEffect
    useEffect(() => {
        setInterval(()=> {
            setCounter(counter += 1)
        }, 1000)
    }, [])

    return <>
        <button onClick={() =>setCounter(counter + 1)}>+</button>
        {counter}
    </>
}