import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}

export function Accordion(props:AccordionType) {
        return (
            <div>
                <AccordionTitle title={props.title} />
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props:AccordionTitleType) {
    return (
        <div><h3>{props.title}</h3></div>
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
