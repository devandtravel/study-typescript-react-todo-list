import { ITodo } from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }
    return todos.length === 0 ? (
        <p className='center'>Todo list is empty</p>
    ) : (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                todo.completed && classes.push('completed')

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text' onClick={event => removeHandler(event, todo.id)}>
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )}
