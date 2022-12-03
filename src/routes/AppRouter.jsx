import { HashRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'
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
                                <IndexPage />
                            </PublicRoute>
                        } />
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRouter