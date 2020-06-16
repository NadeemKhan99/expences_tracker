export const Reducer = (state,action) => {
    switch(action.type)
    {
        case "Delete":
            //-----------------"...state" is a spread operator that picks all value of state
            //------"...state" not used in class it picks values default
            //--------here we have to pick data manually------------- 
            return {
                ...state,
                transactions: state.transactions.filter((data) => data.id !== action.id)
                
            }

        case "Transaction":
            return{
                ...state,
                transactions:[action.mydata,...state.transactions]
            }
        default:
            return state;
    }
}