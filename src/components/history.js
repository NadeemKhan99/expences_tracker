import React,{useContext} from 'react';
import '../index.css';
import MyContext from './context.js';
export let HistoryData = () => {
    //----------getting only transaction object for simplicity--------------
    const { transactions , deleteData }  = useContext(MyContext);

    const deleteHandler = (id) => deleteData(id);
    // eslint-disable-next-line 
    return(

            <div>
                <h3 className="history_title"><b>History</b></h3>
                <hr/>
                {/* ------------------Printing Data of Transactions using map funxtion */}
                {transactions.map((transaction) => {
                    const sign_color = transaction.amount <0 ? "1negative" : "2positive";
                    const sign = sign_color[0]==="1" ? "-" : '';
                    return (

                    <div className={`history_box_${sign_color}`} key={transaction.id}>
                        <span className="text_expences">{transaction.text}</span>
                        <span className="price">{sign}${Math.abs(transaction.amount)}</span>
                        <button onClick={()=> deleteHandler(transaction.id)} className="delete_btn">x</button>
                    </div>

                 )})}

            </div>
    );
}