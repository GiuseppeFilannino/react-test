import {Home} from './Home'
import { Route,Routes } from 'react-router-dom'
import { MealDetails } from './MealDetails'

export function App() {

    return (
        <div>
            <Routes >
                <Route path='/' element={<Home />} > 
                <Route path='MealDetails' element={<MealDetails />} />
                </Route>
            </Routes>
        </div>
        )
}