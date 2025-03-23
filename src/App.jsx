import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from './pages/Login';
import Home from './pages/Home'
import RegisterPage from "./pages/Register"
import Header from "./Components/Header";


const App = () => {
    
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<LoginPage />} />
                <Route path="/Register" element={<RegisterPage />} />
            </Route>
            <Route path="/Home" element={<Home />} />           
        </Routes>
    </BrowserRouter>
    )
}

export default App