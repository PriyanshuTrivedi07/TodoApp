import React, { useState, useRef } from 'react'
import { useTodo } from '../contexts';
import TextareaAutosize from 'react-textarea-autosize';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Button, Input } from "./index"

function TodoForm() {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoBody, setTodoBody] = useState("")
    const [isAdding, setIsAdding] = useState(false)
    const [parent, enableAnimations] = useAutoAnimate()
    const inputRef = useRef(null)

    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todoBody) return


        addTodo({ todoTitle: todoTitle, todoBody: todoBody, completed: false })
        setTodoTitle("")
        setTodoBody("")
        setIsAdding(false)
    }

    const makefocus = () => {
        inputRef.current.focus();
    }
    const handleCancel = () => {
        setIsAdding(false)
    }

    return (
        <form className="flex  shadow-lg border border-black/10 dark:border-[#5f6368] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.6),0_2px_6px_2px_rgba(0,0,0,0.302)] rounded-lg overflow-hidden" onSubmit={add}>
            <div ref={parent} className='flex flex-col w-full'>
                {/* <input
                    type="text"
                    placeholder={isAdding ? "Title" : "Take a note..."}
                    onClick={() => setIsAdding(true)}
                    className="w-full text-lg font-medium text-gray-700 dark:text-white rounded-lg p-4 outline-none duration-150 bg-white/20 dark:bg-[#202124] "
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                /> */}
                <Input
                    type="text"
                    placeholder={isAdding ? "Title" : "Take a note..."}
                    onClick={() => setIsAdding(true)}
                    className='text-lg p-4'
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                />

                {isAdding &&
                    <>
                        <TextareaAutosize
                            ref={inputRef}
                            maxRows={15}
                            value={todoBody}
                            onChange={(e) => setTodoBody(e.target.value)}
                            placeholder="Take a note..."
                            className="w-full  rounded-lg px-4  outline-none duration-150 bg-transparent"
                        ></TextareaAutosize>

                        <div className='flex gap-2 px-4 py-2 justify-end'>

                            <Button
                                btnType='submit'
                                onClickFn={makefocus}
                            >
                                Add
                            </Button>

                            <Button
                                btnType='button'
                                onClickFn={handleCancel}
                                role='button'
                            >
                                Cancel
                            </Button>
                        </div>
                    </>
                }

            </div>

        </form>
    );
}

export default TodoForm;

