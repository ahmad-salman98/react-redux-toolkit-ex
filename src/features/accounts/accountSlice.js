import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Salman",
            accountNumber: "987654",
            accountType: "Student accounts"
        }
        ,
        {
            id: 3,
            customerName: "Yazan Salameh",
            accountNumber: "965874",
            accountType: "Student accounts"
        }
        ,
        {
            id: 4,
            customerName: "Aseel Shami",
            accountNumber: "154878",
            accountType: "Savings"
        }


    ],
}
export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addUser: (state, action) => { state.accounts.push(action.payload) },
        deleteUser: (state, action) => { state.accounts = state.accounts.filter(element => element.id !== action.payload) }

        // 
    }
}
)
export const { addUser, deleteUser } = accountsSlice.actions;
export default accountsSlice.reducer;


