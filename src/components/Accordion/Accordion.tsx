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

export function Accordion(props:AccordionType) {
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

function AccordionTitle(props:AccordionTitleType) {
    return (
        <div><h3 onClick={() => props.onChange()}>{props.title}</h3></div>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                { props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}
