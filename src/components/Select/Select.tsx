import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = React.memo(SelectMemo)

//don't forget to set key property for each element
// onMouseEnter - active when your mouse coursor is on element
export function SelectMemo (props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    // KeyboardEvent - import from React!!!
    //in this case onKeyUp reacts on every pressed button
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            { active &&
                <div className={styles.itmes}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                        key={i.value}
                        onClick={ () => {
                            onItemClick(i.value)
                        }}>
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    )
}