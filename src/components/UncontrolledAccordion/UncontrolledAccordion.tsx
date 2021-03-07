import React, {useState} from "react";

//Uncontrolled means that we don't change data on SERVER, don't use such on PRODUCTION

type UncontrolledAccordionType = {
    title: string
}

export function UncontrolledAccordion(props:UncontrolledAccordionType) {

    const [collapsed, setCollapsed] = useState( true)

    return (
        <div>
            <div>
                <UncontrolledAccordionTitle title={props.title} />
                <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
                {!collapsed && <UncontrolledAccordionBody/>}
            </div>
        </div>
    )
}

type UncontrolledAccordionTitleType = {
    title: string
}

function UncontrolledAccordionTitle(props:UncontrolledAccordionTitleType) {
    return (
        <div><h3>{props.title}</h3></div>
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
