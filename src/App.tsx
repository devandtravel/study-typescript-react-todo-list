import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(savedTodos)
    }, [])

    useEffect(() => {localStorage.setItem('todos', JSON.stringify(todos))}, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = { title: title, id: Date.now(), completed: false }
        setTodos(prevTodos => [newTodo, ...prevTodos])
    }

    const toggleHandler = (id: number) =>
        setTodos(
            todos.map(todo => {
                todo.id === id && (todo.completed = !todo.completed)
                return todo
            })
        )

    const removeHandler = (id: number) =>
        window.confirm('A you sure want to remove?') &&
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))

    return (
        <>
            <Navbar />
            <div className='container'>
                <TodoForm onAdd={addHandler} />
                <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
            </div>
        </>
    )
}

export default App
