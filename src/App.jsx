import WeeklyTodos from "./components/WeeklyTodos";
import { Route, Routes } from "react-router-dom";
import AddToDo from './components/AddToDo'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeeklyTodos />}/>
        <Route path="/day/:mainDay" element={<AddToDo />}/>
      </Routes>
    </div>
  );
}

export default App;
