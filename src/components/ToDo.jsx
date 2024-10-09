import React, { useRef } from 'react';
import LogoDelete from '../icons/delete.svg';
import LogoEdit from '../icons/edit.svg';
import LogoClose from '../icons/close.svg';
import { useDispatch } from 'react-redux';
import { handleDelete, handleToggl, turnOnEditMode, closeEditMode, handleUpdateText } from '../store/todoSlice';
import { useParams } from 'react-router-dom';


export default function ToDo({ text, checked, id, isEditMode, }) {
    let {mainDay} = useParams();
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    
    const onEditMode = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        dispatch(turnOnEditMode({id, mainDay}))
    }
    
    const offEditMode = (e) => {
        e.preventDefault();
        dispatch(closeEditMode({id, mainDay}))
    }

    // function turnOnEditMode() {
    //     setIsEditMode(true);
    //     inputRef.current.focus();
    // }

    // function closeEditMode() {
    //     // setIsEditMode(false)
    // }

    return(
        <li className="taskPart" key={id}>
            <div className="taskDescr">
                <input 
                    className='check'
                    type="checkbox" 
                    checked={checked} 
                    onChange={() => dispatch(handleToggl({id, mainDay}))}
                />
                <input 
                    className='taskInput'
                    onBlur={offEditMode} 
                    ref={inputRef} 
                    readOnly={!isEditMode} 
                    onClick={onEditMode} 
                    value={text} 
                    onChange={(event) => {
                        let text = event.target.value;
                        dispatch(handleUpdateText({text, id, mainDay}))
                    }}
                />
            </div>
            <div className="taskBtns">
                {!isEditMode && !checked  && (
                    <img 
                        className='toDoLogos' 
                        onClick={onEditMode} 
                        src={LogoEdit} 
                        alt="Edit logo" 
                    />
                )}
                {isEditMode && (
                    <img  
                        className='toDoLogos' 
                        onClick={offEditMode} 
                        src={LogoClose} 
                        alt="Close logo" 
                    />
                )}

                {checked && <></>}
                <img 
                    className='toDoLogos' 
                    onClick={() => dispatch(handleDelete({id, mainDay}))} 
                    src={LogoDelete} 
                    alt="Delete logo" 
                />
            </div>
        </li>
    );
}