import React, {useMemo, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";



export default {
    title: 'My components/useState demo',
} as Meta;


 const generateData = () => {
     // difficult counting
     return 1224242352385289
 }


export const HelpsToReactMemo = () => {
    console.log('useState')

    // in this case generateData will count only once and remain in memory useState()
    const [counter, setCounter] = useState(generateData)

    //------------------------------
    /*const onClick = () => {
        setCounter(counter+1)
    }*/
    //-------------------------------


    const onClick = () => {
        setCounter( state => state + 1)
    }

    return <>
        <button onClick={onClick}>+</button>
        {counter}
    </>
}