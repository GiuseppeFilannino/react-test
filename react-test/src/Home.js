import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useFetch } from './useFetch'

export function Home() {

    const [input, setInput] = useState('')
    const {data,err, getData}= useFetch()
    const navigate = useNavigate()


 

    return (
        <div>
            <div>
                <input type='text' value={input} onChange={(e) => setInput(e.currentTarget.value)}></input>
                <button type='button' onClick={() => getData(input)}>Search</button>
            </div>
            {err && <p>{err.message}</p>}
            <ul>
                {data && data.map(data =>
                    <li onClick={() => navigate(`details/${data.idMeal}`)}>{data.strMeal}</li>
                    )}
            </ul>
        </div>
    )
}