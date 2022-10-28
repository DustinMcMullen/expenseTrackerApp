import axios from "axios";

import { getFormattedDate } from "./date";

const FIREBASE_URL = "https://expense-tracker-app-587c8-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
    const response = await axios.post(
        FIREBASE_URL + "/expenses.json",
        expenseData
    );
    const id = response.data.name;
    return id;
}

export async function getExpenses() {
    const response = await axios.get(FIREBASE_URL + "/expenses.json");
    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            title: response.data[key].title,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date)
        }
        expenses.push(expenseObj);
    }
    
    return expenses;
}

export function updateExpense(id, expenseData) {
    return axios.put(FIREBASE_URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
    return axios.delete(FIREBASE_URL + `/expenses/${id}.json`)
}