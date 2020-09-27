import React, {Children, createContext, useReducer} from 'react'

const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 1, text: 'Ashi', amount: 600},
        {id: 1, text: 'Lodu', amount: -200},
        {id: 1, text: 'Kaku', amount: +40},
    ]
}

//create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = (children) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }} >
        {children}
    </GlobalContext.Provider>)
}
