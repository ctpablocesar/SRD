import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { startChecking } from '../actions/auth'

import AdminDashboard from '../components/ui/AdminDashboard.jsx'
import BaldioPage from '../pages/BaldioPage.jsx'
import BaseDatosGeneral from '../pages/BaseDatosGeneral.jsx'
import CasasRentaPage from '../pages/CasasRentaPage.jsx'
import Error404Page from '../pages/Error404Page.jsx'
import EstadisticasPage from '../pages/EstadisticasPage.jsx'
import IndexPage from '../pages/IndexPage.jsx'
import RegistroVehicularPage from '../pages/InformacionPersonalPage.jsx'
import InquilinoPage from '../pages/InquilinoPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import LotesBaldiosPage from '../pages/LotesBaldiosPage.jsx'
import PropietarioPage from '../pages/PropietarioPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import VehiculosPage from '../pages/VehiculosPage.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import PublicRoute from './PublicRoute.jsx'

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
                                        <Route path="/lotes-baldios" element={<LotesBaldiosPage />} />
                                        <Route path="/baldio" element={<BaldioPage />} />
                                        <Route path="/registro-vehicular" element={<RegistroVehicularPage />} />
                                        <Route path="/vehiculos" element={<VehiculosPage />} />
                                        <Route path="/estadisticas" element={<EstadisticasPage />} />
                                        <Route path="/*" element={<Error404Page />} />
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