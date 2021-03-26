import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";


//Uncontrolled means that we don't change data on SERVER, don't use such on PRODUCTION

export type UncontrolledAccordionType = {
    title: string

}

type UncontrolledAccordionTitleType = {
    title: string
    onClick: () => void
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)

export function UncontrolledAccordionMemo(props:UncontrolledAccordionType) {

    //const [collapsed, setCollapsed] = useState( true)
    const [state, dispatch] = useReducer( reducer, {collapsed: false})

    return (
        <div>
            <div>
                {/*<UncontrolledAccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
                <UncontrolledAccordionTitle title={props.title} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
                {!state.collapsed && <UncontrolledAccordionBody/>}
            </div>
        </div>
    )
}

const UncontrolledAccordionTitle = React.memo(UncontrolledAccordionTitleMemo)

function UncontrolledAccordionTitleMemo(props:UncontrolledAccordionTitleType) {
    return (
        <div><h3 onClick={() => props.onClick()}>{props.title}</h3></div>
    )
}

const UncontrolledAccordionBody = React.memo(UncontrolledAccordionBodyMemo)

function UncontrolledAccordionBodyMemo() {
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
