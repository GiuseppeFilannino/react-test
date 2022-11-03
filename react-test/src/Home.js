import { useState } from 'react'
import {Link} from 'react-router-dom'

export function Home() {

    const [input, setInput] = useState('')
    const [err, setError] = useState(null)
    const [data, setData] = useState([])


    const handleGetData = async () => {

        try {
            const res = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            const json = await res.json();


            setData([...json.meals])
            console.log(data)
        }
        catch (err) {
            setError(err)
        }
    }

    return (
        <div>
            <div>
                <input type='text' value={input} onChange={(e) => setInput(e.currentTarget.value)}></input>
                <button onClick={handleGetData}>Search</button>
            </div>
            {err && <p>{err.message}</p>}
            <ul>
                {data.map(data =>
                    <li><Link to='MealDetails'>{data.strMeal}</Link></li>
                    )}
            </ul>
        </div>
    )
}