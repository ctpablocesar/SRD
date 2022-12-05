import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { startChecking } from '../actions/auth'

import AdminDashboard from '../components/ui/AdminDashboard.jsx'
import BaldioPage from '../pages/BaldioPage.jsx'
import BaseDatosGeneral from '../pages/BaseDatosGeneral.jsx'
import CasasRentaPage from '../pages/CasasRentaPage.jsx'
import CuotasPage from '../pages/CuotasPage'
import EliminarCuotasPage from '../pages/EliminarCuotasPage'
import Error404Page from '../pages/Error404Page.jsx'
import EstadisticasPage from '../pages/EstadisticasPage.jsx'
import IndexPage from '../pages/IndexPage.jsx'
import RegistroVehicularPage from '../pages/InformacionPersonalPage.jsx'
import InquilinoPage from '../pages/InquilinoPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import LotesBaldiosPage from '../pages/LotesBaldiosPage.jsx'
import PropietarioPage from '../pages/PropietarioPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import TotalCuotasPredialPage from '../pages/TotalCuotasPredialPage'
import TotalPagadosPage from '../pages/TotalPagadosPage'
import TotalPendientePage from '../pages/TotalPendientePage'
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
            <BrowserRouter>
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

                                        <Route path='cuotas-predial' element={<CuotasPage />} />
                                        <Route path="/cuotas-predial/total" element={<TotalCuotasPredialPage />} />
                                        <Route path="/cuotas-predial/pendiente" element={<TotalPendientePage />} />
                                        <Route path="/cuotas-predial/pagado" element={<TotalPagadosPage />} />
                                        <Route path="/cuotas-predial/pagado-eliminar/:id" element={<EliminarCuotasPage />} />
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
            </BrowserRouter>
        </>
    )
}

export default AppRouter