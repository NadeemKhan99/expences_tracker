import React,{useContext} from 'react';
import '../index.css';
import MyContext from './context.js';


export let ExpencesData = () => {
    const {transactions} = useContext(MyContext);
    const total = transactions.map((my_data) => my_data.amount);
    let income = 0;
    let expences = 0;
    for(let i =0;i<total.length;i++)
    {
        if(total[i]>0)
            income +=total[i];
        else
            expences-=total[i];
    }
    return(
        <div className="expences_box">
            <ul className="expences_list">
                <li className="first_item">
                    <h4>INCOME</h4>
                    <h1>${income}</h1>
                </li>
                <li className="second_item">
                    <h4>Expences</h4>
                    <h1>${Math.abs(expences)}</h1>
                </li>
            </ul>
        </div>
    );
}