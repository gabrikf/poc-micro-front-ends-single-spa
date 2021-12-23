import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Test = React.lazy(() => import('./pages/Test'));
const Test2 = React.lazy(() => import('./pages/Test2'));
// import Test from './pages/Test'
// import Test2 from './pages/Test2'

export function Router() {
    return (
        <Suspense fallback={'Loading...'}>
            <BrowserRouter basename='routes-app'>
                <Routes>
                    <Route path='/' element={<Test />} />
                    <Route path='/teste2' element={<Test2 />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}