import React, {useState} from "react";

//Uncontrolled means that we don't change data on SERVER, don't use such on PRODUCTION

type UncontrolledAccordionType = {
    title: string

}
type UncontrolledAccordionTitleType = {
    title: string
    onClick: () => void
}
export function UncontrolledAccordion(props:UncontrolledAccordionType) {

    const [collapsed, setCollapsed] = useState( true)

    return (
        <div>
            <div>
                <UncontrolledAccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
                {!collapsed && <UncontrolledAccordionBody/>}
            </div>
        </div>
    )
}

function UncontrolledAccordionTitle(props:UncontrolledAccordionTitleType) {
    return (
        <div><h3 onClick={() => props.onClick()}>{props.title}</h3></div>
    )
}

function UncontrolledAccordionBody() {
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
