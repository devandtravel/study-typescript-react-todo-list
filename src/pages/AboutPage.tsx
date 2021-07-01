import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis rerum nemo
                aspernatur voluptatum iusto voluptates quos minima porro recusandae.
            </p>
            <button className='btn' onClick={() => history.push('/')}>Return to list</button>
        </>
    )
}
