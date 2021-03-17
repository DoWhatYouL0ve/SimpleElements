// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {ChangeEvent, useRef, useState} from "react";




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

export const СontrolledInputWithFixedValue = () => <input value={'controlled value'}/>

export const ControlledInput = () => {
    const [stateValue, setStateValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setStateValue(e.currentTarget.value)
    return <input value={stateValue} onChange={ onChange }/>
}

export const ControlledCheckbox = () => {
    const [stateValue, setStateValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setStateValue(e.currentTarget.checked)
    return <input type='checkbox' checked={stateValue} onChange={ onChange }/>
}

export const ControlledSelect = () => {
    const [stateValue, setStateValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setStateValue(e.currentTarget.value)
    return <select value={stateValue} onChange={onChange}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moskva</option>
        <option value={3}>Kiev</option>
    </select>
}