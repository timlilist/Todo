import ToDo from "./ToDo";
import logoAdd from '../icons/add.svg';
import { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleAdd } from "../store/todoSlice";
import Header from './Header'
import { useParams, Link } from "react-router-dom";

export default function AddToDo() {
    const [inputValue, setInputValue] = useState('');
    let {mainDay} = useParams();
    const todos = useSelector(state => state.todos.find(x => x.day === mainDay).value);
    const dispatch = useDispatch();
    

    const addTask = (e) => {
        if(inputValue.trim().length) {
            e.preventDefault();
            dispatch(handleAdd({inputValue, mainDay}))
            setInputValue('');
        }
    }

    function handleChange(event) {
        setInputValue(event.target.value);
    }
   
    return(
        <>
            <Link className="backBtn" to='/'>Menu</Link>
            <Header headerText={`${mainDay}'s To Do List`}/>
            <form className="addPart">
                <input 
                    className="addLine" 
                    type="text"  
                    value={inputValue} 
                    placeholder="Add new ToDo"  
                    onChange={handleChange} 
                />
                <button 
                    className="submitBtn" 
                    type="submit" 
                    onClick={addTask}
                >
                    <img 
                        className='addBtn' 
                        type="submit"  
                        src={logoAdd} 
                        alt="Add logo" 
                    />
                </button>
            </form>
            <div className="toDoItems">
                <ul className="todoList">
                    {todos.map((todo) => (
                        <ToDo  
                            key={todo.id} 
                            {...todo}  
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}