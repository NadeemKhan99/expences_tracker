import React from 'react';
import '../index.css';
import { TitleDes } from './titleDescription.js';
import { ExpencesData } from './dataInfo.js';
import { HistoryData } from './history.js';
import {Transaction} from './transaction.js';
import {MyProvider} from './set_reducer.js';

export const Title = () => {
    return (
        <div>
            <h3 className="logo_name">
            Expense Tracker
            </h3>
            <br/>
            <MyProvider>
                <TitleDes/>
                <ExpencesData/>
                <HistoryData/>
                <Transaction/>
            </MyProvider>

        </div>
        
    );
}
