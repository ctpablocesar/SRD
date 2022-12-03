import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { startChecking } from '../actions/auth'

import AdminDashboard from '../components/ui/AdminDashboard'
import BaseDatosGeneral from '../pages/BaseDatosGeneral'
import CasasRentaPage from '../pages/CasasRentaPage'
import IndexPage from '../pages/IndexPage'
import InquilinoPage from '../pages/InquilinoPage'
import LoginPage from '../pages/LoginPage'
import PropietarioPage from '../pages/PropietarioPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <>
            <HashRouter>
                <Routes>
                    <Route
                        path='admin/*'
                        element={
                            <PrivateRoute>
                                <AdminDashboard>
                                    <Routes>
                                        <Route path='/' element={<BaseDatosGeneral />} />
                                        <Route path="/propietario" element={<PropietarioPage />} />
                                        <Route path="/casas-renta" element={<CasasRentaPage />} />
                                        <Route path="/inquilino" element={<InquilinoPage />} />
                                    </Routes>
                                </AdminDashboard>
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