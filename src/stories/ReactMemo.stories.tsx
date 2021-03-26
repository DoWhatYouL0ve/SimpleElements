// React.memo позволяет контролировать отрисовку только нужных компонент в случае вложенности компонент
// друг в друга при изменениях только в одной из вложенных компонент. Помогает ускорить работу проекта.
// lesson 16

import {Meta} from "@storybook/react/types-6-0";
import React, {useState} from "react";


export default {
    title: 'My components/ReactMemo demo',
} as Meta;

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {user: Array<string>}) => {
    return <div>{
        props.user.map( (u,i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(['Dimych', 'Valera', 'Artem'])
    const onClick = () => {
        setCounter(counter+1)
    }
    const addUser = () => {
        const newUser = [...user, ('Vova ' + new Date().getTime())]
        setUser(newUser)
    }

    return <>
        <button onClick={onClick}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users user={user} />
    </>
}