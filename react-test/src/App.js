import { Home } from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MealDetails } from './MealDetails'

export function App() {

    return (
        <div>
            <BrowserRouter >
                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/details/:id' element={<MealDetails />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}