import { useState } from "react"

export function useFetch() {
    const [data, setData] = useState(null)
    const [err, setErr] = useState(null)

    const handleGetData = async (search) => {
        try {
            const res = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const json = await res.json();
            setData([...json.meals])



        }
        catch (err) {
            setErr(err)
        }
    }

    const handleGetDetails = async (id) => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const json = await res.json();
        setData(...[json.meals])
    }




    return ({

        data: data,
        err: err,
        getData: handleGetData,
        getDetails: handleGetDetails,



    })


}