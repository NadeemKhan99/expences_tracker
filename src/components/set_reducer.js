import React,{useReducer} from 'react';
import MyContext from './context.js';
import {Reducer} from './reducer_function';

const initializer = {
    transactions:[
    ]
    
}

export const MyProvider = ({children}) =>{

    //----------Use Reducer state------------
    // eslint-disable-next-line
    const [state,dispatch] = useReducer(Reducer,initializer); 
    //-------------Deleting data from History
    function deleteData(id)
    {
        dispatch({
            type:'Delete',
            id:id
        }
        )
    }

    function newTransaction(data)
    {
        dispatch(
            {
                type:'Transaction',
                mydata:data
            }
        )
    }

    return(
        <MyContext.Provider value={{
            transactions: state.transactions,
            deleteData,
            newTransaction
        }}>
            {children}
        </MyContext.Provider>
    )
}