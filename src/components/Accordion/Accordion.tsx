import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

export function Accordion(props:AccordionType) {
        return (
            <div>
                <AccordionTitle title={props.title} onClick={props.onClick}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props:AccordionTitleType) {
    return (
        <div><h3 onClick={() => props.onClick()}>{props.title}</h3></div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
