import React,{useState,useContext} from 'react';
import '../index.css';
import MyContext from './context';
export let Transaction = () => {

    const {newTransaction} = useContext(MyContext);

    let [set_state_text,update_state_text] = useState('');
    let [set_state_price,update_state_price] = useState(0);
    let falsee = false;
    const submit = (e) =>{
        e.preventDefault();
        let reg = /[a-zA-Z]/;
        falsee = reg.test(set_state_text);
        if(falsee)
        {
            const mydata = {
                id: Math.floor(Math.random()*1000000000),
                text:set_state_text,
                amount:parseInt(set_state_price)
            }

            newTransaction(mydata);
            update_state_price(0);
            update_state_text('');

        }
    }
    return(
        <div>
            <h3 className="history_title"><b>Add new transaction</b></h3>
            <hr/>
            <form onSubmit={submit}>
                <label htmlFor="text"><b>Text</b></label>
                <input type="text" value={set_state_text} onChange={(e) => update_state_text(e.target.value)} placeholder="Enter text..." id="text" required/>

                <label htmlFor="amount">
                    <b>Amount</b><br/>
                    (negative - expences , positive + income)
                </label>
                <input type="number" value={set_state_price} onChange={(e) => update_state_price(e.target.value)} placeholder="Enter amount..." id="amount" required/>
                <button className="btn">Add transaction</button>
            </form>
            <br/>
        </div>
    );
}