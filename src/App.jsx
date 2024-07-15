
import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm, TodoItem, Navbar } from './components/index.js'
import { TodoProvider } from './contexts/index.js'
import { useAutoAnimate } from '@formkit/auto-animate/react'
function App() {

  const [todos, setTodos] = useState([])
  const [parent, enableAnimations] = useAutoAnimate()

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => (
      prev.map((prevTodo) => (
        prevTodo.id === id ? todo : prevTodo
      ))
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <Navbar />
      <div className="bg-[#ffffff] dark:bg-[#202124] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3  text-[#212121] dark:text-[#fff]">
          <div className="mb-8">
            <TodoForm />
          </div>
        </div>

        <div className='container mx-auto p-4'>
          <div ref={parent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {todos.map((todo) => (
              <div key={todo.id} className=''>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
