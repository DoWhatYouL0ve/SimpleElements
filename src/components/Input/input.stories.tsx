// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";



export default {
    title: 'My components/Input',
} as Meta;

export const UncontrolledInput = () => <input/>

// first method to get value from uncontrolled element(input)
export const TrackingValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={ onChange }/> - {value}</>
}


// second method to get value from uncontrolled element(input) with using useRef
export const GetValueByButtonPressOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={inputRef}/> <button onClick={save}>safe</button> - actual value: {value}</>
}

export const СontrolledInput = () => <input value={'controlled value'}/>