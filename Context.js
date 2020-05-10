import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = props =>{

    const [state, setState] = useState([])


    return(
        <Context.Provider value={[state, setState]} >
            {props.childrens}
        </Context.Provider>
    )
}