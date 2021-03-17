//EACH useReducer SHOULD BE COVERED WITH TEST

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            //для работы с обьектами мы не можем менять обьект и должны делать копию с которой и работаем дальше
            // обязательно нужно возвращать новый обьект что бы useReducer понял что были произведены изменения и он должен отработать
            // 1 example if code
            /*const copyState = {...state}
            copyState.collapsed = !state.collapsed*/
            //2 example of code
            /*const copyState = {...state, collapsed: !state.collapsed}
            return copyState*/
            // 3 example of code
            return {...state, collapsed: !state.collapsed}

        // it'll appear only if is an error in code, in type of action
        default:
            throw new Error('Bad action type')
    }
    /*if (action.type === TOGGLE_COLLAPSED) {
        return !state
    }*/
    /*return state*/
}