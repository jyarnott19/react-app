import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Form from "./components/Form";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import ExpenseList from "./expense-tracker/ExpenseList";
//import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "Food" },
    { id: 2, description: "Gas", amount: 50, category: "Transportation" },
    { id: 3, description: "Rent", amount: 1000, category: "Housing" },
  ]);
  return (
    <div>
      {/* <Form /> */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
