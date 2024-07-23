import React, { useRef, useState } from 'react'
import { useTodo } from '../contexts';
import { ConfirmationPopup, Button, Input } from "./index"
import TextareaAutosize from 'react-textarea-autosize';
import { useAutoAnimate } from '@formkit/auto-animate/react';


function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoTitle, setTodoTitle] = useState(todo.todoTitle)
    const [todoBody, setTodoBody] = useState(todo.todoBody)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [parent, enableAnimations] = useAutoAnimate()

    const { updateTodo, deleteTodo, toggleCompleted } = useTodo()
    const editRef = useRef(null)

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todoTitle: todoTitle, todoBody: todoBody })
        setIsTodoEditable(false)
    }

    const toggleComplete = () => {
        toggleCompleted(todo.id)
    }

    const makeFocus = () => {
        editRef.current.focus();
    }

    const handleClose = (e) => {
        e.stopPropagation();
        if (todo.completed) return;
        if (!todoBody) {
            makeFocus()
            return
        };
        if (isTodoEditable) {
            editTodo();
        } else setIsTodoEditable((prev) => !prev);
    }

    // Delete functionality with delete confirmation popup
    const handledelete = (e) => {
        e.stopPropagation()
        setShowConfirmation(true);
    }

    const handleCancelDelete = () => {
        setShowConfirmation(false)
    }

    const handleConfirmDelete = () => {
        deleteTodo(todo.id)
        setShowConfirmation(false)
    }

    return (
        <>

            <div className={`${isTodoEditable ? "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-scroll" : ""}`}>

                {isTodoEditable && <div ref={parent} onClick={handleClose} className='fixed inset-0 backdrop-blur-[4px] bg-[#202124] dark:bg-[#202124] bg-opacity-60 dark:bg-opacity-75 transition-opacity duration-300'></div>}

                <div ref={parent} onClick={() => { setIsTodoEditable(true) }} className={`${isTodoEditable ? "z-50 w-full max-w-[600px] bg-white dark:bg-[#202124] shadow-md" : "bg-transparent hover:shadow-md "} relative transition-all duration-300 flex flex-col items-start gap-4  border border-black/10 dark:border-[#5f6368] rounded-lg p-4 gap-x-3 text-black dark:text-white`}>
                    {/* <input
                    type="checkbox"
                    className="dark:border-white-400/20 cursor-pointer dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                    disabled={isTodoEditable}
                    checked={todo.completed}
                    onChange={toggleComplete}
                /> */}
                    {todoTitle ?
                        <Input
                            type="text"
                            placeholder='Title'
                            className='text-xl'
                            value={todoTitle}
                            onChange={(e) => setTodoTitle(e.target.value)}
                            readOnly={!isTodoEditable}
                        />
                        :
                        isTodoEditable &&
                        <Input
                            type="text"
                            placeholder='Title'
                            className='text-xl'
                            value={todoTitle}
                            onChange={(e) => setTodoTitle(e.target.value)}
                            readOnly={!isTodoEditable}
                        />
                    }
                    <TextareaAutosize
                        ref={editRef}
                        maxRows={isTodoEditable ? 15 : 5}
                        value={todoBody}
                        onChange={(e) => setTodoBody(e.target.value)}
                        placeholder="Todo Body"
                        className={`w-full bg-transparent border-none outline-none ${todo.completed ? "line-through" : ""}`}
                        readOnly={!isTodoEditable}
                    ></TextareaAutosize>

                    {isTodoEditable &&
                        <div className='w-full flex justify-end gap-2'>

                            <Button
                                onClickFn={handleClose}
                            >
                                Close
                            </Button>
                        </div>
                    }

                    {/* Delete Todo Button */}
                    <Button
                        onClickFn={handledelete}
                        className='absolute top-4 right-4 w-8 h-8'
                    >
                        <i className="fas fa-trash-alt text-red-500 "></i>
                    </Button>
                </div>
            </div>

            {showConfirmation && (
                <ConfirmationPopup
                    message={"This action will delete this task. Are you sure to continue ?"}
                    onConfirm={handleConfirmDelete}
                    onCancle={handleCancelDelete}
                />
            )}

        </>
    );
}

export default TodoItem;

