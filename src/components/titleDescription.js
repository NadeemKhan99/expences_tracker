import React,{useContext} from 'react';
import '../index.css';
import MyContext from './context.js';

export let TitleDes = () => {
    const  {transactions} = useContext(MyContext)
    const total = transactions.map((transaction)=> transaction.amount).reduce((data,item)=> data+=item,0).toFixed(2)
    const sign = total<0 ? "-" : '';
    
    return(
        <>
            <h4>YOUR BALANCE</h4>
            <h1>{sign}${Math.abs(total)}</h1>
        </>
    );
}