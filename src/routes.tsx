import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
