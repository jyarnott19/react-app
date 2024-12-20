import React from "react";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All categories</option>
      <option value="Food">Groceries</option>
      <option value="Transportation">Gas</option>
      <option value="Housing">Rent</option>
    </select>
  );
};

export default ExpenseFilter;
