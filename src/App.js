import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    { title: "car Insurance", amount: 294.67, date: new Date(2023, 4, 12) },
    { title: "car Insurance 2", amount: 294.68, date: new Date(2023, 4, 18) },
    { title: "car Insurance", amount: 294.67, date: new Date(2023, 4, 12) },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
