import { useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                onKeyPress={keyPressHandler}
                ref={ref}
                type='text'
                id='title'
                placeholder='Activity title'
            />
            <label htmlFor='title' className='active'>
                Enter the activity title
            </label>
        </div>
    )
}
