import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {day: "Monday", value: []},
        {day: "Tuesday", value: []},
        {day: "Wednesday", value: []},
        {day: "Thursday", value: []},
        {day: "Friday", value: []},
        {day: "Saturday", value: []},
        {day: "MoSundaynday", value: []},
        // todos: [],
    ],
    reducers: {
        handleAdd(state, action) {
            let day = action.payload.mainDay;
            state.find(x => x.day === day).value.push({
                id: uuid(),
                text: action.payload.inputValue,
                checked: false,
                isEditMode: false
            })
        },
        handleToggl(state, action) {
            let day = action.payload.mainDay;
            const toggledTodo = state.find(x => x.day === day).value.find(todo => todo.id === action.payload.id);
            toggledTodo.checked = !toggledTodo.checked;
        },
        handleDelete(state, action) {
            let day = action.payload.mainDay;
            state.find(x => x.day === day).value = state.find(x => x.day === day).value.filter(todo => todo.id !== action.payload.id);
        },
        handleUpdateText(state, action) {
            let day = action.payload.mainDay;
            const updatedList = state.find(x => x.day === day).value.map((e, i, arr) => {
                
                  if (arr[i].id === action.payload.id) {
                    e.text = action.payload.text;
                  }
            
                  return e;
                });
            
                state.find(x => x.day === day).value = updatedList;
        },
       
        turnOnEditMode(state, action) {
            let day = action.payload.mainDay;
            const editModeTodo = state.find(x => x.day === day).value.find(todo => todo.id === action.payload.id);
            if(!editModeTodo.isEditMode) {
                editModeTodo.isEditMode = !editModeTodo.isEditMode;
            }
        },
        closeEditMode(state, action) {
            let day = action.payload.mainDay;
            const editModeTodo = state.find(x => x.day === day).value.find(todo => todo.id === action.payload.id);
            if(editModeTodo.isEditMode) {
                editModeTodo.isEditMode = !editModeTodo.isEditMode;
             }
        }
    }
});

export const {handleAdd, handleDelete, handleUpdateText, handleChange, handleToggl, turnOnEditMode, closeEditMode} = todoSlice.actions;
 
export default todoSlice.reducer;



// [   {day: "monday", 
//     todos: {id: uuid(),
//     text: action.payload.inputValue,
//     checked: false,
//     isEditMode: false}}
// ]