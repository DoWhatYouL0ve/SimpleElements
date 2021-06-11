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
        const timeOut = setTimeout(()=> {
            console.log('useEffect says: counter changed')
            document.title=counter.toString()
        })

        return clearTimeout(timeOut)
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
        const interval = setInterval(()=> {
            setCounter(counter += 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return <>
        <button onClick={() =>setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const ResetEffectExample = () => {
    console.log("Component rendered")
    let [counter, setCounter] = useState(1)

    // привязываем к конкретному элементу, и только при его изменении будет запускаться useEffect
    // все побочные эффекты нужно помещать в useEffect
    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('Reset')
        }
    }, [counter])

    return <>
        <button onClick={() =>setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

export const KeysTrackerExample = () => {
    console.log("Component rendered")
    let [text, setText] = useState('')

    // привязываем к конкретному элементу, и только при его изменении будет запускаться useEffect
    // все побочные эффекты нужно помещать в useEffect
    useEffect(() => {
        console.log('Effect occurred')
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)}
        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        {text}
    </>
}

export const SetTimeOutAdditionalExample = () => {
    console.log("Component rendered")
    let [text, setText] = useState('')

    // привязываем к конкретному элементу, и только при его изменении будет запускаться useEffect
    // все побочные эффекты нужно помещать в useEffect
    useEffect(() => {
        console.log('Effect occurred')
        const timeOutId = setTimeout( () => {
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [text])

    return <>
        {text}
    </>
}