import { createContext, useReducer } from "react";


const DUMMY_EXPENSES = [
    {id: "e1", title: "Ice Cream", amount: 12.98, date: new Date("2022-08-17")},
    {id: "e2", title: "clothes", amount: 42.73, date: new Date("2022-08-17")},
    {id: "e3", title: "house payment", amount: 1890.22, date: new Date("2022-07-17")},
    {id: "e4", title: "car payment", amount: 265.47, date: new Date("2022-07-17")},
    {id: "e5", title: "book", amount: 13.29, date: new Date("2022-07-17")}
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExprense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
});

function expensesReducer(state, action) {
    switch(action.type) {
        case "ADD":
            const id = Date.now().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]
        case "UPDATE":
            const expenseToUpdateIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const expenseToUpdate = state[expenseToUpdateIndex];
            const updatedExpense = {...expenseToUpdate, ...action.payload.data};
            const expenses = [...state];
            expenses[expenseToUpdateIndex] = updatedExpense;
            return expenses;
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({type: "ADD", payload: expenseData});
    }

    function deleteExpense(id) {
        dispatch({type: "DELETE", payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type: "UPDATE", payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;