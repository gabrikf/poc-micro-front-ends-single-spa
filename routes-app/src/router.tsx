import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Test} from './pages/Test'
import { Test2 } from './pages/Test2'

export function Router(){
    return (
<BrowserRouter basename='routes-app'>
    <Routes>
        <Route path='/' element={<Test />}/>
        <Route path='/teste2' element={<Test2 />}/>
    </Routes>
</BrowserRouter>
    )
}