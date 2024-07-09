import React, { useRef, useState } from 'react'
import { useTodo } from '../contexts';
import {ConfirmationPopup} from "./index"

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [showConfirmation, setShowConfirmation] = useState(false)

    const { updateTodo, deleteTodo, toggleCompleted } = useTodo()
    const editRef = useRef(null)

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleComplete = () => {
        toggleCompleted(todo.id)
    }

    const makeFocus = () => {
        editRef.current.focus();
    }

    // Delete functionality with delete confirmation popup
    const handledelete = () => {
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
        <div
            className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 dark:shadow-lg duration-300  text-black dark:text-white ${todo.completed ? "bg-[#c6e9a7] dark:bg-[#35373c47] " : "bg-[#ccbed7] dark:bg-[#35373c]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                disabled = {isTodoEditable}
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg px-2 ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                ref={editRef}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm shadow-md border disabled:cursor-not-allowed border-black/10 justify-center items-center bg-gray-50 dark:bg-[#2a2a2a] dark:hover:bg-[#303030] active:scale-95 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    makeFocus()
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? <i className="fa-regular fa-square-check text-green-500"></i> : <i className="fa-regular fa-pen-to-square text-blue-500"></i>}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg shadow-md text-sm border border-black/10 justify-center active:scale-95 items-center bg-gray-50 dark:bg-[#2a2a2a] dark:hover:bg-[#303030]  shrink-0"
                onClick={handledelete}
            >
                <i className="fa-regular fa-trash-can text-red-500"></i>
            </button>
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

