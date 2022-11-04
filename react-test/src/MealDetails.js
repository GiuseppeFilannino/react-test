import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useFetch } from "./useFetch";

export function MealDetails() {

    const { id } = useParams()
    const{data,getDetails} = useFetch();

  

    useEffect(() => {getDetails(id) },[])
        
   



    return (


        <div>
            {data && (<div>
                <h1>{data[0].strMeal}</h1>
                <p>
                    {data[0].strInstructions}
                </p>
            </div>)}
        </div>
    )
}