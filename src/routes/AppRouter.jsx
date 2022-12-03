import { HashRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route
                        path='admin/*'
                        element={
                            <PrivateRoute>

                            </PrivateRoute>
                        } />
                    <Route
                        path='/*'
                        element={
                            <PublicRoute>
                                <Routes>
                                    <Route path='/' element={<IndexPage />} />
                                    <Route path='/login' element={<LoginPage />} />
                                    <Route path='/register' element={<RegisterPage />} />
                                </Routes>
                            </PublicRoute>
                        } />
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRouter