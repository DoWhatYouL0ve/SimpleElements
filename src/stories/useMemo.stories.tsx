import React, {useCallback, useMemo, useState} from "react";
import {Meta} from "@storybook/react/types-6-0";


export default {
    title: 'My components/useMemo demo',
} as Meta;


// count factorial
export const DifficultcountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo( () => {
        let tempResultA = 1
        for(let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for(let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {user: Array<string>}) => {
    console.log('UsersSecret')
    return <div>{
        props.user.map( (u,i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(['Dimych', 'Valera', 'Artem'])
    const onClick = () => {
        setCounter(counter+1)
    }

    const addUser = () => {
        const newUser = [...user, ('Vova ' + new Date().getTime())]
        setUser(newUser)
    }

    let newArray = useMemo( () => user.filter( u => u.toLowerCase().indexOf('a') > -1 ), [user])
    return <>
        <button onClick={onClick}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users user={newArray} />
    </>
}

//=======================================================================

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML'])
    const onClick = () => {
        setCounter(counter+1)
    }


    /*const memorizedAddBook = useMemo( () => {
        return () => {
            const newBook = [...books, ('Angular ' + new Date().getTime())]
            setBooks(newBook)
        }
    }, [books])*/

    const memorizedAddBook2 = useCallback( () => {
            const newBook = [...books, ('Angular ' + new Date().getTime())]
            setBooks(newBook)
    }, [books])


    let newArray = useMemo( () => books.filter( b => b.toLowerCase().indexOf('a') > -1 ), [books])
    return <>
        <button onClick={onClick}>+</button>

        {counter}
        <Book books={newArray} addBook={memorizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    books: Array<string>
    addBook: ()=> void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {
        props.books.map( (b,i) => <div key={i}>{b}</div>)
    }</div>
}

const Book = React.memo(BooksSecret)