import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[] // string[] - another way to write
    onClick: (value: any) => void
}

export const Accordion = React.memo(AccordionMemo)

export function AccordionMemo(props:AccordionType) {
        return (
            <div>
                <AccordionTitle title={props.title} onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
            </div>
        )
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

const AccordionTitle = React.memo(AccordionTitleMemo)

function AccordionTitleMemo(props:AccordionTitleType) {
    return (
        <div><h3 onClick={() => props.onChange()}>{props.title}</h3></div>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo(AccordionBodyMemo)

function AccordionBodyMemo(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                { props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}
