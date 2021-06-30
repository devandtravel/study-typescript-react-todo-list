export const TodoForm: React.FC = () => {
    return (
        <div className='input-field mt2'>
            <input type='text' id='title' placeholder='Activity title' />
            <label htmlFor='title' className='active'>
                Enter the activity title
            </label>
        </div>
    )
}
