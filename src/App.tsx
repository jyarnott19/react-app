import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Form from "./components/Form";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import ExpenseList from "./expense-tracker/Components/ExpenseList";
import ExpenseFilter from "./expense-tracker/Components/ExpenseFilter";
//import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "Food" },
    { id: 2, description: "Gas", amount: 50, category: "Transportation" },
    { id: 3, description: "Rent", amount: 1000, category: "Housing" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      {/* <Form /> */}
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
